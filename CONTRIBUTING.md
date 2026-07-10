# Contributing to Glyph

Thanks for wanting to make AI-generated interfaces less terrible. Glyph is an open design-system skill — every rule, constraint, and pattern in this repo directly shapes how AI coding assistants build frontends. Your contributions have real impact.

## Project Philosophy

Glyph is opinionated by design. Every rule exists to block a specific, observable AI anti-pattern and replace it with a production-grade alternative. We don't add rules for theoretical purity — we add them because we've seen the bad output and can define the fix.

**Guiding principles:**

- Rules must be specific and enforceable, not vague design advice.
- Every rule needs a concrete Bad/Good example.
- Rules should work across agents (Claude Code, Cursor, Codex, etc.), not be framework-specific.
- Less is more — a focused ruleset beats an exhaustive one.

## Types of Contributions

### 🆕 New Rule Categories
Propose an entirely new rule file (e.g., `dark-mode-rules.md`, `data-viz-rules.md`). These go in `references/` and must follow the existing format.

### 🔧 Refine Existing Rules
Improve clarity, add edge cases, fix thresholds, or add new anti-patterns to an existing rule file.

### 🐛 Bug Reports
Report cases where an AI assistant ignores a Glyph rule, or where a rule produces unintended side effects.

### 📖 Documentation
Improve the README, add usage examples, or clarify installation steps.

## How to Contribute

### Step 1: Open an Issue First

Before writing anything, open an issue to discuss what you want to add or change. Use the appropriate issue template:

- **New rule category** → [New Rule Category template](https://github.com/sumitttt4/Glyph-Skill/issues/new?template=new-rule-category.md)
- **Refine existing rules** → [Refine Existing Rules template](https://github.com/sumitttt4/Glyph-Skill/issues/new?template=refine-existing-rules.md)
- **Bug report** → [Bug Report template](https://github.com/sumitttt4/Glyph-Skill/issues/new?template=bug-report.md)

This prevents wasted effort and lets the community weigh in on the approach.

### Step 2: Fork & Branch

```bash
git clone https://github.com/YOUR_USERNAME/Glyph-Skill.git
cd Glyph-Skill
git checkout -b add-dark-mode-rules  # descriptive branch name
```

### Step 3: Make Your Changes

- **One rule category per PR.** Don't bundle unrelated rule changes.
- **Follow the rule file format** (see below).
- **Update `SKILL.md`** if you're adding a new reference file (add it to the References section).
- **Update `README.md`** if you're adding a new file to the bundle list.

### Step 4: Test Locally

Install the skill in a test project and verify your rules work:

```bash
# In a test project directory
npx skills add /path/to/your/local/Glyph-Skill

# Then prompt your AI assistant with something that should trigger your rule
# Verify the output respects the constraint
```

### Step 5: Submit a Pull Request

- Reference the issue number in your PR description.
- Include a brief summary of what the rule prevents and what it enforces.
- Include a real prompt + output example showing the rule in action (if possible).

## Rule File Format

Every rule in the `references/` directory follows this structure. **Do not deviate from this format** — consistency is how agents parse and apply the rules reliably.

```markdown
### [Anti-Pattern Name]
* **Confidence Level**: Critical | Recommended
* **Purpose**: One-line description of what this rule prevents.
* **Reasoning**: Why this pattern is harmful to production interfaces.
* **Constraint**: The specific, enforceable restriction.
* **Example**:
  * **Bad**: Concrete code or design description showing the anti-pattern.
  * **Good**: Concrete code or design description showing the correct approach.
* **Exceptions**: When this rule can be relaxed (or "None").
```

**Field guidelines:**

| Field | Guidance |
|---|---|
| Confidence Level | Use `Critical` for rules that should never be broken. Use `Recommended` for strong preferences with valid exceptions. |
| Purpose | Keep it under 15 words. Focus on the outcome, not the mechanism. |
| Reasoning | Explain *why* the AI generates this pattern and *why* it's harmful. |
| Constraint | Be programmatically precise. "Any background in the hsl(240–280) range" is better than "avoid purple backgrounds." |
| Bad example | Must be realistic — use actual class names, hex codes, or HTML/JSX snippets. |
| Good example | Must be a drop-in replacement, not a vague alternative. |
| Exceptions | Be explicit. "Mobile screens" or "Rounded consumer apps where brand rules specify it" — not just "sometimes." |

## Naming Conventions

- Rule files: lowercase, hyphenated — `dark-mode-rules.md`, `data-viz-rules.md`
- Rule headings: Title case — `### Missing Interactive Feedback`
- Branch names: descriptive, hyphenated — `add-dark-mode-rules`, `refine-typography-tracking`

## What We Won't Merge

- Rules that are subjective preferences without observable anti-patterns.
- Changes that break existing rule structures or formats.
- PRs that bundle multiple unrelated rule categories.
- Rules that only apply to a single framework (use `framework-rules.md` for those).

## Code of Conduct

Be respectful, constructive, and specific. Design opinions are welcome when backed by reasoning. We're all here to make AI output better.

## Questions?

Open a [Discussion](https://github.com/sumitttt4/Glyph-Skill/discussions) or reach out on [X (Twitter)](https://x.com/sumitdotme).
