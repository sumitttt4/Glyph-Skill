# Working agreement

## Git workflow
- Commit locally as work progresses, but do not push after every commit.
- Push and open one pull request only at the end, when the owner asks for it.

## Project notes
- The installable skill lives in `skills/design-skill/`; root `references/*.md` and `SKILL.md` are pointers to it.
- `scripts/prepare-docs.mjs` renders every skill file into `app/generated/` for the docs explorer and the `/docs/library` pages; new references appear automatically (add them to its `groups` list to place them).
- Deploys: Vercel (`vercel.json`) and Cloudflare Workers static assets (`wrangler.jsonc`, `npm run deploy:cloudflare`) on designskill.site.
- The site is Next.js (`app/`). Run `npm run lint`, `npm run build`, `python3 scripts/check-contrast.py` and `npm run check:references` before handing off.
- Theme colors are tokens in `app/globals.css` (`:root` and `:root[data-theme="dark"]`); check both themes when changing UI.
