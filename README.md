# ServiceNow Agent

ServiceNow documentation, development, troubleshooting, and ITSM advisory skills
for **GitHub Copilot in VS Code**.

This repository packages two agent skills and a bundled Markdown reference
library. It also includes optional maintainer tooling for collecting and
converting authorized ServiceNow best-practice resources.

## What's included

| Skill | Use it for |
|---|---|
| [now-docs](./plugin/skills/now-docs/SKILL.md) | Documentation-grounded ServiceNow questions, configuration, scripting, integrations, and troubleshooting, with release-aware source verification. Optional read-only instance queries use a separately installed and authenticated ServiceNow SDK. |
| [now-advisor](./plugin/skills/now-advisor/SKILL.md) | ITSM process design, ITIL-aligned recommendations, workshops, roles, KPIs, and implementation backlogs, grounded in available bundled references. |

The skills complement each other: `now-advisor` covers process recommendations,
while `now-docs` checks current product behavior and technical details.
They provide instructions and reference material for the assistant, not a
standalone application or a preconfigured connection to your instance.

## Install in VS Code

You need a current VS Code version with agent plugin support, access to GitHub
Copilot Chat, Git available on `PATH`, and network access to GitHub. Your
organization must allow agent plugins and this marketplace.

1. With **Copilot** selected, open the Command Palette and run
   **Chat: Add plugin marketplace**.
2. Enter `kingfapa/servicenow-agent`.
3. Select the added marketplace, choose **Browse**, then find
   **servicenow-agent** and select **Install**. Review any trust prompt before
   confirming.
4. Run **Chat: Open Customizations** and confirm that **servicenow-agent** is
   enabled and both skills are available.

**Adding the marketplace does not install the plugin.** Complete the installation
step before trying the skills.

Node.js, Python, and the ServiceNow SDK are **not required for the bundled
skills**. Live instance queries and maintainer tooling have separate setup
requirements; see the linked skill and tooling guides.

See the [installation and troubleshooting guide](./plugin/README.md) for
details, including remote development and WSL considerations.

## Try it

Open Copilot Chat and ask a relevant question. You can name a skill explicitly:

> Using now-docs, explain when to use a Business Rule versus a Flow Designer
> flow. Cite the applicable official documentation.

> Using now-advisor, recommend Change Management roles and responsibilities,
> citing the bundled process guide.

> Using now-advisor, draft a Problem Management workshop agenda and identify
> decisions stakeholders need to make. Disclose any gaps in the references.

For release-specific questions, include your ServiceNow release family and
relevant context. Installing the plugin makes the skills available but does not
guarantee they are invoked for every question.

## Reference coverage and boundaries

The advisor includes process guides, workshop materials, starter stories, and
other best-practice references. Coverage is incomplete: some resources could
not be downloaded or converted. Check the
[reference index](./plugin/skills/now-advisor/references/README.md) and
[corpus manifest](./plugin/skills/now-advisor/references/now-best-practices/index.json)
for current availability rather than assuming every topic is covered.

- Recommendations should cite sources and disclose missing evidence.
- Older process guidance is not proof of current release behavior.
- Converted Markdown does not reconstruct images, diagrams, or all source layout.
- Live instance queries are optional, read-only, and require your approval and
  separate SDK authentication. Organizational data-handling policies still apply.
- Never paste credentials into chat or commit credentials, instance exports,
  personal data, or restricted support content.

## Repository layout

| Path | Purpose |
|---|---|
| [`.github/plugin/marketplace.json`](./.github/plugin/marketplace.json) | Marketplace catalog pointing to the installable plugin. |
| [`plugin/`](./plugin/) | Distributed plugin: metadata, skills, and bundled references. |
| [`plugin/skills/now-advisor/references/`](./plugin/skills/now-advisor/references/) | Reference inventory, provenance manifest, and published Markdown corpus. |
| [`tools/best-practices/`](./tools/best-practices/) | Maintainer-only collection and conversion tooling, with tests. Not installed with the plugin. |

## Contributing

For skill improvements, edit the relevant skill under
[`plugin/skills/`](./plugin/skills/) and check its behavior in an installed copy.
Keep source citations, release applicability, and evidence gaps explicit.

Before adding references, confirm redistribution is permitted and follow the
[reference contribution guidance](./plugin/skills/now-advisor/references/README.md#adding-documents).
Preserve provenance and use paths that work from the installed plugin, not
machine-specific locations.

### Maintainer tooling

The [MyNow best-practice collector](./tools/best-practices/README.md) downloads
authorized resources through an interactive browser and converts supported
formats to Markdown. Downloads stay in a local corpus; the tool does not
automatically publish them into the plugin.

For tooling development, use **Node.js 22.13 or newer** and npm. From the
repository root:

```bash
npm ci --prefix tools/best-practices
npm run typecheck --prefix tools/best-practices
npm test --prefix tools/best-practices
```

See the [tooling guide](./tools/best-practices/README.md) for browser setup,
collection, offline extraction, and handling incomplete downloads. Browser
profiles and authentication data must remain private and outside the repository.
