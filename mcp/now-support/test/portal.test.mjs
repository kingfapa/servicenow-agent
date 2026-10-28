import assert from 'node:assert/strict';
import { afterEach, test } from 'node:test';
import { chromium } from 'playwright';
import { SupportPortal, articleUrl } from '../dist/portal.js';

const portals = [];
afterEach(async () => {
  await Promise.all(portals.splice(0).map(portal => portal.close()));
});

function fixture() {
  const state = { signedIn: false, unknown: false, denied: false, empty: false, visits: 0 };
  let browser;
  const portal = new SupportPortal(async () => {
    browser = await chromium.launch({ headless: true });
    const newContext = browser.newContext.bind(browser);
    browser.newContext = async (...args) => {
      const context = await newContext(...args);
      await context.route('**/*', async route => {
        state.visits++;
        const url = new URL(route.request().url());
        if (url.origin !== 'https://support.servicenow.com') {
          await route.fulfill({ contentType: 'text/html', body: '<input type="password" value="never-read-this">' });
          return;
        }
        const header = `<header><a href="/">ServiceNow</a>${
          state.unknown ? '' : state.signedIn ? '<a href="/logout.do">Sign Out</a>'
            : '<a href="/login">Sign In</a>'}</header>`;
        let body = '<h1>Knowledge Home</h1>';
        if (url.searchParams.get('id') === 'kb_aisearch') {
          body = `<section role="region" aria-label="search results">${
            state.empty ? 'No results found' : `
              <h4><a href="kb?id=kb_article_view&sysparm_article=KB3228619">Missing New integration</a></h4>
              <h4><a href="kb?id=kb_article_view&sysparm_article=KB3228619">Duplicate</a></h4>
              <h4><a href="https://evil.example/kb?id=kb_article_view&sysparm_article=KB12345">External</a></h4>
              <h4><a href="kb?id=kb_article_view&sysparm_article=KB12345">Another article</a></h4>
            `}</section>`;
        }
        if (url.searchParams.get('id') === 'kb_article_view') {
          body = state.denied ? '<p>You do not have access to this article.</p>'
            : `<h1>Missing button</h1><article><h3>Cause</h3><p>${'Explicit oauth_admin required. '.repeat(60)}</p></article>`;
        }
        await route.fulfill({ contentType: 'text/html', body: header + body });
      });
      return context;
    };
    return browser;
  });
  portals.push(portal);
  return { portal, state, page: () => browser.contexts()[0].pages()[0] };
}

test('only KB identifiers produce canonical support URLs', () => {
  assert.equal(articleUrl('KB3228619'), 'https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB3228619');
  for (const invalid of ['https://evil.example', 'KB12345&foo=bar', 'kb12345', 'KB1']) {
    assert.throws(() => articleUrl(invalid), { code: 'invalid_article' });
  }
});

test('public search has explicit limited coverage and bounded deduplicated results', async () => {
  const { portal } = fixture();
  const result = await portal.search('machine identity & integration', 'public', 1);
  assert.equal(result.access, 'public_only');
  assert.equal(result.scope, 'first_page_only');
  assert.equal(result.results.length, 1);
  assert.equal(result.results[0].kb, 'KB3228619');
  assert.match(result.warning, /Restricted KBs/);
});

test('authenticated search never silently falls back to public coverage', async () => {
  const { portal } = fixture();
  await assert.rejects(portal.search('machine identity', 'authenticated', 10), { code: 'authentication_required' });
});

test('sign-in pauses inspection; explicit confirmation checks positive portal UI', async () => {
  const { portal, state, page } = fixture();
  await portal.beginSignIn();
  const visits = state.visits;
  assert.deepEqual(await portal.status(), { status: 'sign_in_pending', access: 'not_inspected' });
  await assert.rejects(portal.search('test', 'public', 10), { code: 'sign_in_pending' });
  await assert.rejects(portal.readArticle('KB3228619', 'public', 1000), { code: 'sign_in_pending' });
  assert.equal(state.visits, visits);
  await page().goto('https://sso.example/login');
  await assert.rejects(portal.confirmSignIn(), { code: 'authentication_not_confirmed' });
  assert.equal((await portal.status()).access, 'not_inspected');
  state.signedIn = true;
  await page().goto('https://support.servicenow.com/kb?id=kb_home');
  assert.equal((await portal.confirmSignIn()).access, 'authenticated');
  const result = await portal.search('machine identity', 'authenticated', 10);
  assert.equal(result.results.length, 2);
  assert.equal(result.access, 'authenticated');
  state.signedIn = false;
  await assert.rejects(portal.search('test', 'authenticated', 10), { code: 'authentication_required' });
});

test('absence of Sign In is not proof of authentication', async () => {
  const { portal, state } = fixture();
  state.unknown = true;
  await assert.rejects(portal.search('test', 'authenticated', 10), { code: 'access_unknown' });
});

test('empty public results are explicitly limited', async () => {
  const { portal, state } = fixture();
  state.empty = true;
  const result = await portal.search('no match', 'public', 10);
  assert.deepEqual(result.results, []);
  assert.match(result.warning, /no results does not mean no known error/);
});

test('article retrieval reports actual readability and truncation', async () => {
  const { portal, state } = fixture();
  state.signedIn = true;
  const article = await portal.readArticle('KB3228619', 'authenticated', 1000);
  assert.equal(article.title, 'Missing button');
  assert.equal(article.body.length, 1000);
  assert.equal(article.truncated, true);
  assert.ok(article.totalCharacters > 1000);
  assert.equal(article.access, 'authenticated');
  assert.match(article.body, /oauth_admin/);
  state.denied = true;
  await assert.rejects(portal.readArticle('KB3228619', 'authenticated', 1000), { code: 'article_unavailable' });
});

test('session close resets state and permits a fresh browser', async () => {
  const { portal } = fixture();
  assert.equal((await portal.status()).status, 'idle');
  await portal.search('test', 'public', 10);
  await portal.close();
  assert.equal((await portal.status()).status, 'idle');
  assert.equal((await portal.search('test', 'public', 10)).access, 'public_only');
});

test('exclusive operations are serialized even after failure', async () => {
  const { portal } = fixture();
  const order = [];
  const first = portal.exclusive(async () => {
    order.push('first');
    await new Promise(resolve => setTimeout(resolve, 10));
    throw new Error('test failure');
  });
  const second = portal.exclusive(async () => order.push('second'));
  await assert.rejects(first, /test failure/);
  await second;
  assert.deepEqual(order, ['first', 'second']);
});
