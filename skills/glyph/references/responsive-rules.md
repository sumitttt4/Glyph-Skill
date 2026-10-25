# Responsive behavior

Load only when relevant. Requirement = correctness/accessibility obligation; Pattern = adaptable starting point; Taste hypothesis = design judgment to validate in context.

### Break at content pressure
* **Confidence Level**: Pattern
* **Purpose**: Keep the important task usable at every width.
* **Reasoning**: Device labels do not predict long strings, zoom or translations.
* **Constraint**: Choose breakpoints when the composition needs them. Reorder only with a sensible reading and focus order. Inspect 320px reflow, small mobile and wide screens, long labels, zoom and landscape where relevant.
* **Example**:
  * **Bad**: Keep four columns until labels break into letters.
  * **Good**: Collapse a grid once content no longer fits and retain the primary action.
* **Exceptions**: Patterns may change when the product, user constraints or observed evidence justify it. Requirements remain.

### Overflow deliberately
* **Confidence Level**: Requirement
* **Purpose**: Avoid clipping meaningful content.
* **Reasoning**: Hiding overflow can conceal data, filenames and keyboard focus.
* **Constraint**: Prevent page-level horizontal overflow. Allow scoped scrolling for intrinsically wide code/tables; give it accessible context and keyboard access when needed. Wrap filenames and prose when helpful. Do not hide essential content only to make a screenshot fit.
* **Example**:
  * **Bad**: Ellipsize every skill filename with no way to read it.
  * **Good**: Wrap complete names and show the full path in a readable preview header.
* **Exceptions**: Patterns may change when the product, user constraints or observed evidence justify it. Requirements remain.

### Mobile navigation and touch
* **Confidence Level**: Requirement
* **Purpose**: Keep navigation reachable on small screens.
* **Reasoning**: Desktop sticky sidebars can cover content when simply squeezed.
* **Constraint**: Provide an operable disclosure or another suitable mobile pattern. Account for sticky header height in anchors. Verify touch-sized actions, no hover-only paths and no focus traps.
* **Example**:
  * **Bad**: The current section falls behind a sticky header.
  * **Good**: Use one measured anchor offset and check it after resizing.
* **Exceptions**: Patterns may change when the product, user constraints or observed evidence justify it. Requirements remain.
