# Accessibility

Load only when relevant. Requirement = correctness/accessibility obligation; Pattern = adaptable starting point; Taste hypothesis = design judgment to validate in context.

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
