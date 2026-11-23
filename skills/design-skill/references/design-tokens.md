# Design tokens, theming and dark mode

Load when setting up or extending a design system, adding dark mode or themes, mapping a design into Tailwind/shadcn/CSS variables, or auditing hard-coded values. Pair with [color](core-color-rules.md) and the [starter kit](starter-kit.md). Requirement = correctness/accessibility obligation; Pattern = adaptable starting point; Taste hypothesis = design judgment to validate in context.

## 1. Token architecture

### Three tiers: primitive, semantic, component
* **Confidence Level**: Pattern
* **Purpose**: Change the look in one place without hunting through components.
* **Reasoning**: Components that reference `#2563eb` or `blue-600` directly cannot be themed, and dark mode becomes a rewrite.
* **Constraint**: Primitives hold raw values (`--blue-600`, `--space-4`). Semantic tokens name a role and point to primitives (`--color-bg`, `--color-fg`, `--color-fg-muted`, `--color-border`, `--color-accent`, `--color-on-accent`, `--color-danger`, `--color-focus`). Components use only semantic tokens, plus component tokens when a component needs its own knob (`--button-radius`). Themes and dark mode override semantic tokens only. Name by role, never by appearance (`--color-danger`, not `--color-red`).
* **Example**:
  * **Bad**: `.btn { background: #2563eb }` repeated in twelve files, dark mode via `.dark .btn { background: #3b82f6 }`.
  * **Good**: `.btn { background: var(--color-accent) }`; dark mode redefines `--color-accent` once.
* **Exceptions**: One-off marketing pages may use primitives directly if they never need theming.

### The minimum semantic set
* **Confidence Level**: Pattern
* **Purpose**: Cover what real interfaces need without an explosion of names.
* **Reasoning**: Missing roles lead to ad-hoc values; too many lead to nobody knowing which to use.
* **Constraint**: Start with these and add only when a real need appears.

| Group | Tokens |
| --- | --- |
| Surfaces | `bg` (page), `surface` (cards, panels), `surface-raised` (popovers, menus), `surface-sunken` (wells, code), `overlay` (scrim) |
| Text | `fg`, `fg-muted`, `fg-subtle` (placeholder, disabled), `fg-on-accent` |
| Lines | `border`, `border-strong`, `focus` |
| Action | `accent`, `accent-hover`, `accent-fg`, `accent-subtle` (tinted backgrounds) |
| Status | `success`, `warning`, `danger`, `info`, each with `-fg` and `-subtle` |
| Data | `chart-1` … `chart-8` categorical; sequential and diverging ramps if charts need them |
| Shape | `radius-sm` (inputs, badges), `radius-md` (buttons, cards), `radius-lg` (panels, dialogs), `radius-full` |
| Space | 4px scale: `1`=4, `2`=8, `3`=12, `4`=16, `5`=20, `6`=24, `8`=32, `10`=40, `12`=48, `16`=64, `20`=80, `24`=96 |
| Type | `text-xs` 12, `sm` 14, `base` 16, `lg` 18, `xl` 20, `2xl` 24, `3xl` 30, `4xl` 36, `5xl` 48, `6xl` 60, `7xl` 72; line-heights and weights paired per step |
| Elevation | `shadow-sm` (controls), `shadow-md` (cards on hover, dropdowns), `shadow-lg` (dialogs, popovers) |
| Motion | `duration-fast` 120–150ms, `duration-base` 200–250ms, `duration-slow` 300–400ms; `ease-out` `cubic-bezier(.2,.7,.2,1)`, `ease-in-out` `cubic-bezier(.65,0,.35,1)` |
| Layers | `z-dropdown` 1000, `z-sticky` 1100, `z-overlay` 1200, `z-modal` 1300, `z-popover` 1400, `z-toast` 1500, `z-tooltip` 1600 |

* **Exceptions**: Existing design systems keep their names; map to them instead of renaming.

## 2. Colour scales

### Build scales in a perceptual space
* **Confidence Level**: Pattern
* **Purpose**: Get evenly stepped palettes that work in both themes.
* **Reasoning**: HSL lightness is not perceptual: a yellow and a blue at "50%" look wildly different, so hand-made HSL scales have uneven steps and unpredictable contrast.
* **Constraint**: Define colour scales in OKLCH (`oklch(L C H)`), stepping lightness evenly (for example 0.98, 0.95, 0.90, 0.82, 0.72, 0.62, 0.53, 0.45, 0.37, 0.28, 0.20) and reducing chroma at the extremes. Tint neutrals slightly toward the brand hue (chroma 0.005–0.015) for warmth or coolness instead of pure grey. Provide sRGB/hex fallbacks if supporting very old browsers. Check every semantic text pair for contrast after building the scale; perceptual lightness helps but does not replace measurement.
* **Example**:
  * **Bad**: `hsl(220 90% 50%)` to `hsl(220 90% 90%)` in 10% jumps, with the middle steps indistinguishable.
  * **Good**: An OKLCH blue ramp with even lightness steps, `blue-600` measured at 5.2:1 on white.
* **Exceptions**: A supplied brand palette; derive the missing steps around it.

## 3. Dark mode

### Design dark mode, do not invert it
* **Confidence Level**: Requirement
* **Purpose**: Keep hierarchy and contrast in both themes.
* **Reasoning**: Inverted palettes produce glowing shadows, vibrating saturated colours and lost elevation.
* **Constraint**: Dark surfaces get lighter as they rise (page darkest, cards and popovers progressively lighter), because shadows barely show on dark backgrounds; use borders at 6–12% white alpha to separate. Use near-black (#0a0a0a–#121212) or pure black if the brand wants it, and off-white text (#ededed–#fafafa) to reduce halation. Desaturate and lighten accent and status colours so they pass contrast on dark surfaces without vibrating. Re-check every chart colour, code-syntax colour, focus ring and image (logos may need a light variant; photos may need slight dimming). Set `color-scheme: light dark` so native controls and scrollbars match.
* **Example**:
  * **Bad**: `filter: invert(1)` on the page; the brand blue becomes orange and photos turn negative.
  * **Good**: Separate dark tokens with an accent shifted from oklch(0.55 0.2 260) to oklch(0.72 0.15 260).
* **Exceptions**: None for products that offer dark mode.

### Theme switching without flash
* **Confidence Level**: Requirement
* **Purpose**: Respect the user's choice and avoid a flash of the wrong theme.
* **Reasoning**: Reading the stored theme after hydration paints the light theme first.
* **Constraint**: Default to `prefers-color-scheme`. Offer Light, Dark and System. Persist explicit choices (localStorage or a cookie for server rendering). Apply the theme with a tiny blocking inline script in `<head>` that sets `data-theme` or a class before first paint, wrapped in try/catch for blocked storage. Disable transitions during the switch so every element does not animate. Style both `:root` and `[data-theme="dark"]` (or `.dark`) from one token file.
* **Exceptions**: Single-theme products.

## 4. Mapping tokens into common stacks

### Tailwind CSS
* **Confidence Level**: Pattern
* **Purpose**: Use tokens through utility classes.
* **Reasoning**: Tailwind's palette classes used directly (`bg-blue-600`) bypass semantic roles.
* **Constraint**: Tailwind v4: declare tokens in CSS with `@theme { --color-bg: …; --color-accent: …; --radius-md: … }` and switch themes by redefining the underlying variables under `[data-theme="dark"]`, or use `@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *));`. Tailwind v3: map `theme.extend.colors` to `var(--color-…)` and set `darkMode: ['selector', '[data-theme="dark"]']` (or `'class'`). Components then use `bg-bg`, `text-fg-muted`, `border-border`, `bg-accent`. Check which version the project uses before writing config.
* **Exceptions**: Prototypes may use the default palette, then replace it.

### shadcn/ui and Radix-based kits
* **Confidence Level**: Pattern
* **Purpose**: Theme component libraries through their own variables.
* **Reasoning**: Overriding component classes one by one fights the library's theming contract.
* **Constraint**: shadcn/ui components read CSS variables such as `--background`, `--foreground`, `--card`, `--popover`, `--primary`, `--primary-foreground`, `--secondary`, `--muted`, `--muted-foreground`, `--accent`, `--destructive`, `--border`, `--input`, `--ring`, `--radius` and `--chart-1…5`. Map your semantic tokens onto those names (in `:root` and `.dark`), keep the accessible primitives untouched, and change `--radius` once rather than per component. Inspect the project's `components.json` and globals file for the exact variable names in its version.
* **Exceptions**: Heavily customised component sets owned by the project.

## 5. Tokens checklist
1. No raw hex, rgb or arbitrary px values in components except deliberate one-offs.
2. Semantic names describe roles; dark mode overrides only semantic tokens.
3. Every text/background pair passes contrast in both themes, including status, chart and code colours.
4. Theme applies before first paint, persists, and offers System.
5. Spacing, radius, type, shadow, motion and z-index come from scales.
