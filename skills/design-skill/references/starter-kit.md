# Starter kit

Load when building a landing or marketing page without an existing design system. The kit at [assets/starter.css](../assets/starter.css) implements the [visual craft baseline](visual-craft.md) as plain CSS, with presets for the [style directions](style-directions.md). Requirement = correctness/accessibility obligation; Pattern = adaptable starting point; Taste hypothesis = design judgment to validate in context.

### Start from the kit, then make it specific
* **Confidence Level**: Pattern
* **Purpose**: Reach production quality fast instead of improvising spacing, type and controls.
* **Reasoning**: Written rules leave room for drift; working tokens and components do not.
* **Constraint**: Copy `assets/starter.css` into the project (or translate its tokens into the project's Tailwind theme, CSS modules or design tokens). Wrap the page in `class="g"`, set `data-direction` to the chosen direction (omit for Clean product), load the fonts that direction names, then override tokens for the brand's colours. Build the product-specific visual and copy yourself; the kit gives structure, not content.
* **Example**:
  * **Bad**: Re-deriving a type scale and button styles by eye for each page.
  * **Good**: `<div class="g" data-direction="warm-organic">`, Fraunces and Figtree loaded, accent set to the bakery's terracotta, real photos in the hero.
* **Exceptions**: Projects with a design system use theirs; borrow only patterns.

## Tokens

| Token | Purpose |
| --- | --- |
| `--g-bg`, `--g-raised`, `--g-card` | Page, raised panels, cards |
| `--g-fg`, `--g-muted` | Text and secondary text |
| `--g-line`, `--g-border` | Border colour and width |
| `--g-accent`, `--g-on-accent` | Primary action |
| `--g-font`, `--g-display`, `--g-mono` | Text, display and mono families |
| `--g-display-weight`, `--g-display-tracking`, `--g-display-case` | Display style |
| `--g-btn-radius`, `--g-radius`, `--g-radius-lg` | Control, card and frame radii |
| `--g-shadow`, `--g-btn-shadow` | Elevation (hard offset shadows in playful and retro) |

Directions: `dark-technical`, `luminous`, `editorial`, `warm-organic`, `luxury`, `bold`, `playful`, `brutalist`, `retro`, `trust`, `cinematic`, `commerce`; default is Clean product. The preset font stacks name the families from style-directions; load them (for example with `@fontsource` packages or the host's font tooling) or the fallbacks render.

## Components

Layout `g-wrap`, `g-section`, `g-head`, `g-eyebrow`, `g-h2`; header `g-header`, `g-logo`, `g-nav`, `g-header-links`; hero `g-hero`, `g-pill`, `g-display`, `g-lede`, `g-actions`, `g-proof`, `g-split`, `g-fullbleed`; media `g-frame`, `g-frame-art`, `g-window`, `g-window-bar`, `g-phone`; controls `g-btn` with `g-btn-primary`, `g-btn-secondary`, `g-btn-lg`, `g-btn-sm`, `g-input`; content `g-bento` with `g-card`, `g-card-visual`, `g-card-body` and `g-span-4|5|6|7`, `g-steps`, `g-metrics`, `g-quote`, `g-logos`, `g-marquee`, `g-pricing` with `g-plan` and `g-price`, `g-faq`, `g-cta`, `g-footer`; motion `g-rise` with `g-rise-2|3|4` (disabled under reduced motion).

## Hero markup

Pattern A, centered with product frame:

```html
<section class="g-hero"><div class="g-wrap">
  <a class="g-pill" href="#new"><b>New</b> What changed →</a>
  <h1 class="g-display">Headline in two balanced lines.</h1>
  <p class="g-lede">One or two sentences that say what it does and for whom.</p>
  <div class="g-actions">
    <a class="g-btn g-btn-primary g-btn-lg" href="#start">Get started</a>
    <a class="g-btn g-btn-secondary g-btn-lg" href="#how">See how it works</a>
  </div>
  <div class="g-frame" style="margin-top:72px;padding:64px 64px 0">
    <div class="g-frame-art"><!-- gradient, shader or image --></div>
    <div class="g-window"><div class="g-window-bar"><i></i><i></i><i></i></div><!-- product UI --></div>
  </div>
</div></section>
```

Pattern B, split: put copy and visual in `<div class="g-wrap g-split">` inside `g-hero`. Pattern C, full-bleed: `<section class="g-fullbleed">` with an `<img>`, `<video>` or `g-frame-art` as the first child and copy in `g-wrap`. Pattern D, editorial: use `data-direction="editorial"` and let `g-display` run larger and left-aligned. Pattern E, waitlist: replace `g-actions` with a form using `g-input` and `g-btn-primary`, and put the visual in a `g-frame` below.

## Sections

```html
<section class="g-section"><div class="g-wrap">
  <div class="g-head"><span class="g-eyebrow">Features</span><h2 class="g-h2">Section headline.</h2><p>One-sentence intro.</p></div>
  <div class="g-bento">
    <article class="g-card g-span-7"><div class="g-card-visual"><!-- UI fragment --></div>
      <div class="g-card-body"><h3>Card title</h3><p>One sentence.</p></div></article>
    <article class="g-card g-span-5">…</article>
  </div>
</div></section>
```

Pricing, FAQ, CTA and footer follow the same pattern; see class names above. Use native `<details>` for FAQ.

## Tailwind mapping

Map tokens into the theme instead of hard-coding values: `colors.bg = var(--g-bg)`, `colors.fg`, `colors.muted`, `colors.accent`; `borderRadius.card = var(--g-radius)`; `fontFamily.display = var(--g-display)`. Keep the kit's numbers: container 1200px, section padding 120/80px, controls h-10, card padding 7, gaps 4.

## After building
Run the craft checklist in [visual craft](visual-craft.md) on real renders at desktop and mobile widths, in every theme the page supports.
