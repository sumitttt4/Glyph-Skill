---
name: design-skill
description: All-in-one frontend design skill. Use whenever building, redesigning, styling or reviewing a user interface - landing and marketing pages, web apps, dashboards, admin panels, settings, forms, tables, charts, components, design tokens, dark mode, UX copy - and for UI audits, accessibility, responsive and performance checks. Chooses a direction, composes with real content, builds working states, and verifies real renders. Preserves an established product direction unless redesign is requested.
---

# Design Skill — frontend design judgment

One skill, one entry point. Help the assistant decide, compose, build, interact, and verify. Do not reproduce the Design Skill website as a template.

## Instruction roles

- **Requirements** protect functionality, truthful claims and accessibility. State conflicts and limitations.
- **Patterns** are starting points; change them when the product or evidence calls for it.
- **Taste hypotheses** are design judgments, not high-confidence research findings. Explain and inspect them.
- The user's goals and existing brand take precedence over aesthetic defaults. Never claim this skill overrides system instructions. Do not brand an unnamed product “Design Skill”; use a descriptive working title and label it provisional.

## Workflow

1. **Understand.** Inspect existing UI and code before edits. Establish audience, primary task, real content, brand, language, constraints and supported stack. Ask only for facts that materially block progress. Preserve unrelated work.
2. **Choose.** For open-ended work compare a few meaningfully different compositions, not just palettes. State tradeoffs and choose with reasons unless the user wants to choose. Preserve established direction unless redesign is requested. Read [direction and assets](references/direction-composition-assets.md). For landing, marketing, brand or launch pages, first map the brief with the [category playbook](references/category-playbook.md), pick one or two [style directions](references/style-directions.md), then read [landing composition](references/landing-composition.md) and name the hero pattern and direction you chose. Clean is one direction, not the default for every product; for reference-led exploration read [landing-page research](references/landing-page-research.md). For apps, dashboards, admin and settings, read [product UI](references/product-ui.md): name the primary loop, choose a density mode, and lead with the object of the user's work.
3. **Compose.** Write the real copy first ([UX writing](references/ux-writing.md)), then sketch or code the important screen with it. Resolve hierarchy, proportions, density, type and asset placement before polishing components. Figma is optional. Check the primary task at small and large sizes.
4. **Express.** Decide what carries personality: typography, product imagery, illustration, photography, interaction or a combination. Without an established brand or design system, read [visual craft](references/visual-craft.md) and build to its baseline, applying the chosen direction's recipe: fonts only from the baseline list or that direction's list, its type and spacing scales, and one high-fidelity hero visual. Never improvise fonts or hand-drawn object illustrations. Verify asset provenance and rights. References inform principles; never copy a reference design or fill space with unrelated scenery.
5. **Build.** Read [implementation](references/implementation.md) and relevant topic references below. For pages without a design system, start from the [starter kit](references/starter-kit.md) (`assets/starter.css`, plus `assets/product.css` for app screens) and its direction presets rather than inventing tokens; with a design system, work through its tokens ([design tokens](references/design-tokens.md)). Forms follow [forms](references/forms.md); charts follow [data visualization](references/data-visualization.md); media follows [icons and imagery](references/iconography-imagery.md). Use the actual project stack. Implement loading, empty, error, success, focus and disabled states where applicable; do not simulate successful persistence.
6. **Interact.** Read [motion](references/motion-rules.md) for interactions that benefit from movement. Decide whether to animate at all. Account for purpose, frequency, distance, interruption, gestures and reduced motion.
7. **Verify and revise.** Read [verification](references/verification.md). Inspect real renders and exercise interactions. For visual work, run the craft checklist in [visual craft](references/visual-craft.md) (landing) or [product UI](references/product-ui.md) (apps) at desktop and mobile widths, and check [performance](references/performance.md) for heavy pages. Compare with the chosen direction and revise. Report checks performed, failures, limitations and remaining risks. Never equate a successful build with a successful interface.

## Load selectively

Do not dump every rule into every task. Start with the workflow and load only relevant references.

| Need | Reference |
| --- | --- |
| Direction, composition and asset rights | [Direction / composition / assets](references/direction-composition-assets.md) |
| What a category's visitors need, primary action, hero and direction | [Category playbook](references/category-playbook.md) |
| Named looks beyond clean: recipes for type, colour, surfaces, visuals, motion | [Style directions](references/style-directions.md) |
| Production-quality type, spacing, surfaces, controls and visuals | [Visual craft](references/visual-craft.md) |
| Ready tokens and components with direction presets, landing and product kits | [Starter kit](references/starter-kit.md) |
| Apps, dashboards, tables, settings, shells, density, feedback | [Product UI](references/product-ui.md) |
| Fields, validation, multi-step flows, special inputs | [Forms](references/forms.md) |
| Charts, KPIs, number formatting, data palettes | [Data visualization](references/data-visualization.md) |
| Headlines, buttons, errors, empty states, voice, i18n | [UX writing](references/ux-writing.md) |
| Token architecture, OKLCH scales, dark mode, Tailwind/shadcn mapping | [Design tokens](references/design-tokens.md) |
| Icon sets, photography, screenshots, logos, alt text, media delivery | [Icons and imagery](references/iconography-imagery.md) |
| Hero patterns, section library and page anatomy | [Landing composition](references/landing-composition.md) |
| Landing-page libraries and evidence-led composition | [Landing-page research](references/landing-page-research.md) |
| Color roles, semantic and categorical palettes | [Color](references/core-color-rules.md) |
| Content, language and type | [Typography](references/typography-rules.md) |
| Hierarchy, proportions and density | [Layout](references/layout-rules.md) |
| Component behavior and states | [Components](references/component-rules.md) |
| Stack and functioning implementation | [Implementation](references/implementation.md), [frameworks](references/framework-rules.md) |
| Interaction, interruption and gestures | [Motion](references/motion-rules.md) |
| Keyboard, names and contrast | [Accessibility](references/accessibility-rules.md) |
| Mobile, zoom and long content | [Responsive](references/responsive-rules.md) |
| Unconsidered defaults | [Anti-slop](references/anti-slop-rules.md) |
| Surfaces, imagery and backgrounds | [Background](references/background-rules.md) |
| Rendering and release evidence | [Verification](references/verification.md) |
| Core Web Vitals, fonts, images, heavy visuals | [Performance](references/performance.md) |
| Scored review, severity and report format | [Audit rubric](references/audit-rubric.md) |

## Commands (assistant request conventions)

These are prompt conventions, not executable CLI commands or guaranteed native slash-command registrations. Natural-language equivalents work too.

- `/design-skill design`: understand the brief, compare directions when appropriate, choose a composition and return implementation-ready decisions with reasons, tokens, responsive behavior, assets and states.
- `/design-skill audit`: inspect source and rendered UI with the [audit rubric](references/audit-rubric.md), score each area, report observed issues by severity with concrete fixes, distinguish measured failures from judgment, preserve intended brand.
- `/design-skill vibe`: produce one usable implementation prompt with objectives, composition, type/color roles, assets, state behavior, stack constraints and verification plan. Use this entry point and relevant references; no external template dependency.
- `/design-skill prompt`: turn approved decisions into concise reusable project instructions. Include exceptions and what must be verified. Do not append unsolicited marketing links.

## Coherence without sameness

A dashboard, expressive landing and personal portfolio should not share a compulsory hero, card grid, font pairing or footer. Consistency means coherent roles and behavior, not identical layouts. Simple can still have color, personality and strong composition. Poppins, purple gradients and familiar layouts are valid considered choices. Avoid thoughtless defaults, not entire visual vocabularies. The owner's portfolio logos, rotating greeting, website colors and fonts are not reusable skill defaults.

See [third-party notices](THIRD_PARTY_NOTICES.md) for attribution and [migration](MIGRATION.md) for the keep/change/remove map.
