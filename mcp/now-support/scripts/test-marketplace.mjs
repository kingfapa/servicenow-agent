import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const exec = promisify(execFile);
const root = fileURLToPath(new URL('../../../', import.meta.url));
const temp = await mkdtemp(join(tmpdir(), 'now-support-marketplace-'));
try {
  // Export exactly the staged Git files, with no ignored development dependencies.
  await exec('git', ['checkout-index', '--all', `--prefix=${temp}${sep}`], { cwd: root });
  const { stdout, stderr } = await exec(process.execPath, [
    '--test', fileURLToPath(new URL('../test/release.integration.mjs', import.meta.url))
  ], {
    env: { ...process.env, NOW_SUPPORT_TEST_PLUGIN_ROOT: temp },
    maxBuffer: 1024 * 1024
  });
  process.stdout.write(stdout);
  process.stderr.write(stderr);
} catch (error) {
  if (error && typeof error === 'object') {
    if ('stdout' in error && typeof error.stdout === 'string') process.stderr.write(error.stdout);
    if ('stderr' in error && typeof error.stderr === 'string') process.stderr.write(error.stderr);
  }
  throw error;
} finally {
  await rm(temp, { recursive: true, force: true });
}
