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

Node.js, Python, and the ServiceNow SDK are **not required to install the plugin
or use documentation and advisory guidance**. Live queries with `now-assist`
require a separately installed and authenticated ServiceNow SDK; the repository's
document collection tool is separate maintainer tooling.

## Install in VS Code

These steps use the VS Code 1.144 installation flow with **Copilot** selected.

### 1. Add the marketplace

Open the Command Palette (`Ctrl+Shift+P` on Windows/Linux or `Cmd+Shift+P` on
macOS), then run **Chat: Add plugin marketplace**.

Enter `kingfapa/servicenow-agent` and confirm.

**Adding the marketplace does not install the plugin.** Continue with the next
step.

### 2. Install the plugin

1. Select the marketplace you just added.
2. Select **Browse**.
3. In the modal that opens, find **servicenow-agent**.
4. Review the plugin contents and select **Install**.
5. If VS Code asks you to trust the marketplace, review its source before
   confirming.

### 3. Verify installation

Run **Chat: Open Customizations** from the Command Palette. In the Agent
Customizations editor, confirm that **servicenow-agent** is listed and enabled
for Copilot. Open its details and check that these skills are available:

| Skill | Purpose |
|---|---|
| [now-docs](./skills/now-docs/SKILL.md) | Documentation-grounded ServiceNow development, configuration, and troubleshooting guidance. |
| [now-assist](./skills/now-assist/SKILL.md) | Read-only instance records, schema, and script debugging through `now-sdk`, without script execution or instance changes. |
| [now-advisor](./skills/now-advisor/SKILL.md) | ITSM process design and ITIL-aligned advice using available bundled best-practice references. |

Try a relevant question in Copilot Chat, for example:

> Using now-advisor, explain the recommended Change Management roles and cite
> the bundled process guide.

Installation makes the skills available; it does not guarantee they are used
for every question. The reference corpus has known coverage gaps, which the
advisor should disclose when relevant.

## Customer-instance access

Use [now-assist](./skills/now-assist/SKILL.md) for incident lookups and debugging
by reading instance scripts, logs, and metadata. It confirms the instance,
credential alias, and query scope before reading data. Authenticate the SDK in
your own terminal; never paste credentials into chat.

Customer-instance access does not use a shared browser, including when the SDK
is unavailable. Now Support documentation can still use the separate
user-controlled browser sign-in workflow in now-docs. The `now-assist` skill is
not the ServiceNow Now Assist product.

Read-only instructions are not a tool-enforced permission boundary. Use an
account restricted to necessary reads and keep host tool approvals enabled.

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
- **"The selected agent does not support SDK plugin installation" in WSL:**
  this has been observed in a WSL-connected window on VS Code 1.144 while
  installation succeeded in a local Windows window. Try the installation steps
  in a separate window that is not connected to WSL. Then reload the WSL window
  and check skill availability in a fresh Copilot chat; a Windows installation
  does not guarantee availability in WSL. This error does not mean you need to
  install the ServiceNow SDK. Avoid manually deleting plugin folders.

For more information, see the
[VS Code agent plugins documentation](https://code.visualstudio.com/docs/agent-customization/agent-plugins).
