import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { cp, mkdtemp, readdir, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';

const exec = promisify(execFile);

test('unbuilt plugin fails clearly without installing packages or writing protocol output', async () => {
  const temp = await mkdtemp(join(tmpdir(), 'now-support-launcher-'));
  try {
    const launcher = join(temp, 'start.mjs');
    await cp(new URL('../start.mjs', import.meta.url), launcher);
    await assert.rejects(exec(process.execPath, [launcher], {
      env: { ...process.env, PLUGIN_DATA: join(temp, 'plugin-data') }
    }), error => {
      assert.equal(error.code, 1);
      assert.equal(error.stdout, '');
      assert.match(error.stderr, /Plugin runtime is missing/);
      return true;
    });
    assert.deepEqual(await readdir(temp), ['start.mjs']);
  } finally {
    await rm(temp, { recursive: true, force: true });
  }
});

test('launcher rejects relative client storage paths', async () => {
  await assert.rejects(exec(process.execPath, [fileURLToPath(new URL('../start.mjs', import.meta.url))], {
    env: { ...process.env, PLUGIN_DATA: 'relative-storage' }
  }), error => {
    assert.equal(error.code, 1);
    assert.equal(error.stdout, '');
    assert.match(error.stderr, /PLUGIN_DATA must be an absolute/);
    return true;
  });
});
