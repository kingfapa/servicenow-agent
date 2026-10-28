---
name: servicenow-development
description: Guidance for ServiceNow development, such as business rules, script includes, client scripts, flows and ACLs. Use when writing or troubleshooting ServiceNow code or configuration.
---

# ServiceNow development

- Prefer server-side logic in Script Includes; keep Business Rules thin.
- Use GlideRecord with `addQuery`/`setLimit`; avoid queries inside loops and avoid `current.update()` in before rules.
- Use GlideAjax (async) from client scripts; never use synchronous `getXMLWait`.
- Enforce security with ACLs, not only client-side checks.
- Ground answers in official ServiceNow documentation and state the release family (for example Washington, Xanadu) when behavior differs.
- Develop in scoped applications and ship changes via update sets or source control.
