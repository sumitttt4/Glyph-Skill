# Forms, input and validation

Load for sign-up, checkout, settings, onboarding, search, filters, multi-step flows and any screen where people type or choose. Pair with [UX writing](ux-writing.md) for labels and error text and [accessibility](accessibility-rules.md). Requirement = correctness/accessibility obligation; Pattern = adaptable starting point; Taste hypothesis = design judgment to validate in context.

## 1. Fields

### Every field has a persistent label
* **Confidence Level**: Requirement
* **Purpose**: Keep the question visible while answering it.
* **Reasoning**: Placeholder-only fields lose their label on the first keystroke, fail screen readers and look filled-in when empty.
* **Constraint**: A visible `<label for>` above the field (top-aligned labels scan fastest). Help text sits between label and field or below it, linked with `aria-describedby`. Placeholders show an example format only ("name@company.com"), never the label or instructions. Mark the minority: if most fields are required, mark optional ones "(optional)"; otherwise mark required ones, and set `required`/`aria-required`.
* **Example**:
  * **Bad**: A grey "Email" placeholder that vanishes, asterisks with no legend.
  * **Good**: Label "Work email", hint "We'll send the invite here", placeholder "you@company.com".
* **Exceptions**: A single search field with a visible search button and an accessible name may omit the visible label.

### Use the right input
* **Confidence Level**: Requirement
* **Purpose**: Get the right keyboard, autofill and validation for free.
* **Reasoning**: Browsers and password managers already solve most input problems when given the correct attributes.
* **Constraint**: Set `type` (`email`, `tel`, `url`, `number` only for quantities, `password`, `search`, `date` where the native picker suits the audience), `inputmode` (`numeric` for codes and card numbers, `decimal` for amounts), and `autocomplete` tokens (`name`, `email`, `street-address`, `postal-code`, `cc-number`, `one-time-code`, `new-password`, `current-password`). Never block paste. Use `spellcheck="false"` and `autocapitalize="off"` for usernames, codes and emails.
* **Example**:
  * **Bad**: `type="number"` for a card number, which strips leading zeros and shows spinners.
  * **Good**: `type="text" inputmode="numeric" autocomplete="cc-number"`.
* **Exceptions**: None for autocomplete on personal data fields.

### Choose controls by number of options
* **Confidence Level**: Pattern
* **Purpose**: Minimise effort per choice.
* **Reasoning**: A dropdown hides two options behind an extra click; radio buttons for forty countries are unreadable.
* **Constraint**: 2 options: switch (immediate effect) or radio/segmented control (submitted with the form). 3–6: radio group or segmented control, all visible. 7–15: select. More than 15 or searchable data: combobox with type-ahead. Multiple choice: checkboxes (few) or multi-select combobox with chips (many). Dates: three fields or a text field for known dates (birthdays), a calendar picker for nearby dates (bookings). Size fields to the expected input (postcode short, address long).
* **Exceptions**: Brand or space constraints may justify a select for 4–6 options on mobile.

## 2. Validation

### Validate at the right moment
* **Confidence Level**: Requirement
* **Purpose**: Catch errors early without nagging.
* **Reasoning**: Errors on every keystroke punish people mid-typing; errors only after submit send them hunting.
* **Constraint**: Validate a field on blur once it has been touched, then live on input while it is invalid so the error clears as soon as it is fixed. Validate everything on submit. Never disable the submit button to signal invalid input; let people submit and show what is wrong. Show server errors (taken username, declined card) next to the relevant field. Keep entered values after any error, including server errors and page reloads where possible.
* **Example**:
  * **Bad**: "Invalid email" appears after typing "j", and the greyed-out Submit gives no reason.
  * **Good**: On blur, "Enter an email address like name@example.com"; it disappears the moment the address becomes valid.
* **Exceptions**: Password strength meters and character counters may update live from the first keystroke.

### Write errors that fix themselves
* **Confidence Level**: Requirement
* **Purpose**: Tell people exactly how to recover.
* **Reasoning**: "Invalid input" is a judgment, not an instruction.
* **Constraint**: Error text says what to do, in plain words, next to the field, in the danger colour with an icon (never colour alone), linked with `aria-describedby` and `aria-invalid="true"`. On submit with errors, move focus to the first invalid field, or to an error summary at the top for long forms, listing each error as a link to its field. Accept flexible formats (spaces in phone and card numbers, any case in emails) and normalise them yourself rather than rejecting them.
* **Example**:
  * **Bad**: "Error: field 3 format invalid".
  * **Good**: "Enter the date as DD/MM/YYYY, for example 07/03/1990".
* **Exceptions**: Security-sensitive errors (login) stay generic: "Email or password is incorrect".

## 3. Structure and flow

### Fewer fields, logical groups
* **Confidence Level**: Pattern
* **Purpose**: Reduce abandonment.
* **Reasoning**: Each field costs attention; unexplained fields cost trust.
* **Constraint**: Remove every field you cannot justify; ask later for anything not needed now. One column for most forms (multi-column only for tightly related short fields such as city/postcode or first/last name). Group related fields with `<fieldset>` and `<legend>`. Order fields the way people think (name before address before payment). Explain why you ask for sensitive data next to the field.
* **Exceptions**: Dense internal admin forms may use two columns at wide widths.

### Multi-step flows
* **Confidence Level**: Pattern
* **Purpose**: Make long processes feel finite and safe.
* **Reasoning**: People abandon flows when they cannot see the end or fear losing work.
* **Constraint**: Split by topic, not by an arbitrary field count. Show progress as named steps ("Account · Workspace · Invite"), not only a percentage. Allow Back without losing data, save drafts automatically for long flows, and show a review step before irreversible submission. The primary button names the next step ("Continue to payment"), the last one names the outcome ("Pay $48").
* **Exceptions**: Two or three short questions fit on one page.

### Buttons and submission
* **Confidence Level**: Requirement
* **Purpose**: Prevent double submits and ambiguity.
* **Reasoning**: Slow networks turn impatient clicks into duplicate orders.
* **Constraint**: One primary button per form, labelled with the specific action ("Create project", not "Submit"). While submitting, keep the label width stable, show an inline spinner, set `aria-busy` and ignore further clicks; re-enable on failure. Enter submits single-line forms. Cancel is a secondary or text button, placed consistently. Confirm success with the result, not just a toast ("Project created" and the project open).
* **Exceptions**: Instant-save settings have no submit button.

## 4. Special inputs
| Input | Do |
| --- | --- |
| Password | Show/hide toggle with an accessible name; show requirements up front and tick them live; allow paste and password managers; `autocomplete="new-password"` on sign-up. |
| One-time code | One field (`autocomplete="one-time-code"`, `inputmode="numeric"`), or segmented boxes that accept paste of the full code and move focus automatically; offer resend with a countdown. |
| Search | `type="search"`, a clear button, results that update after a short debounce (150–300ms) or on Enter, and a "No results for 'x'" state with suggestions. |
| File upload | A real button plus drop zone; state accepted types and size limit before upload; show per-file progress, errors and remove; keep the file list after validation errors. |
| Money | Currency symbol as a prefix outside the editable text, `inputmode="decimal"`, format on blur, store minor units. |
| Phone | One field accepting any formatting, with a country selector defaulting from locale. |
| Address | Autocomplete where available, always with a manual entry fallback; country first because it changes the remaining fields. |
| Toggles | A switch means immediate effect; label states what is on ("Email me weekly reports"), not "Enable". |

## 5. Forms checklist
1. Every field has a visible label, correct `type`, `inputmode` and `autocomplete`.
2. Required/optional marked consistently; hints linked with `aria-describedby`.
3. Errors appear on blur/submit, explain the fix, use icon plus text, and focus moves to the first error.
4. Values survive errors; submit is never disabled to signal invalidity; double-submit is prevented.
5. Keyboard only: tab order matches visual order, Enter submits, custom controls work with arrows and Space.
6. Zoom to 200% and 320px width: labels, errors and buttons still visible without horizontal scroll.
7. Success state confirms the actual result.
