# Typography

Load only when relevant. Requirement = correctness/accessibility obligation; Pattern = adaptable starting point; Taste hypothesis = design judgment to validate in context.

### Choose for actual content
* **Confidence Level**: Taste hypothesis
* **Purpose**: Make typography fit language, brand and reading.
* **Reasoning**: Category-to-personality tables oversimplify type selection.
* **Constraint**: Inspect existing branding, glyph/language support, numerals, x-height, weight range, licensing and actual strings. Pair faces only when the contrast helps. A single family may be enough. Poppins is valid when considered.
* **Example**:
  * **Bad**: All developer tools must use monospace headings.
  * **Good**: Compare the real product name, data table and multilingual content in candidate faces.
* **Exceptions**: Patterns may change when the product, user constraints or observed evidence justify it. Requirements remain.

### Set hierarchy and rhythm
* **Confidence Level**: Pattern
* **Purpose**: Make reading and scanning comfortable.
* **Reasoning**: Size, weight, spacing and line length work together.
* **Constraint**: Tune measure, line-height, tracking and scale in rendered text. Roughly 45–75 characters can be a starting range for prose, not a lock. Avoid rigid tracking values or weight counts. Never claim font size alone proves accessibility.
* **Example**:
  * **Bad**: Apply -0.04em to every script and size.
  * **Good**: Use the font's natural spacing for body copy, adjust large Latin headings after inspecting wraps.
* **Exceptions**: Patterns may change when the product, user constraints or observed evidence justify it. Requirements remain.

### Load fonts responsibly
* **Confidence Level**: Requirement
* **Purpose**: Preserve content while fonts load.
* **Reasoning**: Missing glyphs and layout shifts affect real tasks.
* **Constraint**: Use licensed fonts, fallbacks and appropriate loading strategy. Verify downloaded files are fonts, prevent synthetic weights where possible, and inspect font loading, accented text and fallback layout.
* **Example**:
  * **Bad**: A logo-like stylistic set makes “AI” read as a star.
  * **Good**: Check actual glyphs and disable unsupported stylistic substitutions before changing the copy.
* **Exceptions**: Patterns may change when the product, user constraints or observed evidence justify it. Requirements remain.
