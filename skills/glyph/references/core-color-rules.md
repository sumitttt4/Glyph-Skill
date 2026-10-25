# Color roles and contrast

Load only when relevant. Requirement = correctness/accessibility obligation; Pattern = adaptable starting point; Taste hypothesis = design judgment to validate in context.

### Choose roles before counts
* **Confidence Level**: Pattern
* **Purpose**: Make color communicate coherent meaning.
* **Reasoning**: A palette count cannot determine whether a screen is useful or expressive.
* **Constraint**: Define background, surface, text, action, focus and semantic roles. Allow categorical colors and expressive brand palettes when their roles remain legible. Check how nearby colors compete. No universal single-accent or two-text-color lock.
* **Example**:
  * **Bad**: Remove half the legend categories to obey a three-color rule.
  * **Good**: Use distinct category colors plus labels and shapes; reserve a strong action treatment for the next task.
* **Exceptions**: Patterns may change when the product, user constraints or observed evidence justify it. Requirements remain.

### Measure contrast in context
* **Confidence Level**: Requirement
* **Purpose**: Keep text and essential controls readable.
* **Reasoning**: A hex value alone does not establish contrast over imagery or transparency.
* **Constraint**: Check rendered combinations: normal text 4.5:1, large text 3:1, applicable essential UI boundaries and graphics 3:1. Use WCAG definitions of large text. Do not communicate meaning by color alone. Check focus, code, error and both themes.
* **Example**:
  * **Bad**: A red dot alone means an overdue task.
  * **Good**: Show “Overdue” with an icon and measured contrast.
* **Exceptions**: Inactive controls and other WCAG exceptions have specific conditions; do not extend them to readable active content.

### Deliberate themes
* **Confidence Level**: Pattern
* **Purpose**: Retain hierarchy across modes.
* **Reasoning**: Dark mode needs its own surfaces, text and semantic colors.
* **Constraint**: Design each supported mode; avoid CSS inversion. Pure white or black page bases are valid when requested. Differentiate surfaces through borders, spacing, tint or elevation as appropriate. Respect the project's theme contract and persist explicit choices.
* **Example**:
  * **Bad**: Invert all colors and assume dark charts remain readable.
  * **Good**: Check every semantic and code color against its actual dark surface.
* **Exceptions**: Patterns may change when the product, user constraints or observed evidence justify it. Requirements remain.
