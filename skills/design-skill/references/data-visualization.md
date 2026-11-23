# Data visualization

Load for charts, KPI tiles, sparklines, maps, reports and any screen that turns numbers into a judgment. Pair with [product UI](product-ui.md) for dashboards and [color](core-color-rules.md) for palettes. Requirement = correctness/accessibility obligation; Pattern = adaptable starting point; Taste hypothesis = design judgment to validate in context.

## 1. Choose the form from the question

### Start with the question, not the chart type
* **Confidence Level**: Pattern
* **Purpose**: Make every chart answer something.
* **Reasoning**: Charts picked for variety ("let's add a donut") decorate instead of inform.
* **Constraint**: Write the question the reader brings, then pick the simplest form that answers it.

| Question | Use | Avoid |
| --- | --- | --- |
| How is one number doing? | Big number + delta + comparison period; sparkline if shape matters | Gauge, single-value donut |
| How does it change over time? | Line (continuous), column (discrete periods, under ~20 bars) | Area stacks with many series, 3D |
| How do categories compare? | Horizontal bar, sorted by value, labels on the left | Pie with more than 3 slices, radar |
| What is the share of a whole? | Stacked bar or 100% bar; a pie/donut only for 2–3 parts | Many-slice pie |
| How is it distributed? | Histogram, box/strip plot | Bar of averages hiding spread |
| How do two measures relate? | Scatter, optionally sized | Dual-axis line |
| Where is it happening? | Choropleth with normalised values, or a bar chart of regions | Raw counts on a map (it just shows population) |
| How does a flow progress? | Funnel as horizontal bars with step conversion | Sankey for a simple funnel |
| What exactly is the value? | A table | Any chart |

* **Example**:
  * **Bad**: A seven-slice donut of revenue by plan, colours hard to tell apart.
  * **Good**: A sorted horizontal bar of revenue by plan with values at the bar ends.
* **Exceptions**: Brand storytelling pages may use bespoke visuals if the reading stays accurate.

### Tell the reader what to see
* **Confidence Level**: Pattern
* **Purpose**: Lower the effort to reach the insight.
* **Reasoning**: A neutral title forces every reader to do the analysis again.
* **Constraint**: In reports and narrative dashboards, title with the takeaway ("Churn halved after onboarding redesign") and put the metric name and unit in the subtitle. Annotate the event that explains a change directly on the chart. In exploratory tools where readers form their own judgment, use neutral descriptive titles.
* **Exceptions**: Monitoring views use neutral labels.

## 2. Encoding and honesty

### Keep scales truthful
* **Confidence Level**: Requirement
* **Purpose**: Avoid misleading readers.
* **Reasoning**: Truncated baselines and inconsistent scales exaggerate change.
* **Constraint**: Bar and area charts start at zero. Line charts may zoom the y-axis but must label it clearly. Small multiples share the same scale unless labelled otherwise. Do not use dual y-axes; use two aligned charts. Use the same period for comparisons and say which ("vs previous 7 days"). Label estimates, forecasts and incomplete periods (dashed line, lighter fill, "partial" label for the current week).
* **Exceptions**: Log scales for data spanning orders of magnitude, clearly labelled.

### Reduce ink, keep the data
* **Confidence Level**: Pattern
* **Purpose**: Let the data be the loudest element.
* **Reasoning**: Heavy grids, borders and legends compete with the marks.
* **Constraint**: Light horizontal gridlines only (border colour at low alpha), no vertical grid for time series, no chart borders or background fills, no 3D, no drop shadows. Axis text 11–12px muted; 4–6 ticks with round values. Label lines directly at their end instead of a legend when there are 2–5 series. Lines 1.5–2px; bars with 2–4px radius at the end only, gaps about 30–50% of bar width.
* **Exceptions**: Print and presentation charts may need heavier weights.

## 3. Colour for data

### Use palettes by data type
* **Confidence Level**: Pattern
* **Purpose**: Map colour to meaning.
* **Reasoning**: Rainbow scales and brand-coloured categories make data harder to read and harder for colour-blind readers.
* **Constraint**: Categorical: up to 6–8 distinct hues of similar lightness, ordered so adjacent series differ most; beyond eight, group into "Other" or use small multiples. Sequential (low→high): one hue varying lightness, light = low on light themes. Diverging (below/above a midpoint): two hues with a neutral middle, midpoint meaningful (zero, target, average). Highlight: grey everything, colour the one series the story is about. Never encode with red/green alone; add labels, position or shape. Check the palette with a colour-vision-deficiency simulator and against both theme backgrounds (3:1 for marks that carry meaning).
* **Example**:
  * **Bad**: A rainbow heatmap where yellow, the brightest colour, sits in the middle of the range.
  * **Good**: A single-blue sequential scale with a labelled legend from 0 to 1,000.
* **Exceptions**: Established domain conventions (election maps, terrain) when they are understood by the audience.

### Status colours carry meaning only
* **Confidence Level**: Requirement
* **Purpose**: Keep semantic colours trustworthy.
* **Reasoning**: If brand green and "healthy" green are the same, every green chart looks like good news.
* **Constraint**: Reserve success, warning and danger hues for status. Do not use them as categorical series. Define which direction is good per metric (lower churn is good) so a falling line is not automatically red.
* **Exceptions**: None.

## 4. Numbers and labels

### Format numbers for humans
* **Confidence Level**: Requirement
* **Purpose**: Make values readable and comparable.
* **Reasoning**: "1234567.891" in a tile is noise; inconsistent decimals look like errors.
* **Constraint**: Use `Intl.NumberFormat` with the user's locale. Abbreviate large numbers in tiles and axes (1.2M, 34.5K) but show the full value in tooltips and tables. Same decimal places within a column or series. Percentages: 0 decimals for big shares, 1 for small changes. Always show units and currency. Deltas carry a sign and an arrow plus words ("+12%", "↓ 3 pts"). Use `tabular-nums` wherever numbers update or align. Dates: relative for recent events ("5 min ago") with the absolute time on hover/focus; absolute and unambiguous elsewhere ("12 Mar 2026").
* **Exceptions**: Scientific and financial contexts may require exact precision everywhere.

## 5. Interaction and access

### Tooltips, states and alternatives
* **Confidence Level**: Requirement
* **Purpose**: Make exact values available to everyone.
* **Reasoning**: Hover-only tooltips exclude keyboard, touch and screen-reader users.
* **Constraint**: Tooltips follow the nearest point on the x-axis (crosshair) rather than requiring a precise hover; show all series values at that x, sorted, with series colour keys. Make the chart focusable with arrow-key navigation, or provide the data as a table (visible toggle or visually hidden). Give the chart an accessible name and a short text summary of the takeaway. Loading: a skeleton at final size. Empty: say there is no data for the period and suggest a wider range. Error: explain and retry. Keep chart geometry stable while data loads.
* **Example**:
  * **Bad**: A canvas chart with no text alternative and tooltips only on hover over 4px dots.
  * **Good**: A crosshair tooltip, "View as table" toggle and `aria-label="Weekly signups, up 18% over 8 weeks"`.
* **Exceptions**: Decorative sparklines inside a tile that already states the value can be `aria-hidden`.

### Responsive charts
* **Confidence Level**: Pattern
* **Purpose**: Keep charts legible on small screens.
* **Reasoning**: Shrinking a desktop chart makes labels collide.
* **Constraint**: Reduce ticks and series on narrow widths, rotate to horizontal bars instead of tilting labels, move direct labels or legends below the chart, and let detailed charts link to a full-screen view. Minimum chart height about 200px on mobile.
* **Exceptions**: None.

## 6. Data visualization checklist
1. The chart type matches the question; a table would not be clearer.
2. Title states the takeaway or the neutral metric; units and period are visible.
3. Bars start at zero; comparisons share periods and scales; partial data is marked.
4. Palette matches the data type, survives colour-vision simulation and both themes.
5. Numbers are localised, abbreviated consistently and tabular.
6. Exact values are reachable without hover; the chart has an accessible name and summary.
7. Loading, empty and error states keep the chart's size.
