# Audit rubric

Load for `/design-skill audit`, design reviews, pre-launch checks and "why does this look off?" questions. It turns the other references into one scored pass with a consistent report. Requirement = correctness/accessibility obligation; Pattern = adaptable starting point; Taste hypothesis = design judgment to validate in context.

## 1. How to audit

### Inspect the real thing
* **Confidence Level**: Requirement
* **Purpose**: Report observed issues, not guesses from source code.
* **Reasoning**: Many failures (overflow, contrast over images, focus clipping, font fallback) only appear in a render.
* **Constraint**: Render the interface at 1440px and 390px (plus 1024px for product UI), in each supported theme. Exercise the primary task with mouse, keyboard only and touch emulation. Trigger loading, empty, error and success states where possible. Read the source for semantics, tokens and states. Note what you could not inspect.
* **Exceptions**: When only screenshots are available, say so and limit findings to what is visible.

### Preserve intent
* **Confidence Level**: Requirement
* **Purpose**: Improve the product without replacing its brand.
* **Reasoning**: An audit that "fixes" a deliberate expressive direction into generic neutrality is a regression.
* **Constraint**: Identify the intended direction first (see [style directions](style-directions.md)). Judge against that direction and the product's audience, not against a personal default. Flag a direction mismatch as one finding rather than rewriting everything.
* **Exceptions**: The user asks for a redesign.

## 2. What to score

Score each area 0–3 (0 broken, 1 weak, 2 solid, 3 excellent) and list findings under it.

| Area | Look for | Reference |
| --- | --- | --- |
| Task clarity | Primary action obvious; hierarchy leads the eye to it; nothing competes | [layout](layout-rules.md), [product UI](product-ui.md) |
| Composition | Proportions, alignment, rhythm, consistent spacing scale, narrow copy blocks | [visual craft](visual-craft.md), [landing composition](landing-composition.md) |
| Typography | Family discipline, scale, measure, wraps, orphans, numerals | [typography](typography-rules.md) |
| Colour and contrast | Roles, accent restraint, measured contrast in both themes, no colour-only meaning | [color](core-color-rules.md), [tokens](design-tokens.md) |
| Components and states | Consistent controls, loading/empty/error/success/disabled present and truthful | [components](component-rules.md), [forms](forms.md) |
| Content | Specific copy, verbs on buttons, helpful errors, no fabricated proof | [UX writing](ux-writing.md), [anti-slop](anti-slop-rules.md) |
| Visual assets | High-fidelity hero, consistent icons and images, licensed sources | [iconography and imagery](iconography-imagery.md) |
| Accessibility | Keyboard, focus, names, semantics, targets, reduced motion, zoom | [accessibility](accessibility-rules.md) |
| Responsive | 320–390px reflow, no horizontal overflow, mobile nav, touch targets | [responsive](responsive-rules.md) |
| Motion | Purposeful, interruptible, fast for frequent actions, reduced-motion safe | [motion](motion-rules.md) |
| Performance | LCP element, layout shift, input delay, heavy assets | [performance](performance.md) |
| Distinctiveness | Product-specific choices versus unconsidered defaults | [anti-slop](anti-slop-rules.md), [category playbook](category-playbook.md) |

## 3. Severity

| Severity | Meaning | Examples |
| --- | --- | --- |
| Critical | Blocks a task, excludes a group of users, or misleads | Form cannot be submitted by keyboard; text fails 3:1; fake testimonials; page overflows at 390px hiding the CTA |
| Major | Clearly harms usability, trust or perceived quality | Missing error states; three button styles; hero visual is clip-art; body text 13px grey on grey |
| Minor | Polish issues a careful user notices | Uneven section padding; orphan word in headline; icon misaligned by 1px |
| Suggestion | Optional improvements or taste calls | Try the serif accent on one phrase; tighten the KPI strip |

Mark each finding as **measured** (contrast ratio, computed size, observed overflow) or **judgment** (taste hypothesis), and never present a judgment as a measured failure.

## 4. Report format

Return findings in this structure, most severe first:

```
## Summary
One paragraph: what the interface does well, the biggest problem, overall verdict.

## Scores
Task clarity 2 · Composition 1 · Typography 2 · Colour 3 · States 1 · Content 2 ·
Assets 1 · Accessibility 1 · Responsive 2 · Motion 3 · Performance 2 · Distinctiveness 1

## Findings
1. [Critical · measured] Primary button text fails contrast (2.8:1, needs 4.5:1)
   Where: hero "Start free trial", light theme
   Fix: darken --color-accent to oklch(0.50 0.19 262) (5.1:1), or use dark text.

2. [Major · judgment] Feature section is three identical icon cards
   Where: /#features
   Fix: replace icons with product fragments (the inbox row, the rule editor, the chart) per visual-craft §6.

## Not inspected
Screen reader output, physical touch device, slow-network loading.
```

Each fix names the specific change (token value, component, copy) rather than a principle. Offer to apply the fixes; group them so the most impactful land first.

## 5. Quick triage (five-minute pass)

When time is short, check only these, in order:
1. Can a keyboard user complete the primary task, with visible focus?
2. Does any text or essential control fail contrast?
3. Does anything overflow or hide at 390px?
4. Is the primary action the most prominent element?
5. Are loading, empty and error states present for the main data?
6. Is anything fabricated (logos, testimonials, metrics)?
7. Is there one obvious unconsidered default (identical cards, stock phrases, mixed icon sets)?
