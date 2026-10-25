# Conditional stack guidance

Load only when relevant. Requirement = correctness/accessibility obligation; Pattern = adaptable starting point; Taste hypothesis = design judgment to validate in context.

### Use the actual project
* **Confidence Level**: Requirement
* **Purpose**: Preserve existing functionality and conventions.
* **Reasoning**: Changing frameworks is not a design improvement by itself.
* **Constraint**: Inspect dependencies, architecture and project instructions first. Keep stack advice conditional. Use semantic HTML and native behavior regardless of framework. Review dependencies before executing install scripts.
* **Example**:
  * **Bad**: Replace a working Vue product with Next.js for a visual refresh.
  * **Good**: Follow the existing component and route structure and verify affected flows.
* **Exceptions**: Patterns may change when the product, user constraints or observed evidence justify it. Requirements remain.

### Framework-specific implementation
* **Confidence Level**: Pattern
* **Purpose**: Use each stack intentionally.
* **Reasoning**: Useful conventions depend on the project's version and architecture.
* **Constraint**: In React use stable identities for changing lists; static immutable lists may use indexes. In Next.js keep server-first rendering and narrow client boundaries when applicable. In Vue and Svelte follow established project APIs and scoping. Use Tailwind tokens or arbitrary values when justified, not a categorical ban. Preserve primitive semantics when customizing shadcn or similar libraries.
* **Example**:
  * **Bad**: Strip accessibility states while replacing a primitive's styles.
  * **Good**: Keep names, roles, focus and keyboard behavior while changing appearance.
* **Exceptions**: Patterns may change when the product, user constraints or observed evidence justify it. Requirements remain.
