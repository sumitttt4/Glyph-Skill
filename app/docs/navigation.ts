export const docPages = [
  {
    slug: "",
    title: "Introduction",
    group: "Get started",
    description: "What Glyph does and when to use it.",
    sections: [
      ["overview", "What is Glyph?"],
      ["principles", "How to think about it"],
      ["next-steps", "Start building"],
    ],
  },
  {
    slug: "installation",
    title: "Installation",
    group: "Get started",
    description: "Add Glyph to your coding assistant.",
    sections: [
      ["install", "Install with the skills CLI"],
      ["local", "Install from a local checkout"],
      ["verify-install", "Verify the installation"],
    ],
  },
  {
    slug: "workflow",
    title: "Design workflow",
    group: "Use Glyph",
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
    group: "Use Glyph",
    description: "Ways to ask your assistant to use Glyph.",
    sections: [
      ["commands", "Request conventions"],
      ["example", "An example brief"],
    ],
  },
  {
    slug: "guidance",
    title: "Guidance & exceptions",
    group: "Use Glyph",
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
    description: "Adapt Glyph to your brand and project.",
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
      ["discovery", "The assistant cannot find Glyph"],
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
