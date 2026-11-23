# Icons, images and media

Load when choosing icons, placing photography, screenshots, logos, avatars, video or illustration, and when optimising media. Pair with [visual craft](visual-craft.md) for the hero visual and [direction / composition / assets](direction-composition-assets.md) for rights. Requirement = correctness/accessibility obligation; Pattern = adaptable starting point; Taste hypothesis = design judgment to validate in context.

## 1. Icons

### One set, one grid, one weight
* **Confidence Level**: Pattern
* **Purpose**: Make icons read as one family.
* **Reasoning**: Mixing sets (a filled Material icon next to a 1.5px Lucide outline) is an immediate sign of assembly from parts.
* **Constraint**: Pick one licensed set and use it everywhere: Lucide (ISC), Phosphor (MIT), Heroicons (MIT), Tabler (MIT) or Radix Icons (MIT). Keep one stroke width (1.5px for refined, 2px for bold) and one style (outline or filled; filled may mark the active state). Sizes: 16px inline with 14px text and in dense UI, 20px in default buttons and nav, 24px for standalone or touch. Icons inherit `currentColor`. Optically centre icons in buttons; align to the text's cap height, not its box.
* **Example**:
  * **Bad**: Emoji as feature icons beside outline icons, each in a different coloured circle.
  * **Good**: Lucide at 1.5px stroke, 16px in the table toolbar and 20px in the sidebar, all `currentColor`.
* **Exceptions**: A brand-supplied custom icon set.

### Icons support words
* **Confidence Level**: Requirement
* **Purpose**: Keep meaning clear and accessible.
* **Reasoning**: Few icons are universally understood (search, close, menu, home); most need a label.
* **Constraint**: Pair icons with text labels by default. Icon-only buttons are allowed for universal or repeated actions in toolbars, and must have an accessible name (`aria-label` or visually hidden text) plus a tooltip on hover and focus. Decorative icons next to a text label get `aria-hidden="true"`. Do not use an icon per feature card just to fill space; use a product fragment instead (see visual craft).
* **Exceptions**: None for accessible names.

## 2. Images and photography

### Choose real, relevant images
* **Confidence Level**: Requirement
* **Purpose**: Show something true about the product.
* **Reasoning**: Generic stock (handshakes, people pointing at laptops) and unrelated scenery signal filler.
* **Constraint**: Prefer, in order: real product screenshots or UI built in code, the client's own photography, licensed photography that depicts the actual subject, then generated or abstract visuals clearly not pretending to be real people or results. Record the source and licence. Never use images of real people as fake customers or team members.
* **Exceptions**: Explicit mood boards and concept work, labelled as such.

### Art-direct and frame consistently
* **Confidence Level**: Pattern
* **Purpose**: Make a set of images look like one product.
* **Reasoning**: Mixed aspect ratios, colour temperatures and crops make a page feel collaged.
* **Constraint**: Pick a small set of aspect ratios (16:9 or 3:2 for media, 4:5 for portraits and product cards, 1:1 for avatars and thumbnails) and use `aspect-ratio` with `object-fit: cover`; set `object-position` to keep the subject. Keep colour treatment consistent (same temperature, similar contrast; a subtle overlay can unify). Screenshots sit in a frame (border, radius 12–24px, soft shadow) at 2x resolution, cropped to the relevant part rather than the whole screen. Text over images needs a scrim or gradient and a measured contrast check at every breakpoint.
* **Example**:
  * **Bad**: A 4:3 team photo, a 16:9 office photo and a square logo in one row, each a different height.
  * **Good**: Three 4:5 portraits, same crop height, same warm grade.
* **Exceptions**: Editorial layouts that deliberately vary scale.

### Alt text that does a job
* **Confidence Level**: Requirement
* **Purpose**: Convey the image's purpose to people who cannot see it.
* **Reasoning**: "image.png" and "photo" are noise; a full description of a decorative image is also noise.
* **Constraint**: Informative images: describe what matters in context in one sentence, without "image of". Images that are links or buttons: describe the destination or action. Decorative images: `alt=""`. Charts and diagrams: short alt plus a text or table alternative nearby. Text in images: include the text in the alt (and avoid text in images).
* **Exceptions**: None.

## 3. Logos, avatars and brand marks

### Handle logos with care
* **Confidence Level**: Requirement
* **Purpose**: Present marks accurately and legally.
* **Reasoning**: Squashed, recoloured or invented "customer" logos damage trust and may infringe.
* **Constraint**: Use only logos you have permission to show and that represent real relationships. Use SVG; never stretch; keep clear space; provide light and dark variants or a monochrome version for logo walls. Size logo walls by optical weight, not equal width. Avatars: circle or rounded square, initials fallback on a tinted background derived from the name, consistent sizes (24/32/40/64px).
* **Exceptions**: Clearly labelled fictional brands in demos.

## 4. Delivering media

### Fast, stable, sharp
* **Confidence Level**: Requirement
* **Purpose**: Keep pages fast and free of layout shift.
* **Reasoning**: Unsized and oversized images are the most common cause of slow loading and jumping layouts.
* **Constraint**: Always set `width` and `height` (or `aspect-ratio`) so space is reserved. Serve AVIF or WebP with responsive `srcset`/`sizes` (or the framework's image component, such as `next/image`). Lazy-load images below the fold (`loading="lazy"`) but never the LCP hero image; give the hero `fetchpriority="high"` and preload it if it is a CSS background. Export UI screenshots at 2x and compress. Use SVG for icons, logos and simple illustrations, and strip editor metadata. Video: muted, `playsinline`, a poster image, no autoplay with sound, controls available, and a reduced-motion alternative for background video.
* **Exceptions**: None.

## 5. Media checklist
1. One icon set, one stroke and style, sizes from 16/20/24.
2. Icon-only controls have accessible names and tooltips.
3. Images are real or clearly illustrative, sourced and licensed.
4. Consistent aspect ratios and colour treatment; text over images passes contrast.
5. Alt text matches purpose; decorative images use `alt=""`.
6. Every image reserves space; hero is prioritised; others lazy-load; formats are modern.
