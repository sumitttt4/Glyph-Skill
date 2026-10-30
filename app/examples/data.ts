// Each example records the Glyph workflow behind it: the brief, the
// directions compared, what carries the personality and what was checked.
export type Example = {
  slug: string;
  name: string;
  kind: string;
  brief: string;
  audience: string;
  task: string;
  chosen: string;
  rejected: string[];
  carrier: string;
  type: string;
  color: string;
  interaction: string;
  checks: string[];
  references: string[];
};
export const examples: Example[] = [
  {
    slug: "ledgerline",
    name: "Ledgerline",
    kind: "B2B finance software",
    brief:
      "Introduce a month-end close tool to controllers at 20–200 person companies.",
    audience: "Controllers and finance leads who distrust marketing claims.",
    task: "See how the product handles unmatched transactions, then book a walkthrough.",
    chosen:
      "Product as the hero: a working exceptions table with sample data, calm and dense.",
    rejected: [
      "Editorial ROI story: hides the product behind claims we cannot prove.",
      "Integration-logo wall: says nothing about the close itself.",
    ],
    carrier: "The product UI and its numbers.",
    type: "IBM Plex Sans for UI, Plex Mono with tabular numerals for amounts.",
    color: "Neutral paper; green only for matched, amber only for exceptions.",
    interaction: "Filter the sample ledger between all items and exceptions.",
    checks: [
      "Filter works by keyboard and announces the result count",
      "Amounts align in tabular figures",
      "Table scrolls inside its frame at 320px",
    ],
    references: ["layout-rules.md", "core-color-rules.md", "component-rules.md"],
  },
  {
    slug: "morrow",
    name: "Morrow Clay Studio",
    kind: "Local ceramics workshop",
    brief:
      "Help first-time visitors pick a beginner class at a neighborhood ceramics studio.",
    audience: "Curious adults who have never touched a wheel.",
    task: "Find a beginner class with open seats and reserve a spot.",
    chosen:
      "Warm editorial page with the class schedule as the main module, not a footer link.",
    rejected: [
      "Photo-led hero: no photography with clear rights was available.",
      "Three-card features grid: buries the schedule beneath generic benefits.",
    ],
    carrier: "Soft serif typography and original drawn vessel shapes.",
    type: "Fraunces with a soft optical size for display, Plus Jakarta Sans for text.",
    color: "Clay, oat and glaze green taken from the craft itself.",
    interaction: "Filter classes by level and reserve with a visible, honest confirmation.",
    checks: [
      "Sold-out classes are labeled, not only greyed out",
      "Reserve shows a sample confirmation, never a fake payment",
      "Schedule reflows to one column on small screens",
    ],
    references: [
      "direction-composition-assets.md",
      "typography-rules.md",
      "component-rules.md",
    ],
  },
  {
    slug: "night-shift",
    name: "Night Shift 10K",
    kind: "City night run",
    brief:
      "Launch a 10K run through the city at night and get runners to register.",
    audience: "Runners from 20 to 40 who want an event, not just a race.",
    task: "Check date, route and pace, then register.",
    chosen:
      "Expressive poster: oversized type, an animated track-light shader, practical facts up front.",
    rejected: [
      "Map-first page: accurate but flat for an event people choose on feeling.",
      "Community photo grid: no event photography exists yet.",
    ],
    carrier: "Oversized condensed type and motion that reads as streetlights.",
    type: "Bricolage Grotesque, narrow and heavy for display, normal width for facts.",
    color: "Night black with one signal lime; pink only for the register action.",
    interaction: "A pace calculator that turns a target time into pace per kilometre.",
    checks: [
      "Shader freezes with reduced motion",
      "Calculator validates input and explains errors",
      "Lime on black passes text contrast",
    ],
    references: ["motion-rules.md", "anti-slop-rules.md", "accessibility-rules.md"],
  },
];
export const getExample = (slug: string) =>
  examples.find((e) => e.slug === slug)!;
