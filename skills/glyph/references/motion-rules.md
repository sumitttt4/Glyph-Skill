# Interaction and motion

Load only when relevant. Requirement = correctness/accessibility obligation; Pattern = adaptable starting point; Taste hypothesis = design judgment to validate in context.

### Decide whether to animate
* **Confidence Level**: Taste hypothesis
* **Purpose**: Make movement serve the task.
* **Reasoning**: Frequency, purpose and interruption matter more than a universal duration cap.
* **Constraint**: Ask what motion explains or confirms. Frequent actions often benefit from little or no animation. Choose timing from distance, size, purpose and frequency; evaluate the complete response, not just milliseconds. Springs and playful motion can fit. Do not decorate every keyboard action.
* **Example**:
  * **Bad**: Replace a universal 400ms cap with a universal 300ms cap.
  * **Good**: Make a frequently used command palette immediate while a one-time teaching sequence takes the time it needs.
* **Exceptions**: Patterns may change when the product, user constraints or observed evidence justify it. Requirements remain.

### Handle interruption and origins
* **Confidence Level**: Pattern
* **Purpose**: Keep transitions connected to user control.
* **Reasoning**: Rapid input exposes animations that restart, jump or block interaction.
* **Constraint**: Retarget from the current state; support reversing and closing mid-transition. Use anchored origins for anchored overlays; centered dialogs may stay centered. Scope transitions to intended properties. Prefer simple transitions where suitable; use programmatic animation when behavior requires it.
* **Example**:
  * **Bad**: An Escape action queues behind a drawer entrance.
  * **Good**: Escape closes from the drawer's current position and restores focus.
* **Exceptions**: Patterns may change when the product, user constraints or observed evidence justify it. Requirements remain.

### Gestures and reduced motion
* **Confidence Level**: Requirement
* **Purpose**: Support touch, keyboard and motion preferences.
* **Reasoning**: Hover and drag are not available to everyone.
* **Constraint**: Provide non-drag alternatives; use pointer capture and cancellation when dragging, ignore extra pointers as appropriate, and test interruption. Gate hover effects to suitable pointers. Respect reduced motion and preserve useful state feedback without compulsory movement.
* **Example**:
  * **Bad**: A swipe-only destructive action or hover-only menu.
  * **Good**: An explicit action is available by keyboard and touch; drag is an enhancement.
* **Exceptions**: Patterns may change when the product, user constraints or observed evidence justify it. Requirements remain.

### Measure animation performance
* **Confidence Level**: Pattern
* **Purpose**: Avoid movement that harms interaction.
* **Reasoning**: Transform and opacity are often cheaper, but acceleration is browser-dependent.
* **Constraint**: Prefer suitable compositor-friendly properties; profile expensive blur, layout or large layers on representative devices. Do not claim every CSS animation or transform is GPU-accelerated.
* **Example**:
  * **Bad**: Animate every paragraph with large blur during routine navigation.
  * **Good**: Keep content immediately available and inspect frame behavior under load.
* **Exceptions**: Patterns may change when the product, user constraints or observed evidence justify it. Requirements remain.
