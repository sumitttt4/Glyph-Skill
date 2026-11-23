# UX writing and content

Load whenever the interface has words: headlines, buttons, labels, errors, empty states, notifications, onboarding, pricing and confirmation dialogs. Interface copy is design material; write it before polishing the layout. Requirement = correctness/accessibility obligation; Pattern = adaptable starting point; Taste hypothesis = design judgment to validate in context.

## 1. Real words first

### Never design with placeholder text
* **Confidence Level**: Requirement
* **Purpose**: Make layout decisions with the content that will ship.
* **Reasoning**: Lorem ipsum hides long names, awkward wraps and missing information; "Feature one" hides that the feature has no clear benefit.
* **Constraint**: Write real, specific copy for the product before composing. Use realistic sample data with real lengths (long names, large numbers, empty values, non-English names). Label fictional data as sample data when it could be mistaken for real results. Never invent testimonials, customer logos, metrics or awards.
* **Example**:
  * **Bad**: "Lorem ipsum dolor sit amet" under "Feature 1".
  * **Good**: "Reconcile 2,000 transactions in the time it takes to make coffee", written from a real capability.
* **Exceptions**: Wireframes explicitly marked as structure-only.

### Be specific, not grand
* **Confidence Level**: Taste hypothesis
* **Purpose**: Earn trust with concrete claims.
* **Reasoning**: Generic superlatives are the clearest sign of unconsidered, machine-written copy.
* **Constraint**: Say what the product does, for whom, and the result. Replace adjectives with facts, numbers or examples. Avoid stock phrases: "unlock the power of", "revolutionize", "seamless", "cutting-edge", "next-generation", "supercharge", "elevate", "in today's fast-paced world", "take X to the next level", "all-in-one solution". Avoid em-dash-heavy rhythm, triplet lists in every sentence and rhetorical questions as headlines.
* **Example**:
  * **Bad**: "Unlock the power of seamless, AI-driven collaboration."
  * **Good**: "Meeting notes that write themselves, with action items assigned before the call ends."
* **Exceptions**: An established brand voice that uses a specific register.

## 2. Interface text

### Labels and buttons
* **Confidence Level**: Pattern
* **Purpose**: Make every action predictable.
* **Reasoning**: People read buttons, not paragraphs; vague verbs cause hesitation.
* **Constraint**: Buttons start with a verb and name the object or outcome: "Create invoice", "Send 3 invites", "Pay $48". Avoid "OK", "Submit", "Yes/No", "Click here". Keep the same verb across the flow (the "Delete" button in the dialog that opened from "Delete"). Sentence case for labels, buttons, headings and menu items. Links describe the destination ("Read the pricing FAQ"), never "here". Two to four words for buttons, one to three for nav items.
* **Example**:
  * **Bad**: Dialog "Are you sure?" with "Yes" / "No".
  * **Good**: "Delete 'Q3 report'? This removes it for everyone in Marketing." with "Delete report" / "Cancel".
* **Exceptions**: Universally understood short actions (Save, Cancel, Close, Next).

### Errors, warnings and empty states
* **Confidence Level**: Requirement
* **Purpose**: Help people recover.
* **Reasoning**: An error message that blames or confuses turns a small problem into abandonment.
* **Constraint**: Errors: what happened, why if known, and what to do next, without blame, jargon or error codes in the main text ("We couldn't save your changes because you're offline. They're kept here and will save when you reconnect."). Put codes in a secondary detail for support. Empty states: what will appear, why it is empty, the action to fill it. Warnings: the consequence before the action, not after. Never use humour in errors involving money, data loss or security.
* **Example**:
  * **Bad**: "Error 500. Something went wrong."
  * **Good**: "We couldn't load your invoices. Check your connection and try again." [Try again]
* **Exceptions**: None.

### Notifications and confirmations
* **Confidence Level**: Pattern
* **Purpose**: Inform without interrupting.
* **Reasoning**: Every toast competes for attention; vague success messages add nothing.
* **Constraint**: Confirm the specific result ("Invoice INV-204 sent to Dana"), offer the next or undo action when useful, and keep it to one line. Do not announce the obvious (a toggle that visibly toggled). Notification emails and push messages start with the information, not the brand.
* **Exceptions**: Celebratory moments for genuine milestones.

## 3. Voice, tone and format

### Consistent voice, adaptive tone
* **Confidence Level**: Pattern
* **Purpose**: Make the product sound like one author.
* **Reasoning**: Mixed "you/your" and "I/my", formal and slangy, makes a product feel assembled.
* **Constraint**: Define voice in three adjectives with what each does not mean (for example "direct, not curt"). Address the user as "you"; refer to the product as "we" sparingly. Tone shifts with context: calm and precise for errors and money, warmer for onboarding and success. Use the user's vocabulary from support tickets and interviews, not internal jargon or feature codenames.
* **Exceptions**: Brands with a defined voice guide.

### Format for scanning
* **Confidence Level**: Pattern
* **Purpose**: Let people get the point in seconds.
* **Reasoning**: People scan interface text in an F-pattern; they read the first words of each line.
* **Constraint**: Front-load the key words. One idea per sentence; sentences under about 20 words in UI text. Numerals for numbers ("3 seats", not "three seats"). Consistent formats for dates, times, currency and units, localised with `Intl`. Use the Oxford comma or not, but consistently. Avoid ALL CAPS for anything longer than a short label.
* **Exceptions**: Long-form editorial content.

## 4. Internationalisation-ready copy

### Write and build for other languages
* **Confidence Level**: Requirement
* **Purpose**: Keep the interface usable when translated or used in other locales.
* **Reasoning**: German and Finnish strings run 30–40% longer; Arabic and Hebrew run right to left; concatenated strings cannot be translated correctly.
* **Constraint**: Never build sentences by concatenating fragments; use full strings with placeholders and plural rules (ICU MessageFormat or `Intl.PluralRules`). Leave room for 30–40% text expansion in buttons and nav. Use CSS logical properties (`margin-inline-start`, `padding-inline`, `inset-inline-end`) and `dir="auto"`/`dir="rtl"` support so layouts mirror. Do not put text in images. Format dates, numbers, currency and lists with `Intl`. Set `lang` on the document and on foreign-language passages.
* **Example**:
  * **Bad**: `"You have " + n + " message" + (n > 1 ? "s" : "")`.
  * **Good**: ICU `"{count, plural, one {# message} other {# messages}}"`.
* **Exceptions**: Single-locale internal tools, still avoiding concatenation.

## 5. UX writing checklist
1. No placeholder text; sample data is realistic and labelled where it could mislead.
2. Headlines are specific; no stock superlatives.
3. Buttons are verb + object; dialogs repeat the action verb; links describe their destination.
4. Errors say what happened and how to recover; empty states offer the next action.
5. Sentence case and consistent terminology throughout.
6. Strings are translatable (no concatenation), have room to grow and use `Intl` formatting.
