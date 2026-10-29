# ITSM reference index

## Availability

The published Markdown corpus is in [now-best-practices](./now-best-practices/).
Its [manifest](./now-best-practices/index.json) is the source of truth for
availability. The 2026-10-29 Markdown migration produced 44 complete documents;
7 extraction failures and 25 download failures remain. Check current manifest
statuses rather than assuming these counts are permanent.

Use the `text` path on complete records to read Markdown, resolving it relative
to the manifest directory. Cite the original source URL and applicable release.
Disclose missing coverage and use the plugin's
[now-docs skill](../../now-docs/SKILL.md) for official documentation research.
The manifest and this guide are metadata, not ITSM evidence.

## Adding documents

1. Confirm that each document may be distributed to all intended plugin users.
   Do not add credentials, instance exports, personal data, or restricted
   support articles.
2. Place authorized documents in this directory. Prefer Markdown or plain text
   so clients can read them without extra dependencies. For converted files,
   preserve headings, table structure, and useful page, slide, or sheet markers.
3. Add a relative link in the inventory below, including the original title,
   category, topics, publication date, applicable release, and source URL when
   known. Mark unknown metadata explicitly rather than guessing.
4. Update the availability statement when documents are added. For frequently
   used references, also add a direct link from the advisor's
   [instructions](../SKILL.md) so readers need not traverse several indexes.
5. Include the documents in the distributed plugin and test their readability
   from an installed copy. Do not use machine-specific paths or symlinks to
   documents outside the plugin.

Office and PDF files require client-supported reading or extraction tools.
The advisor does not require the maintainer extractor or install dependencies for users.
Keep original source attribution and distinguish editorial summaries from
vendor-authored guidance.

## Document inventory

Consult the [document manifest](./now-best-practices/index.json) for titles,
categories, source URLs, dates, releases, local paths, checksums and errors.
Markdown lives under `now-best-practices/markdown/<topic>/<original-filename-slug>.md`,
for example `markdown/change-management/change-management-process-guide.md`.
Original downloads are retained separately by maintainers and are not shipped.
The published manifest omits local `original` paths but retains source URLs,
original filenames and checksums for provenance. Failed entries document gaps,
not downloadable local files.
Use the manifest's current `text` paths. Do not treat failed records as readable sources or search misses as proof
that a topic is absent from the original documents.

## Maintainer collection tool

The source repository includes a MyNow collection tool in `tools/best-practices/`
for authorized browser downloads, text extraction, and source indexing. It is
maintainer-only tooling outside the installable `plugin/` directory and is not
included in the installed plugin. It
produces a local corpus outside the repository, not automatically bundled
references. Review and add selected resources using the steps above. The tool
is optional maintainer tooling, not a dependency for using this skill.
