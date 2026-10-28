import { cp, mkdir, mkdtemp, readFile, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const root = fileURLToPath(new URL('../../../', import.meta.url));
const source = join(root, 'mcp', 'now-support');
for (const name of await readdir(join(source, 'dist'))) {
  const built = await readFile(join(source, 'dist', name));
  const shipped = await readFile(join(source, 'runtime', name));
  if (!built.equals(shipped)) throw new Error('Tracked runtime is stale. Run npm run prepare:runtime before releasing.');
}
const manifest = JSON.parse(await readFile(join(root, 'plugin.json'), 'utf8'));
const releases = join(root, 'dist');
await mkdir(releases, { recursive: true });
const target = await mkdtemp(join(releases, `${manifest.name}-${manifest.version}-`));
const runtime = join(target, 'mcp', 'now-support');
await mkdir(runtime, { recursive: true });

for (const name of ['plugin.json', 'mcp.json', 'README.md', 'skills']) {
  await cp(join(root, name), join(target, name), { recursive: true, dereference: false });
}
for (const name of ['start.mjs', 'README.md', 'runtime']) {
  await cp(join(source, name), join(runtime, name), { recursive: true, dereference: false });
}
console.log(`Prepared plugin directory: ${target}`);
console.log('Distribute this entire directory, not the source checkout. Chromium is installed separately with explicit user approval.');
