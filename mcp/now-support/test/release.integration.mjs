import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { cp, mkdir, mkdtemp, readFile, access, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';
import { Client } from '@modelcontextprotocol/client';
import { StdioClientTransport } from '@modelcontextprotocol/client/stdio';

test('prepared plugin starts outside checkout with production dependencies and managed browser storage', async () => {
  const exec = promisify(execFile);
  assert.ok(process.env.npm_execpath, 'Run with npm run test:release');
  let source = process.env.NOW_SUPPORT_TEST_PLUGIN_ROOT;
  if (!source) {
    const { stdout } = await exec(process.execPath, [process.env.npm_execpath, 'run', 'release'], {
      cwd: fileURLToPath(new URL('../', import.meta.url)),
      maxBuffer: 1024 * 1024
    });
    source = stdout.match(/Prepared plugin directory: (.+)/)?.[1]?.trim();
    assert.ok(source, stdout);
  }
  const temp = await mkdtemp(join(tmpdir(), 'now-support-plugin-test-'));
  let client;
  try {
    const root = join(temp, 'plugin');
    const data = join(temp, 'plugin-data');
    await mkdir(data);
    await cp(source, root, { recursive: true });
    const runtime = join(root, 'mcp', 'now-support', 'runtime');
    await assert.rejects(access(join(runtime, 'node_modules', 'typescript')));
    await assert.rejects(access(join(runtime, 'node_modules', '@modelcontextprotocol', 'client')));
    await access(join(runtime, 'node_modules', 'playwright', 'LICENSE'));
    const config = JSON.parse(await readFile(join(root, 'mcp.json'), 'utf8'));
    assert.deepEqual(Object.keys(config).sort(), ['$schema', 'mcpServers']);
    const server = config.mcpServers['now-support'];
    assert.equal(server.type, 'stdio');
    assert.equal(server.command, 'node');
    const expand = text => text.replaceAll('${PLUGIN_ROOT}', root).replaceAll('${PLUGIN_DATA}', data);
    const transport = new StdioClientTransport({
      command: process.execPath,
      args: server.args.map(expand),
      cwd: expand(server.cwd),
      env: { ...process.env, PLUGIN_ROOT: root, PLUGIN_DATA: data },
      stderr: 'pipe'
    });
    client = new Client({ name: 'prepared-plugin-test', version: '1.0.0' });
    await client.connect(transport);
    const tools = await client.listTools();
    assert.equal(tools.tools.length, 8);
    const status = await client.callTool({ name: 'get_runtime_status', arguments: {} });
    assert.notEqual(status.isError, true);
    const result = JSON.parse(status.content[0].text);
    assert.equal(result.browserStorage, 'plugin_data');
    assert.equal(result.browserInstalled, false, 'must not reuse the development browser cache');
    await assert.rejects(access(join(data, 'now-support')), 'startup must not install a browser');
    const invalidSetup = await client.callTool({ name: 'setup_browser', arguments: { userApproved: false } });
    assert.equal(invalidSetup.isError, true);
    const closed = await client.callTool({ name: 'close_session', arguments: {} });
    assert.equal(JSON.parse(closed.content[0].text).status, 'closed');
  } finally {
    await client?.close();
    await rm(temp, { recursive: true, force: true });
  }
});
