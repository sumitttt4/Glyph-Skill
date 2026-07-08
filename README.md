# Glyph Skill

> Give Claude Code, Cursor, and Codex better design taste before they build your product.

Glyph is a brand and design skill that installs directly into your repository, injecting strict visual rules and design frameworks into your AI coding assistant. It prevents common AI design issues by enforcing functional layouts, strict color consistency locks, grid alignments, and high-quality typography.

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

## How it works

Once installed, your AI coding agent reads `SKILL.md` and the reference rules. The rules guide the agent's behavior during code generation, auditing, and design tasks. 

There is no connection to any external API or background service. The skill works entirely locally within your AI agent's context.

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

## Links & Resources

* Documentation: https://glyph.software
* Creator Portfolio: https://sumitsharmaa.me
* X (Twitter): https://x.com/sumitdotme
