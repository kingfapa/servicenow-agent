# MyNow best-practice collector

Maintainer tooling for building a **local, reviewable corpus**, not a plugin
runtime dependency. The default collection is IT Service Management. Additional
MyNow collection URLs can be supplied explicitly; this is not a whole-site crawler.

The marketplace installs only the repository's `plugin/` directory. This tool,
its dependencies and tests remain outside that package in `tools/`. Run the
commands below from a checkout of the repository, not an installed plugin.

The tool opens its own visible browser with a dedicated persistent profile. It uses the
normal **Download** button for assets and **Export Project Plan** for success
packs. The browser retains its session locally; the tool never reads or exports
credential cookies or tokens. Sign in on the first run, and again only when
the session expires or SSO policy requires it. Use only downloads your account and applicable terms
authorize; stop rather than bypassing access restrictions.

## Setup

Run on a machine with a desktop browser, preferably your Windows desktop if
that is where you use SSO. A terminal in remote VS Code runs on the remote
machine, not automatically on Windows.

Requires Node.js 22.13 or newer and npm. The tool and tests are written in
TypeScript and run through `tsx`; no build step or Python is required. Install
development dependencies too (do not use `npm ci --omit=dev`). From the
repository root:

```powershell
# Windows PowerShell
npm ci --prefix tools/best-practices
npm run collect --prefix tools/best-practices -- --channel msedge --output "$HOME\now-best-practices" --limit 1
```

```bash
# Linux/macOS with a desktop session
npm ci --prefix tools/best-practices
npm run collect --prefix tools/best-practices -- --channel chrome \
  --output "$HOME/now-best-practices" --limit 1
```

Use `--channel chrome` or `--channel msedge` to launch an installed browser
instead of installing Playwright Chromium. To use Playwright's browser, run
`npx --prefix tools/best-practices playwright install chromium`, then omit
`--channel`. Enterprise SSO may require an
approved browser; this script cannot bypass organizational browser policy.
Complete login and MFA in the browser, then press Enter in the terminal.
Never paste credentials into the terminal or chat.

The default profile is `$HOME/.now-best-practices/browser-<channel>` (channel is
`chrome`, `msedge`, or `chromium`). Override with `--profile <directory>`.
Use only a dedicated profile, not your everyday browser's profile. The profile
must be outside and separate from both the repository and corpus. Treat it as
sensitive: do not copy, sync, share, or commit it. The directory is owner-only on
POSIX; on Windows keep it under your private user account with appropriate ACLs.
The same profile cannot be used concurrently. To forget the session, close the
collector and remove its dedicated profile yourself. Switching channel/profile
requires a separate sign-in. Existing integrated-browser login is not imported.

After the one-resource smoke test succeeds, remove `--limit 1` and add
`--resume` to collect the full selected collection. Downloads are sequential
with a two-second delay by default (`--delay` cannot be below one second).
An exclusive `.collector.lock` prevents concurrent runs in the same directory.
After a forced termination, confirm no collector is still using that directory
before manually removing the stale lock. Normal completion removes it.

Repeat `--collection https://mynow.servicenow.com/now/best-practices/collections/<slug>`
to select multiple collections. If supplied, these replace the default ITSM
collection. Duplicate resource URLs across selected collections download once.

## Output and completeness

- `index.json`: source URLs, collection membership, categories, title, release,
  last-updated date when exposed, retrieval timestamps, original filenames,
  checksums, relative local paths, and explicit per-resource status/errors.
- `originals/<resource-kind>/<slug>/original.<extension>`: original download.
- `markdown/<topic>/<original-filename-slug>.md`: searchable Markdown with
  provenance, page/slide/sheet headings, speaker-note headings, and tables for
  tab-separated source rows. Generic column headings avoid inventing source headers.

For example, `Change Management - Process Guide.docx` becomes
`markdown/change-management/change-management-process-guide.md`. Filenames are
lowercase, hyphenated versions of the original download name without its extension;
release labels are retained. The source URL slug is the fallback when the
original filename is unavailable. Topics come from the catalog title before
its spaced dash, or the source URL with its document-category suffix removed.
This is a deterministic grouping convention, not a ServiceNow taxonomy lookup.
Two sources mapping to the same file produce an explicit collision error rather
than overwriting each other's Markdown.

The tool expands the collection's category accordions, deduplicates repeated
carousel links, and checks unique resource counts against their displayed counts.
It stops if discovery is incomplete or the UI
has changed instead of silently claiming full coverage. Only links inside those
categories are followed, not recommendations elsewhere on the page.

It downloads the **current/default release**, not every historical version.
Success packs export their project plans; linked assets outside the selected
collection are not recursively downloaded. Signed-in catalog counts can differ
from public counts. A limited run is explicitly recorded in `lastRun`.

`--resume` compares release, last-updated metadata, and local original/text
checksums. It skips only complete, unchanged resources. Unknown release/date,
failed downloads, and failed conversions are retried. Downloads for an updated
resource replace that resource's local snapshot; this is not a version archive.
The index may retain resources from earlier collections; use the selected
collection's `resourceUrls` for its current inventory.

Per-resource failures are written to the index and stderr, and the command
exits nonzero. A run can finish with some original files downloaded but not
converted. Download timeouts may mean sign-in expired, an entitlement is missing,
a user confirmation is needed, or the UI changed. Resolve access through the
normal browser UI and rerun; the tool does not accept terms or defeat access
controls automatically.

New downloads stay outside the plugin repository. Offline `extract` can also
update a corpus you have manually moved into the advisor references. Nothing
is automatically copied into the skill, committed, or published.

## Markdown extraction

Supported formats: DOCX, PPTX (including notes), XLSX, text PDFs, XML, UTF-8 TXT/MD,
and ZIP files containing these formats. Office macros are not run. Archives are
read in memory, never unpacked to filesystem paths, with size/depth limits.

- Word conversion reads paragraph styles, lists and table cells directly: headings,
  emphasis, safe external links and multi-paragraph cells are preserved in Markdown.
  Standard headings and the ServiceNow process-guide heading styles are recognized.
  Generated Word contents entries, field instructions, blank layout paragraphs and
  print headers/footers are omitted. Source originals remain authoritative for
  print-only content. Slide and sheet names/row positions are retained.
  Spreadsheet formulas are emitted, not recalculated.
- XML output retains element paths (including project task fields).
- Unsupported archive members fail conversion rather than being silently omitted.
- Scanned/empty PDF pages require OCR/manual review; OCR is not included.
- Images, diagrams, embedded objects, and layout-dependent meaning are not
  reconstructed. Text extraction is not a substitute for reviewing the original.

After resolving extraction dependencies or replacing the extractor, rerun
conversion without opening a browser or downloading again:

```bash
npm run extract --prefix tools/best-practices -- --output /path/to/local/corpus
```

For the maintainer corpus retained locally in this checkout (Git-ignored):

```bash
npm run extract --prefix tools/best-practices -- --output .local/now-best-practices
```

This regenerates Markdown from checksum-verified originals and updates the index's
`text` and `textSha256` fields. Existing `.txt` and old `extracted.md` files are
left untouched for review; the index points to the named file under `markdown/`
after successful conversion. Resume requires the current Markdown layout,
so migrate an old corpus with `extract` first to avoid unnecessary downloads.
This is a readable, structured extraction, not a layout-perfect conversion.
Unknown Word styles remain ordinary paragraphs; complex list numbering, merged
table layouts and images still require comparison with the original. Blank runs
are collapsed instead of reproducing Word page layout.

Read errors and incomplete status entries in `index.json` before using the corpus.
Do not interpret a search miss as proof that the original documents lack a topic.

## Using reviewed resources in the plugin

Review rights, source accuracy, release applicability, and extraction quality
before bundling anything. Promote selected authorized documents manually using
the [advisor reference index](../../plugin/skills/now-advisor/references/README.md).
Preserve source attribution; do not treat MyNow's AI-generated asset summaries
as a substitute for the downloaded source documents.

Publish only `markdown/` and a copy of `index.json` with each record's `original`
path omitted. Keep original filenames, hashes and source URLs as provenance.
Retain the complete index and originals in the local working corpus; do not run
`extract` against the published copy, which deliberately has no originals.
The `.local/now-best-practices/` working corpus is excluded from Git and plugin
installation. New downloads must still use an output directory outside the
repository; this local copy is for offline maintenance.

## Validation

```bash
npm run typecheck --prefix tools/best-practices
npm test --prefix tools/best-practices
```

Strict type-checking covers source and tests without generating JavaScript files.
Relative `--output` and `--profile` paths resolve from the directory where you
invoke npm, not the tool's package directory.

Tests use generated documents and a local simulated browser UI, not credentials
or live ServiceNow documents. Browser tests use installed Chrome by default; set
`BEST_PRACTICES_BROWSER` to another Chromium executable if needed.
Authenticated downloads must also be smoke-tested on the user's desktop.
