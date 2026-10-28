import assert from 'node:assert/strict';
import { test } from 'node:test';
import { Client } from '@modelcontextprotocol/client';
import { StdioClientTransport } from '@modelcontextprotocol/client/stdio';
import { fileURLToPath } from 'node:url';

test('MCP 2.4.0 client discovers tools and validates inputs over stdio', async () => {
  const transport = new StdioClientTransport({
    command: process.execPath,
    args: [fileURLToPath(new URL('../dist/server.js', import.meta.url))],
    stderr: 'pipe'
  });
  const client = new Client({ name: 'now-support-test', version: '0.1.0' });
  try {
    await client.connect(transport);
    const { tools } = await client.listTools();
    assert.deepEqual(tools.map(tool => tool.name).sort(), [
      'begin_sign_in', 'close_session', 'confirm_sign_in',
      'get_access_status', 'get_runtime_status', 'read_article', 'search_support', 'setup_browser'
    ]);
    const status = await client.callTool({ name: 'get_access_status', arguments: {} });
    assert.equal(status.isError, undefined);
    assert.deepEqual(JSON.parse(status.content[0].text), { status: 'idle', access: 'not_checked' });
    const runtime = await client.callTool({ name: 'get_runtime_status', arguments: {} });
    const runtimeStatus = JSON.parse(runtime.content[0].text);
    assert.equal(typeof runtimeStatus.browserInstalled, 'boolean');
    const noApproval = await client.callTool({ name: 'setup_browser', arguments: { userApproved: false } });
    assert.equal(noApproval.isError, true);
    if (runtimeStatus.browserInstalled) {
      const setup = await client.callTool({ name: 'setup_browser', arguments: { userApproved: true } });
      assert.notEqual(setup.isError, true);
      assert.equal(JSON.parse(setup.content[0].text).status, 'already_installed');
    }
    const invalid = await client.callTool({ name: 'read_article', arguments: { kb: 'https://evil.example' } });
    assert.equal(invalid.isError, true);
    const missingConsent = await client.callTool({ name: 'confirm_sign_in', arguments: { userConfirmed: false } });
    assert.equal(missingConsent.isError, true);
    const emptyQuery = await client.callTool({ name: 'search_support', arguments: { query: ' ' } });
    assert.equal(emptyQuery.isError, true);
    const notPending = await client.callTool({ name: 'confirm_sign_in', arguments: { userConfirmed: true } });
    assert.equal(notPending.isError, true);
    assert.equal(JSON.parse(notPending.content[0].text).code, 'no_sign_in_pending');
    const closed = await client.callTool({ name: 'close_session', arguments: {} });
    assert.equal(JSON.parse(closed.content[0].text).status, 'closed');
  } finally {
    await client.close();
  }
});
