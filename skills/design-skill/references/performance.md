# Frontend performance

Load when building pages that must feel fast, adding fonts, images, video, shaders or heavy client code, or when an audit reports slowness. Speed is part of the design: a beautiful page that shifts while loading or lags on input reads as broken. Requirement = correctness/accessibility obligation; Pattern = adaptable starting point; Taste hypothesis = design judgment to validate in context.

## 1. Targets

### Design to Core Web Vitals
* **Confidence Level**: Pattern
* **Purpose**: Give "fast" a measurable meaning.
* **Reasoning**: Google's Core Web Vitals thresholds track what people perceive as loading, responsiveness and stability.
* **Constraint**: Aim for "good" at the 75th percentile of real users: Largest Contentful Paint ≤ 2.5s, Interaction to Next Paint ≤ 200ms, Cumulative Layout Shift ≤ 0.1. Lab tools (Lighthouse, WebPageTest) diagnose; field data (CrUX, RUM) judges. State test conditions with any number you report and never present one local load as proof.
* **Exceptions**: Internal tools on known hardware may set their own budgets; still avoid layout shift.

## 2. Loading (LCP)

### Make the hero arrive first
* **Confidence Level**: Requirement
* **Purpose**: Show the main content quickly.
* **Reasoning**: The largest element is usually the hero image or headline; anything that delays it delays the page.
* **Constraint**: Server-render or statically render above-the-fold content. Give the LCP image `fetchpriority="high"`, no lazy loading, modern format, correct size; preload it if it is a CSS background. Do not hide the hero behind a JavaScript entrance animation that starts at `opacity: 0` before hydration; animate from visible or use CSS that runs immediately. Defer non-critical scripts (`defer`, `async`, dynamic import), third-party widgets and chat bubbles until after load or interaction.
* **Example**:
  * **Bad**: A headline revealed by a client-side animation library, invisible until 1.8MB of JavaScript hydrates.
  * **Good**: The headline renders in HTML and rises with a CSS animation; the shader canvas mounts after first paint.
* **Exceptions**: None.

### Load fonts without shifting or hiding text
* **Confidence Level**: Requirement
* **Purpose**: Avoid invisible text and layout jumps.
* **Reasoning**: Web fonts block text or swap with different metrics, moving everything.
* **Constraint**: Self-host fonts (or use the framework's font loader, such as `next/font`), use WOFF2, subset to the scripts you need, prefer one variable font over many static weights, and limit families to two. Use `font-display: swap` (or `optional` for non-critical faces) and a metric-matched fallback (`size-adjust`, `ascent-override`, or the framework's automatic fallback) to keep layout stable. Preload only the one or two files used above the fold.
* **Exceptions**: System-font stacks need none of this.

## 3. Stability (CLS)

### Reserve space for everything
* **Confidence Level**: Requirement
* **Purpose**: Stop content from jumping under the reader's finger.
* **Reasoning**: Shifts cause misclicks and look unfinished.
* **Constraint**: Set dimensions or `aspect-ratio` on images, video, iframes, embeds and ads. Skeletons match final size. Never insert banners or cookie bars above existing content after load; overlay them or reserve their space. Animate with `transform` and `opacity`, not `top`, `height` or `margin`. Keep buttons the same width when their label changes to a spinner.
* **Exceptions**: Changes in direct response to user input within 500ms do not count as shifts, but should still be smooth.

## 4. Responsiveness (INP)

### Keep the main thread free
* **Confidence Level**: Requirement
* **Purpose**: Respond to every tap and keypress within about 100–200ms.
* **Reasoning**: Long tasks block input; heavy hydration makes buttons feel dead.
* **Constraint**: Give visual feedback immediately, then do the work. Break tasks over 50ms (yield with `scheduler.yield()` or `setTimeout`, move work to a Web Worker). Debounce search and resize handlers; use passive scroll listeners. Virtualise lists beyond a few hundred rows. In React, keep client components small and leaf-level, use transitions (`useTransition`) for non-urgent updates, memoise expensive renders only after profiling. Avoid large client-side libraries for small jobs (a date library for one format, an animation library for a hover).
* **Exceptions**: None.

## 5. Weight and effects

### Budget what ships
* **Confidence Level**: Pattern
* **Purpose**: Keep pages light on mid-range phones and slow networks.
* **Reasoning**: Median mobile devices are several times slower than a developer laptop.
* **Constraint**: Starting budgets for a landing page: under about 200KB compressed JavaScript, under about 1MB total transfer for the first view, one or two font files, hero image under about 200KB. Inspect the bundle (framework analyser) before adding dependencies. Tree-shake icon imports (import single icons, not the whole set).
* **Exceptions**: Complex apps set per-route budgets.

### Expensive visuals need a fallback
* **Confidence Level**: Requirement
* **Purpose**: Keep shaders, blurs and 3D from ruining the page.
* **Reasoning**: WebGL, large `backdrop-filter` blurs and video backgrounds can drop frames, drain batteries and fail on some devices.
* **Constraint**: Render a static image or gradient first and mount the shader/3D after load and only when visible (IntersectionObserver); pause when off-screen or the tab is hidden; respect `prefers-reduced-motion` and `prefers-reduced-data` where supported; cap device pixel ratio for canvases (about 1.5–2). Limit `backdrop-filter` to small, fixed elements. Profile on a throttled CPU before shipping.
* **Exceptions**: None.

## 6. Performance checklist
1. Above-the-fold content renders without waiting for client JavaScript.
2. LCP image prioritised; other images lazy, sized and in modern formats.
3. Fonts self-hosted, subset, swap with metric-matched fallbacks.
4. No layout shift from images, embeds, banners, fonts or loading states.
5. Inputs respond within about 100ms; no long tasks during interaction.
6. Heavy visuals have a static fallback, pause off-screen and respect reduced motion.
7. Numbers reported with tool, device, network and lab/field context.
