import { readdir, readFile, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const base = "skills/glyph";
const refs = (await readdir(path.join(root, base, "references")))
  .filter((x) => x.endsWith(".md"))
  .sort();
const names = [
  `${base}/SKILL.md`,
  ...refs.map((x) => `${base}/references/${x}`),
  `${base}/THIRD_PARTY_NOTICES.md`,
];
const files = await Promise.all(
  names.map(async (name) => ({
    name,
    text: await readFile(path.join(root, name), "utf8"),
  })),
);
await mkdir(path.join(root, "app/generated"), { recursive: true });
await writeFile(
  path.join(root, "app/generated/skill-files.json"),
  JSON.stringify(files, null, 2) + "\n",
);
console.log(`Prepared ${files.length} source files for the docs explorer.`);
