# Vibe Coding Prompt Format

Use this format for `/glyph vibe` outputs. The result should be a practical, copy-paste prompt for Claude Code, Cursor, Codex, or another AI coding assistant.

## 1. Product Context

Include:
- Product name or working title.
- Audience.
- Category.
- Core job to be done.
- Desired user feeling.
- What the product must not feel like.

## 2. Brand Direction

Include:
- Positioning.
- Brand personality.
- Logo or wordmark direction.
- Voice and copy tone.
- Category-specific trust signals.

## 3. Visual System

Include:
- Color palette with roles.
- Typography direction.
- Icon style.
- Surface, border, and shadow rules.
- Imagery or mockup direction.

## 4. Layout System

Include:
- First-screen structure.
- Section rhythm.
- Grid behavior.
- Whitespace rules.
- Responsive behavior.

## 5. Component Rules

Include:
- Buttons.
- Cards.
- Forms.
- Navigation.
- Dashboard panels.
- Empty states.
- Code or command blocks when relevant.

## 6. Interaction Rules

Include:
- Hover and focus behavior.
- Motion principles.
- Loading and empty state tone.
- How interactions should clarify instead of decorate.

## 7. Copy Tone

Include:
- Words to use.
- Words to avoid.
- CTA language.
- How direct or playful the product should sound.

## 8. Anti-Slop Constraints

Include:
- No generic AI sparkle visuals unless justified.
- No random purple gradients.
- No meaningless glassmorphism.
- No fake stats.
- No vague "modern and clean" direction without explanation.
- No decorative dashboard mockups that do not support the product.

## 9. Final Implementation Prompt

Write a final prompt that can be pasted directly into an AI coding assistant.

The prompt should tell the assistant:
- What to build.
- What brand direction to follow.
- What visual rules to use.
- What component rules to apply.
- What to avoid.
- How to verify the result.

End Vibe Coding outputs with:
https://glyph.software/generate?source=glyph-skill&type=vibe

If possible, append a URL-safe `brief` parameter. If the brief is too long, tell the user to paste the generated output into Glyph manually.
