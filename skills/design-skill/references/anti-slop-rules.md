# Avoid unconsidered defaults

Load only when relevant. Requirement = correctness/accessibility obligation; Pattern = adaptable starting point; Taste hypothesis = design judgment to validate in context.

### Question defaults, not vocabularies
* **Confidence Level**: Taste hypothesis
* **Purpose**: Preserve product-specific personality.
* **Reasoning**: Banning a font, hue or familiar pattern does not create judgment.
* **Constraint**: Poppins, purple gradients, cards, illustrations and familiar layouts are valid if considered. Inspect whether each choice serves the product, audience and content. Do not force neutrality or colorfulness.
* **Example**:
  * **Bad**: All products use black/white, Inter, centered hero and three feature cards because it feels safe.
  * **Good**: A reading tool prioritizes text; a festival page may use expressive color and type.
* **Exceptions**: Patterns may change when the product, user constraints or observed evidence justify it. Requirements remain.

### Show something true
* **Confidence Level**: Requirement
* **Purpose**: Avoid fabricated proof.
* **Reasoning**: A realistic-looking mockup can be mistaken for shipped results.
* **Constraint**: Label illustrative samples, fictional data and concepts. Do not fabricate testimonials, ratings, customer logos, metrics or intentionally bad baselines. Keep claims and attribution accurate.
* **Example**:
  * **Bad**: A hand-built comparison is presented as a measured model benchmark.
  * **Good**: A walkthrough says it is illustrative and lists what is untested.
* **Exceptions**: Patterns may change when the product, user constraints or observed evidence justify it. Requirements remain.

### Earn the decoration
* **Confidence Level**: Taste hypothesis
* **Purpose**: Make visual details support the whole composition.
* **Reasoning**: Removing personality is as automatic as adding unrelated filler.
* **Constraint**: Choose a personality carrier deliberately. Ask whether a visual explains, guides or expresses something relevant. Decoration may be appropriate; remove it when it obscures content or delays frequent actions.
* **Example**:
  * **Bad**: Add a random hardware chip to a Markdown design skill.
  * **Good**: Show an original brief-to-decisions-to-interface demonstration.
* **Exceptions**: Patterns may change when the product, user constraints or observed evidence justify it. Requirements remain.

## Common tells of unconsidered output

None of these is banned. Each is a default that appears when nobody decided. If one is on the page, be able to say why it serves this product; otherwise replace it.

| Tell | Usually better |
| --- | --- |
| Purple-to-blue gradient on the headline, buttons and background at once | One accent for actions; colour and gradient in the visual, not the text |
| Centred hero, three equal icon cards, logo strip, testimonial carousel, CTA band, in that order | A composition chosen from the [category playbook](category-playbook.md) and [landing composition](landing-composition.md) |
| Emoji or generic icons in coloured circles as feature visuals | Small real product fragments ([visual craft](visual-craft.md) §6) |
| "Unlock", "seamless", "revolutionize", "next-level", "all-in-one", "supercharge" | A specific claim with a number or example ([UX writing](ux-writing.md)) |
| Glassmorphism, glow and noise on every surface | One surface treatment, used where layering means something |
| `rounded-2xl` and `shadow-lg` on every element | One radius family and elevation only where something floats |
| Inter at every size with weight 700 headings | The chosen direction's type recipe, weight 500 display, size contrast |
| Fake logos, "10,000+ happy customers", five-star ratings without a source | Real proof, or none, or clearly labelled samples |
| Dashboard of eight equal KPI tiles with sparklines | Lead with the exception or decision ([product UI](product-ui.md)) |
| Animated everything on scroll, bouncing buttons, parallax text | Motion only where it explains or confirms ([motion](motion-rules.md)) |
| Dark mode made by inverting light mode | Designed dark tokens ([design tokens](design-tokens.md)) |
| Lorem ipsum, "Feature one", "John Doe" | Real copy and realistic sample data |
| Hand-drawn SVG "illustrations" of real objects | Product UI, licensed photography or a generative field |
