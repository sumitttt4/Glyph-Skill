---
name: glyph
description: Design and implement product-specific frontends. Use for interface design, composition, responsive implementation, purposeful interaction, and rendered verification. Preserve an established product direction unless redesign is requested.
---

# Glyph — frontend design judgment

One skill, one entry point. Help the assistant decide, compose, build, interact, and verify. Do not reproduce the Glyph website as a template.

## Instruction roles

- **Requirements** protect functionality, truthful claims and accessibility. State conflicts and limitations.
- **Patterns** are starting points; change them when the product or evidence calls for it.
- **Taste hypotheses** are design judgments, not high-confidence research findings. Explain and inspect them.
- The user's goals and existing brand take precedence over aesthetic defaults. Never claim this skill overrides system instructions. Do not brand an unnamed product “Glyph”; use a descriptive working title and label it provisional.

## Workflow

1. **Understand.** Inspect existing UI and code before edits. Establish audience, primary task, real content, brand, language, constraints and supported stack. Ask only for facts that materially block progress. Preserve unrelated work.
2. **Choose.** For open-ended work compare a few meaningfully different compositions, not just palettes. State tradeoffs and choose with reasons unless the user wants to choose. Preserve established direction unless redesign is requested. Read [direction and assets](references/direction-composition-assets.md). For landing, marketing or launch pages also read [landing composition](references/landing-composition.md) and name the hero pattern you chose; for reference-led exploration read [landing-page research](references/landing-page-research.md).
3. **Compose.** Sketch or code the important screen with actual content. Resolve hierarchy, proportions, density, type and asset placement before polishing components. Figma is optional. Check the primary task at small and large sizes.
4. **Express.** Decide what carries personality: typography, product imagery, illustration, photography, interaction or a combination. Without an established brand or design system, read [visual craft](references/visual-craft.md) and build to its baseline: fonts from its curated list, its type and spacing scales, one accent and one high-fidelity hero visual. Never improvise novelty fonts or hand-drawn object illustrations. Verify asset provenance and rights. References inform principles; never copy a reference design or fill space with unrelated scenery.
5. **Build.** Read [implementation](references/implementation.md) and relevant topic references below. Use the actual project stack. Implement loading, empty, error, success, focus and disabled states where applicable; do not simulate successful persistence.
6. **Interact.** Read [motion](references/motion-rules.md) for interactions that benefit from movement. Decide whether to animate at all. Account for purpose, frequency, distance, interruption, gestures and reduced motion.
7. **Verify and revise.** Read [verification](references/verification.md). Inspect real renders and exercise interactions. For visual work, run the craft checklist in [visual craft](references/visual-craft.md) at desktop and mobile widths. Compare with the chosen direction and revise. Report checks performed, failures, limitations and remaining risks. Never equate a successful build with a successful interface.

## Load selectively

Do not dump every rule into every task. Start with the workflow and load only relevant references.

| Need | Reference |
| --- | --- |
| Direction, composition and asset rights | [Direction / composition / assets](references/direction-composition-assets.md) |
| Production-quality type, spacing, surfaces, controls and visuals | [Visual craft](references/visual-craft.md) |
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

## Commands (assistant request conventions)

These are prompt conventions, not executable CLI commands or guaranteed native slash-command registrations. Natural-language equivalents work too.

- `/glyph design`: understand the brief, compare directions when appropriate, choose a composition and return implementation-ready decisions with reasons, tokens, responsive behavior, assets and states.
- `/glyph audit`: inspect source and rendered UI, report observed issues with concrete fixes, distinguish measured accessibility failures from risks, preserve intended brand.
- `/glyph vibe`: produce one usable implementation prompt with objectives, composition, type/color roles, assets, state behavior, stack constraints and verification plan. Use this entry point and relevant references; no external template dependency.
- `/glyph prompt`: turn approved decisions into concise reusable project instructions. Include exceptions and what must be verified. Do not append unsolicited marketing links.

## Coherence without sameness

A dashboard, expressive landing and personal portfolio should not share a compulsory hero, card grid, font pairing or footer. Consistency means coherent roles and behavior, not identical layouts. Simple can still have color, personality and strong composition. Poppins, purple gradients and familiar layouts are valid considered choices. Avoid thoughtless defaults, not entire visual vocabularies. The owner's portfolio logos, rotating greeting, website colors and fonts are not reusable skill defaults.

See [third-party notices](THIRD_PARTY_NOTICES.md) for attribution and [migration](MIGRATION.md) for the keep/change/remove map.
