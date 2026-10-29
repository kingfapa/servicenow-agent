#!/usr/bin/env node
import { createHash } from 'node:crypto';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { homedir } from 'node:os';
import { parseArgs } from 'node:util';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createInterface } from 'node:readline/promises';
import { stdin, stdout } from 'node:process';
import { chromium } from 'playwright';
import type { Download, Locator, Page } from 'playwright';
import type { CollectionOptions, CorpusIndex, ResourceRecord } from './types.ts';
import { hasErrorCode, isCorpusIndex } from './types.ts';
import { extractMarkdown } from './extract-text.ts';
import { escapeMarkdown } from './markdown.ts';
import { markdownPath } from './corpus-paths.ts';

export const BASE = 'https://mynow.servicenow.com/now/best-practices/';
export const DEFAULT_COLLECTION = BASE + 'collections/it-service-management-best-practices';
const ACCORDION = 'now-accordion-item:has(button[aria-controls="accordion-item"])';
const RESOURCE_LINK = 'a[href*="/now/best-practices/assets/"], a[href*="/now/best-practices/success-packs/"]';
const now = () => new Date().toISOString();
const errorMessage = (error: unknown) => error instanceof Error ? error.message : String(error);
const digest = (data: string | Uint8Array) => createHash('sha256').update(data).digest('hex');
const inside = (root: string, target: string) => {
  const relative = path.relative(root, target);
  return !relative.startsWith('..' + path.sep) && relative !== '..' && !path.isAbsolute(relative);
};

export function canonicalUrl(value: string, kinds = ['assets', 'success-packs']): string {
  const url = new URL(value);
  if (url.origin !== 'https://mynow.servicenow.com' || url.username || url.password) {
    throw new Error('Only HTTPS MyNow URLs are supported');
  }
  const match = /^\/now\/best-practices\/([a-z-]+)\/([a-z0-9-]+)\/?$/.exec(url.pathname);
  if (!match || !kinds.includes(match[1]) || url.search || url.hash) {
    throw new Error(`Expected a canonical MyNow ${kinds.join('/')} URL`);
  }
  return BASE + match[1] + '/' + match[2];
}

export async function safePath(root: string, relative: unknown): Promise<string> {
  if (typeof relative !== 'string' || path.isAbsolute(relative)) throw new Error('Invalid corpus-relative path');
  const target = path.resolve(root, relative);
  if (!inside(root, target)) throw new Error('Corpus path escapes output directory');
  let ancestor = target;
  while (true) {
    try {
      const real = await fs.realpath(ancestor);
      if (!inside(root, real)) throw new Error('Corpus symlink escapes output directory');
      break;
    } catch (error) {
      if (!hasErrorCode(error, 'ENOENT')) throw error;
      ancestor = path.dirname(ancestor);
    }
  }
  return target;
}

export async function loadIndex(root: string): Promise<CorpusIndex> {
  let contents;
  try {
    contents = await fs.readFile(await safePath(root, 'index.json'), 'utf8');
  } catch (error) {
    if (!hasErrorCode(error, 'ENOENT')) throw error;
    return { schemaVersion: 1, collections: {}, resources: {} };
  }
  const index: unknown = JSON.parse(contents);
  if (!isCorpusIndex(index)) {
    throw new Error('Unsupported or invalid corpus index');
  }
  return index;
}

export async function writeIndex(root: string, index: CorpusIndex): Promise<void> {
  const temporary = await safePath(root, 'index.json.tmp');
  await fs.writeFile(temporary, JSON.stringify(index, null, 2) + '\n');
  await fs.rename(temporary, await safePath(root, 'index.json'));
}

export async function convertRecord(root: string, record: ResourceRecord): Promise<void> {
  const source = await safePath(root, record.original);
  const data = await fs.readFile(source);
  if (digest(data) !== record.sha256) throw new Error('Original checksum differs from source index');
  const text = await extractMarkdown(data, source);
  const relative = markdownPath(record);
  const target = await safePath(root, relative);
  try {
    const previous = await fs.readFile(target, 'utf8');
    if (!previous.split(/\r?\n/).includes(`Source: ${canonicalUrl(record.url)}`)) {
      throw new Error(`Markdown path collision: ${relative} belongs to another source or an unrecognized file`);
    }
  } catch (error) {
    if (!hasErrorCode(error, 'ENOENT')) throw error;
  }
  const header = `# ${escapeMarkdown(record.title)}\n\nSource: ${canonicalUrl(record.url)}\n\n` +
    `- Release: ${escapeMarkdown(record.release ?? 'Unknown')}\n` +
    `- Last updated: ${escapeMarkdown(record.lastUpdated ?? 'Unknown')}\n` +
    `- Original SHA-256: \`${record.sha256}\`\n\n`;
  const output = header + text + '\n';
  await fs.mkdir(await safePath(root, path.posix.dirname(relative)), { recursive: true });
  await fs.writeFile(target, output);
  Object.assign(record, { text: relative, textSha256: digest(output), status: 'complete', error: null });
}

export async function convertPending(root: string, index: CorpusIndex): Promise<number> {
  const records = Object.values(index.resources).filter(record => record.original);
  if (!records.length) throw new Error('No downloaded originals in the source index');
  let failures = 0;
  for (const record of records) {
    try {
      await convertRecord(root, record);
    } catch (error) {
      // Keep originals and explicit errors instead of treating partial extraction as success.
      Object.assign(record, { status: 'extraction_failed', text: null, textSha256: null, error: errorMessage(error) });
      failures++;
      console.error(`Extraction failed: ${record.url}: ${record.error}`);
    }
    await writeIndex(root, index);
  }
  return failures;
}

async function waitUntil(page: Page, predicate: () => Promise<boolean>, message: string, timeout = 30000): Promise<void> {
  const deadline = Date.now() + timeout;
  do {
    if (await predicate()) return;
    await page.waitForTimeout(200);
  } while (Date.now() < deadline);
  throw new Error(message);
}

export async function discover(page: Page, collection: string) {
  await page.goto(collection, { waitUntil: 'domcontentloaded' });
  const items = page.locator(ACCORDION);
  await items.first().waitFor({ state: 'attached', timeout: 60000 });
  const count = await items.count();
  const resources = new Map<string, string[]>();
  const categoryCounts: Record<string, number> = {};
  for (let i = 0; i < count; i++) {
    const item = items.nth(i);
    const button = item.locator('button[aria-controls="accordion-item"]');
    const label = await button.getAttribute('aria-label') ?? '';
    const match = /^(\d+)\s+(.+)$/.exec(label);
    if (!match) throw new Error(`Unrecognized collection category: ${label}`);
    const expected = Number(match[1]);
    const category = match[2];
    if (await button.getAttribute('aria-expanded') !== 'true') await button.press('Enter');
    await waitUntil(page, async () => await button.getAttribute('aria-expanded') === 'true',
      `Category did not expand: ${category}`);
    const links = item.locator(RESOURCE_LINK);
    let urls = new Set<string>();
    await waitUntil(page, async () => {
      // Responsive carousels can repeat a card several times in the DOM.
      urls = new Set((await links.evaluateAll(anchors => anchors.map(anchor => {
        if (!(anchor instanceof HTMLAnchorElement)) throw new Error('Resource link is not an anchor');
        return anchor.href;
      })))
        .map(url => canonicalUrl(url)));
      return urls.size >= expected;
    }, `${category}: did not load the advertised ${expected} distinct resources`);
    if (urls.size !== expected) throw new Error(`${category}: expected ${expected} distinct resources, found ${urls.size}`);
    categoryCounts[category] = expected;
    for (const url of urls) resources.set(url, [...resources.get(url) ?? [], category]);
  }
  if (!resources.size || await items.count() !== count) throw new Error('Collection discovery incomplete; retry after the page finishes loading');
  return { resources, categoryCounts };
}

export async function ensureDownloadAccess(page: Page, url: string, prompt: () => void | Promise<void> = promptSignIn): Promise<void> {
  const name = url.includes('/success-packs/') ? 'Export Project Plan' : 'Download';
  const download = page.getByRole('button', { name, exact: true });
  const signIn = page.getByRole('button', { name: /^sign in(?: to download)?$/i }).first();
  await waitUntil(page, async () => await download.isVisible() || await signIn.isVisible(),
    'No download or sign-in control found; check access and page layout');
  if (await download.isVisible()) return;
  await prompt();
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await download.waitFor({ state: 'visible', timeout: 30000 });
}

async function promptSignIn() {
  const terminal = createInterface({ input: stdin, output: stdout });
  try {
    await terminal.question('Sign in directly in the browser and complete MFA, then press Enter here.\n' +
      'The dedicated browser profile retains the session locally; no cookies are exported. ');
  } finally {
    terminal.close();
  }
}

export async function metadata(page: Page, url: string) {
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await ensureDownloadAccess(page, url);
  const heading = page.getByRole('heading', { level: 1 }).first();
  await heading.waitFor({ state: 'visible', timeout: 60000 });
  const title = (await heading.innerText()).trim();
  if (!title || canonicalUrl(page.url()) !== url) throw new Error('Navigation did not reach expected resource');
  const buttonName = url.includes('/success-packs/') ? 'Export Project Plan' : 'Download';
  await page.getByRole('button', { name: buttonName, exact: true }).waitFor({ state: 'visible', timeout: 30000 });
  const text = await page.getByRole('main').first().evaluate(element => {
    // Keep browser-side code self-contained: transpiler helpers are not serialized by Playwright.
    const stack: Node[] = [element];
    const parts: string[] = [];
    while (stack.length) {
      const node = stack.pop();
      if (!node) break;
      if (node.nodeType === Node.TEXT_NODE) {
        const content = node.textContent?.trim();
        if (content) parts.push(content);
      } else {
        stack.push(...[...((node instanceof Element ? node.shadowRoot : null) ?? node).childNodes].reverse());
      }
    }
    return parts.join('\n');
  });
  const field = (label: string) => new RegExp(label + '\\s*:\\s*\\n([^\\n]+)').exec(text)?.[1]?.trim() ?? null;
  return { url, title, release: field('Latest release'), lastUpdated: field('Last updated') };
}

export async function receiveDownload(page: Page, button: Locator, timeout = 60000): Promise<Download> {
  const context = page.context();
  const popups: Page[] = [];
  let timer: ReturnType<typeof setTimeout> | undefined;
  let onDownload!: (download: Download) => void;
  const onPage = (popup: Page) => {
    popups.push(popup);
    popup.on('download', onDownload);
  };
  const received = new Promise<Download>(resolve => {
    onDownload = resolve;
    page.on('download', onDownload);
    context.on('page', onPage);
  });
  try {
    await button.click();
    return await Promise.race([
      received,
      new Promise<never>((_, reject) => {
        timer = setTimeout(() => reject(new Error(
          'No download received. Check the browser for sign-in, terms, or an access error; resolve manually and rerun with --resume.'
        )), timeout);
      }),
    ]);
  } finally {
    clearTimeout(timer);
    page.off('download', onDownload);
    context.off('page', onPage);
    for (const popup of popups) popup.off('download', onDownload);
  }
}

export async function reusable(root: string, old: ResourceRecord | undefined, current: ResourceRecord): Promise<boolean> {
  if (old?.status !== 'complete' || old.text !== markdownPath(old) || !current.lastUpdated || !current.release ||
      old.lastUpdated !== current.lastUpdated || old.release !== current.release) return false;
  for (const [key, hash] of [['original', 'sha256'], ['text', 'textSha256']] as const) {
    try {
      const data = await fs.readFile(await safePath(root, old[key]));
      if (digest(data) !== old[hash]) return false;
    } catch (error) {
      if (hasErrorCode(error, 'ENOENT')) return false;
      throw error;
    }
  }
  return true;
}

export async function collect(page: Page, root: string, index: CorpusIndex, collections: string[], {
  resume = false, delay = 2000, limit, downloadResource = receiveDownload,
}: CollectionOptions = {}): Promise<number> {
  const selected = new Map<string, { collections: string[]; categories: string[] }>();
  for (const collection of collections) {
    const { resources, categoryCounts } = await discover(page, collection);
    index.collections[collection] = { discoveredAt: now(), categoryCounts, resourceUrls: [...resources.keys()].sort() };
    for (const [url, categories] of resources) {
      const entry = selected.get(url) ?? { collections: [], categories: [] };
      entry.collections.push(collection);
      entry.categories = [...new Set([...entry.categories, ...categories])].sort();
      selected.set(url, entry);
    }
    await writeIndex(root, index);
  }
  const urls = [...selected.keys()].sort();
  index.lastRun = { startedAt: now(), discovered: urls.length, selected: urls.slice(0, limit).length, finishedAt: null };
  await writeIndex(root, index);
  let failures = 0;
  for (const url of urls.slice(0, limit)) {
    const old = index.resources[url];
    const record: ResourceRecord = { url, ...selected.get(url), status: 'pending', attemptedAt: now() };
    const priorPages = new Set(page.context().pages());
    try {
      Object.assign(record, await metadata(page, url));
      if (resume && old && await reusable(root, old, record)) {
        Object.assign(old, selected.get(url), { checkedAt: now() });
        console.log(`Verified existing: ${record.title}`);
        continue;
      }
      const name = url.includes('/success-packs/') ? 'Export Project Plan' : 'Download';
      const download = await downloadResource(page, page.getByRole('button', { name, exact: true }));
      const failure = await download.failure();
      if (failure) throw new Error(`Browser download failed: ${failure}`);
      const suffix = path.extname(download.suggestedFilename()).toLowerCase();
      if (!/^\.[a-z0-9]{1,10}$/.test(suffix)) throw new Error('Download has no usable file extension');
      const [kind, slug] = new URL(url).pathname.split('/').slice(-2);
      // Remote filenames are metadata, never filesystem paths.
      const directory = `originals/${kind}/${slug}`;
      await fs.mkdir(await safePath(root, directory), { recursive: true });
      const relative = `${directory}/original${suffix}`;
      const target = await safePath(root, relative);
      const partial = await safePath(root, `${directory}/download.part`);
      let data;
      try {
        await download.saveAs(partial);
        data = await fs.readFile(partial);
        if (!data.length) throw new Error('Downloaded file is empty');
        await fs.rename(partial, target);
      } finally {
        await fs.rm(partial, { force: true });
      }
      Object.assign(record, {
        original: relative, originalFilename: download.suggestedFilename(), sha256: digest(data),
        downloadedAt: now(), status: 'downloaded',
      });
      try {
        await convertRecord(root, record);
      } catch (error) {
        record.status = 'extraction_failed';
        record.text = null;
        throw error;
      }
      console.log(`Collected: ${record.title}`);
    } catch (error) {
      // Persist each failure and continue; the command exits nonzero if any fail.
      failures++;
      if (record.status !== 'extraction_failed') record.status = 'download_failed';
      record.error = errorMessage(error);
      console.error(`Failed: ${url}: ${record.error}`);
    } finally {
      if (record.status !== 'pending') index.resources[url] = record;
      await writeIndex(root, index);
      for (const popup of page.context().pages()) {
        if (!priorPages.has(popup)) await popup.close();
      }
      await page.waitForTimeout(delay);
    }
  }
  Object.assign(index.lastRun, { finishedAt: now(), failures });
  await writeIndex(root, index);
  return failures;
}

export async function prepareProfile(candidate: string, repository: string, corpus: string): Promise<string> {
  const resolved = path.resolve(candidate);
  const overlaps = (target: string) => [repository, corpus].some(root => inside(root, target) || inside(target, root));
  if (overlaps(resolved)) throw new Error('Browser profile must be separate from repository and corpus');
  await fs.mkdir(resolved, { recursive: true, mode: 0o700 });
  const real = await fs.realpath(resolved);
  if (overlaps(real)) throw new Error('Browser profile resolves into repository or corpus');
  if (process.platform !== 'win32') await fs.chmod(real, 0o700);
  return real;
}

export async function main(args = process.argv.slice(2)) {
  const { values, positionals } = parseArgs({
    args, allowPositionals: true,
    options: {
      output: { type: 'string' }, collection: { type: 'string', multiple: true },
      resume: { type: 'boolean', default: false }, limit: { type: 'string' },
      delay: { type: 'string', default: '2' }, channel: { type: 'string' },
      profile: { type: 'string' },
      help: { type: 'boolean', short: 'h' },
    },
  });
  if (values.help) {
    console.log('npm run collect -- --output <corpus-directory> (or npm run extract)\n' +
      '  --collection <MyNow collection URL> (repeatable)\n' +
      '  --channel chrome|msedge  --profile <dedicated-directory>  --resume\n' +
      '  --limit <positive integer>  --delay <seconds, minimum 1>');
    return 0;
  }
  if (positionals.length !== 1 || !['collect', 'extract'].includes(positionals[0]) || !values.output) {
    throw new Error('Specify collect or extract and --output. Use --help for usage.');
  }
  const delay = Number(values.delay);
  const limit = values.limit === undefined ? undefined : Number(values.limit);
  if (!Number.isFinite(delay) || delay < 1 || (limit !== undefined && (!Number.isSafeInteger(limit) || limit < 1))) {
    throw new Error('--delay must be at least 1 and --limit must be a positive integer');
  }
  if (values.channel && !['chrome', 'msedge'].includes(values.channel)) throw new Error('Unsupported browser channel');
  const repository = fileURLToPath(new URL('../../', import.meta.url));
  const invocationDirectory = process.env.INIT_CWD ?? process.cwd();
  const candidate = path.resolve(invocationDirectory, values.output);
  if (positionals[0] === 'collect' && inside(repository, candidate)) throw new Error('Keep downloaded resources outside the plugin repository');
  await fs.mkdir(candidate, { recursive: true });
  const root = await fs.realpath(candidate);
  if (positionals[0] === 'collect' && inside(await fs.realpath(repository), root)) throw new Error('Output resolves inside the plugin repository');
  const lockPath = await safePath(root, '.collector.lock');
  const lock = await fs.open(lockPath, 'wx');
  try {
    const index = await loadIndex(root);
    if (positionals[0] === 'extract') return Number(await convertPending(root, index) > 0);
    const collections = [...new Set((values.collection ?? [DEFAULT_COLLECTION])
      .map(url => canonicalUrl(url, ['collections'])))];
    const profile = await prepareProfile(values.profile ? path.resolve(invocationDirectory, values.profile) :
      path.join(homedir(), '.now-best-practices', `browser-${values.channel ?? 'chromium'}`),
    await fs.realpath(repository), root);
    const context = await chromium.launchPersistentContext(profile, {
      headless: false, channel: values.channel, acceptDownloads: true,
    });
    let failures;
    try {
      const page = context.pages()[0] ?? await context.newPage();
      await page.goto(collections[0], { waitUntil: 'domcontentloaded' });
      await page.locator(ACCORDION).first().waitFor({ state: 'attached', timeout: 60000 });
      if (await page.getByRole('button', { name: /^sign in$/i }).first().isVisible()) {
        await promptSignIn();
        await page.goto(collections[0], { waitUntil: 'domcontentloaded' });
        await page.locator(ACCORDION).first().waitFor({ state: 'attached', timeout: 60000 });
        if (await page.getByRole('button', { name: /^sign in$/i }).first().isVisible()) {
          throw new Error('Sign-in is still required; collection was not started');
        }
      }
      failures = await collect(page, root, index, collections, { resume: values.resume, delay: delay * 1000, limit });
    } finally {
      await context.close();
    }
    console.log(`Source index: ${path.join(root, 'index.json')}; failed resources: ${failures}`);
    return Number(failures > 0);
  } finally {
    await lock.close();
    await fs.unlink(lockPath);
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  main().then(code => { process.exitCode = code; }).catch(error => {
    console.error(`Collector stopped: ${errorMessage(error)}`);
    process.exitCode = 1;
  });
}
