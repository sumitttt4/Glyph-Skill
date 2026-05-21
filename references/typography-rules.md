# Typography Rules

Typography should create hierarchy and personality. Font choices must match the product's category, audience, and trust level — not just what looks clean.

The Glyph landing page uses Geist and Inter. That is Glyph's own brand choice. Do not default to Geist or Inter for every product.

---

## Typography Decision Process

Before choosing fonts, answer:

1. What personality does the product need? (serious, playful, editorial, technical, warm)
2. What trust level must the product signal? (banking = high restraint, creator = more expression)
3. Is this a consumer product or a professional tool?
4. Does the product need a display headline moment, or is it mostly UI/data?
5. What is the competitive typeface space? (avoid if every competitor uses it)

---

## Font Pairing by Brand Personality

### Serious Fintech / B2B SaaS / Professional Tools
- Heading: Geist, Inter, IBM Plex Sans, Satoshi, or DM Sans
- Body: Inter, IBM Plex Sans, or system-ui
- Mono: Geist Mono, IBM Plex Mono
- Avoid: Poppins, rounded fonts, decorative display faces
- Signal: precision, clarity, institutional trust

### Editorial / Premium / Storytelling Products
- Heading: Instrument Serif, Newsreader, Playfair Display, or Cormorant Garamond (with restraint)
- Body: Inter, Geist, or DM Sans
- Combination rule: pair expressive serif display with a clean restrained sans body
- Signal: craft, editorial quality, considered design

### Developer Tools / AI Infrastructure / Technical Products
- Heading: Geist, Inter, or IBM Plex Sans
- Body: Geist, Inter, or system-ui
- Mono: Geist Mono, IBM Plex Mono, Cascadia Code, Fira Code
- Mono should be visible in the UI — it signals technical credibility
- Signal: speed, precision, composability

### Playful Consumer / Creator / Community Products
- Heading: Plus Jakarta Sans, Manrope, Nunito Sans, or DM Sans
- Body: Inter, Plus Jakarta Sans, or DM Sans
- Can use slightly rounded fonts when the brand needs warmth
- Signal: energy, accessibility, friendliness

### Luxury / High-End / Premium Positioning
- Heading: Cormorant Garamond, Playfair Display, or editorial serif (used sparingly)
- Body: Inter, Geist, or a refined sans
- Rule: use serif only for hero moments, not body copy
- Signal: confidence, restraint, prestige

### AI SaaS / General Startup
- Heading: Geist, Inter, Satoshi, or Suisse-style sans
- Body: Inter or Geist
- Avoid: over-rounded fonts, decorative display at small sizes, Poppins as default
- Signal: modern, focused, credible

---

## Type Scale

Apply these size ranges. Adjust exact values to the product's density and screen size.

```
Hero headline:     clamp(40px, 6vw, 72px)   — font-weight: 700–800, tracking: -0.03em
Section title:     32px–48px                 — font-weight: 700, tracking: -0.02em
Sub-heading:       24px–32px                 — font-weight: 600–700, tracking: -0.01em
Body large:        18px–20px                 — font-weight: 400, line-height: 1.7
Body default:      15px–16px                 — font-weight: 400, line-height: 1.6
UI label:          12px–13px                 — font-weight: 500, tracking: 0.05em–0.08em, uppercase
Caption / meta:    11px–12px                 — font-weight: 400–500, color: muted
Code / mono:       13px–14px                 — font-family: mono stack
```

---

## Weight Rules

```
300 (Light)   — Use only for display moments at very large sizes. Never for body.
400 (Regular) — Default for body copy, descriptions, and paragraph text.
500 (Medium)  — UI labels, nav items, button labels, captions with emphasis.
600 (Semibold)— Sub-headings, card titles, table headers.
700 (Bold)    — Section headings, primary headings.
800 (Extrabold) — Hero headlines only, when the product needs strong presence.
```

Do not use bold everywhere. If everything is bold, nothing is bold.

---

## Letter-Spacing Rules

```
Hero headlines and large headings:   -0.03em to -0.04em (tighter = more premium)
Section headings:                    -0.02em to -0.03em
Sub-headings:                        -0.01em
Body text:                           0 (default, do not add tracking)
UI labels (uppercase, small):        0.06em to 0.1em
Captions and tags:                   0.04em to 0.08em
Monospaced code:                     0 to 0.02em
```

Tight tracking on large headings is a premium signal. Loose tracking on body text hurts readability.

---

## Line-Height Rules

```
Hero headline:    0.95–1.1   (tight for large display type)
Section heading:  1.1–1.2
Sub-heading:      1.2–1.3
Body large:       1.7–1.8
Body default:     1.5–1.6
UI label:         1.2–1.4
Caption:          1.4–1.5
```

Tight line-height on large type creates editorial density. Loose line-height on small body text improves readability.

---

## Output Format

When generating typography direction, output in this format:

```
Heading font:       [Font name] — [why it fits]
Body font:          [Font name] — [why it fits]
Mono font:          [Font name] — [or "not needed"]
Hero headline:      [size] / [weight] / [tracking] / [line-height]
Section title:      [size] / [weight] / [tracking]
Body size:          [size] / [line-height]
Caption / label:    [size] / [weight] / [tracking]
Weight rules:       [brief description of hierarchy logic]
Letter spacing:     [heading: X, label: X]
Line height:        [heading: X, body: X]
```

---

## Never Do

- Do not default to Poppins for every startup. It signals no typographic decision was made.
- Do not use the same font weight for everything.
- Do not use serif body fonts in SaaS or technical products.
- Do not mix more than 2 type families in one UI without a strong reason.
- Do not use decorative display fonts for body or UI labels.
- Do not use font-size smaller than 12px for readable content.
- Do not add letter-spacing to body text — it reduces readability.
- Do not use the Glyph brand font choices (Geist/Inter) as defaults for all product types.
- Do not choose typography based on what looks modern this year.
- Do not ignore the relationship between font personality and pricing signal.
