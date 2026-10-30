# Visual craft baseline

Load for any marketing page, landing page, portfolio or product screen where visual quality matters, and whenever the project has no established design system. Ready-made tokens and components implementing this baseline live in the [starter kit](starter-kit.md). Requirement = correctness/accessibility obligation; Pattern = adaptable starting point; Taste hypothesis = design judgment to validate in context.

This is a quality floor, not a house style. An existing brand, design system or user instruction wins. When none exists, build to these specs instead of improvising. The values come from measuring well-regarded commercial site templates (Framer and Figma community) and describe how polished pages are actually built: one calm type family, small precise controls, generous space and one high-fidelity visual.

## 1. Typography

### Choose from the curated list
* **Confidence Level**: Pattern
* **Purpose**: Prevent random or novelty font choices.
* **Reasoning**: Most polished templates use one neutral grotesk for nearly everything. Novelty display faces, condensed all-caps and three-family mixes are the fastest way to look amateur.
* **Constraint**: Without a brand font, pick one primary family from the list below. Add at most one partner: a display serif for a single accent role, or a mono for labels and data. The primary family sets at least 90% of the text. Check the license, language coverage and needed weights before use.
* **Example**:
  * **Bad**: Plex for the SaaS page, Fraunces for the studio page, a condensed grotesk in caps for the event page, each chosen to feel different.
  * **Good**: Inter for a SaaS page, with Inter Display tracking on the headline and Geist Mono only for figures.
* **Exceptions**: An established brand typeface, a supplied font or an explicit user choice replaces the list.

| Role | Families (all SIL OFL unless noted) | Use for |
| --- | --- | --- |
| Primary grotesk | Inter (with display optical size), Geist, Instrument Sans, Manrope, Plus Jakarta Sans, DM Sans | Everything by default |
| Display serif accent | Instrument Serif, Newsreader | One headline phrase or editorial display, never body |
| Mono | Geist Mono, JetBrains Mono, IBM Plex Mono | Code, figures, small labels |
| License-check first | Satoshi, General Sans, Cabinet Grotesk (Fontshare licence) | Only after confirming terms |

These are the defaults for the Clean product direction. Expressive directions (editorial, luxury, bold, playful, retro and others) have their own vetted lists in [style directions](style-directions.md); use those when that direction is chosen. Never pick a font that appears in neither place unless the brand supplies it. Do not mix two grotesks, and keep condensed all-caps display for the Bold expressive direction.

### Use the type scale
* **Confidence Level**: Pattern
* **Purpose**: Get hierarchy from size contrast, not weight or colour noise.
* **Reasoning**: Templates pair a large, light-weight headline with small, quiet UI text. Heavy bold display type reads as shouting.
* **Constraint**: Start from this scale (desktop / mobile). Tighten tracking only on large sizes. Use sentence case for headings.

| Token | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- |
| Display (hero h1) | 64–72px / 40–44px | 500 (400–600) | 1.0–1.08 | −0.04em to −0.05em |
| H2 (section) | 40–48px / 30–34px | 500 | 1.1 | −0.03em |
| H3 (card title) | 20–24px / 18–20px | 500 | 1.3 | −0.015em |
| Body large (hero sub) | 18px / 16–17px | 400 | 1.55 | 0 |
| Body | 15–16px | 400 | 1.6 | 0 |
| UI label, nav, button | 14px | 500 | 1.2 | −0.005em |
| Caption, eyebrow | 12–13px | 500 | 1.4 | 0, or +0.06em if uppercase |

* **Example**:
  * **Bad**: A 180px weight-800 condensed headline and 17px nav links.
  * **Good**: A 68px weight-500 headline over two lines, an 18px muted sub of at most 560px, 14px nav.
* **Exceptions**: Editorial or event brands may push display size; keep UI text small regardless.

### Write headlines that fit
* **Confidence Level**: Pattern
* **Purpose**: Make the hero read in one glance.
* **Reasoning**: Strong templates use 4–9 word headlines on two balanced lines.
* **Constraint**: Two lines at desktop, no orphan word, `text-wrap: balance`. Sub copy one or two sentences in a muted colour. Accent a phrase with colour or the serif partner, not both.
* **Example**:
  * **Bad**: A four-line headline with the last word alone.
  * **Good**: "The workspace for clear, / connected workflows."
* **Exceptions**: Very short brand statements may sit on one line.

## 2. Space and layout

### Use one spacing scale
* **Confidence Level**: Pattern
* **Purpose**: Make rhythm consistent without eyeballing every gap.
* **Reasoning**: Uneven gaps are the most common sign of an unpolished page.
* **Constraint**: 4px base: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120, 160. Container 1200px (max 1280) with 24px side padding (20px on mobile). Section padding 120px desktop, 80px tablet, 64px mobile. Hero top padding 96–140px. Header 64–72px. Card padding 24–32px. Grid gaps 12–20px.
* **Example**:
  * **Bad**: Sections at 70, 96 and 104px; card padding 18px in one card and 30px in the next.
  * **Good**: Every section 120px, every card 28px, every bento gap 16px.
* **Exceptions**: Dense product UI uses a tighter 4–12px internal rhythm.

### Keep copy blocks narrow
* **Confidence Level**: Pattern
* **Purpose**: Leave space around the message.
* **Reasoning**: Templates feel premium partly because text never spans the full container.
* **Constraint**: Hero headline max about 14–18 words wide (roughly 760px), hero sub max 560px, section intro max 600px, body prose 60–70ch.
* **Exceptions**: Tables and data.

## 3. Surfaces

### Radius, borders, shadow
* **Confidence Level**: Pattern
* **Purpose**: Make cards, frames and controls feel from one system.
* **Reasoning**: Mixed radii and heavy borders read as assembled from parts.
* **Constraint**: Pick one radius family. Controls 8–10px (or full pill, chosen once per site). Cards 16px. Large panels and media frames 20–24px. Inner radius = outer radius − padding. Borders 1px at low contrast: light `rgba(0,0,0,0.08)`, dark `rgba(255,255,255,0.08)`. Shadows soft and layered, for example `0 1px 2px rgba(0,0,0,.04), 0 12px 32px -12px rgba(0,0,0,.12)`. No hard offset shadows unless the brand uses them.
* **Example**:
  * **Bad**: 6px buttons, 18px cards, 12px frames and a 2px dark border.
  * **Good**: 10px buttons, 16px cards, 24px hero frame, 1px 8% borders throughout.
* **Exceptions**: Brutalist or retro brands may choose hard edges deliberately.

## 4. Colour

### Neutral foundation, one accent
* **Confidence Level**: Pattern
* **Purpose**: Let content and the visual carry colour.
* **Reasoning**: Templates are mostly neutral; the accent appears in the primary action, one highlight and the hero visual.
* **Constraint**: Neutrals carry 90% of the surface. One accent for the primary action, links and a key highlight. Semantic colours (success, warning, danger) only for status. Gradients and multi-colour belong in visuals and backgrounds, not text and buttons.

| Token | Light | Dark |
| --- | --- | --- |
| Background | #FFFFFF or #FAFAF9 | #000000 or #0A0A0A |
| Raised surface | #F5F5F4 | #111111 |
| Card | #FFFFFF with border | #0F0F10 with border |
| Text | #0A0A0A | #FAFAFA |
| Muted text | #57534E–#6B7280 | #A1A1AA |
| Border | rgba(0,0,0,.08) | rgba(255,255,255,.08) |

* **Exceptions**: Strong brand palettes; verify contrast for every text pair.

## 5. Controls

### Buttons and inputs
* **Confidence Level**: Pattern
* **Purpose**: Make actions look precise and consistent.
* **Reasoning**: Oversized, multicoloured or inconsistent buttons are an immediate quality tell.
* **Constraint**: Height 40px (36px compact, 44–48px for the hero only). Horizontal padding 16–20px. Label 14–15px weight 500. Primary: filled with the accent or the inverse neutral. Secondary: subtle fill or 1px border, never a second accent. At most two buttons side by side. Icons 16px, one icon set (Lucide or Phosphor) at one stroke width. Inputs match button height and radius. Hover shifts background a few percent; press scales to 0.98; focus shows a 2px ring with 2px offset.
* **Example**:
  * **Bad**: A pink 52px pill next to a lime 40px pill.
  * **Good**: Black 40px "Get started" plus a bordered 40px "Book a demo", same radius.
* **Exceptions**: Touch-first products keep 44px minimum targets.

## 6. The visual

### One high-fidelity hero visual
* **Confidence Level**: Requirement
* **Purpose**: Give the page a focal point that looks finished.
* **Reasoning**: The hero visual is what makes a template look expensive. Crude drawings undo every other decision.
* **Constraint**: Choose one, in this order of preference:
  1. **Real product UI built in code**: realistic sample data, correct density, inside a frame (window chrome or device), 20–24px radius, soft shadow, often over a gradient or shader field.
  2. **Licensed photography or renders** supplied by the user or from a source whose licence allows the use; record the source.
  3. **Generative visuals**: shader or gradient fields (for example Paper Shaders: MeshGradient, GrainGradient, Dithering, GodRays; Apache-2.0), used as a field behind UI or as the visual itself.
  4. **Typographic or abstract composition** for editorial pages.
  Never ship hand-drawn SVG "illustrations" of real objects, clip-art, emoji as icons or decorative blobs as the main visual unless a skilled illustration was supplied.
* **Example**:
  * **Bad**: Three flat SVG pots on a brown line as a ceramics hero.
  * **Good**: A product window showing the real workflow over a soft mesh gradient.
* **Exceptions**: Supplied brand illustration.

### Mini visuals in cards
* **Confidence Level**: Pattern
* **Purpose**: Make feature cards show rather than tell.
* **Reasoning**: Template bento cards contain small UI fragments, charts or states, not icons and three lines of text.
* **Constraint**: Each feature card gets a small, real-looking fragment of the product (a list row, a chart, a toggle, a notification) at the top, then title and one sentence. Keep fragments monochrome with the accent only where it means something.

## 7. Motion detail
* **Confidence Level**: Pattern
* **Constraint**: Entrance: opacity plus 8–16px rise, 500–700ms, ease-out `cubic-bezier(.2,.7,.2,1)`, stagger 60–80ms, once. Hover: 150–200ms. No bounce, no parallax on text. Shader speed slow. Everything static under `prefers-reduced-motion`. See [motion](motion-rules.md).

## 8. Craft checklist before shipping
Check the rendered page at 1440px and 390px, light and dark where supported:

1. One primary family; at most one partner; no faux bold or italics.
2. Hero headline two balanced lines, no orphan, tracking tightened.
3. Every button the same height and radius family; one primary style.
4. All section paddings from the scale; all card paddings identical.
5. Copy blocks within the max widths above.
6. One radius family; borders the same alpha everywhere.
7. One icon set, one size per context, optically centred.
8. The hero visual is high fidelity and crisp at 2x.
9. Accent used only for actions, links and one highlight.
10. No text below 12px; muted text still passes contrast.
11. Mobile hero: headline, sub and primary action visible without scrolling past a visual.
12. Nav has five or fewer items plus one action.
13. Nothing overflows horizontally; long words wrap.
14. Images, logos, numbers and testimonials are real or labelled as samples.

Report which checks were inspected in a real render and which were not.
