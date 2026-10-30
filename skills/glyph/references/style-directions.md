# Style directions

Load after the [category playbook](category-playbook.md) suggests directions, or whenever a page needs a defined look. Requirement = correctness/accessibility obligation; Pattern = adaptable starting point; Taste hypothesis = design judgment to validate in context.

Clean is one direction, not the default for everything. A restaurant, a festival, a luxury hotel and a developer tool should not look alike. Each direction below is a complete recipe: pick one (occasionally blend two, for example Editorial + Warm organic), then apply its recipe on top of the [visual craft baseline](visual-craft.md). The baseline's spacing, contrast, control and honesty rules still apply in every direction.

### Choose a direction deliberately
* **Confidence Level**: Pattern
* **Purpose**: Match the look to what is sold and who buys it.
* **Reasoning**: Templates that feel right for their category share a recognisable direction; mismatches (a law firm in neon, a festival in grey Inter) feel wrong before a word is read.
* **Constraint**: State the chosen direction and why in the design decision. Use only the fonts listed for that direction or the baseline list, unless the brand supplies its own. Fonts listed are SIL OFL unless marked.
* **Exceptions**: An existing brand system overrides the recipe; keep its identity and borrow only structure.

---

## 1. Clean product
**Feels** calm, precise, trustworthy. **Fits** B2B SaaS, productivity, fintech, analytics, HR, ops tools.
- **Type**: Inter, Geist, Instrument Sans, Hanken Grotesk, Onest. Display 64–72px weight 500, −0.045em.
- **Colour**: white or #FAFAF9; ink #0A0A0A; one accent (blue, green, violet or the brand's) for the primary action.
- **Surfaces**: 16–24px radius, 1px 8% borders, soft shadows, raised #F5F5F4 panels.
- **Visual**: real product UI in a window frame over a soft mesh gradient; bento cards with UI fragments.
- **Motion**: fade-rise entrances, subtle hover.
- **Buttons**: 40px, 10px radius or pill, solid ink or accent.
- **Signature**: announcement pill, framed product screenshot, logo strip, three-tier pricing.
- **Avoid**: illustration mascots, multiple accents, heavy gradients on text.

## 2. Dark technical
**Feels** powerful, engineered, fast. **Fits** developer tools, APIs, infrastructure, AI platforms, security, data.
- **Type**: Geist + Geist Mono, Inter + JetBrains Mono, Space Grotesk (for character) + Space Mono.
- **Colour**: #000–#0A0A0A background, #FAFAFA text, #A1A1AA muted; one luminous accent (violet, cyan, lime, orange) for actions, live states and glows.
- **Surfaces**: near-black cards #0A0A0B with 1px rgba(255,255,255,.08) borders; inner glows; 12–16px radius.
- **Visual**: terminal or code blocks with real syntax, product UI, dot grids, beams, shader fields (MeshGradient, GodRays, Dithering) kept dark and slow.
- **Motion**: typing or stepping sequences, gradient borders that move slowly, cursor-reactive light only on desktop.
- **Buttons**: white solid primary (#fff on #000) or accent; ghost secondary with 8% white fill.
- **Signature**: copyable install command in the hero, changelog link pill, metric strip in mono.
- **Avoid**: pure neon on pure black for body text; unreadable 10px mono.

## 3. Luminous AI
**Feels** soft, optimistic, intelligent. **Fits** consumer AI, assistants, AI productivity, wellness apps.
- **Type**: Inter Display, Geist, Sora, Outfit; optional Instrument Serif for one phrase.
- **Colour**: light, airy neutrals with pastel gradient fields (lavender, peach, mint, sky) or deep navy-to-violet in dark.
- **Surfaces**: frosted glass panels (backdrop blur, 70–85% surface), large 24–32px radii.
- **Visual**: product conversation or output over MeshGradient/GrainGradient; floating chips showing results.
- **Motion**: slow shader drift, gentle float on chips (2–4px), staggered message reveals.
- **Buttons**: pill buttons; primary ink or gradient-free accent.
- **Signature**: prompt box in the hero, example outputs, "how it thinks" step cards.
- **Avoid**: glowing brain orbs and robots; vague "AI-powered" claims without showing output.

## 4. Editorial
**Feels** considered, literate, confident. **Fits** studios, agencies, publications, newsletters, professional services, architecture, culture.
- **Type**: Instrument Serif, Newsreader, Gloock or Libre Caslon for display; Inter, Hanken Grotesk or Work Sans for text. Serif display may go large (80–140px) at weight 400.
- **Colour**: paper whites (#F7F5F0) or ink black; one muted accent (oxblood, forest, ink blue).
- **Surfaces**: few cards; hairline rules, columns and generous margins carry structure.
- **Visual**: strong photography, large type as image, numbered lists, pull quotes.
- **Motion**: minimal; text reveals by line, image fades.
- **Buttons**: understated text links with arrows, or small solid ink buttons.
- **Signature**: asymmetric grid, issue/section numbers, captions, index of work.
- **Avoid**: SaaS bento and gradient blobs; more than one serif.

## 5. Warm organic
**Feels** human, tactile, honest. **Fits** food and drink, cafés, bakeries, wellness, skincare, craft, sustainability, local makers.
- **Type**: Fraunces (soft) or Young Serif for display; Figtree, DM Sans or Plus Jakarta Sans for text.
- **Colour**: oat, clay, sage, olive, terracotta; ink brown text (#2B1E17).
- **Surfaces**: rounded 20–28px, soft textures (PaperTexture shader, grain), no hard borders.
- **Visual**: real photography of product and people (supplied or licensed) is essential; hand-drawn marks only if supplied by an illustrator.
- **Motion**: gentle, slow; no techy effects.
- **Buttons**: pill, earthy accent.
- **Signature**: ingredient or process story, maker portrait, location and hours, menu or product cards with prices.
- **Avoid**: cold greys, neon, generic stock smiles, self-drawn SVG objects.

## 6. Luxury refined
**Feels** quiet, expensive, exclusive. **Fits** fashion, jewelry, watches, premium hotels, high-end real estate, perfume, private services.
- **Type**: Cormorant Garamond, Bodoni Moda or Gloock for display at light weights and generous tracking (+0.02 to +0.1em for small caps labels); Inter or Hanken Grotesk light for text.
- **Colour**: black, ivory, stone, champagne; almost no accent colour.
- **Surfaces**: square or 2px radius, thin rules, vast whitespace.
- **Visual**: full-bleed editorial photography or video; product isolated on plain backgrounds.
- **Motion**: slow crossfades, long durations (800–1200ms), no bounce.
- **Buttons**: thin outlined rectangles, uppercase small labels with tracking.
- **Signature**: centered wordmark, collection names, minimal copy, appointment or reservation CTA.
- **Avoid**: discounts shouting, emoji, rounded pill-heavy UI, busy grids.

## 7. Bold expressive
**Feels** loud, energetic, unmissable. **Fits** festivals, concerts, sports, youth brands, streetwear drops, product launches, campaigns.
- **Type**: Anton, Bebas Neue or Big Shoulders Display (condensed) or Archivo/Bricolage Grotesque at heavy weights; pair with Inter or Space Grotesk for text. Display may be 120–220px.
- **Colour**: two or three saturated colours with black or white; colour blocks as layout.
- **Surfaces**: full-bleed colour sections, stickers, rotated labels, marquees.
- **Visual**: photography or video of people and moments, cut-outs, big numbers (date, price, countdown).
- **Motion**: marquees, scroll-linked scale, snappy 200–300ms transitions; respect reduced motion.
- **Buttons**: large (48–56px), high-contrast, sometimes with hard shadows.
- **Signature**: date/venue/price above the fold, lineup or drop grid, ticket CTA repeated.
- **Avoid**: shouting every element; condensed caps for body text; low-contrast neon on photos.

## 8. Playful
**Feels** friendly, fun, approachable. **Fits** consumer apps, kids, games, creator tools, community products, pets.
- **Type**: Bricolage Grotesque, Syne, Unbounded (sparingly), Outfit, Figtree; rounded geometric feel.
- **Colour**: bright but harmonious palette of 3–4 hues on white or a pastel base; categorical colour per feature.
- **Surfaces**: chunky 24–32px radii, thick 2px borders or hard offset shadows (4px 4px 0) in ink.
- **Visual**: app screenshots in tilted phones, stickers, 3D emoji-style renders (supplied or licensed), colourful UI fragments.
- **Motion**: springy hovers, wiggle on success, bouncy but short.
- **Buttons**: chunky pills with hard shadow, press-down on active.
- **Signature**: feature cards in different colours, mascot only if one exists, social proof as fun counters.
- **Avoid**: corporate stock photos; more than one novelty display face.

## 9. Brutalist raw
**Feels** honest, unpolished on purpose, opinionated. **Fits** indie studios, art, culture, experimental products, indie developers.
- **Type**: Space Grotesk, Space Mono, Archivo, JetBrains Mono; system fonts are valid.
- **Colour**: pure black/white with one primary (red, blue, yellow) or the browser defaults.
- **Surfaces**: 0 radius, visible 1–2px black borders, exposed grid, no shadows.
- **Visual**: raw screenshots, lists, tables, ASCII, unretouched photos.
- **Motion**: none or instant state changes.
- **Buttons**: rectangles with borders, underlined links.
- **Signature**: visible structure, index lists, timestamps.
- **Avoid**: accidental mess; it must still be legible, accessible and aligned.

## 10. Retro nostalgic
**Feels** warm, familiar, characterful. **Fits** games, record shops, cafés, vintage goods, streetwear, creator brands.
- **Type**: Young Serif, DM Serif Display, Space Mono, Bricolage Grotesque; one pixel or slab face only if the brand calls for it.
- **Colour**: faded palettes (mustard, teal, tomato, cream) or CRT darks with phosphor accents.
- **Surfaces**: grain (GrainGradient, PaperTexture), halftone (HalftoneDots), stamps, badges.
- **Visual**: dithered imagery (ImageDithering, Dithering), scanned textures, product photos with film grain.
- **Motion**: stepped or frame-based, short.
- **Buttons**: badge-like, bordered, slight hard shadows.
- **Signature**: era references used sparingly, catalogue numbers, sticker labels.
- **Avoid**: pastiche of a specific existing brand; illegible pixel text for body copy.

## 11. Trust and clarity
**Feels** safe, competent, accessible. **Fits** healthcare, insurance, banking, government, legal, education, nonprofits, senior audiences.
- **Type**: Public Sans, Inter, IBM Plex Sans, Source Sans-like neutrals; body 17–18px.
- **Colour**: white, soft blue or green tints, high-contrast text, semantic colours used clearly.
- **Surfaces**: 12–16px radius, visible borders, clear sections.
- **Visual**: real people photography (licensed), simple icons, step diagrams, credentials.
- **Motion**: almost none.
- **Buttons**: large (44–48px), clear labels ("Book an appointment").
- **Signature**: credentials, plain-language FAQ, contact options, accessibility statement.
- **Avoid**: jargon, low-contrast greys, decorative motion, dark patterns.

## 12. Cinematic immersive
**Feels** epic, sensory, aspirational. **Fits** hardware, automotive, travel, hospitality, architecture, film, outdoor gear.
- **Type**: Inter Display or Hanken Grotesk light at large sizes; Cormorant for premium travel; minimal text.
- **Colour**: taken from the imagery; overlays and scrims for legibility.
- **Surfaces**: full-bleed sections, few cards.
- **Visual**: high-resolution video or photography (supplied or licensed), 3D product renders, scroll-driven sequences.
- **Motion**: scroll-linked reveals, slow parallax on media (not text), video loops.
- **Buttons**: minimal, often white outline on imagery.
- **Signature**: specs as large numbers, feature callouts pinned to imagery, booking or configure CTA.
- **Avoid**: shipping without real imagery; this direction fails with placeholders.

## 13. Commerce catalog
**Feels** shoppable, clear, desirable. **Fits** DTC brands, e-commerce, marketplaces, food delivery.
- **Type**: Inter, Figtree, Hanken Grotesk; brand display face for the logo and hero only.
- **Colour**: neutral canvas so products carry colour; accent for "Add to cart" and badges.
- **Surfaces**: product cards with 8–16px radius, consistent image ratios (4:5 or 1:1).
- **Visual**: consistent product photography, lifestyle images, UGC only if real.
- **Motion**: image swap on hover, quick add feedback.
- **Buttons**: full-width add-to-cart on mobile, sticky purchase bar.
- **Signature**: bestsellers grid, reviews with counts (real), shipping and returns facts, bundles.
- **Avoid**: hiding price; fake scarcity timers; inconsistent product image crops.
