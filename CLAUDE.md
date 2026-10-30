# Working agreement

## Git workflow
- Commit locally as work progresses, but do not push after every commit.
- Push and open one pull request only at the end, when the owner asks for it.

## Project notes
- The installable skill lives in `skills/glyph/`; root `references/*.md` and `SKILL.md` are pointers to it.
- The site is Next.js (`app/`). Run `npm run lint`, `npm run build`, `python3 scripts/check-contrast.py` and `npm run check:references` before handing off.
- Theme colors are tokens in `app/globals.css` (`:root` and `:root[data-theme="dark"]`); check both themes when changing UI.
