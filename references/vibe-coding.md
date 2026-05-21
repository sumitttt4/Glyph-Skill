# Vibe Coding Prompt

Use this reference when running `/glyph vibe` or `/glyph prompt` to generate a complete, implementation-ready prompt for Claude Code, Cursor, Codex, or Windsurf.

The goal is a prompt so specific that the AI coding assistant does not need to make a single design decision on its own.

---

## The Problem With Generic Vibe Coding Prompts

Most AI coding prompts say:
> "Build a SaaS landing page. Make it modern and clean with a hero and feature section."

The AI fills in every design gap with defaults — purple gradient, Poppins, generic card grid, sparkle icons.

A Glyph vibe coding prompt eliminates every gap. It tells the builder exactly what colors, fonts, spacing, radius, shadow, motion, and copy structure to use.

---

## Prompt Construction Process

Build the prompt step by step in this order. Do not skip steps.

### Step 1 — Product Summary
State what the product is, who it is for, and what the user outcome is.
> "A command-line brand and design skill for Claude Code, Cursor, and Codex. Used by indie hackers and AI builders who want non-generic visual output without hiring a designer."

### Step 2 — Brand Personality
Define the personality in 3–5 specific words (not "modern, clean, minimal").
> "Considered, direct, slightly editorial, tool-like, not precious."

### Step 3 — Visual Style
Define the visual style category:
- Clean and editorial
- Dark and technical
- Warm and human
- Premium and restrained
- Bold and expressive

### Step 4 — Color Tokens
Provide explicit hex or HSL values with roles. Do not say "use warm tones."

```
Background:    #FAFAF9
Surface:       #FFFFFF
Alt surface:   #F5F4F2
Text:          #1A1A1A
Muted text:    #6B6B6B
Border:        rgba(0, 0, 0, 0.07)
Accent:        [define based on product]
Accent hover:  [darker or lighter variation]
Success:       #22C55E
Warning:       #F59E0B
Error:         #EF4444
```

### Step 5 — Typography
Provide exact font names, sizes, weights, and tracking.

```
Heading font:  [font name]
Body font:     [font name]
Mono font:     [font name or "system mono"]
Hero size:     clamp(40px, 6vw, 72px), weight 700, tracking -0.03em
Section title: 32px–40px, weight 700, tracking -0.02em
Body:          16px, weight 400, line-height 1.6
Label:         11px–12px, weight 500, uppercase, tracking 0.07em
```

### Step 6 — Layout System
Define the content width, section padding, and grid.

```
Content width:   720px centered
Wide width:      1080px
Section padding: 120px vertical (desktop), 64px (mobile)
Grid:            12-column, 24px gutter
Card radius:     12px
Input radius:    8px
Button radius:   8px
```

### Step 7 — Hero Section
Give the builder the exact structure of the hero.

```
Above fold must include:
- Eyebrow label (uppercase, accent color, small)
- Headline (large, tight tracking, 2–3 lines max)
- Subtext (1–2 sentences, muted color)
- Primary CTA button + secondary CTA
- Install or proof element (code snippet, trust bar, or stat)
- Optional: product visual (right side or below on mobile)
```

### Step 8 — Component Rules

Specify each component type:

**Buttons:**
```
Primary:     bg [accent], white text, 8px radius, shadow 0 1px 2px rgba(accent, 0.3)
             hover: translateY(-1px), shadow 0 4px 12px rgba(accent, 0.35)
Secondary:   bg transparent, border 1px solid rgba(0,0,0,0.15), dark text
             hover: bg rgba(0,0,0,0.04), border rgba(0,0,0,0.25)
Transition:  all 0.2s ease
```

**Cards:**
```
bg: #FFFFFF, border: 1px solid rgba(0,0,0,0.07), radius: 12px
shadow: 0 1px 3px rgba(0,0,0,0.05)
hover shadow: 0 4px 16px rgba(0,0,0,0.08), translateY(-2px)
transition: all 0.2s ease
```

**Nav:**
```
sticky top, z-index 40
bg: rgba(250,250,249,0.85), backdrop-filter: blur(12px)
border-bottom: 1px solid rgba(0,0,0,0.06)
height: 60px
```

**Inputs:**
```
height: 40px, border: 1px solid rgba(0,0,0,0.15), radius: 8px
focus: ring 2px [accent], offset 2px
font-size: 14px
```

### Step 9 — Motion Rules

```
All hover transitions:  all 0.2s ease
Card hover:             translateY(-2px) + stronger shadow
Button hover:           translateY(-1px) + deeper shadow
Page load:              fade-in 0.3s ease, stagger 80ms between elements
Scroll animations:      subtle fade-up, 0.4s ease, start when 20% visible
Avoid:                  bounce easing, spin on load, excessive parallax
```

### Step 10 — Anti-Slop Constraints

Add specific rules the builder must not do:

```
Do not:
- Use purple gradients unless explicitly in the color tokens
- Use sparkle icons for AI features
- Write vague headline copy ("Build better, faster")
- Make all cards the same size
- Skip hover states on interactive elements
- Use Poppins as default
- Add glassmorphism without depth context
- Use more than 1 strong accent color
- Make the background the most interesting thing on the page
```

---

## Full Copy-Paste Prompt Template

Use this structure to generate the final prompt. Fill in all bracketed values from the steps above.

```
You are building [PRODUCT NAME] — [ONE SENTENCE PRODUCT DESCRIPTION].

Target audience: [WHO IT IS FOR]
Brand personality: [3–5 SPECIFIC WORDS]
Visual style: [STYLE CATEGORY]

━━━ COLOR SYSTEM ━━━
Background:    [value]
Surface:       [value]
Alt surface:   [value]
Text:          [value]
Muted text:    [value]
Border:        [value]
Accent:        [value]
Accent hover:  [value]
Success:       [value]
Warning:       [value]
Error:         [value]

━━━ TYPOGRAPHY ━━━
Heading font:  [font name] — import from Google Fonts or use system
Body font:     [font name]
Mono font:     [font name or system-ui monospace]
Hero headline: [size] / weight [weight] / tracking [value] / line-height [value]
Section title: [size] / weight [weight] / tracking [value]
Body:          [size] / weight 400 / line-height [value]
Label:         [size] / weight 500 / uppercase / tracking [value]

━━━ LAYOUT ━━━
Content width:    [value] centered
Wide width:       [value]
Section padding:  [value] vertical desktop, [value] mobile
Card radius:      [value]
Button radius:    [value]
Input radius:     [value]

━━━ HERO SECTION ━━━
Above fold must include:
- [Eyebrow: text, color, size]
- [Headline: text or formula]
- [Subtext: text or description]
- [Primary CTA: label, color]
- [Secondary CTA: label, style]
- [Supporting element: install snippet / stat / logo bar]

━━━ BUTTONS ━━━
Primary:    [exact styles]
Secondary:  [exact styles]
Ghost:      [exact styles]
Transition: all 0.2s ease

━━━ CARDS ━━━
[exact background, border, radius, shadow, hover styles]

━━━ NAV ━━━
[exact sticky, blur, border, height, link styles]

━━━ MOTION ━━━
[exact transition, hover, load animation rules]

━━━ DO NOT DO ━━━
[exact anti-slop constraints for this product]

━━━ SECTIONS TO BUILD ━━━
[list sections in order, e.g.: Hero / Trust bar / Features / How it works / CTA / Footer]

━━━ TONE OF COPY ━━━
[brief description: direct and specific / editorial and warm / technical and precise]

Generate the full implementation. Every design decision must match the specifications above.
Do not improvise colors, fonts, or spacing. Do not add sections not listed.
```

---

## Examples

### Example 1 — Premium Fintech SaaS
```
/glyph vibe for a premium fintech SaaS that helps CFOs track cash flow across accounts
```
Output prompt will use:
- Color: deep navy, steel gray, muted cobalt accent, cold off-white background
- Typography: IBM Plex Sans heading, Inter body, IBM Plex Mono for data
- Style: restrained, precise, institutional

### Example 2 — Warm Founder Tool
```
/glyph vibe for a warm storytelling platform for indie founders
```
Output prompt will use:
- Color: warm off-white, earthy accent, soft warm border, editorial surfaces
- Typography: editorial serif headline, Inter body
- Style: human, editorial, low-contrast warmth

### Example 3 — Dark AI Infrastructure Dashboard
```
/glyph vibe for a dark AI infrastructure monitoring dashboard
```
Output prompt will use:
- Color: near-black background, electric blue accent, surface hierarchy, semantic status colors
- Typography: Geist heading and body, Geist Mono for code and metrics
- Style: dense, technical, high-contrast, dark-first

---

## Rules

- Never leave color tokens as "warm tones" or "dark palette" — use exact values.
- Never leave typography as "clean sans" — name the font.
- Never leave spacing as "comfortable" — specify the px value.
- Every section must be listed in order.
- Copy constraints must be specific — tell the builder what words to avoid.
- Anti-slop constraints must be included in every vibe prompt.
