import { readdir, readFile, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Marked } from "marked";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const base = "skills/design-skill";
const repo = "https://github.com/sumitttt4/Glyph-Skill/blob/main";
const refs = (await readdir(path.join(root, base, "references")))
  .filter((x) => x.endsWith(".md"))
  .sort();
const assets = (await readdir(path.join(root, base, "assets")))
  .filter((x) => x.endsWith(".css"))
  .sort();
const names = [
  `${base}/SKILL.md`,
  ...refs.map((x) => `${base}/references/${x}`),
  ...assets.map((x) => `${base}/assets/${x}`),
  `${base}/THIRD_PARTY_NOTICES.md`,
];
const files = await Promise.all(
  names.map(async (name) => ({
    name,
    text: await readFile(path.join(root, name), "utf8"),
  })),
);

// Library: one docs page per skill file, grouped for navigation.
// Files missing from `groups` still get a page under "More references".
const groups = [
  ["Start here", ["SKILL.md"]],
  [
    "Direction & composition",
    [
      "category-playbook.md",
      "style-directions.md",
      "landing-composition.md",
      "landing-page-research.md",
      "direction-composition-assets.md",
      "layout-rules.md",
    ],
  ],
  [
    "Visual craft",
    [
      "visual-craft.md",
      "starter-kit.md",
      "typography-rules.md",
      "core-color-rules.md",
      "design-tokens.md",
      "iconography-imagery.md",
      "background-rules.md",
    ],
  ],
  [
    "Product UI",
    [
      "product-ui.md",
      "forms.md",
      "data-visualization.md",
      "component-rules.md",
      "ux-writing.md",
    ],
  ],
  [
    "Build & behavior",
    [
      "implementation.md",
      "framework-rules.md",
      "motion-rules.md",
      "responsive-rules.md",
      "accessibility-rules.md",
      "performance.md",
    ],
  ],
  [
    "Quality",
    ["anti-slop-rules.md", "verification.md", "audit-rubric.md"],
  ],
  ["CSS kits", ["starter.css", "product.css"]],
];
const descriptions = {
  "SKILL.md": "The entry point: workflow, instruction roles, what to load when and the four request modes.",
  "starter.css": "Landing-page kit: tokens, header, hero, frames, bento, pricing, FAQ, footer and twelve direction presets.",
  "product.css": "Product kit: app shell, forms, tables, badges, alerts, tabs, dialogs, toasts, density modes and dark tokens.",
  "THIRD_PARTY_NOTICES.md": "Attribution and licences for adapted guidance and referenced libraries.",
};
const slugFor = (file) =>
  file === "SKILL.md"
    ? "entry-point"
    : file.replace(/\.md$/, "").replace(/\.css$/, "-css");
const headingId = (text) =>
  text
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/&[a-z]+;/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
function linkFor(href, from) {
  if (/^[a-z]+:|^#/.test(href)) return href;
  const [target, hash] = href.split("#");
  const resolved = path.posix.normalize(path.posix.join(path.posix.dirname(from), target));
  const file = path.posix.basename(resolved);
  const known = files.some((f) => f.name === resolved) && !file.startsWith("THIRD_PARTY");
  if (known) return `/docs/library/${slugFor(file)}${hash ? "#" + hash : ""}`;
  return `${repo}/${resolved}`;
}
function render(file) {
  const ids = new Map();
  const outline = [];
  const marked = new Marked({ gfm: true });
  marked.use({
    walkTokens(token) {
      if (token.type === "link") token.href = linkFor(token.href, file.name);
    },
    renderer: {
      heading({ tokens, depth }) {
        const text = this.parser.parseInline(tokens);
        if (depth === 1) return "";
        let id = headingId(text) || "section";
        const n = ids.get(id) || 0;
        ids.set(id, n + 1);
        if (n) id += "-" + n;
        outline.push({ id, depth, label: text.replace(/<[^>]+>/g, "").replace(/&amp;/g, "&") });
        return `<h${depth} id="${id}"><a href="#${id}">${text}<span aria-hidden="true">#</span></a></h${depth}>\n`;
      },
    },
  });
  const isCss = file.name.endsWith(".css");
  const kit = path.posix.basename(file.name);
  const source = isCss
    ? `## How to use\n\n${
        kit === "product.css"
          ? "Load after `starter.css` for apps, dashboards, admin and settings screens. It reuses the same `--g-*` tokens, so direction presets still apply, and adds status tokens, density modes and dark tokens. Class reference and markup: [starter kit](../references/starter-kit.md#product-kit); guidance: [product UI](../references/product-ui.md)."
          : "Copy into the project, wrap the page in `class=\"g\"` and optionally set `data-direction` to one of the twelve presets. Class reference and markup: [starter kit](../references/starter-kit.md); recipes: [style directions](../references/style-directions.md)."
      }\n\n## Source\n\n\`\`\`css\n${file.text}\n\`\`\``
    : file.text.replace(/^---\n[\s\S]*?\n---\n/, "");
  const html = marked
    .parse(source)
    .replace(/<table>/g, '<div class="doc-table-wrap" tabindex="0" role="region" aria-label="Table"><table>')
    .replace(/<\/table>/g, "</table></div>");
  const h2 = outline.filter((x) => x.depth === 2);
  const sections = (h2.length >= 2 ? h2 : outline.filter((x) => x.depth <= 3)).map((x) => [x.id, x.label]);
  return { html, sections };
}
const library = [];
const nav = [];
for (const [group, list] of [...groups, ["More references", []]]) {
  const members =
    group === "More references"
      ? files.filter(
          (f) =>
            !groups.some(([, l]) => l.includes(path.posix.basename(f.name))) &&
            !f.name.endsWith("THIRD_PARTY_NOTICES.md"),
        )
      : list.map((n) => files.find((f) => path.posix.basename(f.name) === n)).filter(Boolean);
  for (const file of members) {
    const basename = path.posix.basename(file.name);
    const slug = slugFor(basename);
    const title = file.name.endsWith(".css")
      ? basename
      : basename === "SKILL.md"
        ? "SKILL.md"
        : (file.text.match(/^# (.+)$/m)?.[1] ?? basename);
    const intro = file.text
      .replace(/^---\n[\s\S]*?\n---\n/, "")
      .split("\n\n")
      .find((p) => p.trim() && !p.startsWith("#"));
    const description =
      descriptions[basename] ??
      (intro ?? "")
        .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
        .replace(/[*`]/g, "")
        .split(/(?<=\.)\s/)[0];
    const { html, sections } = render(file);
    const entry = { slug: `library/${slug}`, title, group, description, file: file.name, sections };
    nav.push(entry);
    library.push({ ...entry, html });
  }
}
await mkdir(path.join(root, "app/generated"), { recursive: true });
await writeFile(
  path.join(root, "app/generated/skill-files.json"),
  JSON.stringify(files, null, 2) + "\n",
);
await writeFile(
  path.join(root, "app/generated/library-nav.json"),
  JSON.stringify(nav, null, 2) + "\n",
);
await writeFile(
  path.join(root, "app/generated/library.json"),
  JSON.stringify(library) + "\n",
);
console.log(
  `Prepared ${files.length} source files and ${library.length} library pages for the docs.`,
);
