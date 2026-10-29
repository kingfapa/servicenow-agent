# ServiceNow Agent

ServiceNow documentation, development, troubleshooting, and ITSM advisory skills
for GitHub Copilot in VS Code.

## Requirements

- A current version of **VS Code** with agent plugin support and access to
  **GitHub Copilot Chat**.
- **Git installed and available on PATH** so VS Code can retrieve the marketplace
  and plugin. Install it from [git-scm.com](https://git-scm.com/downloads), then
  restart VS Code if it was already running.
- Network access to GitHub. Your organization's policies must allow agent plugins
  and this marketplace.

Check that Git is available in a terminal:

```bash
git --version
```

For remote development, make sure Git is available in the environment VS Code
uses to retrieve plugins, which may be your remote host rather than your desktop.

Node.js, Python, and the ServiceNow SDK are **not required to install or use the
bundled skills**. The SDK is optional for live instance queries; the repository's
document collection tool is separate maintainer tooling.

## Install in VS Code

### 1. Add the marketplace

Open the Command Palette (`Ctrl+Shift+P` on Windows/Linux or `Cmd+Shift+P` on
macOS), then run **Preferences: Open User Settings (JSON)**.

Add `kingfapa/servicenow-agent` to `chat.plugins.marketplaces`:

```json
{
  "chat.plugins.marketplaces": [
    "kingfapa/servicenow-agent"
  ]
}
```

Merge this setting into your existing settings rather than replacing the file.
If you already have marketplaces configured, append this entry to the existing
array.

Alternatively, open Settings, search for `chat.plugins.marketplaces`, and add
`kingfapa/servicenow-agent` to the list.

**Adding the marketplace does not install the plugin.** Continue with the next
step.

### 2. Install the plugin

1. Run **Chat: Open Customizations** from the Command Palette.
2. Select **Plugins**, then **Browse** (or the **Browse** tab, depending on your
   VS Code version).
3. Find **servicenow-agent** from **servicenow-agent-marketplace**.
4. Review the plugin contents and select **Install**.
5. If VS Code asks you to trust the marketplace, review its source before
   confirming.

### 3. Verify installation

In the Agent Customizations editor, confirm that **servicenow-agent** is listed
and enabled. Open its details and check that these skills are available:

| Skill | Purpose |
|---|---|
| [now-docs](./skills/now-docs/SKILL.md) | Documentation-grounded ServiceNow development, configuration, troubleshooting, and optional read-only instance queries. |
| [now-advisor](./skills/now-advisor/SKILL.md) | ITSM process design and ITIL-aligned advice using available bundled best-practice references. |

Try a relevant question in Copilot Chat, for example:

> Using now-advisor, explain the recommended Change Management roles and cite
> the bundled process guide.

Installation makes the skills available; it does not guarantee they are used
for every question. The reference corpus has known coverage gaps, which the
advisor should disclose when relevant.

## Troubleshooting

- **Git is not found:** install Git, confirm `git --version` works, and restart
  VS Code so it picks up PATH changes.
- **The marketplace or plugin does not appear:** check the spelling of
  `kingfapa/servicenow-agent`, confirm GitHub connectivity, and reopen the
  Customizations editor.
- **Plugin settings or commands are unavailable:** update VS Code and check that
  `chat.plugins.enabled` is enabled. Availability can also depend on your selected
  agent harness and organization policy.
- **The marketplace is listed but the skills are missing:** adding the marketplace
  only enables discovery. Install **servicenow-agent**, then confirm it is enabled.

For more information, see the
[VS Code agent plugins documentation](https://code.visualstudio.com/docs/agent-customization/agent-plugins).
