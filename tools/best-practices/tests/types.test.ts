import assert from 'node:assert/strict';
import { test } from 'node:test';
import { hasErrorCode, isCorpusIndex } from '../types.ts';
import { xml } from '../xml.ts';

test('index validation accepts published records without local originals', () => {
  assert.ok(isCorpusIndex({
    schemaVersion: 1, collections: {},
    resources: { guide: { url: 'https://example.test/guide', status: 'complete',
      text: 'markdown/guide.md', textSha256: 'hash', release: null } },
  }));
});

test('index validation rejects malformed records and nested metadata', () => {
  for (const resource of [{ url: 123 }, { url: 'test', status: 'unknown' },
    { url: 'test', categories: [123] }, { url: 'test', text: {} }]) {
    assert.equal(isCorpusIndex({ schemaVersion: 1, collections: {}, resources: { guide: resource } }), false);
  }
  assert.equal(isCorpusIndex({ schemaVersion: 1, resources: {}, collections: { test: null } }), false);
  assert.equal(isCorpusIndex({ schemaVersion: 1, resources: {}, collections: {}, lastRun: {} }), false);
});

test('XML normalization retains namespaced attributes and ordered text', () => {
  const parsed = xml('<w:p xmlns:w="urn:w"><w:t w:space="preserve">Text</w:t></w:p>', true);
  assert.equal(parsed[0].tag, 'p');
  assert.equal(parsed[0].children[0].attributes['@_w:space'], 'preserve');
  assert.equal(parsed[0].children[0].children[0].text, 'Text');
  assert.throws(() => xml('<unclosed>'), /Invalid XML/);
});

test('error code guard safely handles unknown thrown values', () => {
  assert.equal(hasErrorCode({ code: 'ENOENT' }, 'ENOENT'), true);
  for (const error of [null, undefined, 'ENOENT', new Error('ENOENT')]) {
    assert.equal(hasErrorCode(error, 'ENOENT'), false);
  }
});
