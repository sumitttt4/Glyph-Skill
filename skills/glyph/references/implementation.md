# Functioning implementation

Load only when relevant. Requirement = correctness/accessibility obligation; Pattern = adaptable starting point; Taste hypothesis = design judgment to validate in context.

### Build the whole relevant flow
* **Confidence Level**: Requirement
* **Purpose**: Make the screen usable beyond its ideal state.
* **Reasoning**: A decorative control or false success breaks trust.
* **Constraint**: Implement relevant loading, empty, error, success, focus and disabled states. Await actual persistence or clipboard operations before success. Give recovery where possible. Preserve routes or redirects and existing behavior.
* **Example**:
  * **Bad**: A copy button says Copied even when clipboard access fails.
  * **Good**: Await the clipboard promise and show manual-selection guidance on failure.
* **Exceptions**: Patterns may change when the product, user constraints or observed evidence justify it. Requirements remain.

### Keep state and response coherent
* **Confidence Level**: Pattern
* **Purpose**: Avoid jumping or stale UI during real use.
* **Reasoning**: Repeated input, interruption and delayed responses expose optimistic assumptions.
* **Constraint**: Handle rapid toggles, cancellation, stale responses and route changes. Keep layout stable while loading. Scope client state and effects; clean up observers/listeners. Profile before broad performance claims.
* **Example**:
  * **Bad**: An old response overwrites a newer choice.
  * **Good**: Use request identity/cancellation as appropriate and retain only the current result.
* **Exceptions**: Patterns may change when the product, user constraints or observed evidence justify it. Requirements remain.

### Respect provenance and project boundaries
* **Confidence Level**: Requirement
* **Purpose**: Avoid unnecessary dependencies or unrelated edits.
* **Reasoning**: A design task is not permission to replace unrelated work or publish.
* **Constraint**: Inspect the workspace, review dependency source and licenses, preserve unrelated changes and stay within authorized deployment/push scope. Bundle one self-contained skill rather than hidden external rule dependencies.
* **Example**:
  * **Bad**: Install an unreviewed remote script to create a static button.
  * **Good**: Use existing tools or a small local implementation after inspecting the project.
* **Exceptions**: Patterns may change when the product, user constraints or observed evidence justify it. Requirements remain.
