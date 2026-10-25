# Components and interaction states

Load only when relevant. Requirement = correctness/accessibility obligation; Pattern = adaptable starting point; Taste hypothesis = design judgment to validate in context.

### Choose structure from the task
* **Confidence Level**: Pattern
* **Purpose**: Make components support the screen hierarchy.
* **Reasoning**: An identical card anatomy or KPI row cannot fit every interface.
* **Constraint**: Use the component patterns below when relevant, preserving semantics and coherent roles. Do not force exactly four KPIs, three plans, card icons, or a review carousel. Keep requirements separate from optional patterns.
* **Example**:
  * **Bad**: Every screen starts with the same cards and footer.
  * **Good**: An operations screen leads with exceptions; a reading tool leads with navigable text.
* **Exceptions**: Patterns may change when the product, user constraints or observed evidence justify it. Requirements remain.

### State behavior is part of design
* **Confidence Level**: Requirement
* **Purpose**: Make controls trustworthy and recoverable.
* **Reasoning**: The ideal screenshot hides loading, failure and interruption.
* **Constraint**: Provide appropriate names, keyboard behavior, visible focus, loading/empty/error/success/disabled states and truthful outcomes. Keep hover optional and available actions reachable on touch.
* **Example**:
  * **Bad**: A clickable card has no keyboard action or visible focus.
  * **Good**: Use a real link for navigation and a named button for an action.
* **Exceptions**: Patterns may change when the product, user constraints or observed evidence justify it. Requirements remain.

## Focused patterns (adapt to actual content)

| Component | Useful starting point and behavior |
| --- | --- |
| Navigation | Clear identity, current location and reachable primary destinations. Sticky behavior is optional; protect anchor and focus visibility. |
| Forms | Persistent labels, associated descriptions/errors, understandable required/optional status; choose grouping from task complexity. |
| Authentication | Keep the entry task clear and recovery available; respect the real provider and existing security flow. No invented working authentication. |
| Settings | Group related choices, explain consequences and report real save status. Sidebar or sections depend on scale. |
| Dashboards | Prioritize the decision or next action. Use metrics and charts only when relevant; no fixed KPI count. |
| Tables | Real headers, meaningful alignment, sort state, empty/error/loading behavior; choose wrapping or scoped scrolling by content. |
| Pricing | Make billing period, limits and total price clear. Highlight a recommendation only when justified; never invent popularity. |
| Cards | Group related content only when a boundary helps; varied anatomy can serve varied roles. |
| Search | Implement real matching with loading/empty/error feedback where needed. A decorative search box is not a feature. |
| Command palette | Make shortcuts truthful; support keyboard movement, activation, Escape and managed focus. |
| Modals/dialogs | Use accessible primitives where available; label, contain focus appropriately and return focus after closing. |
| Empty states | Explain the absence and a relevant next action; an illustration is optional. |
| Loading | Keep useful content and stable geometry; choose skeleton, inline progress or another appropriate signal. |
| Errors/alerts | Explain what failed and how to recover; text/icon meaning accompanies semantic color. |
| Success | Confirm actual completion and a useful next step when needed; avoid duplicate announcements. |
| Pagination | Indicate current range/page and unavailable directions; endless loading is a separate choice, not a default. |
| Filters | Show current selection and a way to clear it; preserve context and communicate result changes. |
| Charts/graphs | Labels, units, axes, legend and exact-value access where appropriate. Allow meaningful categorical colors; offer non-hover access. |
| Documentation | Readable measure, section navigation and accurate anchors. Three columns can help large docs; simpler structures can fit shorter guides. |
| Developer tools/code | Monospace code, real commands, readable overflow and working copy feedback; syntax colors must remain legible. |
| Layered/glass panels | Only use when layering serves the composition; measure text against actual backdrop states. |
| Reviews | Use real attributed testimonials only; choose a readable list, carousel or other layout from content. No invented ratings/outcomes. |
| Product/quantity selectors | Clear selected state, availability, price impact and keyboard/touch behavior. Reflect actual business rules. |
| Tooltips/data inspection | Provide essential information outside hover; handle delays, focus and adjacent tooltip transitions coherently. |
