import { cp, mkdtemp, readFile, readdir, rename, rm, writeFile } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const source = fileURLToPath(new URL('../', import.meta.url));
if (!process.env.npm_execpath) throw new Error('Run through npm run prepare:runtime.');
const staging = await mkdtemp(join(source, '.runtime-staging-'));
const runtime = join(source, 'runtime');
try {
  for (const name of ['package.json', 'package-lock.json']) {
    await cp(join(source, name), join(staging, name));
  }
  await new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [
      process.env.npm_execpath, 'ci', '--omit=dev', '--ignore-scripts', '--no-audit', '--no-fund'
    ], { cwd: staging, stdio: 'inherit' });
    child.once('error', reject);
    child.once('exit', code => code === 0 ? resolve() : reject(new Error(`Runtime installation failed (${code}).`)));
  });
  // npm launchers are unused: tools invoke the JS CLI directly. Remove platform-specific symlinks.
  await rm(join(staging, 'node_modules', '.bin'), { recursive: true, force: true });
  await rm(join(staging, 'node_modules', '.package-lock.json'), { force: true });
  for (const name of ['package.json', 'package-lock.json']) {
    await rm(join(staging, name));
  }
  await writeFile(join(staging, 'package.json'), JSON.stringify({
    name: 'now-support-plugin-runtime', private: true, type: 'module'
  }, null, 2) + '\n');
  await cp(join(source, 'dist'), staging, { recursive: true });
  const manifest = JSON.parse(await readFile(join(source, 'package.json'), 'utf8'));
  await writeFile(join(staging, 'PROVENANCE.json'), JSON.stringify({
    generatedBy: 'npm run prepare:runtime',
    dependencies: manifest.dependencies,
    licenseNotice: 'Dependency licenses and notices are retained in each node_modules package.'
  }, null, 2) + '\n');
  // Only replace the specifically named generated runtime, never the source or workspace.
  await rm(runtime, { recursive: true, force: true });
  await rename(staging, runtime);
  console.log(`Prepared tracked marketplace runtime: ${runtime}`);
  console.log(`Includes ${ (await readdir(join(runtime, 'node_modules'))).length } production package entries.`);
} finally {
  await rm(staging, { recursive: true, force: true });
}
