# Product UI: apps, dashboards and tools

Load for any logged-in product surface: web apps, dashboards, admin panels, internal tools, settings, editors, developer tools and data-heavy screens. Landing pages use [visual craft](visual-craft.md) and [landing composition](landing-composition.md) instead; ready-made product components live in [assets/product.css](../assets/product.css) (see the [starter kit](starter-kit.md)). Requirement = correctness/accessibility obligation; Pattern = adaptable starting point; Taste hypothesis = design judgment to validate in context.

Product UI is used daily, for hours, by people trying to finish work. Optimise for speed of recognition, density that matches the task, predictable placement and recoverable actions. Expressiveness belongs in onboarding, empty states and moments of success, not in every panel.

## 1. Start from the job

### Name the primary loop
* **Confidence Level**: Requirement
* **Purpose**: Make the screen serve the work it exists for.
* **Reasoning**: Most product screens fail by showing everything at equal weight; users then hunt for the one thing they came to do.
* **Constraint**: Before layout, write one sentence: "A [role] opens this to [verb] [object] and leaves when [done condition]." Lead the screen with the object of that verb (the queue, the document, the failing check), and keep the primary action within one click of it. Secondary information goes to a side panel, a tab or a details view.
* **Example**:
  * **Bad**: A dispatcher dashboard opens on four KPI tiles, a revenue chart and a welcome banner; late deliveries are three scrolls down.
  * **Good**: The same dashboard opens on "4 deliveries need attention", sorted by lateness, with Reassign inline; KPIs sit in a compact strip above.
* **Exceptions**: Executive reporting screens whose job really is the overview.

### Choose a density mode
* **Confidence Level**: Pattern
* **Purpose**: Match spacing to how often and how long people use the screen.
* **Reasoning**: Marketing spacing (120px sections, 48px buttons) wastes the screen in a daily tool; cramped density tires occasional users.
* **Constraint**: Pick one mode per surface and apply it consistently.

| Mode | Use for | Body / label | Control height | Table row | Panel padding | Gaps |
| --- | --- | --- | --- | --- | --- | --- |
| Comfortable | Consumer apps, onboarding, settings, occasional use | 15–16px / 14px | 40px | 52–56px | 24px | 16–24px |
| Default | Most SaaS and admin | 14px / 13–14px | 36px | 44–48px | 16–20px | 12–16px |
| Compact | Ops consoles, trading, logs, spreadsheets, IDE-like tools | 13px / 12–13px | 28–32px | 32–36px | 12px | 8px |

* **Example**:
  * **Bad**: A log viewer with 56px rows showing nine lines per screen.
  * **Good**: The log viewer at 32px rows in a monospace column, with a density toggle for people who want more air.
* **Exceptions**: Touch-first products keep 44px targets regardless of mode.

## 2. The app shell

### Shell anatomy
* **Confidence Level**: Pattern
* **Purpose**: Give every screen the same predictable frame.
* **Reasoning**: People navigate by position. A shell that shifts between pages forces them to re-read it.
* **Constraint**: Sidebar 240–280px expanded (56–64px collapsed, icons with tooltips and accessible names), top bar 48–56px with page title, breadcrumbs when hierarchy is deeper than two levels, and page actions on the right. Content area scrolls independently; the shell does not. Keep the primary navigation to 5–9 top-level destinations, grouped with small muted section labels. Put account, workspace switcher and settings at the sidebar's top or bottom, never mixed into feature navigation. Mark the current destination with background tint plus weight or an indicator, and `aria-current="page"`.
* **Example**:
  * **Bad**: 22 flat sidebar links, the current page shown only by a colour change, page actions floating in different spots per screen.
  * **Good**: Six grouped destinations, a tinted current row, title and actions in a consistent top bar.
* **Exceptions**: Single-purpose tools (an editor, a canvas) may hide the shell to maximise the work area, with a clear way back.

### Mobile shell
* **Confidence Level**: Requirement
* **Purpose**: Keep every destination reachable on small screens.
* **Reasoning**: A squeezed desktop sidebar either covers content or disappears.
* **Constraint**: Below about 768px, move navigation into a drawer opened from the top bar (focus trapped, Escape closes, focus returns to the trigger), or a bottom tab bar of at most five destinations for consumer apps. Tables become stacked cards or keep a scoped horizontal scroll with the key column sticky. Page actions collapse into one primary button plus an overflow menu.
* **Exceptions**: Desktop-only internal tools may state their supported widths, but must still not break at zoom.

## 3. Common screens

### Dashboards
* **Confidence Level**: Pattern
* **Purpose**: Turn numbers into a decision.
* **Reasoning**: Dashboards default to a wall of equal tiles; nobody knows which number matters.
* **Constraint**: Order by decision: exceptions and alerts first, then the few metrics that indicate health, then trends, then reference detail. Each KPI shows value, unit, comparison period and direction with text (not colour alone), for example "↑ 12% vs last week". Use a sparkline only when the shape matters. Two to five KPIs is typical; no fixed count. Every chart answers a question written as its title ("Signups are flat since the pricing change"), or a neutral label when the reader must judge. Link each tile to the list behind it. Read [data visualization](data-visualization.md) for charts.
* **Example**:
  * **Bad**: Eight identical tiles with icons in coloured circles and no comparison.
  * **Good**: "3 invoices overdue" with a Review action, then MRR, churn and active seats with week-over-week deltas.
* **Exceptions**: Wallboards viewed from a distance use larger type and fewer items.

### Lists and tables
* **Confidence Level**: Requirement
* **Purpose**: Make records scannable, comparable and actionable.
* **Reasoning**: Tables are where product users spend most of their time; small inconsistencies multiply across hundreds of rows.
* **Constraint**: Use a real `<table>` with `<th scope="col">` for tabular data. Left-align text, right-align numbers and use `font-variant-numeric: tabular-nums`; align headers with their column content. Keep the identifying column first and sticky when scrolling horizontally; make the header sticky when scrolling vertically. Show sort state with an icon and `aria-sort`. Row hover is a subtle tint; selected rows use a stronger tint plus a checkbox. Bulk actions appear in a bar when rows are selected, stating the count. Truncate long text with an ellipsis and a full-value tooltip or title only when the full value is also reachable elsewhere. Provide loading (skeleton rows at real row height), empty (explain and offer the next action) and error (what failed, Retry) states. Paginate or virtualise beyond a few hundred rows; state the range ("1–50 of 1,284").
* **Example**:
  * **Bad**: Centered columns, proportional digits that jitter, a spinner replacing the whole table on every sort.
  * **Good**: Right-aligned tabular amounts, sticky customer column, rows dimmed during refetch while keeping their position.
* **Exceptions**: Card lists suit visual objects (files with previews, products, people with photos).

### Detail views and side panels
* **Confidence Level**: Pattern
* **Purpose**: Inspect or edit one record without losing the list.
* **Reasoning**: Full-page navigation for every record breaks flow in triage work.
* **Constraint**: Use a right side panel (400–560px) for quick inspect/edit from a list, a full page for complex records with their own sub-navigation. Panels have a title, a close button, keyboard Escape, and keep the URL addressable when the record should be shareable. Put the record's status and primary action at the top; metadata in a two-column label/value list; activity history at the bottom.
* **Exceptions**: Mobile always uses a full screen.

### Settings
* **Confidence Level**: Pattern
* **Purpose**: Make configuration safe and findable.
* **Reasoning**: Settings accumulate; without structure they become a junk drawer.
* **Constraint**: Group by object (Profile, Workspace, Billing, Notifications, Security, Integrations) in a secondary nav. Each setting is label, one-line description of the consequence, then control. Choose one save model per page: instant save with a small "Saved" confirmation for toggles, or an explicit Save bar that appears when the form is dirty and warns on navigation away. Put destructive actions in a separated "Danger zone" with a confirmation that names the object (type the project name for irreversible deletes).
* **Exceptions**: Very small settings surfaces can be a single page.

### Onboarding and empty states
* **Confidence Level**: Pattern
* **Purpose**: Turn the first blank screen into the first success.
* **Reasoning**: An empty product looks broken; a wizard that blocks exploration feels like a toll gate.
* **Constraint**: Empty states say what will appear here, why it is empty, and offer the one action that fills it (plus import or sample data where useful). Distinguish first-use empty, no-results-for-filter (offer Clear filters) and error-empty. Prefer progressive checklists over blocking multi-step tours; let people skip. Illustrations are optional and should be small.
* **Exceptions**: Regulated setup (KYC, payments) that must complete before use.

### Command palette and shortcuts
* **Confidence Level**: Pattern
* **Purpose**: Give frequent users speed without hiding features from new ones.
* **Reasoning**: Power users live on the keyboard; shortcuts nobody can discover are dead weight.
* **Constraint**: Cmd/Ctrl+K opens a palette that searches navigation, records and actions, with arrow keys, Enter, Escape and a visible shortcut hint per item. Show shortcuts in tooltips and menus with `<kbd>`. Never override browser or screen-reader shortcuts; single-key shortcuts must be disableable or only active when a component has focus (WCAG 2.1.4). Provide a "?" shortcut sheet in keyboard-heavy tools.
* **Exceptions**: Simple consumer apps may not need a palette.

## 4. Feedback and system status

### Make every action answer
* **Confidence Level**: Requirement
* **Purpose**: Let people trust what the system did.
* **Reasoning**: Silent saves and spinners without end are the main source of "did that work?" anxiety.
* **Constraint**: Respond within 100ms (pressed state, optimistic change or inline spinner). Over about 1s show progress in place; over about 10s allow leaving and notify on completion. Use inline confirmation near the control for small actions, a toast (4–6s, pausable, not the only record of errors) for background completion, and a banner for persistent conditions (offline, trial ending, degraded service). Offer Undo for reversible destructive actions instead of a confirm dialog. Use `role="status"` or `aria-live="polite"` for non-urgent announcements and `role="alert"` only for urgent errors.
* **Example**:
  * **Bad**: "Are you sure?" before archiving an email, then nothing visible happens.
  * **Good**: The email archives instantly with "Archived · Undo" for six seconds.
* **Exceptions**: Irreversible or costly actions (payments, deletion of shared data) need explicit confirmation.

### Status, badges and permissions
* **Confidence Level**: Pattern
* **Purpose**: Communicate state without noise.
* **Reasoning**: When every row has three coloured pills, none of them stands out.
* **Constraint**: Badges are small (20–24px high, 12px text), use a tinted background with a readable text colour, and always include a word. Reserve saturated colour for states that need action. Show disabled controls with a reason (tooltip or helper text) when a permission or plan limit blocks them, or hide controls the user can never use.
* **Exceptions**: Dense monitoring views may use a dot plus label.

## 5. Product craft checklist
Inspect real renders at 1440px, 1024px and 390px, light and dark where supported:

1. The primary loop is visible without scrolling and its action is one click away.
2. One density mode applied consistently; control heights match across buttons, inputs and selects.
3. Shell does not shift between pages; current location is marked and announced.
4. Numbers are right-aligned and tabular; units and comparison periods are present.
5. Every list has loading, empty, no-results and error states with geometry that does not jump.
6. Every action gives feedback within 100ms; long work shows progress; errors say how to recover.
7. Destructive actions offer Undo or a confirmation naming the object.
8. Keyboard: tab order follows layout, focus is visible, Escape closes overlays, palette and shortcuts work.
9. Disabled controls explain why.
10. Mobile: navigation reachable, tables readable, primary action reachable by thumb.

Report which checks were inspected in a real render and which were not.
