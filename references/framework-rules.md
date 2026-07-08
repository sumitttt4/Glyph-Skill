# Framework Rules

This module defines rules for code output based on the specific framework, CSS library, or UI library being used.

---

### React Key Binds
* **Confidence Level**: Critical
* **Purpose**: Keep list items stable during rendering.
* **Reasoning**: Using array indices as React list keys causes layout glitches, slow rerenders, and visual bugs.
* **Constraint**: In React lists, the `key` attribute must use a unique string identifier, never the array index.
* **Example**:
  * **Bad**: `{items.map((item, index) => <Card key={index} data={item} />)}`
  * **Good**: `{items.map((item) => <Card key={item.id} data={item} />)}`
* **Exceptions**: Completely static, hardcoded list loops that never change order.

---

### Next.js Client vs Server Routing
* **Confidence Level**: Critical
* **Purpose**: Optimize page transitions and bundle load times.
* **Reasoning**: Mixing client-side loops and large state variables inside server components causes compilation errors.
* **Constraint**: Ensure Next.js components are server-first by default. Add the `'use client'` directive only when utilizing hooks (`useState`, `useEffect`) or browser event triggers. Always use `<Link>` for internal routing.
* **Example**:
  * **Bad**: Using a raw `<a href="/docs">` tag inside header menus.
  * **Good**: Importing `Link` from `'next/link'` and using `<Link href="/docs">Docs</Link>`.
* **Exceptions**: External links.

---

### Vue Script Setup Conventions
* **Confidence Level**: Recommended
* **Purpose**: Keep script blocks consistent.
* **Reasoning**: Mixing Vue 2 Options API and Vue 3 Composition API setup blocks makes codebases confusing.
* **Constraint**: Ensure Vue outputs standardize on the Composition API using the `<script setup>` syntax block.
* **Example**:
  * **Bad**: Writing component files with complex options objects: `export default { data() { return { ... } } }`.
  * **Good**: Writing Composition scripts: `<script setup> import { ref } from 'vue'; const count = ref(0); </script>`.
* **Exceptions**: None.

---

### Svelte Style Scoping
* **Confidence Level**: Recommended
* **Purpose**: Manage element boundaries cleanly.
* **Reasoning**: Global CSS styles inside Svelte components bleed out and affect outer elements.
* **Constraint**: Style Svelte elements using scoped `<style>` tags directly inside component files, avoiding `:global()` overrides.
* **Example**:
  * **Bad**: Writing global body definitions inside sub-components.
  * **Good**: Writing local layout classes scoped specifically to component elements.
* **Exceptions**: Base global themes.

---

### Tailwind CSS Arbitrary Offsets
* **Confidence Level**: Critical
* **Purpose**: Prevent custom styles from bypassing the design system.
* **Reasoning**: Arbitrary values (e.g. `p-[17px]`, `w-[321px]`) break theme settings and spacing rhythm.
* **Constraint**: Tailwind class lists must use standard grid configurations (e.g. `p-4`, `w-80`). Arbitrary style injections are strictly banned.
* **Example**:
  * **Bad**: `<div className="p-[23px] gap-[9px] bg-[#111111]/80">`
  * **Good**: `<div className="p-6 gap-2 bg-black/85">`
* **Exceptions**: Arbitrary clamp sizing for typography, unique background photos, or custom third-party integrations.

---

### shadcn/ui Primitives custom overrides
* **Confidence Level**: Recommended
* **Purpose**: Maintain accessibility layers during element override styling.
* **Reasoning**: Swapping component styles by replacing core utility classes can break accessibility markers.
* **Constraint**: Modify shadcn/ui components using the `cn()` function, preserving original ARIA states.
* **Example**:
  * **Bad**: Completely replacing className tags inside primitives, dropping core state overrides.
  * **Good**: Merging styles via `<Primitive className={cn("original-class", customClass)} />`.
* **Exceptions**: None.

---

### Vanilla HTML Semantics
* **Confidence Level**: Critical
* **Purpose**: Keep page files accessible.
* **Reasoning**: Structuring full-page templates with a single `div` tag breaks search engine indexing and screen readers.
* **Constraint**: HTML output must structure layout wrappers semantically (e.g., using `<nav>`, `<aside>`, `<main>`), locking layout styles to structured global classes.
* **Example**:
  * **Bad**: Building pages with stacked nested `div` groups: `<div><div><div>Content</div></div></div>`.
  * **Good**: Styling structural nodes with `<main><article><section>Content</section></article></main>`.
* **Exceptions**: Floating layout wrappers.
