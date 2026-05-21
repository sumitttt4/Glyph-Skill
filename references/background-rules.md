# Background Rules

Background choices must support content readability and product personality. Do not choose backgrounds because they look interesting. Choose them because they make the product feel right.

---

## Background Decision Process

Before choosing a background, answer:

1. Does the product need to feel clean and focused, or warm and expressive?
2. Is this a light-mode or dark-mode product?
3. Does the audience expect clinical precision or human warmth?
4. What happens to the content readability if this background is applied?
5. Does the background choice match the product category conventions?

---

## Background Types and When to Use Them

### Pure White (#FFFFFF)
- Use for: clean B2B SaaS, productivity tools, document editors, admin dashboards
- Signal: clarity, focus, no distraction
- Rule: works best when card surfaces and borders create the visual structure
- Risk: can feel cold or sterile if not paired with warm typography and subtle border treatment

### Warm Off-White (#FAFAF9, #FAF9F7, #F9F7F4)
- Use for: founder tools, editorial products, creator platforms, storytelling products, community platforms
- Signal: warmth, craft, human
- Rule: pair with dark text and subtle warm borders
- Risk: too warm can feel dated; keep the tint subtle

### Soft Cool Gray (#F9FAFB, #F8F9FA)
- Use for: professional SaaS, analytics, fintech, admin-heavy tools
- Signal: organized, technical, systematic
- Rule: works well with blue or slate accents
- Risk: can feel generic if surfaces aren't differentiated

### Off-Black / Near-Black (#0D0D0D, #111111, #0F0F0F)
- Use for: AI infrastructure, developer tools, cybersecurity, premium dashboards, gaming, high-end brands
- Signal: power, precision, depth, technical authority
- Rule: must have strong surface hierarchy (background → elevated panel → card)
- Risk: poor contrast if text or border values are not carefully set

### Category-Specific Tinted Backgrounds
- Soft green-white (#F7FAF8): wellness, healthcare
- Soft blue-white (#F8FAFF): education, productivity, communication tools
- Cream/ivory (#F9F7F4, #FDF8F1): luxury, editorial, food and lifestyle
- Rule: tint must be subtle. If it is obvious, it is too strong.

---

## Surface Hierarchy (Required)

Never use a flat single color for the entire page. Always define a surface hierarchy:

### Light Mode
```
Background:       #FAFAF9 or #F5F4F2 (page base)
Surface:          #FFFFFF (cards, panels, modals)
Elevated surface: #FFFFFF with stronger border or shadow
```

### Dark Mode
```
Background:       #0D0D0D or #111111 (page base)
Surface:          #161616 or #1A1A1A (cards, panels)
Elevated surface: #222222 or #252525 (modals, dropdowns)
```

---

## Gradient Backgrounds

Use gradients when the emotional goal supports it, not as decoration.

### Radial glow behind hero
- Acceptable: subtle warm or cool radial gradient behind headline text
- Keep opacity low (max 40–60% saturation bleed)
- Example: `radial-gradient(ellipse at 65% -10%, rgba(255,243,238,0.8) 0%, transparent 60%)`

### Full-page gradient backgrounds
- Only use when the product has a strong emotional rationale (e.g., creative tool, consumer app)
- Never use purple-to-pink as a default AI product background
- Gradient must still allow readable text above it

### Section-level gradient transitions
- Acceptable for separating sections visually
- Keep subtle: one background to a slightly different tint

---

## Grid and Pattern Backgrounds

### Subtle grid lines
- Use for: developer tools, AI infra, technical dashboards
- Keep opacity very low: rgba(0,0,0,0.03) to rgba(0,0,0,0.05)
- Rule: grid is a secondary texture, not a feature
- Avoid: high-contrast grids that compete with content

### Dot patterns
- Use for: technical or engineering products
- Keep opacity very low
- Never make dots visible at a glance

### Noise textures
- Use for: editorial, premium, or analog-feeling brands
- Apply as an overlay on solid surfaces
- Opacity: 2–6% maximum

---

## Glassmorphism Rules

Glassmorphism can add depth, but only when it is needed.

- Use only when there is a true layered depth (content behind a panel)
- Blur radius: 12px–24px, not more
- Background: rgba(255,255,255,0.6) to rgba(255,255,255,0.85) for light, rgba(255,255,255,0.05) to rgba(255,255,255,0.1) for dark
- Always ensure text contrast remains accessible
- Do not use glassmorphism as a substitute for a real design system
- Do not apply it to every card without reason
- Do not use frosted panels that make text hard to read

---

## Rules

- Background must always make content more readable, not less.
- If adding a background texture reduces text legibility, remove it.
- Do not make the hero section visually noisy. The first screen must be clear.
- Do not use the same surface color for background, cards, and modals. Define hierarchy.
- Dark products must define elevated surfaces — do not leave everything the same dark color.
- Light products should not use pure white everywhere. Introduce surface differentiation through subtle tinting.

---

## Never Do

- Do not use random purple, orange, or pink blobs as hero decoration.
- Do not float glowing orbs on the background as a design substitute.
- Do not use multiple gradient directions on the same page without structure.
- Do not apply glassmorphism to every element.
- Do not make the background the most visually interesting thing on the page.
- Do not use animated blob backgrounds unless the product is a creative or artistic tool.
- Do not choose a dark background because it looks "premium" without checking the product category.
- Do not use the Glyph landing page warm off-white (#FAFAF9) as a default for all products.
