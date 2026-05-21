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

const installCommand = "npx skills add sumitttt4/Glyph-Skill";

const examples = [
  {
    label: "Brand direction",
    command: "/glyph brand a fintech SaaS called Nova",
    output:
      "Calm trust cues, restrained orange accent, sharp wordmark direction, and a finance-ready type system.",
    visual: "tokens",
  },
  {
    label: "Interface direction",
    command: "/glyph design a premium AI landing page",
    output:
      "A first screen with clear category, one primary CTA, product proof, and tighter section rhythm.",
    visual: "layout",
  },
  {
    label: "Design audit",
    command: "/glyph audit this homepage",
    output:
      "Flags vague hero copy, random gradients, weak CTA hierarchy, and gives a sharper direction.",
    visual: "audit",
  },
];

const features = [
  {
    icon: Palette,
    title: "Brand identity",
    copy: "Turns a product idea into positioning, logo direction, color roles, type choices, and a voice that fits the category.",
  },
  {
    icon: Layers3,
    title: "Interface design",
    copy: "Gives AI builders concrete rules for hero structure, section rhythm, dashboards, cards, buttons, and spacing.",
  },
  {
    icon: Brush,
    title: "Anti-slop rules",
    copy: "Calls out random gradients, vague premium styling, overused AI visuals, weak CTAs, and hierarchy problems.",
  },
  {
    icon: Command,
    title: "Vibe Coding prompts",
    copy: "Creates implementation-ready prompts with brand, layout, component, interaction, and anti-slop constraints.",
  },
];

const commands = [
  ["/glyph brand", "Define positioning, personality, logo direction, color roles, typography, voice, and do / don't rules."],
  ["/glyph design", "Turn a product brief into landing page, SaaS UI, dashboard, spacing, and responsive direction."],
  ["/glyph audit", "Find what feels generic, what weakens trust, what breaks hierarchy, and what to fix first."],
  ["/glyph kit", "Package the brand, UI rules, tokens, landing page guidance, and builder prompt into one kit."],
  ["/glyph vibe", "Generate a copy-paste Vibe Coding Prompt for Claude Code, Cursor, Codex, or another AI builder."],
  ["/glyph prompt", "Convert design direction into a clean prompt that an AI coding assistant can execute."],
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
      <div className="p-5 sm:p-6">
        <div className="rounded-2xl border border-glyph-border bg-[#111111] p-4 text-white">
          <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#b8b1a8]">
            <Command size={14} />
            Input
          </div>
          <code className="block break-words font-mono text-sm leading-6 text-white">
            /glyph brand a fintech SaaS
          </code>
        </div>

        <div className="mt-4 rounded-2xl border border-glyph-border bg-glyph-surface p-4">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-glyph-text">
              <BadgeCheck size={16} className="text-glyph-orange" />
              Output preview
            </div>
            <span className="rounded-full border border-[#ffd7c4] bg-white px-3 py-1 text-xs font-semibold text-glyph-orange">
              brand system
            </span>
          </div>

          <div className="space-y-3 text-sm leading-6">
            <div className="grid gap-1 rounded-xl bg-white p-3 ring-1 ring-glyph-border">
              <span className="text-xs font-semibold uppercase tracking-[0.08em] text-glyph-muted">Brand</span>
              <p className="font-medium text-glyph-text">calm, trustworthy, sharp</p>
            </div>

            <div className="rounded-xl bg-white p-3 ring-1 ring-glyph-border">
              <span className="text-xs font-semibold uppercase tracking-[0.08em] text-glyph-muted">Palette</span>
              <div className="mt-3 flex items-center gap-2">
                <span className="h-7 w-12 rounded-full bg-[#132238]" />
                <span className="h-7 w-12 rounded-full bg-glyph-orange" />
                <span className="h-7 w-12 rounded-full bg-[#EEF0F2]" />
                <span className="h-7 w-12 rounded-full border border-glyph-border bg-white" />
              </div>
              <p className="mt-2 text-glyph-muted">deep navy, warm orange, soft gray</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-white p-3 ring-1 ring-glyph-border">
                <span className="text-xs font-semibold uppercase tracking-[0.08em] text-glyph-muted">Type</span>
                <p className="mt-2 font-semibold text-glyph-text">Geist heading</p>
                <p className="text-glyph-muted">Inter body</p>
              </div>
              <div className="rounded-xl bg-white p-3 ring-1 ring-glyph-border">
                <span className="text-xs font-semibold uppercase tracking-[0.08em] text-glyph-muted">UI</span>
                <p className="mt-2 text-glyph-muted">clear hero, strong CTA, quiet dashboard cards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 border-t border-glyph-border bg-glyph-soft px-5 py-4 text-sm font-medium text-[#86310e]">
        <BadgeCheck size={16} />
        Direction the coding assistant can apply immediately.
      </div>
    </div>
  );
}

function ExampleVisual({ type }: { type: string }) {
  if (type === "tokens") {
    return (
      <div className="mt-5 flex items-center gap-2">
        <span className="h-8 flex-1 rounded-full bg-[#132238]" />
        <span className="h-8 flex-1 rounded-full bg-glyph-orange" />
        <span className="h-8 flex-1 rounded-full bg-[#EEF0F2]" />
        <span className="h-8 flex-1 rounded-full border border-glyph-border bg-white" />
      </div>
    );
  }

  if (type === "layout") {
    return (
      <div className="mt-5 rounded-xl border border-glyph-border bg-glyph-surface p-3">
        <div className="h-3 w-24 rounded-full bg-glyph-orange" />
        <div className="mt-3 h-7 w-3/4 rounded-lg bg-[#111111]" />
        <div className="mt-3 grid grid-cols-3 gap-2">
          <span className="h-10 rounded-lg bg-white ring-1 ring-glyph-border" />
          <span className="h-10 rounded-lg bg-white ring-1 ring-glyph-border" />
          <span className="h-10 rounded-lg bg-white ring-1 ring-glyph-border" />
        </div>
      </div>
    );
  }

  return (
    <div className="mt-5 space-y-2 rounded-xl border border-glyph-border bg-glyph-surface p-3">
      <div className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-glyph-orange" />
        <span className="h-2 w-4/5 rounded-full bg-[#d8d2ca]" />
      </div>
      <div className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#111111]" />
        <span className="h-2 w-3/5 rounded-full bg-[#d8d2ca]" />
      </div>
      <div className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#9C9A96]" />
        <span className="h-2 w-2/3 rounded-full bg-[#d8d2ca]" />
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
            <Button href="https://github.com/sumitttt4/Glyph-Skill" variant="secondary">
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
            <p className="mt-4 max-w-xl text-lg font-semibold leading-7 text-glyph-text">
              Stop letting AI ship generic-looking apps.
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
          copy="Each command returns specific brand and UI direction, not vague advice."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {examples.map((example) => (
            <article key={example.command} className="rounded-2xl border border-glyph-border bg-white p-6 shadow-[0_10px_32px_rgba(17,17,17,0.04)] transition hover:-translate-y-1 hover:shadow-panel">
              <p className="text-sm font-bold text-glyph-orange">{example.label}</p>
              <code className="mt-5 block rounded-xl bg-[#111111] p-4 font-mono text-sm leading-6 text-white">
                {example.command}
              </code>
              <ExampleVisual type={example.visual} />
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
            copy="Glyph turns product taste into implementation constraints your AI builder can follow."
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
            <div className="mt-6 overflow-hidden rounded-2xl border border-glyph-border bg-white">
              <div className="bg-[linear-gradient(135deg,rgba(123,73,255,0.88),rgba(255,118,214,0.58))] p-6">
                <div className="h-12 w-4/5 rounded-2xl bg-white/70" />
                <div className="mt-4 h-9 w-32 rounded-full bg-white/40" />
              </div>
              <div className="grid grid-cols-3 gap-3 p-5">
                <span className="h-24 rounded-2xl bg-[#7b49ff]/15 ring-1 ring-[#7b49ff]/20" />
                <span className="h-24 rounded-2xl bg-[#ff76d6]/15 ring-1 ring-[#ff76d6]/20" />
                <span className="h-24 rounded-2xl bg-[#7b49ff]/15 ring-1 ring-[#7b49ff]/20" />
              </div>
              <div className="border-t border-glyph-border p-5">
                <div className="h-3 w-3/5 rounded-full bg-[#d8d2ca]" />
                <div className="mt-3 h-3 w-2/5 rounded-full bg-[#d8d2ca]" />
              </div>
            </div>
          </article>
          <article className="rounded-3xl border border-[#ffd7c4] bg-white p-6 shadow-panel">
            <p className="text-lg font-semibold text-glyph-text">With Glyph</p>
            <p className="mt-2 text-sm leading-6 text-glyph-muted">
              Clear hierarchy, intentional palette, stronger typography, consistent brand direction.
            </p>
            <div className="mt-6 grid gap-5 rounded-2xl border border-glyph-border bg-glyph-surface p-6">
              <div className="h-9 rounded-full bg-[linear-gradient(90deg,#111111_0_20%,#FF5A1F_20%_28%,#EAE7E2_28%_100%)]" />
              <div className="grid gap-5 sm:grid-cols-[1fr_170px]">
                <div className="self-center">
                  <div className="h-5 w-24 rounded-full bg-glyph-orange" />
                  <div className="mt-4 h-16 w-5/6 rounded-xl bg-[#111111]" />
                  <div className="mt-4 h-4 w-2/3 rounded-full bg-[#c9c2ba]" />
                  <div className="mt-6 h-10 w-36 rounded-full bg-glyph-orange" />
                </div>
                <div className="grid gap-3">
                  <span className="rounded-2xl bg-white p-4 ring-1 ring-glyph-border">
                    <span className="block h-3 w-12 rounded-full bg-glyph-orange" />
                    <span className="mt-5 block h-3 w-20 rounded-full bg-[#d8d2ca]" />
                  </span>
                  <span className="rounded-2xl bg-white p-4 ring-1 ring-glyph-border">
                    <span className="block h-3 w-16 rounded-full bg-[#111111]" />
                    <span className="mt-5 block h-3 w-24 rounded-full bg-[#d8d2ca]" />
                  </span>
                  <span className="rounded-2xl border border-[#ffd7c4] bg-glyph-soft p-4">
                    <span className="block h-3 w-20 rounded-full bg-glyph-orange/70" />
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="commands" className="border-y border-glyph-border bg-white">
        <div className="mx-auto w-[min(1120px,calc(100%-32px))] py-20">
          <SectionHeading eyebrow="Commands" title="A small command set for brand, UI, audit, and builder prompts." />
          <div className="overflow-hidden rounded-3xl border border-glyph-border bg-white shadow-[0_16px_50px_rgba(17,17,17,0.04)]">
            {commands.map(([command, description]) => (
              <div key={command} className="grid gap-3 border-b border-glyph-border bg-white p-6 last:border-b-0 md:grid-cols-[190px_1fr] md:items-center">
                <code className="inline-flex w-fit rounded-full border border-[#ffd7c4] bg-glyph-soft px-3 py-1.5 font-mono text-sm font-semibold text-glyph-orange">
                  {command}
                </code>
                <p className="text-[15px] leading-7 text-glyph-muted">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="foundations" className="mx-auto w-[min(1120px,calc(100%-32px))] py-20">
        <SectionHeading eyebrow="Foundations" title="Public design rules that keep AI output intentional." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {foundations.map((principle) => (
            <article key={principle} className="flex min-h-24 gap-3 rounded-2xl border border-glyph-border bg-white p-5 shadow-[0_8px_24px_rgba(17,17,17,0.03)]">
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-glyph-soft text-glyph-orange">
                <Check size={15} />
              </span>
              <p className="text-sm font-semibold leading-6 text-glyph-text">{principle}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(1120px,calc(100%-32px))] pb-20">
        <div className="rounded-3xl border border-glyph-border bg-glyph-surface p-7 shadow-[0_18px_60px_rgba(17,17,17,0.06)] sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1fr] lg:items-start">
          <div>
            <p className="text-sm font-bold text-glyph-orange">Full brand kit</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-glyph-text sm:text-4xl">
              Use the skill for direction. Use Glyph for the full brand kit.
            </h2>
          </div>
            <div>
              <p className="text-base leading-8 text-glyph-muted">
                The open-source skill helps your AI assistant define the taste. Glyph turns that
                direction into a complete brand kit with logo direction, colors, typography, UI
                identity, Vibe Coding prompts, and export-ready assets.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-4">
                {["Skill", "Direction", "Glyph", "Full brand kit"].map((step, index) => (
                  <div key={step} className="relative rounded-2xl border border-glyph-border bg-white p-4">
                    <span className="text-xs font-bold text-glyph-orange">0{index + 1}</span>
                    <p className="mt-2 text-sm font-semibold text-glyph-text">{step}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Button href="https://glyph.software">Generate full brand kit</Button>
              </div>
            </div>
          </div>
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
          <div className="mx-auto mt-8 max-w-2xl overflow-hidden rounded-2xl border border-[#252525] bg-[#111111] text-left shadow-[0_18px_50px_rgba(17,17,17,0.16)]">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-glyph-orange" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
              <span className="ml-auto font-mono text-xs text-white/45">install</span>
            </div>
            <code className="flex break-all px-5 py-4 font-mono text-sm text-white">
              <span className="mr-3 text-glyph-orange">$</span>
              {installCommand}
            </code>
          </div>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button href="https://github.com/sumitttt4/Glyph-Skill" variant="secondary">
              <GitFork size={16} />
              View GitHub
            </Button>
            <Button href="https://github.com/sumitttt4/Glyph-Skill/blob/main/SKILL.md" variant="ghost">
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
            <a href="https://github.com/sumitttt4/Glyph-Skill" className="hover:text-glyph-text">GitHub</a>
            <a href="#install" className="hover:text-glyph-text">Install</a>
            <a href="#examples" className="hover:text-glyph-text">Examples</a>
            <a href="https://glyph.software" className="hover:text-glyph-text">glyph.software</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
