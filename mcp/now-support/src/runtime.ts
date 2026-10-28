import { access, mkdir } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { chromium } from 'playwright';
import { PortalError } from './portal.js';

export async function runtimeStatus() {
  let browserInstalled = false;
  try {
    await access(chromium.executablePath());
    browserInstalled = true;
  } catch (error) {
    if (!(error instanceof Error && 'code' in error && error.code === 'ENOENT')) throw error;
  }
  return {
    nodeVersion: process.versions.node,
    browserInstalled,
    browserStorage: process.env.PLUGIN_DATA ? 'plugin_data' : 'playwright_default',
    graphicalDesktop: process.platform === 'linux'
      ? Boolean(process.env.DISPLAY || process.env.WAYLAND_DISPLAY) : 'not_checked',
    message: browserInstalled
      ? 'Browser executable found. OS libraries, desktop access, sign-in, and article entitlements are not verified.'
      : 'Chromium is missing. Obtain user approval before calling setup_browser with userApproved=true, or run node start.mjs --install-browser manually.'
  };
}

export async function installBrowser() {
  if ((await runtimeStatus()).browserInstalled) {
    return { status: 'already_installed', ...await runtimeStatus() };
  }
  if (process.env.PLAYWRIGHT_BROWSERS_PATH) {
    await mkdir(process.env.PLAYWRIGHT_BROWSERS_PATH, { recursive: true, mode: 0o700 });
  }
  const require = createRequire(import.meta.url);
  const cli = join(dirname(require.resolve('playwright/package.json')), 'cli.js');
  await new Promise<void>((resolve, reject) => {
    const child = spawn(process.execPath, [cli, 'install', 'chromium'], {
      stdio: ['ignore', 'ignore', 'ignore'],
      env: process.env,
      timeout: 300_000
    });
    child.once('error', () => reject(new PortalError('browser_install_failed',
      'Chromium installer could not run. Retry node start.mjs --install-browser after checking permissions and network access.')));
    child.once('exit', (code, signal) => {
      if (code === 0) resolve();
      else reject(new PortalError('browser_install_failed',
        `Chromium installation failed (exit ${code}, signal ${signal}). Check network/proxy and approved CA configuration. Never disable TLS verification. Run the Playwright CLI manually for detailed diagnostics.`));
    });
  });
  const status = await runtimeStatus();
  if (!status.browserInstalled) {
    throw new PortalError('browser_install_failed', 'Installer exited successfully, but the browser executable is missing.');
  }
  return { status: 'installed', ...status };
}
