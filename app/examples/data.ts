// Each example records the Design Skill workflow behind it: the brief, the
// directions compared, the hero pattern and craft baseline applied, and checks.
export type Example = {
  slug: string;
  name: string;
  kind: string;
  brief: string;
  task: string;
  chosen: string;
  rejected: string[];
  pattern: string;
  type: string;
  color: string;
  visual: string;
  checks: string[];
  references: string[];
};
const baseRefs = ["visual-craft.md", "landing-composition.md"];
export const examples: Example[] = [
  {
    slug: "ledgerline",
    name: "Ledgerline",
    kind: "B2B finance software",
    brief: "Introduce a month-end close tool to controllers at 20–200 person companies.",
    task: "See how the product handles unmatched transactions, then book a demo.",
    chosen: "Show the real product first: a working close view, calm and dense.",
    rejected: [
      "Editorial ROI story: leans on claims a new product cannot prove.",
      "Logo wall up top: there are no real customers to show.",
    ],
    pattern: "A · Centered headline with a large framed product UI over a mesh field.",
    type: "Inter only. Display 70px weight 500 at −0.045em; UI 14px; tabular figures for amounts.",
    color: "White and warm grey neutrals, black primary button, green only for matched, amber only for exceptions.",
    visual: "The close view built in code with sample data, plus mini UI fragments in every feature card.",
    checks: [
      "One family, one button style, one radius family",
      "Filter works by keyboard and announces the count",
      "Table scrolls inside its window at 390px",
    ],
    references: [...baseRefs, "component-rules.md"],
  },
  {
    slug: "halo",
    name: "Halo",
    kind: "AI meeting notes",
    brief: "Launch an assistant that turns meetings into decisions and action items.",
    task: "Understand what Halo produces after a call, then start a free trial.",
    chosen: "Lead with the output: a finished meeting summary, not a chatbot promise.",
    rejected: [
      "Abstract AI orb hero: says nothing about the result.",
      "Feature list first: hides the summary people actually want.",
    ],
    pattern: "B · Split hero: copy left, summary window right over a dark mesh field.",
    type: "Geist for everything; Geist Mono only for timestamps and owners.",
    color: "Pure black, near-black cards, one violet accent for the primary action and live state.",
    visual: "A meeting summary window with decisions, owners and timestamps.",
    checks: [
      "Dark text pairs pass contrast",
      "Shader freezes under reduced motion",
      "Split hero stacks with copy first on mobile",
    ],
    references: [...baseRefs, "core-color-rules.md"],
  },
  {
    slug: "lumen",
    name: "Lumen",
    kind: "Consumer savings app",
    brief: "Build a waitlist for a savings app that rounds up spending into goals.",
    task: "Grasp the idea in one screen and join the waitlist.",
    chosen: "A calm waitlist page around the app itself, shown in a phone.",
    rejected: [
      "Stock lifestyle photography: no licensed images and it hides the app.",
      "Dense fintech dashboard look: wrong mood for personal saving.",
    ],
    pattern: "E · Waitlist: centered headline, inline email form, phone mockup below.",
    type: "Inter for UI and text; Instrument Serif for one accent phrase only.",
    color: "Warm off-white, ink text, one deep green accent for the action and progress.",
    visual: "A phone built in code showing goals and round-ups over a soft mesh field.",
    checks: [
      "Email field validates and confirms without pretending to send",
      "Serif used once, never for body",
      "Phone mockup scales without overflow at 390px",
    ],
    references: [...baseRefs, "typography-rules.md"],
  },
];
// Product-kit example: an app screen rather than a landing page. Kept out of
// the landing showcase grid, linked separately.
export const productExample: Example = {
  slug: "console",
  name: "Relay",
  kind: "Delivery operations console",
  brief: "Help dispatchers at a regional courier keep same-day deliveries on time.",
  task: "Spot the deliveries that need attention and reassign them in one or two actions.",
  chosen: "Lead with the exception queue; KPIs are a compact strip, not the headline.",
  rejected: [
    "Map-first view: looks impressive, but hides which stop is late and why.",
    "Eight-tile KPI dashboard: answers 'how are we doing' instead of 'what do I do next'.",
  ],
  pattern: "Product shell · sidebar, top bar, KPI strip, filterable table with inline actions.",
  type: "Inter only. 14px UI, 13px compact; tabular figures for times and counts.",
  color: "Neutral shell, black primary action; red, amber and green only for delivery status, always with a word.",
  visual: "No hero visual: the queue is the product. Status badges, deltas and an Undo toast carry feedback.",
  checks: [
    "Filters, density and theme switch work by keyboard",
    "Reassign gives instant feedback with Undo",
    "Sidebar becomes a drawer at 390px; Escape closes it",
    "Status pairs pass contrast in light and dark",
  ],
  references: ["product-ui.md", "data-visualization.md", "ux-writing.md", "starter-kit.md"],
};
const allExamples = [...examples, productExample];
export const getExample = (slug: string) => allExamples.find((e) => e.slug === slug)!;
