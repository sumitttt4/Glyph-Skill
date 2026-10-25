# Local review and GitHub handoff

## Source recovery

Workspace maintenance removed the earlier unpushed checkout and source archives. Library search did not recover them. Re-cloned the unchanged baseline 7287129 and reconstructed the approved skill and landing decisions from the conversation record. This is conceptual reconstruction, not byte-for-byte recovery. No prior measurements are presented as fresh evidence.

## Logo

Original geometric composition mark: a framing corner and inset counterform on light blue. Used in the header, footer, SVG favicon and Apple touch icon. The mark is native vector code, not copied reference artwork. Blue/dark contrast is checked with the button color pair. No tiny internal detail is needed to identify the silhouette.

## Documentation direction

Inspected https://ui.shadcn.com/docs in the browser and fetched https://docs.stripe.com/ through search. Adopted information architecture patterns: grouped left navigation, compact sans-serif reading typography, bounded main column, right page outline, separate quick-start and deeper guides, and practical code controls. No third-party design code, branding, artwork or customer claims copied. Marketing retains regular Source Serif 4 + DM Sans; docs use DM Sans for reading/navigation density.

Ten routes: introduction, installation, workflow, commands, guidance, files, customization, troubleshooting, verification and credits. Legacy /docs#install etc. redirect to matching child pages. Search filters guide and section titles, not full source contents. The native dialog supports focus containment and Escape; Tab/Enter operate results. No decorative nonfunctional search field.

## Release status

No release tag, announcement or deliberate deployment. Push is authorized to review branch glyph-design-docs; Vercel auto-deploy for that branch is disabled in its versioned config. Main remains unchanged. The Vercel build command now calls npm run build so canonical skill source is regenerated before production builds.

## Remaining limits

The full controlled three-brief skill comparison is unperformed. Full assistive-technology testing, physical touch-device testing, actual 400% zoom, browser-storage denial and secure-context clipboard success remain unverified. Framed mobile checks demonstrate CSS reflow, not physical-device emulation. Opaque contrast token checks do not establish complete WCAG conformance. Installation discovery/copy is checked separately; package registry compatibility can change.

## Current checks performed

- Standard Next production build and static-review export passed, including ten docs routes, SVG favicon and Apple icon.
- 818 local exported link/anchor/asset/font-path checks passed; no duplicate IDs.
- 29 opaque text/focus color pairs passed their applicable 4.5:1 / 3:1 thresholds.
- Canonical frontmatter validation and 44 relative-reference checks across source and disposable copy passed; generated explorer text matches canonical Markdown.
- Reviewed skills@1.7.4 package metadata/entry/discovery/copy/telemetry logic, then tested a local-source copy in a disposable project with telemetry and lifecycle scripts disabled. Found one glyph skill; no website/dependencies copied; installed references resolve. Root compatibility pointer emits an expected missing-frontmatter skip warning before canonical discovery.
- Actual desktop light/dark landing and installation docs renders inspected. Search filtered files and navigated to the real file page. Ctrl+K opened the dialog, Escape closed it and restored trigger focus.
- Mobile 390/320px framed docs inspected, no page horizontal overflow at 320 frame (310px inner viewport including native scrollbar). Mobile nav closed after selection; outline anchors clear sticky bars. Long source filename complete and not truncated.
- Desktop local anchor top ~100px; active outline matched the section. Legacy /docs#rule-files redirected to /docs/files#skill-files. Theme preference persisted across docs routes.
- Clipboard restricted over local HTTP: manual-copy failure feedback verified. Secure-context success remains untested.
- No site-origin console errors observed; cloud browser extension metadata errors were present and excluded.
- One local unthrottled docs navigation measured DCL119ms / load190ms; paint entries unavailable. This is not a fast claim or CWV assessment.

QA mobile/metrics harnesses are review-only and not exposed in production public assets. No model comparison has been run after reconstruction.
