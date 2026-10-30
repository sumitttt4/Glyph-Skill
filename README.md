# Glyph Skill

A self-contained frontend design skill for coding assistants. Understand the product, choose a direction, compose the important screen, build functioning UI, add purposeful interaction, and verify actual renders. Glyph supports judgment; it does not enforce a fixed aesthetic.

## Install

```bash
npx skills add sumitttt4/Glyph-Skill
```

Select `glyph` if the installer asks. Agent support and installation location depend on the installer and host agent; inspect the current installer help rather than assuming blanket compatibility.

For a local checkout:

```bash
npx skills add /absolute/path/to/Glyph-Skill
```

Alternatively copy the complete `skills/glyph/` directory into your agent's documented skills location. Keep the entry, references, LICENSE and notices together. Ask the agent to load Glyph and inspect a reference to confirm access. No Glyph API key or background service is required. Do not execute unreviewed dependency scripts blindly.

## Use it

- `/glyph design`: design decisions and implementation-ready composition.
- `/glyph audit`: observed UI issues and concrete fixes.
- `/glyph vibe`: a complete implementation prompt.
- `/glyph prompt`: reusable instructions from approved decisions.

These are assistant request conventions, not registered CLI or native slash commands. Natural language works too.

Example brief: “Use Glyph to build an operations dashboard for dispatchers. The primary task is identifying the next delivery that needs attention. Preserve our existing brand, use the supplied queue data, and verify keyboard and mobile behavior.” This is an example prompt, not a measured quality result.

## Bundle

[skills/glyph/SKILL.md](skills/glyph/SKILL.md) is the sole installable entry point. Sixteen focused references cover direction/assets, visual craft, landing composition, library research, color, typography, layout, components, implementation, motion, accessibility, responsive behavior, anti-slop, framework, background and verification. Load only relevant guidance. Root reference filenames remain compatibility pointers.

Requirements protect correctness, accessibility and truthful claims. Patterns are adaptable starting points. Taste hypotheses are judgments to inspect, not high-confidence evidence. Categorical colors, expressive brands, Poppins, gradients and familiar layouts are allowed when considered. The website's own blue buttons and fonts are not universal skill rules.

## Review status

The local workflow and reference changes were reconstructed after workspace maintenance; see [migration](MIGRATION.md). No new release or universal quality claim is made. Website walkthroughs are handcrafted illustrative examples. A fair current/candidate comparison across a dashboard, expressive landing and portfolio is still required; do not present those walkthroughs as benchmark proof. See repository review notes for checks actually performed and limitations.

## Website development

```bash
npm ci --ignore-scripts
npm run dev
npm run build
```

The website is separate from the installable bundle. `scripts/prepare-docs.mjs` creates docs explorer content from the canonical Markdown files. Run it before a standalone docs-source check, or use the prebuild/predev hooks configured by the website.

## Contributing and license

See [CONTRIBUTING.md](CONTRIBUTING.md), [MIT license](LICENSE), [migration](MIGRATION.md) and [third-party notices](THIRD_PARTY_NOTICES.md). Attribution for adapted Emil Kowalski guidance is retained with its verified source revision.

Portfolio: https://sumit-pfp.vercel.app/ · X: https://x.com/sumitthq

## Review branch

The `glyph-design-docs` branch contains the proposed skill, landing, docs and logo changes. The default GitHub install command continues to resolve the default branch until this review branch is merged. For this candidate, use a local checkout of the review branch and the documented local installer. No release tag is created.
