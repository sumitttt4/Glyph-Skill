# Design Skill

A self-contained frontend design skill for coding assistants. Understand the product, choose a direction, compose the important screen, build functioning UI, add purposeful interaction, and verify actual renders. Design Skill supports judgment; it does not enforce a fixed aesthetic.

Website and docs: https://designskill.site

## Install

```bash
npx skills add sumitttt4/Glyph-Skill
```

Select `design-skill` if the installer asks. The project was previously named Glyph; the skill is now `design-skill` and its request conventions start with `/design-skill`. Agent support and installation location depend on the installer and host agent; inspect the current installer help rather than assuming blanket compatibility.

For a local checkout:

```bash
npx skills add /absolute/path/to/Glyph-Skill
```

Alternatively copy the complete `skills/design-skill/` directory into your agent's documented skills location. Keep the entry, references, LICENSE and notices together. Ask the agent to load Design Skill and inspect a reference to confirm access. No Design Skill API key or background service is required. Do not execute unreviewed dependency scripts blindly.

## Use it

- `/design-skill design`: design decisions and implementation-ready composition.
- `/design-skill audit`: observed UI issues and concrete fixes.
- `/design-skill vibe`: a complete implementation prompt.
- `/design-skill prompt`: reusable instructions from approved decisions.

These are assistant request conventions, not registered CLI or native slash commands. Natural language works too.

Example brief: “Use Design Skill to build an operations dashboard for dispatchers. The primary task is identifying the next delivery that needs attention. Preserve our existing brand, use the supplied queue data, and verify keyboard and mobile behavior.” This is an example prompt, not a measured quality result.

## Bundle

[skills/design-skill/SKILL.md](skills/design-skill/SKILL.md) is the sole installable entry point. Twenty-seven focused references cover the whole frontend job:

- **Direction and composition**: category playbook, style directions, landing composition, landing-page research, direction/assets, layout.
- **Visual craft**: visual craft baseline, starter kit, typography, color, design tokens and dark mode, icons and imagery, background.
- **Product UI**: apps, dashboards, tables and settings; forms and validation; data visualization; components.
- **Content**: UX writing, microcopy and internationalisation.
- **Build and behavior**: implementation, frameworks, motion, responsive, accessibility, performance.
- **Quality**: anti-slop tells, verification and a scored audit rubric.

Two plain-CSS kits ship in `assets/`: `starter.css` (landing pages, with presets for twelve style directions; the thirteenth, Clean product, is the default) and `product.css` (app shell, forms, tables, status, dialogs, density modes and dark tokens). Load only relevant guidance. Root reference filenames remain compatibility pointers.

Requirements protect correctness, accessibility and truthful claims. Patterns are adaptable starting points. Taste hypotheses are judgments to inspect, not high-confidence evidence. Categorical colors, expressive brands, Poppins, gradients and familiar layouts are allowed when considered. The website's own blue buttons and fonts are not universal skill rules.

## Review status

The local workflow and reference changes were reconstructed after workspace maintenance; see [migration](MIGRATION.md). No new release or universal quality claim is made. Website walkthroughs are handcrafted illustrative examples. A fair current/candidate comparison across a dashboard, expressive landing and portfolio is still required; do not present those walkthroughs as benchmark proof. See repository review notes for checks actually performed and limitations.

## Website development

```bash
npm ci --ignore-scripts
npm run dev
npm run build
```

### Deploy to Cloudflare (designskill.site)

The site is fully static. [wrangler.jsonc](wrangler.jsonc) runs `npm run build:cloudflare` (a Next.js static export to `out/`) before every deploy and serves it from Cloudflare Workers static assets. `public/_headers` sets long-lived caching for hashed assets and baseline security headers.

- **Git integration (Workers Builds):** the Worker connected in the dashboard must be named `glyph-skill`, matching `name` in `wrangler.jsonc`. Leave the build command empty or set it to `npm run build:cloudflare`; the deploy command is `npx wrangler deploy`.
- **Custom domain:** add `designskill.site` under the Worker's Settings → Domains & Routes once the domain's zone is on the same Cloudflare account. Add a Redirect Rule for www → apex in the dashboard.
- **From your machine:**

```bash
npx wrangler login
npm run preview:cloudflare
npm run deploy:cloudflare
```

Vercel deployment (`vercel.json`) still works unchanged.

The website is separate from the installable bundle. `scripts/prepare-docs.mjs` renders the canonical Markdown and CSS into the docs explorer and one `/docs/library` page per skill file. Run it before a standalone docs-source check, or use the prebuild/predev hooks configured by the website.

## Contributing and license

See [CONTRIBUTING.md](CONTRIBUTING.md), [MIT license](LICENSE), [migration](MIGRATION.md) and [third-party notices](THIRD_PARTY_NOTICES.md). Attribution for adapted Emil Kowalski guidance is retained with its verified source revision.

Portfolio: https://sumit-pfp.vercel.app/ · X: https://x.com/sumitthq

