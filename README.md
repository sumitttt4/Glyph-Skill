# Glyph Skill

> Give Claude Code, Cursor, and Codex better design taste before they build your product.

Glyph is a brand and design skill that installs directly into your repository, injecting strict visual rules and design frameworks into your AI coding assistant. It prevents common AI design issues by enforcing functional layouts, strict color consistency locks, grid alignments, and high-quality typography.

## Who Is This For?

Use Glyph if you're building with AI coding assistants and want the output to look like a real product — not a template.

* **SaaS dashboards** — You're scaffolding an analytics dashboard with Cursor and don't want the default purple-gradient AI slop.
* **Founder portfolios** — You're building your personal site with Claude Code and want it to feel like a designed brand, not a tutorial project.
* **DevTools landing pages** — You're shipping a CLI tool's marketing page with Codex and need fintech-grade visual consistency.
* **Startup MVPs** — You're prototyping fast but still want consistent spacing, real typography, and accessible contrast from day one.

If your AI assistant has ever generated a purple mesh gradient hero with Poppins font and a "Supercharge your workflow" headline — Glyph exists to prevent that.

## Installation

Install Glyph directly into your project root using the CLI:

### 1. Default Bundle (Recommended)
Pulls the core skill plus all 10 detailed design reference rule files:
```bash
npx skills add sumitttt4/Glyph-Skill
```

### 2. Specific Rule Add
Install only a single specific design reference file:
```bash
npx skills add sumitttt4/Glyph-Skill --skill "design-rules"
```

### 3. Codex Installation
Install the full skill bundle directly into your global Codex skills directory:
```bash
npx skills add sumitttt4/Glyph-Skill -a codex
```

### Pinning a Version

To lock your project to a specific Glyph release, use the tag:
```bash
npx skills add sumitttt4/Glyph-Skill@v1.0.0
```

## How it works

Once installed, your AI coding agent reads `SKILL.md` and the reference rules. The rules guide the agent's behavior during code generation, auditing, and design tasks. 

There is no connection to any external API or background service. The skill works entirely locally within your AI agent's context.

## Before & After

Here's what changes when Glyph is installed. Same prompt, different output.

**Prompt:** *"Build a SaaS dashboard landing page with a hero section, feature grid, and pricing table."*

### ❌ Without Glyph (typical AI output)
```
- Background: linear-gradient(135deg, #6366F1, #EC4899)
- Font: Poppins 400/600
- Hero headline: "Supercharge Your Workflow Today"
- Floating purple orbs behind hero text
- All buttons: bg-purple-600 with no hover state
- Spacing: inconsistent (padding-6 next to padding-12)
- No focus indicators on interactive elements
```

### ✅ With Glyph installed
```
- Background: #f4f0e8 (warm paper background)
- Font: Inter 400 / Geist Sans 600 (paired by product category)
- Hero headline: "Track deployment metrics across 40 regions in one view."
- Clean background, no decorative blobs
- Buttons: bg-[#1a1a17] with hover:bg-[#000000] hover:-translate-y-0.5 transition-all duration-150
- Spacing: 4px grid system, consistent section padding (64px / 48px / 32px)
- Focus outlines: 2px offset ring on all interactive elements
- Contrast: all text passes WCAG AA (4.5:1 minimum)
```

The difference is structural, not cosmetic. Glyph doesn't pick a "nicer" color — it enforces layout grids, typography pairing logic, interaction feedback, and accessibility compliance.

## Inside the Bundle

Glyph installs a unified main entrypoint in your root directory and 10 detailed design rule sheets inside the `references/` folder:

* SKILL.md — Main entrypoint skill file containing slash commands, category taste rules, and instructions.
* core-color-rules.md — Tone consistency locks, surface rules, max text shades, and accessible contrast ratios.
* typography-rules.md — Font pairings by brand personality, tracking adjustments, and 65-character line length limits.
* layout-rules.md — Spacing scales (4px grid), section padding constraints, and max container widths (720px/1080px/1280px).
* component-rules.md — Structural layout specs for 22 interface components (inputs, modals, tables, navbars).
* motion-rules.md — Easing curves (cubic-bezier), animation duration limits (400ms max), and click scaling rules.
* accessibility-rules.md — Keyboard navigation tab indexes, focus indicators, outline spacing, and aria labels.
* responsive-rules.md — Breakpoints, grid folding, mobile padding values, and overflow scroll rules.
* anti-slop-rules.md — 32 specific banned AI design patterns (purple mesh blobs, sparkle icons, default Poppins).
* framework-rules.md — Tailwind naming conventions, React component cleanliness, and Next.js integration rules.
* background-rules.md — Background pattern constraints, gradient overlay masking, and backdrop blur limits.

## Smart Style Adaptability

Glyph does not force a single visual theme. It teaches your agent how to adapt its styling choices based on the product category, target audience, and trust signals:

* Fintech SaaS: Deep navy background, IBM Plex Sans, electric cobalt accent, institutional trust signals.
* Creator Tool: Warm coral accent, Jakarta Sans typography, light card borders, high visual warmth.
* DevOps Terminal: Near-black theme, neon green terminal indicators, Geist Mono typeface, layout density.
* Founder Blog: Soft off-white canvas, editorial serif headline, warm gray text, high line height.

## Supported Agents

Glyph works natively with any AI assistant that supports markdown skill references:

Claude Code · Cursor · Codex · Gemini CLI · Aider · Windsurf

## Contributing

Glyph is built to grow with the community. If you've spotted an AI design anti-pattern that should be a rule, or want to refine an existing one — contributions are welcome.

**Quick start:**

1. **Propose first** — Open an issue describing the anti-pattern or rule gap before writing code.
2. **One category per PR** — Keep pull requests focused on a single rule file or section.
3. **Follow the format** — Every rule needs: Confidence Level, Purpose, Reasoning, Constraint, Example (Bad/Good), and Exceptions. See any file in `references/` for the structure.
4. **Test locally** — Install the skill in a test project, run a prompt that triggers your rule, and verify the AI respects it.

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full contributor guide.

## Versioning

Glyph uses [semantic versioning](https://semver.org/). Releases are tagged so you can pin a stable version in your project.

* **Current release:** `v1.0.0`
* **Tag format:** `v{major}.{minor}.{patch}`
* **How to pin:** `npx skills add sumitttt4/Glyph-Skill@v1.0.0`

Watch the [Releases](https://github.com/sumitttt4/Glyph-Skill/releases) page to get notified when new rule categories or refinements ship.

## Roadmap

Here's what's coming next. Star the repo to follow progress.

* 🎨 **Dark mode rules** — Dedicated constraints for dark-theme surfaces, elevation layers, and text contrast on dark backgrounds.
* 📊 **Data visualization rules** — Chart color sequences, axis labeling, tooltip formatting, and dashboard density constraints.
* 🖼️ **Illustration & iconography rules** — Icon sizing scales, stroke consistency, illustration style matching by product category.
* 🏷️ **Per-brand profiles** — Pre-built rule overrides for specific brand categories (fintech, healthtech, dev tools, e-commerce) that auto-apply on `/glyph vibe`.
* 🗳️ **Community-voted priorities** — GitHub Discussions for proposing and voting on the next rule categories.

Have an idea for a rule category? [Open an issue](https://github.com/sumitttt4/Glyph-Skill/issues/new?template=new-rule-category.md).

## License

This project is licensed under the [MIT License](LICENSE).

## Links & Resources

* Documentation: https://glyph.software
* Creator Portfolio: https://sumitsharmaa.me
* X (Twitter): https://x.com/sumitdotme
