# Color Rules

Color should be chosen by intent, not trend.

The Glyph landing page uses orange, white, and warm neutrals. That is Glyph's brand. Do not use those colors for every product. Every product needs its own color logic based on category, audience, and trust signal.

---

## Color Decision Process

Before choosing any color, answer these questions:

1. What category is the product? (fintech, devtool, creator, wellness, luxury, etc.)
2. What emotional signal does the audience expect?
3. What trust level does the product need to earn?
4. Is this a premium product, a consumer product, or a utility tool?
5. What does the competition look like, and where is the differentiation opportunity?

Every color must have a reason. "It looks nice" is not a reason.

---

## Color by Product Category

### Fintech / Security / Analytics
- Deep navy, slate, steel gray, off-white surfaces
- Restrained warm or cold accent (amber, cobalt, or muted teal)
- Avoid: bright orange, playful gradients, high saturation
- Signal: trust, precision, restraint

Palette example:
- Background: #F8F9FB (cold off-white)
- Surface: #FFFFFF
- Text: #0F1923
- Accent: #2563EB (cobalt) or #D97706 (amber)
- Border: rgba(0,0,0,0.08)

### Creator Tools / Indie Products / Founder Tools
- Warm white or warm off-white background
- Expressive accent: coral, warm orange, dusty rose, olive, or soft yellow
- Earthy or warm neutrals for surfaces
- Signal: personality, momentum, craft

Palette example:
- Background: #FAFAF9 (warm off-white)
- Surface: #FFFFFF
- Text: #1A1A1A
- Accent: #E85D26 (warm orange) or #D46B4B (coral)
- Border: rgba(0,0,0,0.07)

### Healthcare / Wellness / Mental Health
- Soft green, muted blue, warm neutrals, gentle whites
- Low contrast, calm palette, no aggressive accents
- Signal: care, safety, calm, accessibility

Palette example:
- Background: #F7FAF8 (soft green-white)
- Surface: #FFFFFF
- Text: #1C2B22
- Accent: #3B7D5C (muted green) or #5B8DB8 (muted blue)
- Border: rgba(0,0,0,0.06)

### Luxury / Premium / High-End
- Black, deep charcoal, ivory, champagne, off-white, warm white
- No bright accents. Use muted metallics: gold, warm cream, deep brown
- Signal: restraint, confidence, durability

Palette example:
- Background: #0C0C0B (near black) or #F9F7F4 (ivory)
- Surface: #141413 or #FFFFFF
- Text: #FAFAF9 or #1A1A1A
- Accent: #C9A96E (muted gold) or #8B7355 (warm brown)
- Border: rgba(255,255,255,0.06) or rgba(0,0,0,0.07)

### AI Infrastructure / DevTools / Developer Products
- Graphite, near-black, or dark gray backgrounds (dark-first)
- Electric blue, green, or violet as accent — used carefully and with purpose
- Mono-style UI, high contrast text, subtle grid backgrounds
- Signal: precision, speed, composability

Palette example:
- Background: #0D0D0D or #111111
- Surface: #161616 or #1A1A1A
- Text: #E2E2E2
- Accent: #3B82F6 (electric blue) or #22C55E (green)
- Border: rgba(255,255,255,0.08)

### Education / Learning Products
- Warm blue, soft yellow, muted green, friendly neutrals
- Lighter, more accessible, higher contrast for readability
- Signal: clarity, progress, warmth

Palette example:
- Background: #FAFBFF (soft blue-white)
- Surface: #FFFFFF
- Text: #1A2233
- Accent: #2563EB (blue) or #F59E0B (warm yellow)
- Border: rgba(0,0,0,0.08)

### Productivity / Workspace / B2B SaaS
- Clean white or very light gray, minimal surface variation
- Blue, gray-blue, or orange as a focused accent
- Signal: clarity, calm, utility

Palette example:
- Background: #FFFFFF or #F9FAFB
- Surface: #F3F4F6
- Text: #111827
- Accent: #2563EB or #F97316
- Border: rgba(0,0,0,0.08)

### Consumer Social / Community / Lifestyle
- Higher saturation, playful accents, expressive gradients when justified
- Brand color matters more than neutral restraint
- Signal: energy, belonging, fun

Palette example:
- Background: #FAFAFA or dark
- Accent: category-specific and strong
- Gradient: only when brand direction supports it

---

## Token Output Format

When generating a color system, always output in this format:

```
Primary:       [hex or hsl]  — [role: brand action, CTA, key UI]
Secondary:     [hex or hsl]  — [role: supporting visual]
Accent:        [hex or hsl]  — [role: highlights, badges, status]
Background:    [hex or hsl]  — [role: page base]
Surface:       [hex or hsl]  — [role: cards, panels, modals]
Text:          [hex or hsl]  — [role: body, headings]
Muted text:    [hex or hsl]  — [role: captions, meta, placeholders]
Border:        [rgba value]  — [role: dividers, card outlines]
Success:       [hex or hsl]  — [role: confirmation, positive status]
Warning:       [hex or hsl]  — [role: caution, pending states]
Error:         [hex or hsl]  — [role: destructive, failed states]
```

Always explain each choice. Say why it fits the product, not just what it is.

---

## Color Rules

- Never use more than 1 strong accent color without a clear brand reason.
- Background should almost always be white, warm white, soft gray, off-black, or category-specific.
- Do not pick background colors randomly. Warm backgrounds feel editorial and human. Cold backgrounds feel technical and precise.
- Avoid random purple or pink gradients unless the product strategy explicitly supports them.
- Use OKLCH or HSL thinking to build consistent light and dark shades. Do not pick random hex values.
- Ensure text contrast meets WCAG AA minimum: 4.5:1 for body, 3:1 for large text.
- Semantic colors (success, warning, error) should be functional only. Do not use them decoratively.
- Surface should be 1–2 steps lighter or darker than background, not a random color.
- Border should be subtle: rgba(0,0,0,0.06) to rgba(0,0,0,0.1) for light mode, rgba(255,255,255,0.06) to rgba(255,255,255,0.1) for dark mode.

---

## Gradient Rules

Gradients are often overused. Apply these rules:

- Use gradients when they support emotional tone (warmth, depth, energy).
- Never use gradients as a substitute for a real brand color strategy.
- Radial gradients behind hero content are acceptable if subtle and intentional.
- Linear gradients work for category labels, CTAs, or hero images — not full-page backgrounds.
- Avoid purple-to-pink gradients for AI products unless the product has a specific reason.
- Avoid gradients that reduce text readability.

---

## Light vs Dark Mode Rules

- Default to light mode for: B2B SaaS, productivity, education, wellness, fintech
- Default to dark mode for: AI infra, devtools, cybersecurity, premium dashboards, gaming
- Always design for the correct default first
- Surface hierarchy in dark mode: background → surface → elevated surface (e.g., #0D0D0D → #111111 → #1A1A1A)
- Surface hierarchy in light mode: background → surface → card (e.g., #F5F4F2 → #FAFAF9 → #FFFFFF)

---

## Never Do

- Do not choose colors because they feel trendy this year.
- Do not use 4+ accent colors without a system.
- Do not use neon colors on dark backgrounds without a strong reason.
- Do not make every AI product use a purple gradient.
- Do not use the Glyph landing page orange as a default for all products.
- Do not skip semantic color definitions for products that show status, errors, or confirmations.
- Do not apply the same palette to a fintech app and a creator tool.
