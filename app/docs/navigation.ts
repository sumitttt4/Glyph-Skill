import libraryNav from "../generated/library-nav.json";
export type DocPage = {
  slug: string;
  title: string;
  group: string;
  description: string;
  sections: ReadonlyArray<readonly [string, string]>;
};
export const guidePages = [
  {
    slug: "",
    title: "Introduction",
    group: "Get started",
    description: "What Design Skill does and when to use it.",
    sections: [
      ["overview", "What is Design Skill?"],
      ["principles", "How to think about it"],
      ["next-steps", "Start building"],
    ],
  },
  {
    slug: "installation",
    title: "Installation",
    group: "Get started",
    description: "Add Design Skill to your coding assistant.",
    sections: [
      ["install", "Install with the skills CLI"],
      ["local", "Install from a local checkout"],
      ["verify-install", "Verify the installation"],
    ],
  },
  {
    slug: "workflow",
    title: "Design workflow",
    group: "Use Design Skill",
    description: "From understanding the product to inspecting the result.",
    sections: [
      ["understand", "Understand and choose"],
      ["compose", "Compose and express"],
      ["build", "Build and interact"],
      ["verify", "Verify and revise"],
    ],
  },
  {
    slug: "commands",
    title: "Commands & prompts",
    group: "Use Design Skill",
    description: "Ways to ask your assistant to use Design Skill.",
    sections: [
      ["commands", "Request conventions"],
      ["example", "An example brief"],
    ],
  },
  {
    slug: "guidance",
    title: "Guidance & exceptions",
    group: "Use Design Skill",
    description: "Understand requirements, patterns and design judgment.",
    sections: [
      ["rules", "Instruction roles"],
      ["break-patterns", "When to break a pattern"],
      ["references", "Research with references"],
    ],
  },
  {
    slug: "files",
    title: "Skill files",
    group: "Reference",
    description: "Read the actual Markdown included in the skill.",
    sections: [
      ["skill-files", "Explore the source"],
      ["loading", "Load guidance selectively"],
    ],
  },
  {
    slug: "customize",
    title: "Customization",
    group: "Reference",
    description: "Adapt Design Skill to your brand and project.",
    sections: [
      ["customize", "Bring your own direction"],
      ["constraints", "Write useful constraints"],
    ],
  },
  {
    slug: "troubleshooting",
    title: "Troubleshooting",
    group: "Reference",
    description: "Resolve installation, discovery and output issues.",
    sections: [
      ["discovery", "The assistant cannot find Design Skill"],
      ["output", "The result feels generic"],
      ["copy", "Copy or theme is unavailable"],
    ],
  },
  {
    slug: "verification",
    title: "Verification",
    group: "Reference",
    description: "Check the implementation and report evidence honestly.",
    sections: [
      ["checklist", "Before shipping"],
      ["evaluation", "Evaluating the skill"],
      ["limitations", "Current evidence limits"],
    ],
  },
  {
    slug: "credits",
    title: "Sources & license",
    group: "Project",
    description: "Attribution, license and reference use.",
    sections: [
      ["credits", "Source acknowledgments"],
      ["license", "MIT license"],
    ],
  },
] as const;
export const groupId = (group: string) =>
  group.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
export const libraryPages = libraryNav as unknown as (DocPage & { file: string })[];
export const libraryGroups = Array.from(new Set(libraryPages.map((x) => x.group)));
export const libraryIndex: DocPage = {
  slug: "library",
  title: "Skill library",
  group: "Reference",
  description:
    "Every file in the skill, rendered from the same Markdown and CSS your assistant reads.",
  sections: libraryGroups.map((g) => [groupId(g), g] as const),
};
// The library index sits with the other Reference guides; library files follow.
const guides: DocPage[] = [...guidePages];
const at = guides.findIndex((p) => p.slug === "files") + 1;
guides.splice(at, 0, libraryIndex);
export const docPages: DocPage[] = [...guides, ...libraryPages];
export const hrefFor = (slug: string) => (slug ? `/docs/${slug}` : "/docs");
export const legacyAnchors: Record<string, string> = {
  "how-it-thinks": "/docs/workflow#understand",
  agents: "/docs/installation#verify-install",
  "rule-files": "/docs/files#skill-files",
  locks: "/docs/guidance#rules",
  "hero-discipline": "/docs/workflow#compose",
  "anti-slop": "/docs/guidance#break-patterns",
  "learn-more": "/docs/credits#credits",
  install: "/docs/installation#install",
  workflow: "/docs/workflow#understand",
  commands: "/docs/commands#commands",
  rules: "/docs/guidance#rules",
  "skill-files": "/docs/files#skill-files",
  customize: "/docs/customize#customize",
  verification: "/docs/verification#checklist",
  troubleshooting: "/docs/troubleshooting#discovery",
  credits: "/docs/credits#credits",
  philosophy: "/docs/guidance#rules",
};
