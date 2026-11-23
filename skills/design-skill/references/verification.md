# Verify rendered results

Load only when relevant. Requirement = correctness/accessibility obligation; Pattern = adaptable starting point; Taste hypothesis = design judgment to validate in context.

### Inspect, revise, repeat
* **Confidence Level**: Requirement
* **Purpose**: Check the actual interface against its direction.
* **Reasoning**: Source review and a green build do not reveal every visual or interaction failure.
* **Constraint**: Inspect desktop and small mobile renders in each supported theme. Exercise the primary task, states, keyboard, touch alternatives, anchors, copy, theme persistence and long content. Revisit hierarchy, proportions and assets. Record what was actually inspected and revise failures.
* **Example**:
  * **Bad**: Call a build production-ready without opening its screens.
  * **Good**: Show actual screenshots, test interactions and list remaining limitations.
* **Exceptions**: Patterns may change when the product, user constraints or observed evidence justify it. Requirements remain.

### Measure and qualify
* **Confidence Level**: Requirement
* **Purpose**: Keep performance and accessibility claims honest.
* **Reasoning**: One fast local load or a token contrast check is limited evidence.
* **Constraint**: Measure contrast of actual text/UI pairs; test focus, names, reflow, reduced motion and loading. Check links, fonts/images, console errors and production output. Measure performance with stated conditions and distinguish lab from field data. Do not imply full WCAG certification from partial checks.
* **Example**:
  * **Bad**: It feels fast, so advertise a performance score.
  * **Good**: Record device/browser, viewport, run conditions and measured metrics with limits.
* **Exceptions**: Patterns may change when the product, user constraints or observed evidence justify it. Requirements remain.

### Evaluate the skill fairly
* **Confidence Level**: Pattern
* **Purpose**: Improve judgment without rewarding extra polish.
* **Reasoning**: Unequal assets, content or iteration budgets confound comparisons.
* **Constraint**: Use fixed briefs for a data-heavy dashboard, expressive landing and personal portfolio. Compare current and candidate under comparable model, content, assets and iteration budgets; add a no-skill baseline when practical. Record revisions and failures. Score task clarity, composition, fit, distinctness, responsive behavior, accessibility, states and implementation. Investigate repeated templates. A few runs do not prove universal quality.
* **Example**:
  * **Bad**: Compare a neglected baseline with a heavily revised candidate.
  * **Good**: Retain all outputs and revision budgets; report failures and unrun conditions.
* **Exceptions**: Patterns may change when the product, user constraints or observed evidence justify it. Requirements remain.
