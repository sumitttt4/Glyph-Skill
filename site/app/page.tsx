import {
  ArrowRight,
  BadgeCheck,
  Blocks,
  BookOpen,
  Brush,
  Check,
  Code2,
  Command,
  GitFork,
  Layers3,
  Palette,
  Sparkles,
  Terminal,
} from "lucide-react";

const installCommand = "npx skills add sumittt4/Glyph-Skill";

const examples = [
  {
    label: "Brand direction",
    command: "/glyph brand a fintech SaaS called Nova",
    output:
      "Positioning, product personality, logo direction, color system, type, voice, and do / don't rules.",
  },
  {
    label: "Interface direction",
    command: "/glyph design a premium AI landing page",
    output:
      "Hero structure, section rhythm, component style, CTA hierarchy, spacing, and responsive notes.",
  },
  {
    label: "Design audit",
    command: "/glyph audit this homepage",
    output:
      "What feels generic, what weakens trust, what breaks hierarchy, and a stronger direction.",
  },
];

const features = [
  {
    icon: Palette,
    title: "Brand identity",
    copy: "Positioning, logo direction, color roles, typography, voice, and product personality.",
  },
  {
    icon: Layers3,
    title: "Interface design",
    copy: "Landing pages, SaaS UI, dashboards, hero sections, cards, buttons, and spacing.",
  },
  {
    icon: Brush,
    title: "Anti-slop rules",
    copy: "Avoid generic AI startup visuals, random gradients, fake premium cues, and weak hierarchy.",
  },
  {
    icon: Command,
    title: "Vibe Coding prompts",
    copy: "Copy-paste prompts for Claude Code, Cursor, Codex, and other AI coding assistants.",
  },
];

const commands = [
  ["/glyph brand", "Create brand identity direction."],
  ["/glyph design", "Create UI and interface direction."],
  ["/glyph audit", "Audit an existing product, landing page, or UI."],
  ["/glyph kit", "Create a complete brand + UI kit."],
  ["/glyph vibe", "Create a Vibe Coding Prompt."],
  ["/glyph prompt", "Create a clean prompt for AI builders."],
];

const foundations = [
  "Color should carry intent",
  "Typography should create hierarchy",
  "Logos should fit the product category",
  "UI should follow the brand system",
  "Motion should clarify, not decorate",
  "Avoid trend-first design",
  "The first screen should be obvious",
  "Every visual choice should be explainable",
];

function Wordmark() {
  return (
    <a href="#" className="inline-flex items-center gap-2 font-semibold tracking-normal text-glyph-text">
      <span className="grid h-7 w-7 place-items-center rounded-lg border border-glyph-border bg-glyph-soft text-lg font-bold text-glyph-orange">
        /
      </span>
      glyph
    </a>
  );
}

function Button({
  children,
  href,
  variant = "primary",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
}) {
  const variants = {
    primary:
      "border-[#ee4811] bg-glyph-orange text-white shadow-[0_12px_30px_rgba(255,90,31,0.20)]",
    secondary: "border-glyph-border bg-white text-glyph-text",
    ghost: "border-glyph-border bg-glyph-surface text-glyph-text",
  };

  return (
    <a
      href={href}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-5 text-sm font-semibold transition hover:-translate-y-0.5 ${variants[variant]}`}
    >
      {children}
    </a>
  );
}

function TerminalPanel() {
  const lines = [
    "/glyph brand a fintech SaaS",
    "/glyph design a landing page",
    "/glyph audit this homepage",
    "/glyph vibe for an AI dashboard",
  ];

  return (
    <div className="overflow-hidden rounded-3xl border border-glyph-border bg-white shadow-panel">
      <div className="flex min-h-14 items-center justify-between border-b border-glyph-border bg-glyph-surface px-5">
        <div className="flex gap-2" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-glyph-orange" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#d8d2ca]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#d8d2ca]" />
        </div>
        <div className="inline-flex items-center gap-2 text-sm font-medium text-glyph-muted">
          <Terminal size={15} />
          glyph.commands
        </div>
      </div>
      <div className="p-5 sm:p-7">
        {lines.map((line, index) => (
          <div
            key={line}
            className="grid min-h-14 grid-cols-[2rem_1fr] items-center gap-3 border-b border-glyph-border last:border-b-0"
          >
            <span className="font-mono text-xs text-[#b4aca2]">0{index + 1}</span>
            <code className="break-words font-mono text-sm text-glyph-text">{line}</code>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 border-t border-glyph-border bg-glyph-soft px-5 py-4 text-sm font-medium text-[#86310e]">
        <BadgeCheck size={16} />
        Better taste before code generation starts.
      </div>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="text-sm font-bold text-glyph-orange">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-semibold leading-[1.04] tracking-normal text-glyph-text sm:text-5xl">
        {title}
      </h2>
      {copy ? <p className="mt-4 text-lg leading-8 text-glyph-muted">{copy}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <header className="sticky top-0 z-40 border-b border-glyph-border/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex min-h-20 w-[min(1120px,calc(100%-32px))] items-center justify-between gap-5">
          <Wordmark />
          <nav className="hidden items-center gap-7 text-sm font-medium text-glyph-muted md:flex">
            <a href="#examples" className="hover:text-glyph-text">Examples</a>
            <a href="#commands" className="hover:text-glyph-text">Commands</a>
            <a href="#foundations" className="hover:text-glyph-text">Foundations</a>
            <a href="#install" className="hover:text-glyph-text">Install</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button href="https://github.com/sumittt4/Glyph-Skill" variant="secondary">
              <GitFork size={16} />
              <span className="hidden sm:inline">GitHub</span>
            </Button>
            <Button href="#install">Install</Button>
          </div>
        </div>
      </header>

      <section className="relative border-b border-glyph-border bg-white">
        <div className="absolute inset-0 -z-0 bg-[linear-gradient(90deg,rgba(234,231,226,0.42)_1px,transparent_1px),linear-gradient(180deg,rgba(234,231,226,0.42)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="relative z-10 mx-auto grid w-[min(1120px,calc(100%-32px))] gap-12 py-20 sm:py-24 lg:grid-cols-[1.08fr_0.82fr] lg:items-center lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ffd7c4] bg-glyph-soft px-4 py-2 text-sm font-bold text-glyph-orange">
              <Sparkles size={15} />
              A product taste skill
            </div>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.96] tracking-normal text-glyph-text sm:text-7xl lg:text-[82px]">
              A brand and design skill for AI-built products.
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-glyph-muted">
              Give Claude Code, Cursor, and Codex better taste before they design your product.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#install">Install Glyph <ArrowRight size={16} /></Button>
              <Button href="#examples" variant="secondary">View examples</Button>
            </div>
            <div className="mt-6 inline-flex max-w-full items-center gap-3 rounded-2xl border border-glyph-border bg-white px-4 py-4 shadow-[0_16px_42px_rgba(17,17,17,0.05)]">
              <Code2 size={18} className="shrink-0 text-glyph-orange" />
              <code className="break-all font-mono text-sm text-glyph-text">{installCommand}</code>
            </div>
            <p className="mt-4 text-sm font-medium text-glyph-muted">
              Works with Claude Code, Cursor, and Codex.
            </p>
          </div>
          <TerminalPanel />
        </div>
      </section>

      <section id="examples" className="mx-auto w-[min(1120px,calc(100%-32px))] py-20">
        <SectionHeading
          eyebrow="Examples"
          title="Ask for the taste layer before the interface appears."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {examples.map((example) => (
            <article key={example.command} className="rounded-2xl border border-glyph-border bg-white p-6 shadow-[0_10px_32px_rgba(17,17,17,0.04)]">
              <p className="text-sm font-bold text-glyph-orange">{example.label}</p>
              <code className="mt-5 block rounded-xl bg-[#111111] p-4 font-mono text-sm leading-6 text-white">
                {example.command}
              </code>
              <p className="mt-5 text-base leading-7 text-glyph-muted">{example.output}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-glyph-border bg-glyph-surface">
        <div className="mx-auto w-[min(1120px,calc(100%-32px))] py-20">
          <SectionHeading
            eyebrow="What it does"
            title="Design direction your coding assistant can actually use."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, copy }) => (
              <article key={title} className="rounded-2xl border border-glyph-border bg-white p-6">
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-[#ffd7c4] bg-glyph-soft text-glyph-orange">
                  <Icon size={22} />
                </div>
                <h3 className="mt-7 text-xl font-semibold text-glyph-text">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-glyph-muted">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(1120px,calc(100%-32px))] py-20">
        <SectionHeading eyebrow="Before / After" title="Less template energy. More product direction." />
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="rounded-3xl border border-glyph-border bg-glyph-surface p-6">
            <p className="text-lg font-semibold text-glyph-text">Without Glyph</p>
            <p className="mt-2 text-sm leading-6 text-glyph-muted">
              Generic AI SaaS, random gradient, weak CTA, boring cards, no identity.
            </p>
            <div className="mt-6 rounded-2xl border border-glyph-border bg-white p-6">
              <div className="h-16 w-3/4 rounded-2xl bg-[#7b49ff]/70" />
              <div className="mt-5 h-10 w-36 rounded-full bg-[#ff76d6]/40" />
              <div className="mt-10 grid grid-cols-3 gap-3">
                <span className="h-24 rounded-2xl bg-[#7b49ff]/20" />
                <span className="h-24 rounded-2xl bg-[#ff76d6]/20" />
                <span className="h-24 rounded-2xl bg-[#7b49ff]/20" />
              </div>
            </div>
          </article>
          <article className="rounded-3xl border border-glyph-border bg-glyph-surface p-6">
            <p className="text-lg font-semibold text-glyph-text">With Glyph</p>
            <p className="mt-2 text-sm leading-6 text-glyph-muted">
              Clear hierarchy, intentional palette, stronger typography, consistent brand direction.
            </p>
            <div className="mt-6 grid gap-5 rounded-2xl border border-glyph-border bg-white p-6">
              <div className="h-9 rounded-full bg-[linear-gradient(90deg,#111111_0_24%,#EAE7E2_24%_100%)]" />
              <div className="grid gap-5 sm:grid-cols-[1fr_160px]">
                <div className="self-center">
                  <div className="h-16 w-5/6 rounded-xl bg-[#111111]" />
                  <div className="mt-4 h-4 w-1/2 rounded-full bg-[#c9c2ba]" />
                </div>
                <div className="grid gap-3">
                  <span className="rounded-2xl bg-glyph-orange" />
                  <span className="rounded-2xl border border-[#ffd7c4] bg-glyph-soft" />
                  <span className="rounded-2xl border border-[#ffd7c4] bg-glyph-soft" />
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="commands" className="border-y border-glyph-border bg-white">
        <div className="mx-auto w-[min(1120px,calc(100%-32px))] py-20">
          <SectionHeading eyebrow="Commands" title="A small command set for brand, UI, audit, and builder prompts." />
          <div className="overflow-hidden rounded-3xl border border-glyph-border">
            {commands.map(([command, description]) => (
              <div key={command} className="grid gap-3 border-b border-glyph-border bg-white p-5 last:border-b-0 md:grid-cols-[180px_1fr] md:items-center">
                <code className="font-mono text-sm font-semibold text-glyph-orange">{command}</code>
                <p className="text-sm leading-6 text-glyph-muted">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="foundations" className="mx-auto w-[min(1120px,calc(100%-32px))] py-20">
        <SectionHeading eyebrow="Foundations" title="Public design rules that keep AI output intentional." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {foundations.map((principle) => (
            <article key={principle} className="flex min-h-24 gap-3 rounded-2xl border border-glyph-border bg-white p-5">
              <Check size={17} className="mt-0.5 shrink-0 text-glyph-orange" />
              <p className="text-sm font-semibold leading-6 text-glyph-text">{principle}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(1120px,calc(100%-32px))] pb-20">
        <div className="grid gap-8 rounded-3xl border border-glyph-border bg-glyph-surface p-7 sm:p-10 lg:grid-cols-[0.95fr_1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-bold text-glyph-orange">Full brand kit</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-glyph-text sm:text-4xl">
              Use the skill for direction. Use Glyph for the full brand kit.
            </h2>
          </div>
          <p className="text-base leading-8 text-glyph-muted">
            The open-source skill helps your AI assistant define the taste. Glyph turns that
            direction into a complete brand kit with logo direction, colors, typography, UI
            identity, Vibe Coding prompts, and export-ready assets.
          </p>
          <Button href="https://glyph.software">Generate full brand kit</Button>
        </div>
      </section>

      <section id="install" className="mx-auto w-[min(1120px,calc(100%-32px))] pb-20">
        <div className="rounded-[2rem] border border-glyph-border bg-white p-8 text-center shadow-panel sm:p-12">
          <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl border border-[#ffd7c4] bg-glyph-soft text-glyph-orange">
            <Blocks size={24} />
          </div>
          <p className="mt-5 text-sm font-bold text-glyph-orange">Install</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-4xl font-semibold leading-tight text-glyph-text sm:text-5xl">
            Add Glyph Skill to your AI coding workflow.
          </h2>
          <code className="mx-auto mt-8 flex max-w-2xl justify-center break-all rounded-2xl bg-[#111111] px-5 py-4 font-mono text-sm text-white">
            {installCommand}
          </code>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button href="https://github.com/sumittt4/Glyph-Skill" variant="secondary">
              <GitFork size={16} />
              View GitHub
            </Button>
            <Button href="https://github.com/sumittt4/Glyph-Skill/blob/main/SKILL.md" variant="ghost">
              <BookOpen size={16} />
              Read SKILL.md
            </Button>
            <Button href="https://glyph.software">Open Glyph</Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-glyph-border bg-white">
        <div className="mx-auto flex w-[min(1120px,calc(100%-32px))] flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between">
          <Wordmark />
          <div className="flex flex-wrap gap-5 text-sm font-medium text-glyph-muted">
            <a href="https://github.com/sumittt4/Glyph-Skill" className="hover:text-glyph-text">GitHub</a>
            <a href="#install" className="hover:text-glyph-text">Install</a>
            <a href="#examples" className="hover:text-glyph-text">Examples</a>
            <a href="https://glyph.software" className="hover:text-glyph-text">glyph.software</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
