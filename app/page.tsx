"use client";

import { useState, useEffect, useCallback, useRef } from "react";
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
  Menu,
  Heart,
  Palette,
  Sparkles,
  Terminal,
  Type,
  Activity,
  Smartphone,
  Image,
  ExternalLink,
  X,
} from "lucide-react";

const installCommand = "npx skills add sumitttt4/Glyph-Skill";

function Wordmark({ className = "text-glyph-text" }: { className?: string }) {
  return (
    <a href="#" className={`inline-flex items-center gap-2.5 text-base font-extrabold tracking-tight active-press ${className}`}>
      <svg className="h-7 w-7" viewBox="19.5 20 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M57.5662 44.3416C57.5662 44.601 57.5662 44.8604 57.5662 45.2494C57.5662 51.4738 52.5478 56.6609 46.2427 56.6609C41.6103 56.6609 37.4926 53.808 35.8198 49.6584C35.8198 49.399 35.8198 49.2693 35.8198 49.01C35.8198 42.7855 40.8382 37.5985 47.1434 37.5985C51.7757 37.5985 55.7647 40.3217 57.5662 44.3416L57.4375 21C41.7389 21 29 33.8379 29 49.6584H35.5625V73C51.261 73 64 60.1621 64 44.3416H57.5662Z" fill="currentColor"/>
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
      "border-[#1a1a17] bg-[#1a1a17] text-[#f4f0e8] shadow-rest hover:shadow-hover hover:bg-black hover:border-black",
    secondary: "border-glyph-border bg-white text-glyph-text shadow-rest hover:bg-glyph-surface",
    ghost: "border-transparent bg-transparent text-glyph-muted hover:text-glyph-text hover:bg-glyph-border-soft",
  };

  return (
    <a
      href={href}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border px-5 text-sm font-semibold transition-glyph active-press focus-visible:ring-2 focus-visible:ring-[#1a1a17] focus-visible:ring-offset-2 focus-visible:outline-none ${fullWidth ? "w-full" : ""} ${variants[variant]}`}
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
    '    primary: "#1a1a17",',
    '    background: "#f4f0e8",',
    '    border: "rgba(0,0,0,0.08)"',
    '  },',
    '  typography: {',
    '    headings: "Host",',
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

/* ── Tabbed Terminal Widget ── */
function TabbedTerminal({ copiedText, onCopy }: { copiedText: string | null; onCopy: (text: string, id: string) => void }) {
  const installContent = (
    <code className="flex-1 break-all pr-4">
      <span className="text-glyph-orange font-bold mr-2">$</span>
      <span className="text-glyph-text font-semibold">npx</span> <span className="text-slate-700">skills</span> <span className="text-[#ee4811] font-semibold">add</span> <span className="text-glyph-text font-semibold">sumitttt4/Glyph-Skill</span>
    </code>
  );

  return (
    <div className="mt-8 w-full max-w-lg overflow-hidden rounded-xl border border-glyph-border bg-white text-left shadow-rest transition-glyph hover:border-glyph-orange/30 p-4">
      <div className="flex items-center justify-between font-mono text-xs text-glyph-text">
        {installContent}
        <button
          onClick={() => onCopy(installCommand, "hero")}
          className="shrink-0 min-h-11 min-w-11 inline-flex items-center justify-center gap-1.5 rounded-lg border border-glyph-border bg-glyph-surface px-2.5 py-1.5 hover:bg-glyph-border-soft text-glyph-muted hover:text-glyph-text transition-glyph active-press text-[11px] font-bold uppercase tracking-wider focus-visible:ring-2 focus-visible:ring-[#1a1a17] focus-visible:ring-offset-2 focus-visible:outline-none"
          title="Copy install command"
        >
          {copiedText === "hero" ? (
            <>
              <Check size={12} className="text-emerald-600 animate-scale-up" />
              <span className="text-[10px] text-emerald-600 font-mono">Copied!</span>
            </>
          ) : (
            <>
              <Copy size={12} />
              <span className="text-[10px] font-mono">Copy</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

/* ── Animated Features Section Header ── */
function FeaturesSectionHeader() {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const target = 10;
    const duration = 1200;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible]);

  return (
    <div ref={sectionRef} className="mb-16 max-w-2xl">
      {/* Animated pill badge */}
      <div
        className={`inline-flex items-center gap-2 rounded-full border border-glyph-orange/20 bg-glyph-soft px-3 py-1.5 mb-5 transition-all duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-glyph-orange animate-pulse" />
        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-glyph-orange">
          {count} Rule Categories
        </span>
      </div>

      {/* Heading with highlighted words */}
      <h2
        className={`text-3xl sm:text-4xl font-extrabold tracking-tight text-glyph-text leading-tight transition-all duration-700 delay-100 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <span className="text-glyph-orange">Design rules</span> your coding assistant can implement.
      </h2>

      {/* Animated accent bar */}
      <div className="mt-4 h-[3px] rounded-full bg-glyph-border overflow-hidden">
        <div
          className={`h-full rounded-full bg-glyph-orange transition-all duration-1000 ease-out delay-300 ${
            isVisible ? "w-1/3" : "w-0"
          }`}
        />
      </div>

      {/* Subtitle */}
      <p
        className={`mt-5 text-base text-glyph-muted max-w-[65ch] transition-all duration-700 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
      >
        Glyph converts abstract design taste into structured prompt instructions, tokens, grids, and boundaries.
      </p>
    </div>
  );
}

export default function Home() {
  const [stars, setStars] = useState<number | null>(null);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      .catch(() => { });
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
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${isScrolled
        ? "border-glyph-border/80 bg-white/90 backdrop-blur-xl shadow-sm"
        : "border-transparent bg-white/0"
        }`}>
        <div className="mx-auto flex min-h-[72px] max-w-5xl items-center justify-between px-4 sm:px-6">
          <Wordmark className={isScrolled ? "text-glyph-text" : "text-white"} />
          <nav className={`hidden items-center gap-6 text-xs font-semibold uppercase tracking-wider md:flex ${isScrolled ? "text-glyph-muted" : "text-white/80"}`}>
            <a href="#features" className={`transition-glyph focus-visible:ring-2 focus-visible:ring-[#1a1a17] focus-visible:ring-offset-2 focus-visible:outline-none rounded-md px-1 py-0.5 ${isScrolled ? "hover:text-glyph-text" : "hover:text-white"}`}>Rules</a>
            <a href="/docs" className={`transition-glyph focus-visible:ring-2 focus-visible:ring-[#1a1a17] focus-visible:ring-offset-2 focus-visible:outline-none rounded-md px-1 py-0.5 ${isScrolled ? "hover:text-glyph-text" : "hover:text-white"}`}>Docs</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/sumitttt4/Glyph-Skill"
              className="inline-flex items-center gap-0 rounded-full border border-[#1a1a17] bg-[#1a1a17] text-[#f4f0e8] hover:bg-black hover:border-black transition-glyph active-press overflow-hidden focus-visible:ring-2 focus-visible:ring-[#1a1a17] focus-visible:ring-offset-2 focus-visible:outline-none shadow-rest hover:shadow-hover"
            >
              <span className="inline-flex items-center gap-1.5 px-4 py-2.5 border-r border-white/10 text-xs font-semibold">
                <GitFork size={13} />
                <span className="hidden sm:inline">GitHub</span>
              </span>
              <span className="inline-flex items-center gap-1 px-3.5 py-2.5 font-mono text-[11px] text-white">
                <svg className="h-3.5 w-3.5 text-amber-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                {stars !== null ? stars.toLocaleString() : "\u2014"}
              </span>
            </a>
            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className={`inline-flex items-center justify-center h-11 w-11 rounded-xl border transition-glyph active-press focus-visible:ring-2 focus-visible:ring-[#1a1a17] focus-visible:ring-offset-2 focus-visible:outline-none md:hidden ${isScrolled
                ? "bg-white border-glyph-border text-glyph-text hover:bg-glyph-surface"
                : "bg-white/10 border-white/20 text-white hover:bg-white/20"
                }`}
              aria-label="Open navigation menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 animate-fade-in"
            onClick={() => setMobileOpen(false)}
            onKeyDown={(e) => { if (e.key === 'Escape') setMobileOpen(false); }}
          />
          {/* Drawer panel */}
          <nav className="absolute right-0 top-0 h-full w-72 bg-white border-l border-glyph-border shadow-2xl p-6 flex flex-col gap-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <Wordmark />
              <button
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center h-11 w-11 rounded-xl border border-glyph-border text-glyph-muted hover:text-glyph-text transition-glyph active-press focus-visible:ring-2 focus-visible:ring-[#1a1a17] focus-visible:ring-offset-2 focus-visible:outline-none"
                aria-label="Close navigation menu"
              >
                <X size={18} />
              </button>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              {[{ label: "Rules", href: "#features" }, { label: "Docs", href: "/docs" }, { label: "Install", href: "/docs#install" }].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 px-4 rounded-xl text-sm font-semibold uppercase tracking-wider text-glyph-text hover:bg-glyph-surface transition-glyph focus-visible:ring-2 focus-visible:ring-[#1a1a17] focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href="https://github.com/sumitttt4/Glyph-Skill"
              className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#1a1a17] text-[#f4f0e8] px-5 py-3 text-sm font-semibold hover:bg-black transition-glyph active-press focus-visible:ring-2 focus-visible:ring-[#1a1a17] focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <GitFork size={14} />
              View on GitHub
            </a>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <section
        id="interactive-container"
        className="relative border-b border-glyph-border pb-20 sm:pb-24 isolate overflow-hidden bg-cover bg-center bg-no-repeat pt-[136px] sm:pt-[152px]"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <BackgroundCode />

        {/* Subtle grid pattern blended over the image */}
        <div className="absolute inset-0 bg-blueprint-grid opacity-60 -z-10" />

        <div className="guideline-y left-4 sm:left-6 md:left-[8%]" />
        <div className="guideline-y right-4 sm:right-6 md:right-[8%]" />

        {/* Left guideline ruler ticks */}
        <div className="absolute top-0 bottom-0 left-[8%] w-4 hidden md:flex flex-col justify-between py-12 pointer-events-none -z-10 select-none opacity-20 font-mono text-[7px] text-glyph-muted">
          <span>y-0px</span>
          <span>y-100px</span>
          <span>y-200px</span>
          <span>y-300px</span>
          <span>y-400px</span>
          <span>y-500px</span>
          <span>y-600px</span>
          <span>y-700px</span>
          <span>y-800px</span>
        </div>

        {/* Center coordinate point */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 pointer-events-none -z-10 select-none opacity-40 font-mono text-[8px] text-glyph-muted flex items-center justify-center">
          <span className="absolute w-4 h-px bg-glyph-border" />
          <span className="absolute h-4 w-px bg-glyph-border" />
          <span className="mt-4 ml-4 text-[6px] opacity-70">(0,0)</span>
        </div>

        {/* Soft premium radial gradient overlay - updated color to match warm paper surface (#f4f0e8) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,240,232,0.35)_0%,rgba(244,240,232,0.15)_60%,rgba(244,240,232,0.05)_90%,transparent_100%)] -z-10" />

        <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center py-12 md:py-16 flex flex-col items-center justify-center animate-fade-in-up">
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-glyph-orange mb-3 animate-fade-in-up">

          </span>
          <h1 className="text-[40px] sm:text-5xl lg:text-[56px] font-extrabold leading-[1.05] tracking-[-0.04em] text-glyph-text max-w-4xl">
            Design websites and products with taste, not just with AI slop.
          </h1>
          <p className="mt-6 text-base sm:text-lg leading-7 text-glyph-text max-w-3xl">
            An enforceable brand, layout, and documentation skill for your AI coding assistant. Import strict layout constraints, typography locks, color variables, and animation limits.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/docs#install">Install Glyph <ArrowRight size={14} /></Button>
            <Button href="/docs" variant="secondary">Read Documentation</Button>
          </div>

          {/* Tabbed Terminal Widget */}
          <TabbedTerminal copiedText={copiedText} onCopy={handleCopy} />


          <div className="mt-10 w-full">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-glyph-muted mb-3">Compatible coding agents</p>
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

      {/* Built with Glyph Skill Section */}
      <section className="mx-auto max-w-5xl px-6 sm:px-8 md:px-12 py-24 sm:py-32 border-b border-glyph-border">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-xs font-bold uppercase tracking-wider text-glyph-orange mb-2">Designed with Taste</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-glyph-text">
            Built with Glyph Skill
          </h2>
          <p className="mt-4 text-base text-glyph-muted max-w-[60ch] mx-auto">
            Real landing pages and web applications generated using AI assistants equipped with Glyph system constraints.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Glyph Site Generator",
              description: "AI landing page builder styled in a cool warm paper and glassmorphic technical theme.",
              img: "/showcase-glyph.png",
              tag: "SaaS Landing Page",
            },
            {
              title: "Nowar App Workspace",
              description: "Productivity application interface featuring solid orange accents and clean wireframe elements.",
              img: "/showcase-nowar.png",
              tag: "Workspace Interface",
            },
            {
              title: "Nova Calendar Blueprint",
              description: "Fitness and health agenda interface structured around a strict calendar grid system.",
              img: "/showcase-nova.png",
              tag: "Health & Fitness App",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-2xl border border-glyph-border bg-white shadow-premium-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-premium-xl hover:border-glyph-orange/25"
            >
              <div className="aspect-[16/10] w-full overflow-hidden border-b border-glyph-border bg-slate-50 relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.img}
                  alt={`Screenshot of ${item.title} showcasing high-fidelity developer UI layout.`}
                  className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="inline-block rounded-md bg-glyph-soft px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-glyph-orange">
                  {item.tag}
                </span>
                <h3 className="mt-3 text-base font-bold tracking-tight text-glyph-text group-hover:text-glyph-orange transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-glyph-muted">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Feature List Section */}
      <section id="features" className="mx-auto max-w-5xl px-6 sm:px-8 md:px-12 py-24 sm:py-32 relative">
        <div className="guideline-y left-4 sm:left-6 md:left-[8%]" />
        <div className="guideline-y right-4 sm:right-6 md:right-[8%]" />
        <FeaturesSectionHeader />


        <div className="space-y-16">
          {/* Group 1: Foundational Aesthetics */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-glyph-orange/20 bg-glyph-soft px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-glyph-orange animate-pulse" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-glyph-orange">Group 01</span>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-glyph-orange/20 to-transparent" />
            </div>
            <h3 className="text-lg font-extrabold tracking-tight text-glyph-text">
              <span className="text-glyph-orange">Foundational</span> Aesthetics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Core Color Rules (col-span-1) */}
              <div className="group flex flex-col justify-between rounded-xl border border-glyph-border bg-white bg-dot-grid-sm p-6 transition-all duration-300 hover:-translate-y-1 hover:border-glyph-orange/20 hover:shadow-premium-md col-span-1 cursor-pointer active-press">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] font-semibold text-glyph-muted/60 tabular-nums">01</span>
                    <div className="grid h-8 w-8 place-items-center rounded-lg border border-glyph-border bg-white text-glyph-text group-hover:border-glyph-orange/30 group-hover:text-glyph-orange transition-all duration-300">
                      <Palette size={15} />
                    </div>
                    <h4 className="text-sm font-bold tracking-tight text-glyph-text">Core Color Rules</h4>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-glyph-muted">
                    Accent consistency locks, max text colors per surface, contrast requirements, and industry-standard palettes.
                  </p>
                </div>

                {/* Color preview widget */}
                <div className="mt-5 rounded-lg border border-glyph-border bg-glyph-surface p-3 flex flex-col justify-between min-h-[76px]">
                  <div className="flex items-center justify-between text-[9px] font-mono uppercase tracking-wider text-glyph-muted/65 border-b border-glyph-border/40 pb-1.5">
                    <span>contrast lock</span>
                    <span className="font-semibold text-glyph-text">4.5:1 (AA)</span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex -space-x-1.5">
                      <span className="h-5 w-5 rounded-full border border-white bg-[#171714] ring-1 ring-black/5" title="Ink: #171714" />
                      <span className="h-5 w-5 rounded-full border border-white bg-[#ee4811] ring-1 ring-black/5" title="Orange: #ee4811" />
                      <span className="h-5 w-5 rounded-full border border-white bg-[#f4f0e8] ring-1 ring-black/5" title="Paper: #f4f0e8" />
                      <span className="h-5 w-5 rounded-full border border-white bg-[#dfdad0] ring-1 ring-black/5" title="Border: #dfdad0" />
                    </div>
                    <div className="font-mono text-[9px] text-glyph-muted flex gap-2">
                      <span>Ink</span>
                      <span>•</span>
                      <span>Paper</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Typography Rules (col-span-1) */}
              <div className="group flex flex-col justify-between rounded-xl border border-glyph-border bg-white bg-dot-grid-sm p-6 transition-all duration-300 hover:-translate-y-1 hover:border-glyph-orange/20 hover:shadow-premium-md col-span-1 cursor-pointer active-press">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] font-semibold text-glyph-muted/60 tabular-nums">02</span>
                    <div className="grid h-8 w-8 place-items-center rounded-lg border border-glyph-border bg-white text-glyph-text group-hover:border-glyph-orange/30 group-hover:text-glyph-orange transition-all duration-300">
                      <Type size={15} />
                    </div>
                    <h4 className="text-sm font-bold tracking-tight text-glyph-text">Typography Rules</h4>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-glyph-muted">
                    Font pairing stacks, negative heading tracking, weight limits, and strict 65-character line length locks.
                  </p>
                </div>

                {/* Typography preview */}
                <div className="mt-5 rounded-lg border border-glyph-border bg-glyph-surface p-3 flex flex-col justify-between min-h-[76px] text-left">
                  <div className="flex items-center justify-between text-[9px] font-mono uppercase tracking-wider text-glyph-muted/65 border-b border-glyph-border/40 pb-1.5">
                    <span>heading tracking</span>
                    <span className="font-semibold text-glyph-text">-0.04em</span>
                  </div>
                  <div className="mt-2 text-sm font-extrabold tracking-[-0.04em] text-glyph-text leading-snug font-display">
                    Host Grotesk Display
                  </div>
                </div>
              </div>

              {/* Layout Rules (col-span-1) */}
              <div className="group flex flex-col justify-between rounded-xl border border-glyph-border bg-white bg-dot-grid-sm p-6 transition-all duration-300 hover:-translate-y-1 hover:border-glyph-orange/20 hover:shadow-premium-md col-span-1 cursor-pointer active-press">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] font-semibold text-glyph-muted/60 tabular-nums">03</span>
                    <div className="grid h-8 w-8 place-items-center rounded-lg border border-glyph-border bg-white text-glyph-text group-hover:border-glyph-orange/30 group-hover:text-glyph-orange transition-all duration-300">
                      <Layers3 size={15} />
                    </div>
                    <h4 className="text-sm font-bold tracking-tight text-glyph-text">Layout Rules</h4>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-glyph-muted">
                    A locked 4px grid system, standard container widths (720/1080/1280px), and unified padding parameters.
                  </p>
                </div>

                {/* Layout preview */}
                <div className="mt-5 rounded-lg border border-glyph-border bg-glyph-surface p-3 flex flex-col justify-between min-h-[76px] text-left">
                  <div className="flex items-center justify-between text-[9px] font-mono uppercase tracking-wider text-glyph-muted/65 border-b border-glyph-border/40 pb-1.5">
                    <span>container width</span>
                    <span className="font-semibold text-glyph-text">1080px</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-xs font-bold text-glyph-text select-none">
                    <span className="font-mono text-[10px] text-glyph-muted">Standard</span>
                    <div className="w-16 h-1.5 bg-glyph-border rounded-full relative overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-3/4 bg-glyph-orange" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Group 2: Clean Engineering */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-glyph-orange/20 bg-glyph-soft px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-glyph-orange animate-pulse" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-glyph-orange">Group 02</span>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-glyph-orange/20 to-transparent" />
            </div>
            <h3 className="text-lg font-extrabold tracking-tight text-glyph-text">
              <span className="text-glyph-orange">Clean Engineering</span> & Quality Locks
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 4: Component Rules (col-span-1 md:col-span-2) */}
              <div className="group flex flex-col justify-between rounded-xl border border-glyph-border bg-white bg-dot-grid-sm p-6 transition-all duration-300 hover:-translate-y-1 hover:border-glyph-orange/20 hover:shadow-premium-md col-span-1 md:col-span-2 cursor-pointer active-press">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] font-semibold text-glyph-muted/60 tabular-nums">04</span>
                    <div className="grid h-8 w-8 place-items-center rounded-lg border border-glyph-border bg-white text-glyph-text group-hover:border-glyph-orange/30 group-hover:text-glyph-orange transition-all duration-300">
                      <Blocks size={15} />
                    </div>
                    <h4 className="text-sm font-bold tracking-tight text-glyph-text">Component Rules</h4>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-glyph-muted">
                    Detailed design specifications for 22 interface component types, including forms, navbars, tables, and modal elements.
                  </p>
                </div>

                {/* Navigation wireframe preview */}
                <div className="mt-5 rounded-lg border border-dashed border-glyph-border bg-glyph-surface p-2.5 flex items-center justify-between text-[9px] font-mono font-bold text-glyph-muted select-none">
                  <span className="border border-glyph-border rounded bg-white px-2 py-1">[LOGO]</span>
                  <div className="flex gap-2">
                    <span>rules</span>
                    <span>docs</span>
                    <span>install</span>
                  </div>
                  <span className="border border-glyph-border rounded bg-white px-2 py-1 text-glyph-orange">[CTA]</span>
                </div>
              </div>

              {/* Card 8: Anti-Slop Rules (col-span-1) */}
              <div className="group flex flex-col justify-between rounded-xl border border-glyph-border bg-white bg-dot-grid-sm p-6 transition-all duration-300 hover:-translate-y-1 hover:border-glyph-orange/20 hover:shadow-premium-md col-span-1 cursor-pointer active-press">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] font-semibold text-glyph-muted/60 tabular-nums">08</span>
                    <div className="grid h-8 w-8 place-items-center rounded-lg border border-glyph-border bg-white text-glyph-text group-hover:border-glyph-orange/30 group-hover:text-glyph-orange transition-all duration-300">
                      <Brush size={15} />
                    </div>
                    <h4 className="text-sm font-bold tracking-tight text-glyph-text">Anti-Slop Rules</h4>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-glyph-muted">
                    Active bans on mesh blobs, Poppins defaults, floating decoration orbs, AI sparkle icons, and vague copywriting.
                  </p>
                </div>

                {/* Anti-slop checklist preview */}
                <div className="mt-5 grid grid-cols-1 gap-1.5 text-[10px] font-mono text-glyph-muted">
                  {[
                    "Poppins Default Font",
                    "Purple-to-Pink Gradients",
                    "Floating Decoration Orbs",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-1.5 rounded bg-glyph-surface px-2 py-1 line-through decoration-rose-500/80 text-glyph-muted/60">
                      <span className="text-rose-500 font-bold font-sans">✕</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Framework Rules (col-span-1) */}
              <div className="group flex flex-col justify-between rounded-xl border border-glyph-border bg-white bg-dot-grid-sm p-6 transition-all duration-300 hover:-translate-y-1 hover:border-glyph-orange/20 hover:shadow-premium-md col-span-1 cursor-pointer active-press">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] font-semibold text-glyph-muted/60 tabular-nums">09</span>
                    <div className="grid h-8 w-8 place-items-center rounded-lg border border-glyph-border bg-white text-glyph-text group-hover:border-glyph-orange/30 group-hover:text-glyph-orange transition-all duration-300">
                      <Code2 size={15} />
                    </div>
                    <h4 className="text-sm font-bold tracking-tight text-glyph-text">Framework Rules</h4>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-glyph-muted">
                    Clean implementation constraints for React, Next.js, Svelte, Tailwind, and custom styled templates.
                  </p>
                </div>
              </div>

              {/* Background Rules (col-span-1) */}
              <div className="group flex flex-col justify-between rounded-xl border border-glyph-border bg-white bg-dot-grid-sm p-6 transition-all duration-300 hover:-translate-y-1 hover:border-glyph-orange/20 hover:shadow-premium-md col-span-1 cursor-pointer active-press">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] font-semibold text-glyph-muted/60 tabular-nums">10</span>
                    <div className="grid h-8 w-8 place-items-center rounded-lg border border-glyph-border bg-white text-glyph-text group-hover:border-glyph-orange/30 group-hover:text-glyph-orange transition-all duration-300">
                      <Image size={15} />
                    </div>
                    <h4 className="text-sm font-bold tracking-tight text-glyph-text">Background Rules</h4>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-glyph-muted">
                    Limits on visual background patterns, gradient overlay masks, filters, and backdrop blur variables.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Group 3: Responsive & UX Dynamics */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-glyph-orange/20 bg-glyph-soft px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-glyph-orange animate-pulse" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-glyph-orange">Group 03</span>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-glyph-orange/20 to-transparent" />
            </div>
            <h3 className="text-lg font-extrabold tracking-tight text-glyph-text">
              <span className="text-glyph-orange">Responsive</span> & UX Dynamics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Motion Rules */}
              <div className="group flex flex-col justify-between rounded-xl border border-glyph-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-glyph-orange/20 hover:shadow-premium-md col-span-1 cursor-pointer active-press">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] font-semibold text-glyph-muted/60 tabular-nums">05</span>
                    <div className="grid h-8 w-8 place-items-center rounded-lg border border-glyph-border bg-white text-glyph-text group-hover:border-glyph-orange/30 group-hover:text-glyph-orange transition-all duration-300">
                      <Activity size={15} />
                    </div>
                    <h4 className="text-sm font-bold tracking-tight text-glyph-text">Motion Rules</h4>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-glyph-muted">
                    Animation caps (400ms max), cubic-bezier easing curves, active press scaling, and transition constraints.
                  </p>
                </div>
              </div>

              {/* Accessibility Rules */}
              <div className="group flex flex-col justify-between rounded-xl border border-glyph-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-glyph-orange/20 hover:shadow-premium-md col-span-1 cursor-pointer active-press">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] font-semibold text-glyph-muted/60 tabular-nums">06</span>
                    <div className="grid h-8 w-8 place-items-center rounded-lg border border-glyph-border bg-white text-glyph-text group-hover:border-glyph-orange/30 group-hover:text-glyph-orange transition-all duration-300">
                      <BadgeCheck size={15} />
                    </div>
                    <h4 className="text-sm font-bold tracking-tight text-glyph-text">Accessibility Rules</h4>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-glyph-muted">
                    Visible focus outlines, keyboard navigation paths, touch target minimums, and ARIA landmark constraints.
                  </p>
                </div>
              </div>

              {/* Responsive Rules */}
              <div className="group flex flex-col justify-between rounded-xl border border-glyph-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-glyph-orange/20 hover:shadow-premium-md col-span-1 cursor-pointer active-press">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] font-semibold text-glyph-muted/60 tabular-nums">07</span>
                    <div className="grid h-8 w-8 place-items-center rounded-lg border border-glyph-border bg-white text-glyph-text group-hover:border-glyph-orange/30 group-hover:text-glyph-orange transition-all duration-300">
                      <Smartphone size={15} />
                    </div>
                    <h4 className="text-sm font-bold tracking-tight text-glyph-text">Responsive Rules</h4>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-glyph-muted">
                    Folding breakpoint triggers, custom mobile spacing metrics, container collapse rules, and overflow control.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Install Section */}
      <section id="install" className="mx-auto max-w-5xl px-4 sm:px-6 pb-20">
        <div
          className="rounded-2xl bg-cover bg-center bg-no-repeat p-6 sm:p-16 text-center shadow-panel text-white relative overflow-hidden"
          style={{ backgroundImage: "url('/landscape-bg.jpg')" }}
        >
          {/* Subtle dark overlay to ground the background image */}
          <div className="absolute inset-0 bg-black/10 -z-10" />

          {/* Icon, badge, title, and description directly on the sky background */}
          <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl border border-white/20 bg-white/10 text-white animate-pulse-slow">
            <Blocks size={20} />
          </div>
          <p className="mt-5 text-xs font-bold uppercase tracking-wider text-stone-300">Install</p>
          <h2 className="mx-auto mt-3 max-w-xl text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Add Glyph Skill to your AI coding workflow.
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-xs sm:text-sm text-stone-200/80">
            The repository includes SKILL.md plus generated layout rules, typography locks, color systems, and animation guidelines.
          </p>

          {/* Centered glassmorphic card wrapping terminal & buttons */}
          <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-white/10 bg-[#1a1a17]/85 p-6 sm:p-8 shadow-2xl backdrop-blur-md text-center flex flex-col items-center">

            {/* Integrated supported tools */}
            <div className="flex flex-wrap justify-center items-center gap-2 mb-4 text-[10px] font-mono text-stone-300/90 select-none">
              <span className="opacity-60">Compatible Assistants:</span>
              <span className="bg-white/10 px-2 py-0.5 rounded">Cursor</span>
              <span className="bg-white/10 px-2 py-0.5 rounded">Claude Code</span>
              <span className="bg-white/10 px-2 py-0.5 rounded">Windsurf</span>
              <span className="bg-white/10 px-2 py-0.5 rounded">VS Code</span>
            </div>

            {/* Interactive Terminal Widget (matching header widget but larger and syntax highlighted) */}
            <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-[#111111]/95 text-left shadow-2xl">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5 bg-black/35">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                <span className="ml-auto font-mono text-[9px] uppercase tracking-wider text-white/45">terminal</span>
              </div>
              <div className="flex items-center justify-between px-6 py-5 font-mono text-sm text-white overflow-x-auto">
                <code className="flex-1 break-all pr-4">
                  <span className="text-[#ee4811] font-bold mr-2">$</span>
                  <span className="text-white font-semibold">npx</span> <span className="text-stone-300">skills</span> <span className="text-[#f43f5e] font-semibold">add</span> <span className="text-emerald-400 font-bold">sumitttt4/Glyph-Skill</span><span className="ml-1 inline-block w-1.5 h-3.5 bg-white align-middle animate-cursor-blink" />
                </code>
                <button
                  onClick={() => handleCopy(installCommand, "install")}
                  className="shrink-0 inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 hover:bg-white/10 text-white transition-glyph active-press text-[11px] font-bold uppercase tracking-wider"
                  title="Copy install command"
                >
                  {copiedText === "install" ? (
                    <>
                      <Check size={12} className="text-emerald-400 animate-scale-up" />
                      <span className="text-[10px] text-emerald-400 font-mono">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span className="text-[10px] font-mono">Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Premium Button Actions */}
            <div className="mt-6 flex flex-wrap justify-center items-center gap-4 w-full">
              <a
                href="https://github.com/sumitttt4/Glyph-Skill"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-all duration-300 active-press px-5 text-sm font-semibold shadow-md"
              >
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" /></svg>
                View GitHub Repo
              </a>
              <a
                href="https://github.com/sumitttt4/Glyph-Skill/blob/main/SKILL.md"
                className="inline-flex min-h-11 items-center justify-center gap-2 text-white/80 hover:text-white transition-colors duration-200 active-press px-5 text-sm font-semibold"
              >
                <BookOpen size={14} />
                Read SKILL.md
              </a>
              <a
                href="https://glyph.software"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-white text-[#1a1a17] shadow-md hover:bg-stone-100 transition-all duration-300 active-press px-5 text-sm font-semibold"
              >
                Open Glyph Software
                <ExternalLink size={14} />
              </a>
            </div>
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
          <div className="flex flex-wrap items-center gap-6 text-xs font-semibold uppercase tracking-wider text-glyph-muted">
            <a href="https://github.com/sumitttt4/Glyph-Skill" className="hover:text-glyph-text transition-glyph">GitHub</a>
            <a href="/docs" className="hover:text-glyph-text transition-glyph">Docs</a>
            <a href="/docs#install" className="hover:text-glyph-text transition-glyph">Install</a>
            <a
              href="https://github.com/sponsors/sumitttt4"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 hover:text-glyph-text transition-glyph text-rose-500 font-bold"
            >
              <Heart size={12} className="fill-rose-500 text-rose-500" />
              Sponsor
            </a>
            <a href="https://x.com/sumitdotme" className="inline-flex items-center gap-1.5 hover:text-glyph-text transition-glyph">
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              @sumitdotme
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

