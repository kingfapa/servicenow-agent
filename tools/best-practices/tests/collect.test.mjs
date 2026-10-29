import assert from 'node:assert/strict';
import { after, before, test } from 'node:test';
import { promises as fs } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { chromium } from 'playwright';
import {
  BASE, DEFAULT_COLLECTION, canonicalUrl, collect, convertPending, convertRecord,
  discover, loadIndex, main, receiveDownload, reusable, safePath,
  ensureDownloadAccess, prepareProfile,
} from '../collect.mjs';

let browser;
before(async () => {
  const executablePath = process.env.BEST_PRACTICES_BROWSER;
  browser = await chromium.launch({
    headless: true, executablePath,
    channel: executablePath ? undefined : 'chrome',
  });
});
after(async () => { await browser?.close(); });

const asset = BASE + 'assets/test-guide';
const pack = BASE + 'success-packs/test-plan';
const digest = data => createHash('sha256').update(data).digest('hex');
const category = (label, urls, count = urls.length) => `<now-accordion-item><template shadowrootmode="open">
  <button aria-controls="accordion-item" aria-expanded="false" aria-label="${count} ${label}"
    onclick="this.setAttribute('aria-expanded', 'true')">${label}</button>
  ${urls.map(url => `<a href="${url}">Asset</a>`).join('')}
  </template></now-accordion-item>`;

async function fixture(t, categories = category('Process Guide', [asset]) + category('Success Packs', [pack])) {
  const root = await fs.mkdtemp(path.join(tmpdir(), 'now-collector-test-'));
  const context = await browser.newContext({ acceptDownloads: true });
  const page = await context.newPage();
  t.after(async () => {
    await context.close();
    await fs.rm(root, { recursive: true, force: true });
  });
  await context.route('**/*', async route => {
    const url = route.request().url();
    let body;
    if (url === DEFAULT_COLLECTION) {
      body = `<main>${categories}<a href="${BASE}assets/unrelated">Recommendation</a></main>`;
    } else if ([asset, pack].includes(url)) {
      const name = url === pack ? 'Export Project Plan' : 'Download';
      const payload = Buffer.from(url === pack ? '<Project><Name>Plan</Name></Project>' : 'Process guide').toString('base64');
      const suffix = url === pack ? 'xml' : 'txt';
      body = `<main><x-asset><template shadowrootmode="open">
        <h1>Test document</h1><div>Last updated :<span>Jul 27, 2026</span></div>
        <div>Latest release :<span>Australia</span></div>
        <button onclick="const a=document.createElement('a');
          a.href='data:application/octet-stream;base64,${payload}';
          a.download='guide.${suffix}';a.click();">${name}</button>
        </template></x-asset></main>`;
    } else return route.abort();
    await route.fulfill({ status: 200, contentType: 'text/html', body });
  });
  return { root, context, page, index: await loadIndex(root) };
}

test('collects shadow-DOM categories, downloads current assets/plans, converts and resumes', async t => {
  const { root, page, index } = await fixture(t);
  assert.equal(await collect(page, root, index, [DEFAULT_COLLECTION], { delay: 0 }), 0);
  assert.deepEqual(Object.keys(index.resources).sort(), [asset, pack]);
  for (const record of Object.values(index.resources)) {
    assert.equal(record.status, 'complete');
    assert.equal(record.release, 'Australia');
    assert.equal(record.lastUpdated, 'Jul 27, 2026');
    assert.match(await fs.readFile(path.join(root, record.text), 'utf8'), /Source: https:/);
  }
  assert.equal(await collect(page, root, index, [DEFAULT_COLLECTION], {
    delay: 0, resume: true, downloadResource() { throw new Error('Should skip unchanged assets'); },
  }), 0);
  assert.equal(index.lastRun.discovered, 2);
  assert.ok(index.resources[asset].checkedAt);
  assert.ok(index.lastRun.finishedAt);
});

test('responsive carousel duplicates are counted once', async t => {
  const { page } = await fixture(t, category('Process Guide', [asset, asset, asset, asset], 1));
  const { resources, categoryCounts } = await discover(page, DEFAULT_COLLECTION);
  assert.equal(resources.size, 1);
  assert.equal(categoryCounts['Process Guide'], 1);
});

test('discovery fails if distinct resources differ from the advertised count', async t => {
  const { page } = await fixture(t, category('Process Guide', [asset, pack], 1));
  await assert.rejects(discover(page, DEFAULT_COLLECTION), /distinct resources/);
});

test('download failures and limited scope are persisted, not reported as success', async t => {
  const { page, root, index } = await fixture(t);
  assert.equal(await collect(page, root, index, [DEFAULT_COLLECTION], {
    delay: 0, limit: 1, downloadResource() { throw new Error('Access denied'); },
  }), 1);
  const saved = JSON.parse(await fs.readFile(path.join(root, 'index.json'), 'utf8'));
  assert.equal(saved.lastRun.selected, 1);
  assert.equal(saved.lastRun.discovered, 2);
  assert.equal(saved.resources[asset].status, 'download_failed');
  assert.match(saved.resources[asset].error, /Access denied/);
});

test('download timeout cleans up event listeners and exposes the failure', async t => {
  const { page, context } = await fixture(t);
  await page.setContent('<button>Download</button>');
  const beforePage = page.listenerCount('download');
  const beforeContext = context.listenerCount('page');
  await assert.rejects(receiveDownload(page, page.getByRole('button'), 20), /No download received/);
  assert.equal(page.listenerCount('download'), beforePage);
  assert.equal(context.listenerCount('page'), beforeContext);
});

test('conversion failure preserves the original and is retryable without a browser', async t => {
  const { page, root, index } = await fixture(t);
  const bytes = Buffer.from('not a supported document');
  const unsupportedDownload = {
    failure: async () => null, suggestedFilename: () => 'diagram.png',
    saveAs: filename => fs.writeFile(filename, bytes),
  };
  assert.equal(await collect(page, root, index, [DEFAULT_COLLECTION], {
    delay: 0, limit: 1, downloadResource: async () => unsupportedDownload,
  }), 1);
  const record = index.resources[asset];
  assert.equal(record.status, 'extraction_failed');
  assert.deepEqual(await fs.readFile(path.join(root, record.original)), bytes);
  assert.equal(await convertPending(root, index), 1);
  assert.equal(record.text, null);
});

test('conversion includes provenance and resume checks original and text checksums', async t => {
  const { root } = await fixture(t);
  await fs.writeFile(path.join(root, 'original.txt'), 'Reviewed process');
  const record = {
    original: 'original.txt', url: asset, title: 'Test', release: 'Australia',
    lastUpdated: 'Jul 27, 2026', sha256: digest('Reviewed process'),
  };
  await convertRecord(root, record);
  assert.equal(record.text, 'markdown/test-guide/test-guide.md');
  assert.match(await fs.readFile(path.join(root, record.text), 'utf8'), /^# Test\n/);
  assert.equal(await reusable(root, record, record), true);
  assert.equal(await reusable(root, { ...record, text: 'extracted.txt' }, record), false);
  assert.equal(await reusable(root, { ...record, text: 'extracted.md' }, record), false);
  assert.equal(await reusable(root, record, { ...record, release: null }), false);
  await fs.writeFile(path.join(root, record.text), 'tampered');
  assert.equal(await reusable(root, record, record), false);
  await fs.writeFile(path.join(root, record.original), 'tampered');
  await assert.rejects(convertRecord(root, record), /checksum/);
});

test('named Markdown migration preserves originals and refuses source collisions', async t => {
  const { root } = await fixture(t);
  const original = 'Original content';
  await fs.writeFile(path.join(root, 'original.docx.txt'), original);
  await fs.writeFile(path.join(root, 'extracted.md'), 'Old extraction retained');
  const record = {
    original: 'original.docx.txt', originalFilename: 'Change Management - Process Guide.txt',
    url: BASE + 'assets/change-management-process-guide', title: 'Change Management Process Guide',
    categories: ['Process Guide'], sha256: digest(original), text: 'extracted.md',
  };
  await convertRecord(root, record);
  assert.equal(record.text, 'markdown/change-management/change-management-process-guide.md');
  assert.equal(await fs.readFile(path.join(root, 'extracted.md'), 'utf8'), 'Old extraction retained');
  assert.equal(await fs.readFile(path.join(root, record.original), 'utf8'), original);
  const before = await fs.readFile(path.join(root, record.text), 'utf8');
  const other = { ...record, url: BASE + 'assets/change-management-another-guide',
    title: 'Change Management - Another Guide' };
  await assert.rejects(convertRecord(root, other), /path collision/);
  assert.equal(await fs.readFile(path.join(root, record.text), 'utf8'), before);
});

test('URLs, manifest versions, empty conversion and corpus paths are validated', async t => {
  const { root } = await fixture(t);
  for (const url of ['http://mynow.servicenow.com/x', 'https://example.com/x', asset + '?token=secret']) {
    assert.throws(() => canonicalUrl(url));
  }
  await assert.rejects(safePath(root, '../escape'), /escapes/);
  await assert.rejects(safePath(root, path.join(root, 'absolute.txt')), /relative/);
  await assert.rejects(convertPending(root, { resources: {} }), /No downloaded originals/);
  await fs.writeFile(path.join(root, 'index.json'), '{"schemaVersion":999}');
  await assert.rejects(loadIndex(root), /invalid corpus index/);
  await assert.rejects(main(['collect', '--output', process.cwd()]), /outside/);
});

test('active sessions skip sign-in; expired sessions prompt and verify access again', async t => {
  const { page } = await fixture(t);
  await page.goto(asset);
  await ensureDownloadAccess(page, asset, () => { throw new Error('Unexpected login prompt'); });
  await page.setContent('<button>Sign in to download</button>');
  let prompts = 0;
  await ensureDownloadAccess(page, asset, async () => { prompts++; });
  assert.equal(prompts, 1);
});

test('dedicated profile is private and cannot overlap repository or corpus', async t => {
  const { root } = await fixture(t);
  const repository = path.join(root, 'repo');
  const corpus = path.join(root, 'corpus');
  const profile = await prepareProfile(path.join(root, 'profile'), repository, corpus);
  if (process.platform !== 'win32') assert.equal((await fs.stat(profile)).mode & 0o777, 0o700);
  await assert.rejects(prepareProfile(path.join(corpus, 'profile'), repository, corpus), /separate/);
  await assert.rejects(prepareProfile(root, repository, corpus), /separate/);
});

test('dedicated browser profile retains non-sensitive browser state across launches', async t => {
  const { root } = await fixture(t);
  const options = { headless: true, executablePath: process.env.BEST_PRACTICES_BROWSER,
    channel: process.env.BEST_PRACTICES_BROWSER ? undefined : 'chrome' };
  for (const first of [true, false]) {
    const context = await chromium.launchPersistentContext(path.join(root, 'profile'), options);
    try {
      await context.route('https://profile.test/**', route => route.fulfill({ contentType: 'text/html', body: '<h1>Test</h1>' }));
      const page = await context.newPage();
      await page.goto('https://profile.test/');
      if (first) await page.evaluate(() => localStorage.setItem('test-preference', 'retained'));
      else assert.equal(await page.evaluate(() => localStorage.getItem('test-preference')), 'retained');
    } finally { await context.close(); }
  }
});

test('symlinks cannot direct output outside the corpus', { skip: process.platform === 'win32' }, async t => {
  const { root } = await fixture(t);
  await fs.symlink(tmpdir(), path.join(root, 'elsewhere'));
  await assert.rejects(safePath(root, 'elsewhere/new.txt'), /symlink escapes/);
});
