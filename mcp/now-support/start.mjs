import { access } from 'node:fs/promises';
import { isAbsolute, join } from 'node:path';
import { fileURLToPath } from 'node:url';

if (Number(process.versions.node.split('.')[0]) < 22) {
  console.error('[now-support] Node.js 22 or newer is required. Install Node on the machine running this MCP.');
  process.exit(1);
}

if (process.env.PLUGIN_DATA) {
  if (!isAbsolute(process.env.PLUGIN_DATA)) {
    console.error('[now-support] PLUGIN_DATA must be an absolute client-managed directory.');
    process.exit(1);
  }
  process.env.PLAYWRIGHT_BROWSERS_PATH = join(process.env.PLUGIN_DATA, 'now-support', 'browsers');
}

try {
  await access(new URL('./runtime/server.js', import.meta.url));
  await access(new URL('./runtime/node_modules/@modelcontextprotocol/server/package.json', import.meta.url));
  await access(new URL('./runtime/node_modules/playwright/package.json', import.meta.url));
  await access(new URL('./runtime/node_modules/zod/package.json', import.meta.url));
} catch {
  console.error('[now-support] Plugin runtime is missing. Reinstall/update the plugin. Maintainers: run npm ci and npm run prepare:runtime in mcp/now-support.');
  process.exit(1);
}

if (process.argv[2] === '--install-browser' && process.argv.length === 3) {
  const { installBrowser } = await import('./runtime/runtime.js');
  try {
    console.error(JSON.stringify(await installBrowser()));
  } catch (error) {
    console.error(`[now-support] ${error instanceof Error ? error.message : 'Browser setup failed.'}`);
    process.exitCode = 1;
  }
} else if (process.argv.length > 2) {
  console.error(`[now-support] Usage: node ${fileURLToPath(import.meta.url)} [--install-browser]`);
  process.exitCode = 1;
} else {
  await import('./runtime/server.js');
}
