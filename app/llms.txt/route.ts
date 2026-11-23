import { groupId, libraryGroups, libraryPages } from "../docs/navigation";
export const dynamic = "force-static";
const site = "https://designskill.site";
const raw = "https://raw.githubusercontent.com/sumitttt4/Glyph-Skill/main/";
export function GET() {
  const lines = [
    "# Design Skill",
    "",
    "> An all-in-one frontend design skill for coding assistants: choose a direction, compose with real content, build working states, and verify real renders. Covers landing pages, apps, dashboards, forms, charts, tokens, dark mode, UX copy, accessibility, performance and audits.",
    "",
    "Install: `npx skills add sumitttt4/Glyph-Skill` (skill name `design-skill`). Start with SKILL.md and load only the references a task needs.",
    "",
    ...libraryGroups.flatMap((group) => [
      `## ${group}`,
      "",
      ...libraryPages
        .filter((p) => p.group === group)
        .map((p) => `- [${p.title}](${raw}${p.file}): ${p.description} Docs: ${site}/docs/${p.slug}`),
      "",
    ]),
    "## Optional",
    "",
    `- [Skill library](${site}/docs/library#${groupId(libraryGroups[0])}): every file rendered as docs`,
    "- [Glaze](https://glazeui.xyz/llms.txt): free shadcn/ui component registry from the same author, for projects without a component library",
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
