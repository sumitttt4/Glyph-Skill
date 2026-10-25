# Composition and layout

Load only when relevant. Requirement = correctness/accessibility obligation; Pattern = adaptable starting point; Taste hypothesis = design judgment to validate in context.

### Compose before polishing
* **Confidence Level**: Taste hypothesis
* **Purpose**: Create hierarchy beyond a set of matching cards.
* **Reasoning**: A coherent screen depends on proportions and relationships.
* **Constraint**: Place the primary task and real content first. Compare meaningful density, hierarchy and asset strategies when open-ended. Choose widths, spacing and alignment for the content; spacing scales are tools, not numerical laws.
* **Example**:
  * **Bad**: Build a polished button kit before deciding the screen hierarchy.
  * **Good**: Sketch an exception queue leading a dashboard, then refine its controls.
* **Exceptions**: Patterns may change when the product, user constraints or observed evidence justify it. Requirements remain.

### Coherent roles, varied screens
* **Confidence Level**: Pattern
* **Purpose**: Keep a product consistent without stamping a template.
* **Reasoning**: A marketing introduction and a reading tool serve different tasks.
* **Constraint**: Reuse meaningful type, action, spacing and semantic roles. Allow different section layouts, densities, radii and composition when functions differ. No compulsory max-width tiers, 120px padding, or KPI row.
* **Example**:
  * **Bad**: Force the docs into a marketing hero and identical bento cards.
  * **Good**: Use a quiet reading column and navigation for docs, with richer art direction on the landing.
* **Exceptions**: Patterns may change when the product, user constraints or observed evidence justify it. Requirements remain.

### Depth must preserve usability
* **Confidence Level**: Pattern
* **Purpose**: Use layering with a purpose.
* **Reasoning**: Overlaps can communicate relationships but also hide controls.
* **Constraint**: Choose borders, shadows or overlap based on hierarchy. Check focus visibility, zoom, sticky layers and small viewports. Do not force elevation onto every card.
* **Example**:
  * **Bad**: A floating badge covers a mobile install button.
  * **Good**: Keep the badge in normal flow on small screens and preserve anchor offsets.
* **Exceptions**: Patterns may change when the product, user constraints or observed evidence justify it. Requirements remain.
