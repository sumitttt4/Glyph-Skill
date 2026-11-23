# Accessibility

Load for every interface: keyboard, focus, semantics, names, contrast, targets and user preferences. Requirement = correctness/accessibility obligation; Pattern = adaptable starting point; Taste hypothesis = design judgment to validate in context.

### Keyboard, focus and semantics
* **Confidence Level**: Requirement
* **Purpose**: Make core tasks operable and understandable.
* **Reasoning**: Visual polish cannot replace operability.
* **Constraint**: Use native semantics where possible, accessible names and sensible heading order. Preserve visible focus with sufficient contrast and no clipping. Support Enter/Space according to control semantics. Dialogs manage focus, Escape and return focus. Do not add positive tabindex to force an order.
* **Example**:
  * **Bad**: A clickable div has no name or keyboard behavior.
  * **Good**: Use a named button with native activation and a visible focus indicator.
* **Exceptions**: Patterns may change when the product, user constraints or observed evidence justify it. Requirements remain.

### Targets and alternatives
* **Confidence Level**: Requirement
* **Purpose**: Keep actions reachable without precision or hover.
* **Reasoning**: Small isolated targets and gesture-only actions exclude people.
* **Constraint**: Use comfortably sized targets; 44px is a useful touch design target, not a blanket claim about every WCAG level. Evaluate applicable 24px target/spacing requirements and exceptions. Provide labels, non-color cues, non-drag alternatives and reachable mobile controls.
* **Example**:
  * **Bad**: A tiny icon is the only way to dismiss an error.
  * **Good**: A named close action has adequate target area and can be reached with the keyboard.
* **Exceptions**: Patterns may change when the product, user constraints or observed evidence justify it. Requirements remain.

### Forms and feedback
* **Confidence Level**: Requirement
* **Purpose**: Explain input, progress and recovery.
* **Reasoning**: Placeholders disappear; silent errors leave users guessing.
* **Constraint**: Use persistent labels, descriptions where needed and errors associated with inputs. Announce appropriate status changes without repeatedly interrupting assistive technology. Report actual outcomes. Check reduced motion, zoom/reflow and image alternatives.
* **Example**:
  * **Bad**: Announce success before a request finishes.
  * **Good**: Show progress, then confirmed success or a specific recoverable error.
* **Exceptions**: Patterns may change when the product, user constraints or observed evidence justify it. Requirements remain.

## Concrete patterns

### Page structure
* **Confidence Level**: Requirement
* **Purpose**: Let assistive technology users navigate by structure.
* **Reasoning**: Screen-reader users jump by landmarks and headings; a page of `div`s is one long blob.
* **Constraint**: One `<h1>` per page; headings in order without skipping levels for styling. Landmarks: `<header>`, `<nav aria-label>`, `<main>` (one), `<aside>`, `<footer>`. A "Skip to content" link as the first focusable element, visible on focus. `lang` on `<html>`. Unique, descriptive `<title>` per route; on client-side navigation, update the title and move focus to the new page heading or announce the change.
* **Exceptions**: None.

### Use native elements, then ARIA
* **Confidence Level**: Requirement
* **Purpose**: Get keyboard and screen-reader behaviour for free.
* **Reasoning**: A `div` with a click handler is not focusable, not announced and does not respond to Enter or Space.
* **Constraint**: Navigation is `<a href>`; actions are `<button type="button">`. Use `<dialog>` or an accessible primitive (Radix, React Aria, Headless UI, Ark) for dialogs, menus, comboboxes, tabs and listboxes rather than hand-rolling them. When building custom widgets, follow the WAI-ARIA Authoring Practices pattern exactly (roles, states such as `aria-expanded`, `aria-selected`, `aria-controls`, and the arrow-key model). No ARIA is better than wrong ARIA.

| Widget | Keys |
| --- | --- |
| Menu button | Enter/Space/↓ opens, ↑↓ move, Enter selects, Escape closes and returns focus |
| Tabs | ←→ move between tabs, Home/End, Tab moves into the panel |
| Dialog | Focus moves in, Tab cycles inside, Escape closes, focus returns to the trigger |
| Combobox | Type filters, ↑↓ move, Enter selects, Escape clears or closes |
| Disclosure/accordion | Enter/Space toggles; heading wraps the button |

* **Exceptions**: None.

### Focus that is always visible
* **Confidence Level**: Requirement
* **Purpose**: Show keyboard users where they are.
* **Reasoning**: `outline: none` without a replacement makes keyboard use impossible.
* **Constraint**: Style `:focus-visible` with a 2px ring at 3:1 contrast against both the component and the background, offset 2px so it is not clipped. Never remove focus styles. Ensure sticky headers and footers do not cover the focused element (`scroll-padding-top`). Support Windows High Contrast / `forced-colors: active` by using real borders or outlines rather than box-shadow alone for essential boundaries.
* **Exceptions**: None.

### Motion, zoom and preferences
* **Confidence Level**: Requirement
* **Purpose**: Respect user settings.
* **Reasoning**: Vestibular disorders, low vision and cognitive load are common, and operating systems expose preferences for them.
* **Constraint**: Honour `prefers-reduced-motion` (replace movement with fades or nothing), `prefers-color-scheme`, `prefers-contrast: more` where practical, and text zoom to 200% plus 400% reflow at 320 CSS px without loss of content. Use `rem` for font sizes so user font settings apply. Never disable pinch zoom (`user-scalable=no`). Auto-playing, moving content longer than 5 seconds needs pause.
* **Exceptions**: None.

## Accessibility checklist
1. Keyboard only: every action reachable, order logical, focus always visible, no traps.
2. Landmarks, one h1, ordered headings, skip link, page titles.
3. Every control has an accessible name; icon buttons included.
4. Text 4.5:1, large text and UI boundaries 3:1, in every theme and over images.
5. Errors linked to fields; status changes announced politely.
6. Reduced motion, 200% text zoom, 320px reflow and forced colours checked.
7. Automated scan (axe, Lighthouse) run and reported as partial evidence, not certification.
