# Design Rules

UI and layout decisions must serve the product's purpose, audience, and hierarchy. Apply these rules when creating `/glyph design`, `/glyph kit`, or `/glyph landing` outputs.

---

## Landing Page Structure

### Section Order
The most effective landing page structure for most products:

```
1. Nav
2. Hero (above fold)
3. Social proof / trust bar (logos, numbers, or quotes)
4. Problem statement or "Before" moment
5. Features / how it works
6. Product proof (screenshot, demo, or deeper feature)
7. Testimonials or case study
8. Pricing or CTA section
9. Final CTA
10. Footer
```

Not every product needs all sections. A developer tool may skip testimonials and go straight to code examples. A consumer tool may prioritize proof earlier.

### Max-Width Rules

```
Content column:     720px  — for text-heavy sections, explanations, install steps
Standard layout:    1080px — for most feature grids and product sections
Full-width layout:  1440px — for hero visuals, banners, and background treatments
```

### Section Padding

```
Minimum vertical padding per section:  80px (mobile), 120px (desktop)
Hero section top padding:              100px–160px
Footer padding:                        48px–64px
```

Never use equal padding everywhere. Sections that introduce new content need more breathing room than tight data grids.

---

## Hero Section Rules

The hero must answer three questions before the user scrolls:
1. What is this product?
2. Who is it for?
3. Why should they care now?

### Headline Rules
- State what the product does, not just what it is called
- Avoid vague headlines: "Build better, faster" is not a headline — it is a placeholder
- Avoid abstract benefit headlines: "Unlock your potential" tells nobody anything
- Use the product category in or near the headline
- Strong formula: `[Product does X] for [Audience] [in context / outcome]`
- Headline size: `clamp(40px, 6vw, 72px)` on desktop, with tracking `-0.03em`

### Subtext Rules
- 1–2 sentences maximum
- Explain the mechanism or outcome, not just repeat the headline
- Target a specific reader — not everyone
- Size: 16px–20px, `line-height: 1.6`, muted color

### CTA Rules
- One primary CTA above the fold
- CTA copy should say what happens next, not just "Get started"
  - Strong: "Install Glyph", "Start your first audit", "Try it free"
  - Weak: "Get started", "Learn more", "Click here"
- Primary CTA: filled button, brand color, high contrast
- Secondary CTA: ghost or outline button
- Place both CTAs together, primary on the left or top

### Visual Element Rules
- Product screenshot or mockup must support the headline message
- Do not use abstract illustrations as hero visuals
- If using a UI mockup, show a real product state (not an empty dashboard)
- Mockup should be cropped or framed to focus on the most useful element

---

## SaaS UI Rules

### Navigation
- Sticky top nav with `backdrop-filter: blur(12px)`
- Height: 56px–72px
- Logo on the left, nav links centered or right, CTA button on the far right
- Border-bottom: `1px solid rgba(0,0,0,0.06)` in light mode
- Background: `rgba(255,255,255,0.85)` light or `rgba(10,10,10,0.85)` dark
- Nav links: 14px, font-weight 500, spaced 24px–32px apart
- Do not put too many items in the nav — 4–6 max

### Sidebar (for apps/dashboards)
- Width: 220px–260px
- Collapsed icon-only mode: 56px–64px
- Background: slightly different from main content area
- Nav items: 14px, 40px height, 8px radius, 4px–8px margin between
- Active state: filled background with brand or accent color
- Group items with section labels (uppercase, 11px, muted, tracked)

### Content Area
- Padding: 24px–32px on desktop, 16px on mobile
- Max readable content width: 720px
- Data tables: full-width within content area

### Data Tables
- Header row: slightly different background, font-weight 600, uppercase label style
- Row height: 44px–52px for comfortable scanning
- Alternate row shading: very subtle, rgba(0,0,0,0.02)
- Borders: horizontal only, `1px solid rgba(0,0,0,0.06)`
- Actions column: right-aligned, icon or text button
- Avoid: vertical borders everywhere, heavy backgrounds on table headers

---

## Dashboard Direction

### Data Hierarchy
- Most important metric: largest and most prominent position (top-left or top-center)
- Supporting metrics: smaller cards below or beside
- Trend data: line charts for over-time, bar charts for comparison
- Status indicators: badge or pill with semantic color (success, warning, error)

### Chart Selection Guide
- Line chart: trends over time (revenue growth, usage, signups)
- Bar chart: comparison across categories (plan breakdown, channel performance)
- Donut / ring: proportion of a whole (share of total, completion %)
- Table: when exact values matter more than visual pattern
- Avoid: pie charts with more than 4 slices, 3D charts, stacked bars that are hard to read

### Chart Rules
- Use semantic color only in charts (blue for primary series, not brand orange)
- Label the axes clearly
- Show empty state gracefully — do not show a broken or empty chart
- Do not use color decoratively in charts. Each color must mean something.

### Empty State Design
- Give the user a clear action to take to fill the space
- Use a simple icon or illustration, not a complex image
- Short headline (what the state is) + short body (what to do) + one CTA
- Do not leave an empty dashboard with no guidance

### Loading States
- Use skeleton screens for content-heavy pages
- Keep skeleton proportional to actual content dimensions
- Avoid spinners on full pages — use them only for inline actions
- Add subtle fade or pulse animation to skeleton elements

---

## Component Rules

### Cards
- Background: `#FFFFFF` (light) or `#161616` (dark)
- Border: `1px solid rgba(0,0,0,0.07)` or `1px solid rgba(255,255,255,0.06)`
- Border-radius: 10px–14px depending on product density
- Shadow: `0 1px 3px rgba(0,0,0,0.05)` at rest
- Hover shadow: `0 4px 16px rgba(0,0,0,0.08)` + `translateY(-2px)`
- Transition: `all 0.2s ease`
- Cards must have a reason to exist — not just decoration

### Buttons
See `references/design-rules.md` button section below.

```
Primary:      Brand color background, white text, 8px radius, subtle shadow
Secondary:    Transparent bg, 1px border, dark text, hover: bg-black/5
Ghost:        No border, no bg, dark text, hover: very subtle bg
Destructive:  Red background or red text only for destructive actions
```

Height: 36px–44px
Padding: 10px–20px horizontal
Font-size: 13px–15px
Font-weight: 500
Transition: all 0.2s ease
Hover: translateY(-1px) + stronger shadow for primary

### Inputs
- Height: 40px–44px
- Border: `1px solid rgba(0,0,0,0.15)`
- Focus ring: `2px solid [brand accent color]` with 2px offset
- Border-radius: 8px
- Font-size: 14px–15px
- Error state: red border + red message below
- Placeholder: muted color, not too light (must pass contrast)

### Badges and Labels
- Pill shape, 16px–20px height
- Font-size: 11px–12px, font-weight 500, uppercase tracking 0.05em
- Semantic: green for success, amber for warning, red for error, blue for info
- Brand: accent color for highlight tags
- Border + soft background color, not solid fill unless on dark bg

---

## Responsive Rules

- Design mobile-first: base layout is single-column
- Breakpoints: 375px (mobile), 768px (tablet), 1024px (desktop), 1440px (wide)
- Stack multi-column grids vertically on mobile
- Reduce hero font size at smaller breakpoints using `clamp()`
- Nav collapses to hamburger below 768px
- Cards stack vertically below 640px
- Side-by-side before/after layouts stack on mobile
- Maintain minimum 16px tap target height on all interactive elements

---

## Whitespace Rules

- Whitespace is not empty space — it is structure
- Section padding minimum: 80px mobile, 120px desktop
- Do not compress sections to fit more content above the fold
- Give headings room to breathe: margin-bottom at least 24px before body copy
- Cards benefit from internal padding: 20px–32px

---

## Never Do

- Do not create hero sections with vague headlines.
- Do not bury the primary CTA below the fold.
- Do not use 4+ columns in a feature grid on mobile.
- Do not fill every section with maximum content.
- Do not use equal padding for every section.
- Do not use decorative charts with fake data in dashboards.
- Do not leave empty states empty.
- Do not use the same card style for every content type.
- Do not ignore hierarchy inside cards (every card element should not be the same size).
