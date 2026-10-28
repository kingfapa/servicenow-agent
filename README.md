# ServiceNow agent plugin

ServiceNow research and troubleshooting skill, plus a browser-backed Now Support
MCP server. Plugin version 0.5.0 registers the server automatically through
[mcp.json](./mcp.json) in clients supporting the portable
[Agent Plugins MCP format](https://agent-plugins.org/plugin-authors/mcp-servers).

## Install from the marketplace

1. Install **Node.js 22+** on the machine that will run the MCP. `node` must be
   available to the agent client's process, not just an interactive terminal.
2. Install or update **servicenow-agent** from your configured VS Code agent
   plugin marketplace. The existing Git marketplace source includes the compiled
   runtime and production dependencies. No archive extraction, npm installation
   or build commands are required for users.
3. Enable/trust the plugin and approve its MCP server in your client. No manual
   server registration is needed in clients supporting root `mcp.json`.
4. Ask the assistant to check `get_runtime_status`. If Chromium is missing,
   approve `setup_browser` explicitly. The download can be several hundred MB.
   Alternatively, from the installed plugin directory run:

   ```sh
   node mcp/now-support/start.mjs --install-browser
   ```

   The manual command is an explicit download action. When running it outside the
   agent client, set `PLUGIN_DATA` to the **same absolute directory supplied by
   that client** to use the same managed browser storage. Otherwise it installs
   into the normal Playwright cache instead.
5. Ask to sign in to Now Support. Complete SSO/MFA directly in the dedicated
   browser, return to Now Support, and tell the assistant you are finished.

The Git-delivered plugin includes compiled code, production npm dependencies and
their license files. End users do **not** run npm install or build commands.
It does not include Node.js, Chromium, credentials, or authenticated sessions.
The MCP does not install anything during normal startup.

Keep confirmation enabled for downloads, sign-in confirmation, and restricted
article reads. Only send entitled content to an AI host approved by your
organization. Search is first-page-only and article permissions vary by account.

### Browser location and corporate networks

The browser opens where the MCP process runs. Remote SSH/WSL/container users
need an accessible graphical desktop there or must configure their client to run
the plugin locally. Linux also requires Chromium's OS libraries; an administrator
may need to provision them. The setup tool does not install system packages.

The launcher sets `PLAYWRIGHT_BROWSERS_PATH` to
`${PLUGIN_DATA}/now-support/browsers` when the client provides `PLUGIN_DATA`.
Only browser binaries are persisted there, not the signed-in browser profile.
If the client does not supply it, the normal Playwright cache is used.

Use your approved VPN, proxy and CA configuration for downloads. npm's `cafile`
does not automatically configure Node/Playwright's browser downloader. Follow
your organization's approved Node CA setup if needed; never disable TLS checks.

## Build a release (maintainers)

From the repository root:

```sh
cd mcp/now-support
npm ci
npm test
npm run prepare:runtime
npm run release
npm run test:release
```

Before publishing, stage the intended release files with Git, then run
`npm run test:marketplace` from `mcp/now-support`. This exports exactly the
staged files outside the checkout and runs the isolated MCP acceptance test,
catching accidentally ignored dependency files. It does not publish or commit.

Browser fixture tests require a development Chromium installation:
`npx playwright install chromium` (an explicit download).

`npm run prepare:runtime` builds the server and regenerates the tracked
`mcp/now-support/runtime/` directory with production dependencies from the lockfile
without lifecycle scripts. Dependency licenses and notices are retained; npm's
unused platform-specific launchers and installation metadata are removed.
Commit this directory along with source changes so Git marketplace installs work
without a build step. Do not copy development node_modules or browser profiles.

`npm run release` verifies the tracked runtime matches the current build, then
creates an optional self-contained directory under root `dist/`. No npm registry
publication is needed. The archive/directory is an alternative distribution
artifact, not a requirement for marketplace users.
`test:release` builds another release, copies it outside the checkout and tests
actual stdio discovery and managed browser-path handling from that isolated copy.

The marketplace entry continues to use `source: "./"`. Updating its version
and the root plugin version together, regenerating the tracked runtime, and
pushing the changes makes that runtime part of the marketplace plugin. Users
refresh/update the plugin in VS Code; updates do not necessarily apply to
already-running sessions until the client reloads/restarts the server.

Do not assume marketplace clients run npm/build hooks. Node and browser
prerequisites remain explicit. Live VS Code installation, desktop placement,
and SSO/MFA require manual acceptance testing on supported user platforms.

See the [MCP guide](./mcp/now-support/README.md) for tool details, sign-in safety,
limitations, and manual standalone MCP configuration.
