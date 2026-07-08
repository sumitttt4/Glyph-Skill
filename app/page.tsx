"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Blocks,
  BookOpen,
  Brush,
  Check,
  Code2,
  Command,
  Copy,
  GitFork,
  Layers3,
  Palette,
  Sparkles,
  Terminal,
  Type,
  Activity,
  Smartphone,
  Image,
} from "lucide-react";

const installCommand = "npx skills add sumitttt4/Glyph-Skill";

function Wordmark() {
  return (
    <a href="#" className="inline-flex items-center gap-2 font-semibold tracking-tight text-glyph-text active-press">
      <svg className="h-6 w-6" viewBox="22 22 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M36.9 24.4L40.9 28.2C42.4 29.6 43.2 31.5 43.2 33.6C43.2 35.6 44 37.5 45.4 38.9L45.9 39.4L50.5 24.5" fill="#1e40af"/>
        <path d="M23.3 37.7L28.8 37.5C30.8 37.4 32.8 38.2 34.2 39.6C35.6 41 37.5 41.7 39.5 41.7H40.2L32.8 28" fill="#1e40af"/>
        <path d="M23.3 56.7L27 52.7C28.4 51.2 30.3 50.3 32.3 50.3C34.3 50.3 36.1 49.4 37.5 48L38 47.5L23 43.2" fill="#1e40af"/>
        <path d="M36.9 69.9L36.6 64.4C36.5 62.4 37.2 60.4 38.6 58.9C39.9 57.5 40.7 55.5 40.6 53.6V52.9L27 60.6" fill="#1e40af"/>
        <path d="M55.9 69.5L51.8 65.9C50.3 64.6 49.4 62.7 49.3 60.6C49.2 58.6 48.3 56.8 46.9 55.4L46.4 54.9L42.4 70" fill="#1e40af"/>
        <path d="M68.9 55.6L63.4 56C61.4 56.2 59.4 55.5 57.9 54.1C56.4 52.8 54.5 52.1 52.5 52.2H51.8L59.8 65.6" fill="#1e40af"/>
        <path d="M68 36.7L64.5 40.9C63.2 42.4 61.3 43.4 59.3 43.5C57.3 43.6 55.5 44.5 54.2 46L53.8 46.5L69 50.1" fill="#1e40af"/>
        <path d="M53.9 24L54.4 29.5C54.6 31.5 54 33.5 52.6 35.1C51.3 36.6 50.7 38.5 50.8 40.5L50.9 41.2L64.1 32.9" fill="#1e40af"/>
      </svg>
      Glyph Skill
    </a>
  );
}

function Button({
  children,
  href,
  variant = "primary",
  fullWidth = false,
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  fullWidth?: boolean;
}) {
  const variants = {
    primary:
      "border-[#ee4811] bg-glyph-orange text-white shadow-rest hover:shadow-hover hover:bg-[#e04811]",
    secondary: "border-glyph-border bg-white text-glyph-text shadow-rest hover:bg-glyph-surface",
    ghost: "border-transparent bg-transparent text-glyph-muted hover:text-glyph-text hover:bg-glyph-border-soft",
  };

  return (
    <a
      href={href}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border px-5 text-sm font-semibold transition-glyph active-press ${fullWidth ? "w-full" : ""} ${variants[variant]}`}
    >
      {children}
    </a>
  );
}

function BackgroundCode() {
  const [offset, setOffset] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setOffset((prev) => prev + 1);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const configLines = [
    '// Glyph System Config',
    'const config = {',
    '  theme: "developer-taste",',
    '  color: {',
    '    primary: "#072ca8",',
    '    background: "#fafaf9",',
    '    border: "rgba(0,0,0,0.08)"',
    '  },',
    '  typography: {',
    '    headings: "Space",',
    '    body: "Inter",',
    '    tracking: "-0.03em"',
    '  }',
    '}'
  ];

  const layoutLines = [
    '// Layout Constraints',
    'const layout = {',
    '  container: {',
    '    text: "720px",',
    '    standard: "1080px",',
    '    wide: "1280px"',
    '  },',
    '  spacing: "4px-grid",',
    '  padding: {',
    '    mobile: "80px",',
    '    desktop: "120px"',
    '  }',
    '}'
  ];

  const antiSlopLines = [
    '// Anti-Slop Safeguards',
    'const antiSlop = {',
    '  banned: [',
    '    "purple-gradients",',
    '    "floating-decoration-orbs",',
    '    "poppins-font-default"',
    '  ],',
    '  enforced: [',
    '    "tactile-active-press",',
    '    "visible-focus-outlines",',
    '    "hover-interaction-durations"',
    '  ]',
    '}'
  ];

  const getRotatedCode = (lines: string[], lineOffset: number) => {
    const len = lines.length;
    const idx = lineOffset % len;
    return [...lines.slice(idx), ...lines.slice(0, idx)].join('\n');
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const container = document.getElementById("interactive-container");
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        setMousePos({ x, y });
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const style1 = isHovering
    ? {
        transform: `translate3d(${mousePos.x - 240}px, ${mousePos.y - 120}px, 0)`,
        left: 0,
        top: 0,
        position: 'absolute' as const,
        transition: 'transform 800ms cubic-bezier(0.16, 1, 0.3, 1)',
      }
    : {
        left: '8%',
        top: '20%',
        position: 'absolute' as const,
        transition: 'all 1200ms cubic-bezier(0.16, 1, 0.3, 1)',
      };

  const style2 = isHovering
    ? {
        transform: `translate3d(${mousePos.x - 60}px, ${mousePos.y + 40}px, 0)`,
        left: 0,
        top: 0,
        position: 'absolute' as const,
        transition: 'transform 1200ms cubic-bezier(0.16, 1, 0.3, 1)',
      }
    : {
        left: '42%',
        top: '45%',
        position: 'absolute' as const,
        transition: 'all 1200ms cubic-bezier(0.16, 1, 0.3, 1)',
      };

  const style3 = isHovering
    ? {
        transform: `translate3d(${mousePos.x + 140}px, ${mousePos.y - 100}px, 0)`,
        left: 0,
        top: 0,
        position: 'absolute' as const,
        transition: 'transform 1600ms cubic-bezier(0.16, 1, 0.3, 1)',
      }
    : {
        left: '75%',
        top: '15%',
        position: 'absolute' as const,
        transition: 'all 1200ms cubic-bezier(0.16, 1, 0.3, 1)',
      };

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden opacity-[0.045] select-none pointer-events-none font-mono text-[9px] leading-relaxed text-glyph-text p-6">
      <pre className="text-left" style={style1}>{getRotatedCode(configLines, offset)}</pre>
      <pre className="text-left hidden sm:block" style={style2}>{getRotatedCode(layoutLines, offset + 2)}</pre>
      <pre className="text-left hidden md:block" style={style3}>{getRotatedCode(antiSlopLines, offset + 4)}</pre>
    </div>
  );
}

export default function Home() {
  const [stars, setStars] = useState<number | null>(null);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2000);
  };

  // Fetch GitHub star count
  useEffect(() => {
    fetch("https://api.github.com/repos/sumitttt4/Glyph-Skill")
      .then((res) => res.json())
      .then((data) => {
        if (data.stargazers_count !== undefined) setStars(data.stargazers_count);
      })
      .catch(() => {});
  }, []);

  const features = [
    {
      icon: Palette,
      num: "01",
      title: "Core Color Rules",
      copy: "Accent consistency locks, max text colors per surface, contrast requirements, and industry-standard palettes.",
    },
    {
      icon: Type,
      num: "02",
      title: "Typography Rules",
      copy: "Font pairing stacks, negative heading tracking, weight limits, and strict 65-character line length locks.",
    },
    {
      icon: Layers3,
      num: "03",
      title: "Layout Rules",
      copy: "A locked 4px grid system, standard container widths (720/1080/1280px), and unified padding parameters.",
    },
    {
      icon: Blocks,
      num: "04",
      title: "Component Rules",
      copy: "Detailed design specifications for 22 interface component types, including forms, navbars, tables, and modal elements.",
    },
    {
      icon: Activity,
      num: "05",
      title: "Motion Rules",
      copy: "Animation caps (400ms max), cubic-bezier easing curves, active press scaling, and transition constraints.",
    },
    {
      icon: BadgeCheck,
      num: "06",
      title: "Accessibility Rules",
      copy: "Visible focus outlines, keyboard navigation paths, touch target minimums, and ARIA landmark constraints.",
    },
    {
      icon: Smartphone,
      num: "07",
      title: "Responsive Rules",
      copy: "Folding breakpoint triggers, custom mobile spacing metrics, container collapse rules, and overflow control.",
    },
    {
      icon: Brush,
      num: "08",
      title: "Anti-Slop Rules",
      copy: "Active bans on mesh blobs, Poppins defaults, floating decoration orbs, AI sparkle icons, and vague copywriting.",
    },
    {
      icon: Code2,
      num: "09",
      title: "Framework Rules",
      copy: "Clean implementation constraints for React, Next.js, Svelte, Tailwind, and custom styled templates.",
    },
    {
      icon: Image,
      num: "10",
      title: "Background Rules",
      copy: "Limits on visual background patterns, gradient overlay masks, filters, and backdrop blur variables.",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[var(--glyph-surface)]">
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 border-b border-glyph-border/80 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[72px] max-w-5xl items-center justify-between px-4 sm:px-6">
          <Wordmark />
          <nav className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-wider text-glyph-muted md:flex">
            <a href="#features" className="transition-glyph hover:text-glyph-text">Rules</a>
            <a href="/docs" className="transition-glyph hover:text-glyph-text">Docs</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/sumitttt4/Glyph-Skill"
              className="inline-flex items-center gap-0 rounded-full border border-glyph-border bg-white text-sm font-semibold shadow-rest hover:shadow-hover transition-glyph active-press overflow-hidden"
            >
              <span className="inline-flex items-center gap-1.5 px-3.5 py-2 border-r border-glyph-border">
                <GitFork size={14} />
                <span className="hidden sm:inline">GitHub</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#111111] text-white font-mono text-xs">
                <svg className="h-3.5 w-3.5 text-amber-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                {stars !== null ? stars.toLocaleString() : "\u2014"}
              </span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        id="interactive-container"
        className="relative border-b border-glyph-border pt-16 pb-20 sm:pt-20 sm:pb-24 isolate bg-gradient-to-b from-white via-[var(--glyph-surface)]/50 to-[var(--glyph-surface)] overflow-hidden"
      >
        <BackgroundCode />
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center py-12 md:py-16 flex flex-col items-center justify-center animate-fade-in-up">
          <h1 className="text-[40px] sm:text-5xl lg:text-[56px] font-extrabold leading-[1.05] tracking-[-0.04em] text-glyph-text max-w-2xl">
            Design websites and products with taste, not just with AI slop.
          </h1>
          <p className="mt-6 text-base sm:text-lg leading-7 text-glyph-muted max-w-[65ch]">
            An enforceable brand, layout, and documentation skill for your AI coding assistant. Import strict layout constraints, typography locks, color variables, and animation limits.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/docs#install">Install Glyph <ArrowRight size={14} /></Button>
            <Button href="/docs" variant="secondary">Read Documentation</Button>
          </div>
          <button
            onClick={() => handleCopy(installCommand, "hero")}
            className="mt-6 inline-flex max-w-full items-center justify-center gap-3 rounded-xl border border-glyph-border bg-white px-4 py-3 shadow-rest hover:bg-glyph-surface transition-glyph active-press relative group"
            title="Click to copy install command"
          >
            {copiedText === "hero" ? (
              <Check size={16} className="shrink-0 text-emerald-600 animate-scale-up" />
            ) : (
              <Code2 size={16} className="shrink-0 text-glyph-orange group-hover:scale-110 transition-glyph" />
            )}
            <code className="break-all font-mono text-xs text-glyph-text font-semibold">{installCommand}</code>
            <span className="shrink-0 border-l border-glyph-border pl-3 text-glyph-muted group-hover:text-glyph-text transition-glyph flex items-center h-4">
              {copiedText === "hero" ? (
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">Copied!</span>
              ) : (
                <Copy size={13} />
              )}
            </span>
          </button>
          <div className="mt-10 w-full">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-glyph-muted/60 mb-3">Compatible coding agents</p>
            <div className="flex flex-wrap justify-center gap-2">
              {["Codex", "Claude Code", "Cursor", "Gemini CLI", "AI Studio", "v0", "Lovable", "Windsurf", "Copilot"].map((name) => (
                <span key={name} className="rounded-lg border border-glyph-border bg-white px-3 py-1.5 text-[11px] font-semibold text-glyph-text">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* Feature List Section */}
      <section id="features" className="mx-auto max-w-5xl px-6 sm:px-8 md:px-12 py-20">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-wider text-glyph-orange">Rules and Foundations</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-glyph-text leading-tight">
            Design rules your coding assistant can implement.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-glyph-muted max-w-[65ch]">
            Glyph converts abstract design taste into structured prompt instructions, tokens, grids, and boundaries.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-glyph-border pt-8">
          {features.map(({ icon: Icon, num, title, copy }) => (
            <article
              key={title}
              className="group flex items-start gap-4 rounded-xl border border-glyph-border bg-white p-5 transition-all duration-200 hover:border-glyph-orange/30 hover:shadow-rest"
            >
              <span className="shrink-0 font-mono text-[11px] font-semibold text-glyph-muted/60 pt-0.5 tabular-nums tracking-tight">{num}</span>
              <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-glyph-border bg-white text-glyph-text group-hover:border-glyph-orange/30 transition-glyph">
                <Icon size={15} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-bold tracking-tight text-glyph-text">{title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-glyph-muted">{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>


      {/* Install Section */}
      <section id="install" className="mx-auto max-w-5xl px-4 sm:px-6 pb-20">
        <div className="rounded-2xl bg-[#072ca8] p-8 text-center shadow-panel sm:p-12 text-white">
          <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl border border-white/20 bg-white/10 text-white animate-pulse-slow">
            <Blocks size={20} />
          </div>
          <p className="mt-5 text-xs font-bold uppercase tracking-wider text-blue-200">Install</p>
          <h2 className="mx-auto mt-3 max-w-xl text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Add Glyph Skill to your AI coding workflow.
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-xs text-blue-100/80">
            The repository includes SKILL.md plus generated layout rules, typography locks, color systems, and animation guidelines.
          </p>
          <div className="mx-auto mt-8 max-w-xl overflow-hidden rounded-xl border border-white/10 bg-[#111111] text-left shadow-panel">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5 bg-black/35">
              <span className="h-2 w-2 rounded-full bg-[#ee4811]" />
              <span className="h-2 w-2 rounded-full bg-white/25" />
              <span className="h-2 w-2 rounded-full bg-white/25" />
              <span className="ml-auto font-mono text-[10px] uppercase tracking-wider text-white/45">terminal</span>
            </div>
            <code className="flex break-all px-5 py-4 font-mono text-xs text-white">
              <span className="mr-3 text-[#ee4811] font-bold">$</span>
              {installCommand}
            </code>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="https://github.com/sumitttt4/Glyph-Skill"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-glyph active-press px-5 text-sm font-semibold"
            >
              <GitFork size={14} />
              View GitHub Repo
            </a>
            <a
              href="https://github.com/sumitttt4/Glyph-Skill/blob/main/SKILL.md"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-glyph active-press px-5 text-sm font-semibold"
            >
              <BookOpen size={14} />
              Read SKILL.md
            </a>
            <a
              href="https://glyph.software"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white bg-white text-[#072ca8] shadow-rest hover:bg-blue-50 transition-glyph active-press px-5 text-sm font-semibold"
            >
              Open Glyph Software
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-glyph-border bg-white">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 py-8 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-center gap-4">
            <Wordmark />
            <span className="text-[11px] text-glyph-muted">Built by <a href="https://sumitsharmaa.me" className="font-semibold text-glyph-text hover:text-glyph-orange transition-glyph">sumitsharmaa.me</a></span>
          </div>
          <div className="flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-glyph-muted">
            <a href="https://github.com/sumitttt4/Glyph-Skill" className="hover:text-glyph-text transition-glyph">GitHub</a>
            <a href="/docs" className="hover:text-glyph-text transition-glyph">Docs</a>
            <a href="/docs#install" className="hover:text-glyph-text transition-glyph">Install</a>
            <a href="https://x.com/sumitdotme" className="inline-flex items-center gap-1.5 hover:text-glyph-text transition-glyph">
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              @sumitdotme
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

