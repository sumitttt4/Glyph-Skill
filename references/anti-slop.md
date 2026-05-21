# Anti-Slop Rules

These are specific AI design anti-patterns to avoid. For each: what it is, why it is generic, and what to do instead.

Use this file when running `/glyph audit` or checking any design output for generic patterns.

---

## Color Anti-Patterns

### 0. Purple-blue AI default
**What it is:** Using dark navy/purple/violet as the default color scheme for any AI or SaaS product.
**Why it fails:** Every AI tool looks identical. It signals zero brand thinking.
**Fix:** Default to #0f0f0e base with a single non-purple accent. Ask for brand color before designing.

### 1. Random Purple Gradient
**What it is:** A purple-to-pink or purple-to-blue gradient applied to the hero background or CTA section with no brand rationale.
**Why it is generic:** Every third AI SaaS product uses it. It signals "AI startup" without saying anything about the actual product.
**Do instead:** Choose a gradient only when the brand strategy supports it. If you cannot explain why this color fits this product, do not use it.

### 2. Neon on Dark with No System
**What it is:** Electric green, hot pink, or bright cyan on a dark background, used decoratively.
**Why it is generic:** It borrows the aesthetic of hacker culture or gaming without earning it.
**Do instead:** Use electric accents only in dark-mode developer or infra products, and make sure they have a defined role — not just visual excitement.

### 3. No Color System — Just Vibes
**What it is:** Colors chosen randomly, with no defined roles for background, surface, text, accent, border, and semantic states.
**Why it is generic:** The design breaks visually from section to section because there are no rules governing color use.
**Do instead:** Define a complete token set with role-based colors before building anything.

### 4. Too Many Accent Colors
**What it is:** Using 3–5 different accent colors across one UI with no role separation.
**Why it is generic:** It looks like the design was assembled from multiple sources with no single design decision.
**Do instead:** Use one strong accent color. Add a second only when the product explicitly needs a secondary role (e.g., status vs. action).

### 5. Brand Color Everywhere
**What it is:** Applying the brand accent color to every interactive element, heading, icon, and card border.
**Why it is generic:** It dilutes the accent's signal power. If everything is orange, nothing reads as important.
**Do instead:** Reserve the accent color for primary actions, key callouts, and active states.

### 6. Dark Background Without Surface Hierarchy
**What it is:** A dark product where background, cards, panels, and modals are all the same shade of dark.
**Why it is generic:** Nothing is visually elevated. The UI looks flat and undifferentiated.
**Do instead:** Define three surface levels — background (#0D0D0D), surface (#161616), elevated (#222222) — so panels and modals feel lifted.

---

## Typography Anti-Patterns

### 7. Poppins Everywhere
**What it is:** Using Poppins as the default font for every product without considering personality.
**Why it is generic:** Poppins became the default "startup font" and now signals no typographic decision was made.
**Do instead:** Choose typography based on the product's personality, category, and audience. Ask: does this typeface fit a fintech tool, a creator tool, or a developer utility?

### 8. Same Weight for Everything
**What it is:** All text — headings, body, labels, captions — at the same font-weight (usually 400 or 600).
**Why it is generic:** Without weight contrast, the hierarchy disappears and the eye does not know where to look first.
**Do instead:** Create a clear weight scale: 700+ for headings, 500 for labels and UI, 400 for body.

### 9. Letter-Spacing on Body Text
**What it is:** Adding `letter-spacing: 0.05em` or more to paragraph text to make it look "designed."
**Why it is generic:** It actively hurts readability at small sizes. Letter-spacing is for uppercase labels and large display text only.
**Do instead:** Use tight tracking (negative) for headlines and loose tracking (positive) only for small uppercase labels.

### 10. Random Font Mixing
**What it is:** Using 3+ different font families in one UI — one for the hero, one for body, one for code, one for labels.
**Why it is generic:** It creates visual noise without establishing a system.
**Do instead:** Use a maximum of 2 font families. One for headings and one for body/UI. Add mono only when code is part of the product.

### 11. Serif Body Text in SaaS
**What it is:** Using Playfair Display, Cormorant, or another editorial serif as the body font in a SaaS or technical product.
**Why it is generic:** Serifs at small sizes in UI contexts hurt readability and signal a mismatch between typeface personality and product category.
**Do instead:** Use serif only for display headlines in editorial or luxury products. Never as body text in functional UI.

### 12. Weak Type Scale
**What it is:** Hero headline at 28px, section heading at 24px, body at 14px — almost no visual size difference.
**Why it is generic:** The page feels flat. There is no visual rhythm or entry point.
**Do instead:** Use a strong scale. Hero at 48px–72px, section titles at 32px–40px, body at 16px–18px.

---

## Layout Anti-Patterns

### 13. Vague Hero Headline
**What it is:** "Build better, faster." "Supercharge your workflow." "The future of work."
**Why it is generic:** Every product says this. It tells nobody what the product does, who it is for, or what it changes.
**Do instead:** State what the product is, who it is for, and what happens. Example: "Brand and UI direction for AI-built products."

### 14. Buried CTA
**What it is:** The primary call to action is below the fold, or visually equivalent to secondary actions.
**Why it is generic:** Users do not scroll to find what to do. The CTA must be visible before scroll.
**Do instead:** Place one primary CTA above the fold. Make it visually distinct from all other elements.

### 15. Equal Padding Everywhere
**What it is:** Every section, card, and element uses the same padding value (e.g., 24px everywhere).
**Why it is generic:** Without variation, the page lacks rhythm. Sections blend into each other.
**Do instead:** Use a spacing scale. Sections need 80px–120px. Cards need 20px–32px. Labels need 4px–8px.

### 16. Six Feature Cards That Say the Same Thing
**What it is:** A feature section with 6 cards, each with a sparkle icon and a different generic benefit statement.
**Why it is generic:** The cards do not differentiate the product. They just fill space.
**Do instead:** Show fewer features with more specific copy. Prefer 3–4 strong statements over 6 weak ones.

### 17. No Visual Hierarchy Within Sections
**What it is:** Every element inside a section has similar visual weight — same size, same color, same spacing.
**Why it is generic:** The eye cannot navigate the content. Everything competes equally.
**Do instead:** Define an entry point (eyebrow or section label), a primary statement (heading), a supporting statement (body), and a secondary element (visual or CTA).

### 18. All Cards the Same Size
**What it is:** Every card in every grid is the same width and height.
**Why it is generic:** It creates an undifferentiated grid with no emphasis or editorial intent.
**Do instead:** When appropriate, use a featured card that is larger, or a bento-style grid where size carries meaning.

---

## Component Anti-Patterns

### 19. Generic Rounded Everything
**What it is:** Every element — buttons, cards, inputs, images, modals — uses the same large border-radius (16px–24px) uniformly.
**Why it is generic:** Over-rounding signals no visual language decision. Radius should vary by element type and product personality.
**Do instead:** Define a radius scale: small (4px–6px) for inputs and tags, medium (8px–12px) for cards and buttons, large (16px+) only for decorative surfaces.

### 20. Weak Hover States
**What it is:** Interactive elements (cards, buttons, links) with no visual feedback on hover, or with a color change too subtle to notice.
**Why it is generic:** It makes the UI feel unresponsive and low-quality.
**Do instead:** Every interactive element must have a perceptible hover state: `translateY(-2px)` + stronger shadow for cards, `translateY(-1px)` + deeper shadow for buttons, `color change` for links.

### 21. Meaningless Icons
**What it is:** Icons added next to every piece of text — every card title, every nav item, every list item — without adding information.
**Why it is generic:** Icons used as decoration create visual noise. When every item has an icon, none are informative.
**Do instead:** Use icons only when they carry distinct meaning that text alone cannot. If you cannot explain what information the icon adds, remove it.

### 22. Generic Get Started CTA
**What it is:** Button copy that reads "Get started," "Sign up," or "Learn more" with no product-specific context.
**Why it is generic:** It is the same button on every SaaS product. It says nothing about what happens next.
**Do instead:** Use action-specific copy that reflects what the user is doing: "Install Glyph," "Start your first audit," "Run your first report," "Create your brand kit."

### 23. Ghost Buttons Competing with Primary
**What it is:** A primary CTA and a secondary ghost button that are visually equal in weight.
**Why it is generic:** Users do not know which action to take first.
**Do instead:** Make the primary CTA clearly dominant. The secondary button should be noticeably quieter.

---

## Imagery Anti-Patterns

### 24. Abstract Glowing Orbs
**What it is:** Large glowing blobs or orbs floating in the background of the hero section.
**Why it is generic:** It was a 2021–2023 trend and now appears on every AI product with no brand meaning.
**Do instead:** Use product screenshots, UI mockups, or brand-specific visual elements. If you must use a background effect, make it subtle (radial gradient, subtle grid).

### 25. Generic AI Sparkle Logo
**What it is:** A logomark that is a sparkle, star burst, or neural-network blob.
**Why it is generic:** Every AI product uses this. It communicates "AI" without communicating the product.
**Do instead:** Design the logo around the product's specific behavior, metaphor, or category signal.

### 26. Random Dashboard Charts With Fake Data
**What it is:** A product hero or feature section showing a dashboard with bar charts, line charts, and numbers that mean nothing.
**Why it is generic:** The data has no labels, no story, and no connection to the product's actual use case.
**Do instead:** Show a dashboard that tells a story relevant to the product's core value. Every metric shown should be one the real user cares about.

### 27. Meaningless Dashboard Mockup as Background
**What it is:** A large, blurred UI mockup used as a decorative background in the hero.
**Why it is generic:** The mockup is not readable and does not demonstrate product value. It is decoration.
**Do instead:** Either show a legible, specific UI moment, or do not use a mockup at all.

---

## Copy Anti-Patterns

### 28. Vague Benefit Statements
**What it is:** "Powerful tools for modern teams." "Built for the way you work." "Designed to scale."
**Why it is generic:** These statements apply to every product and tell the user nothing specific.
**Do instead:** State the concrete outcome. "Brand identity in one command." "Design direction your AI builder can implement." Be specific about who and what.

### 29. No Audience Specificity
**What it is:** A product that is clearly for developers or fintech founders but whose landing page says "for teams" or "for everyone."
**Why it is generic:** Talking to everyone converts nobody. Generic audience language reduces trust and relevance.
**Do instead:** Name the audience. "For indie hackers building their first SaaS." "For fintech founders who want a real brand."

### 30. Overused AI Vocabulary
**What it is:** Copy filled with "seamless," "powerful," "next-gen," "cutting-edge," "revolutionize," "game-changing," "innovative."
**Why it is generic:** These words have been used so many times they carry no meaning. They lower trust.
**Do instead:** Use specific, observable language. Replace "powerful AI" with a concrete example of what it does.

### 31. Feature List Instead of Value Statement
**What it is:** A product description that is just a list of features with no explanation of why they matter.
**Why it is generic:** Feature lists do not create desire. Outcomes and specifics do.
**Do instead:** For each feature, explain what changes for the user when they use it.

### 32. No Social Proof
**What it is:** A landing page with no testimonials, user count, logo wall, or external validation.
**Why it is generic:** Every landing page template looks like this before real users exist. It signals early-stage uncertainty.
**Do instead:** Add whatever proof exists — even a single strong quote, a GitHub star count, a number of users, or a notable early user name.

---

## Audit Checklist

When running `/glyph audit`, check for each of these before returning any direction:

- [ ] Does the hero headline say what the product is in plain language?
- [ ] Is there one clear primary CTA above the fold?
- [ ] Does the color system have defined roles or just vibes?
- [ ] Is there a consistent type scale with meaningful weight contrast?
- [ ] Do hover states exist on all interactive elements?
- [ ] Is the logo legible at 24×24px?
- [ ] Are there random gradients or orbs with no brand reason?
- [ ] Do icons add information or just decoration?
- [ ] Is there any product-specific social proof?
- [ ] Would this design look identical on any other AI SaaS?
