"use client";

import React, { useState, useEffect } from "react";
import { ArrowLeft, Terminal, Check, Copy, ArrowRight } from "lucide-react";

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

export default function DocsPage() {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState("install");
  const [selectedFile, setSelectedFile] = useState<string>("SKILL.md");

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const scrollToSection = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 90; // Adjust for sticky header height
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      window.history.pushState(null, "", `#${id}`);
      setActiveSection(id);
    }
  };

  const sections = [
    { id: "install", label: "Installation" },
    { id: "how-it-thinks", label: "How Glyph Thinks" },
    { id: "agents", label: "Compatible Agents" },
    { id: "rule-files", label: "Skill Files" },
    { id: "locks", label: "The Locks" },
    { id: "hero-discipline", label: "Hero Discipline" },
    { id: "anti-slop", label: "Anti-Slop Bans" },
    { id: "customize", label: "Customization" },
    { id: "learn-more", label: "Learn More" },
  ];

  const ruleFiles = [
    { file: "SKILL.md", desc: "Main entrypoint. Hard color bans, slash commands, taste rules, and pointers to all reference files." },
    { file: "core-color-rules.md", desc: "Functional color roles, industry palettes, max text colors per surface, contrast requirements." },
    { file: "typography-rules.md", desc: "Font pairing locks, negative heading tracking, 65-character line limits, weight restrictions." },
    { file: "layout-rules.md", desc: "Container widths (720/1080/1280px), 4px spacing grid, section padding, border radius scales." },
    { file: "component-rules.md", desc: "Design specs for 22 component categories — nav, forms, cards, dashboards, tables, modals." },
    { file: "motion-rules.md", desc: "Animation duration caps, cubic-bezier easing, active press scale values, keyframe limits." },
    { file: "accessibility-rules.md", desc: "Visible focus outlines, keyboard navigation, touch target minimums, ARIA landmarks." },
    { file: "responsive-rules.md", desc: "Breakpoint collapse thresholds, mobile padding scales, overflow scroll behavior." },
    { file: "anti-slop-rules.md", desc: "Bans on purple gradients, floating orbs, Poppins defaults, sparkle icons, vague copy." },
    { file: "framework-rules.md", desc: "Constraints for React, Next.js, Vue, Svelte, Tailwind, and shadcn/ui." },
    { file: "background-rules.md", desc: "Background visual rules, gradient masking, overlay constraints, backdrop blur limits." },
  ];

  // Set up active section observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <main 
      id="interactive-container"
      className="relative min-h-screen bg-[var(--glyph-surface)] text-glyph-text"
      style={{ fontFamily: 'var(--font-inter), sans-serif' }}
    >
      <BackgroundCode />
      {/* Header */}
      <div className="border-b border-glyph-border/80 bg-white/95 backdrop-blur-xl sticky top-0 z-30">
        <div className="mx-auto flex min-h-[64px] max-w-6xl items-center justify-between px-6 sm:px-8 md:px-12">
          <a href="/" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-glyph-muted hover:text-glyph-text transition-glyph">
            <ArrowLeft size={14} /> Back
          </a>
          <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-glyph-muted">
            docs
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12 py-12 md:py-16">
        <div className="grid md:grid-cols-[160px_1fr] gap-20 items-start">

          {/* Sidebar */}
          <aside className="sticky top-24 hidden md:block self-start w-[160px] select-none">
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-glyph-muted/50 mb-4">On this page</p>
            <nav className="flex flex-col gap-1">
              {sections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={(e) => scrollToSection(sec.id, e)}
                  className={`py-2 text-[12px] font-semibold uppercase tracking-wider transition-glyph border-l-2 pl-3 -ml-3 ${
                    activeSection === sec.id
                      ? "text-glyph-text border-glyph-orange"
                      : "text-glyph-muted border-transparent hover:text-glyph-text"
                  }`}
                >
                  {sec.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <article className="max-w-[760px] animate-fade-in">
            <header className="mb-14">
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.04em] text-glyph-text leading-tight">
                Getting started.
              </h1>
              <p className="mt-4 text-[15px] text-glyph-muted leading-relaxed max-w-[55ch]">
                Install Glyph Skill, understand how it reads a brief, and learn the rules it enforces on your AI coding assistant.
              </p>
            </header>

            {/* ── Installation ── */}
            <section id="install" className="mb-14 scroll-mt-24">
              <h2 className="text-xl font-bold tracking-tight text-glyph-text mb-3">Installation</h2>
              <p className="text-[14px] leading-relaxed text-glyph-muted mb-4">
                The default install pulls the core Glyph skill. It places a unified <code className="font-mono text-[13px] bg-white px-1.5 py-0.5 rounded border border-glyph-border">SKILL.md</code> plus detailed reference rule files in your codebase directory. Works with any agent that supports skills.
              </p>

              {/* Default */}
              <div className="rounded-xl border border-glyph-border bg-white overflow-hidden mb-3 shadow-sm">
                <div className="flex items-center justify-between border-b border-glyph-border px-4 py-2 bg-slate-50/50">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-glyph-muted flex items-center gap-1.5">
                    <Terminal size={11} className="text-glyph-orange" /> default bundle
                  </span>
                  <button
                    onClick={() => handleCopy("npx skills add sumitttt4/Glyph-Skill", "install")}
                    className="text-glyph-muted hover:text-glyph-text transition-glyph flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider"
                  >
                    {copiedText === "install" ? <Check size={11} className="text-emerald-600" /> : <Copy size={11} />}
                    {copiedText === "install" ? "Copied" : "Copy"}
                  </button>
                </div>
                <div className="p-4 bg-[#fafaf9]">
                  <code className="font-mono text-[13px] text-glyph-text block">
                    <span className="text-glyph-orange font-bold mr-2">$</span>npx skills add sumitttt4/Glyph-Skill
                  </code>
                </div>
              </div>
              <p className="text-[13px] text-glyph-muted mb-6 leading-relaxed">
                Adds a SKILL.md file to your project. The agent reads it automatically. No extra configuration required.
              </p>

              {/* Individual skill */}
              <h3 className="text-[13px] font-bold uppercase tracking-wider text-glyph-text mb-2">Individual skill add</h3>
              <div className="rounded-xl border border-glyph-border bg-white overflow-hidden mb-3 shadow-sm">
                <div className="flex items-center justify-between border-b border-glyph-border px-4 py-2 bg-slate-50/50">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-glyph-muted flex items-center gap-1.5">
                    <Terminal size={11} className="text-glyph-orange" /> specific add
                  </span>
                  <button
                    onClick={() => handleCopy("npx skills add sumitttt4/Glyph-Skill --skill \"design-rules\"", "specific")}
                    className="text-glyph-muted hover:text-glyph-text transition-glyph flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider"
                  >
                    {copiedText === "specific" ? <Check size={11} className="text-emerald-600" /> : <Copy size={11} />}
                    {copiedText === "specific" ? "Copied" : "Copy"}
                  </button>
                </div>
                <div className="p-4 bg-[#fafaf9]">
                  <code className="font-mono text-[13px] text-glyph-text block">
                    <span className="text-glyph-orange font-bold mr-2">$</span>npx skills add sumitttt4/Glyph-Skill --skill &quot;design-rules&quot;
                  </code>
                </div>
              </div>

              {/* Codex */}
              <h3 className="text-[13px] font-bold uppercase tracking-wider text-glyph-text mb-2 mt-6">Codex</h3>
              <p className="text-[13px] text-glyph-muted mb-3 leading-relaxed">
                Install the full skill bundle into the Codex skills directory:
              </p>
              <div className="rounded-xl border border-glyph-border bg-white overflow-hidden mb-3 shadow-sm">
                <div className="flex items-center justify-between border-b border-glyph-border px-4 py-2 bg-slate-50/50">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-glyph-muted flex items-center gap-1.5">
                    <Terminal size={11} className="text-glyph-orange" /> codex
                  </span>
                  <button
                    onClick={() => handleCopy("npx skills add sumitttt4/Glyph-Skill -a codex", "codex")}
                    className="text-glyph-muted hover:text-glyph-text transition-glyph flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider"
                  >
                    {copiedText === "codex" ? <Check size={11} className="text-emerald-600" /> : <Copy size={11} />}
                    {copiedText === "codex" ? "Copied" : "Copy"}
                  </button>
                </div>
                <div className="p-4 bg-[#fafaf9]">
                  <code className="font-mono text-[13px] text-glyph-text block">
                    <span className="text-glyph-orange font-bold mr-2">$</span>npx skills add sumitttt4/Glyph-Skill -a codex
                  </code>
                </div>
              </div>
              <p className="text-[13px] text-glyph-muted leading-relaxed">
                You can also copy any SKILL.md into your project manually, or paste it into ChatGPT or Codex conversations.
              </p>
            </section>

            <hr className="border-glyph-border/60 my-0 mb-14" />

            {/* ── How Glyph Thinks ── */}
            <section id="how-it-thinks" className="mb-14 scroll-mt-24">
              <h2 className="text-xl font-bold tracking-tight text-glyph-text mb-3">How Glyph Thinks</h2>
              <p className="text-[14px] leading-relaxed text-glyph-muted mb-5">
                Glyph reads the brief first. The agent infers the right layout, motion, and density from cues like the product category, audience, and brand direction, then picks the design constraints. No purple gradient defaults.
              </p>
              <div className="space-y-5">
                {[
                  { num: "01", title: "Brief inference", body: "Reads the product category, vibe words, audience, and brand assets before any code. Declares a one-line design direction instead of defaulting to AI-purple gradients and three centered feature cards." },
                  { num: "02", title: "Constraint application", body: "Locks standard grid dimensions (1080px), body line lengths (65ch max), spacing to 4px grid, and negative heading tracking. These are system rules, not suggestions." },
                  { num: "03", title: "Anti-slop enforcement", body: "Eliminates bad styling defaults: floating parallax elements, purple mesh blobs, Poppins font, sparkle icons, vague headlines. Runs on every output." },
                  { num: "04", title: "Dark mode protocol", body: "Off-black and off-white, never pure #000 or #fff. WCAG AA contrast, hierarchy parity, brand fidelity in both themes." },
                  { num: "05", title: "Framework adaptation", body: "Outputs framework-specific code. React hooks vs Vue composables vs Svelte stores. Adapts component patterns for Tailwind, shadcn/ui, and vanilla CSS." },
                  { num: "06", title: "Pre-flight check", body: "Every constraint must honestly pass before the agent ships. Color consistency, shape consistency, accessibility, responsive behavior. No box unchecked, no output shipped." },
                ].map((step) => (
                  <div key={step.num} className="flex items-start gap-4">
                    <span className="shrink-0 font-mono text-[11px] font-semibold text-glyph-muted/50 pt-0.5 tabular-nums" style={{ fontFamily: 'var(--font-geist-mono), monospace' }}>{step.num}</span>
                    <div>
                      <h3 className="text-[14px] font-bold text-glyph-text">{step.title}</h3>
                      <p className="mt-1 text-[13px] text-glyph-muted leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <hr className="border-glyph-border/60 my-0 mb-14" />

            {/* ── Compatible Agents ── */}
            <section id="agents" className="mb-14 scroll-mt-24">
              <h2 className="text-xl font-bold tracking-tight text-glyph-text mb-3">Compatible Agents</h2>
              <p className="text-[14px] leading-relaxed text-glyph-muted mb-4">
                Glyph Skill works with every major AI coding agent that supports skill files or markdown system prompts.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Cursor", "Claude Code", "Codex", "Antigravity", "Gemini CLI", "AI Studio", "v0", "Lovable", "Windsurf", "Copilot", "OpenCode"].map((agent) => (
                  <span key={agent} className="rounded-lg border border-glyph-border bg-white px-3 py-1.5 text-[11px] font-semibold text-glyph-text">
                    {agent}
                  </span>
                ))}
              </div>
            </section>

            <hr className="border-glyph-border/60 my-0 mb-14" />

            {/* ── Skill Files ── */}
            <section id="rule-files" className="mb-14 scroll-mt-24">
              <h2 className="text-xl font-bold tracking-tight text-glyph-text mb-3">Skill Files Explorer</h2>
              <p className="text-[14px] leading-relaxed text-glyph-muted mb-6">
                Glyph bundles a unified structure of rules. Select any file below to preview the active specifications and constraints it enforces:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] border border-glyph-border rounded-xl bg-white overflow-hidden shadow-sm">
                {/* File Explorer Sidebar */}
                <div className="border-r border-glyph-border bg-slate-50/50 p-4 font-mono text-[12px] select-none">
                  <div className="font-semibold text-glyph-muted uppercase tracking-wider text-[9px] mb-3">Workspace</div>
                  <div className="space-y-1">
                    <button
                      onClick={() => setSelectedFile("SKILL.md")}
                      className={`w-full text-left px-2.5 py-1.5 rounded transition-glyph flex items-center gap-1.5 ${
                        selectedFile === "SKILL.md"
                          ? "bg-white text-glyph-text shadow-sm border border-glyph-border font-bold"
                          : "text-glyph-muted hover:text-glyph-text border border-transparent"
                      }`}
                    >
                      📄 SKILL.md
                    </button>

                    <div className="pt-2">
                      <div className="px-2 py-1 text-glyph-muted/65 font-semibold text-[10px] uppercase tracking-wider flex items-center gap-1.5">
                        📁 references/
                      </div>
                      <div className="pl-3 mt-1 space-y-1 border-l border-glyph-border/60 ml-2">
                        {ruleFiles.slice(1).map((item) => (
                          <button
                            key={item.file}
                            onClick={() => setSelectedFile(item.file)}
                            className={`w-full text-left px-2.5 py-1.5 rounded transition-glyph block truncate ${
                              selectedFile === item.file
                                ? "bg-white text-glyph-text shadow-sm border border-glyph-border font-bold"
                                : "text-glyph-muted hover:text-glyph-text border border-transparent"
                            }`}
                          >
                            📄 {item.file}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* File Preview Content */}
                <div className="p-6 bg-white min-h-[300px] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between border-b border-glyph-border/80 pb-3 mb-4">
                      <h3 className="font-mono text-sm font-bold text-glyph-text">
                        {selectedFile}
                      </h3>
                      <span className="text-[10px] font-semibold uppercase tracking-wider bg-glyph-soft text-glyph-orange px-2 py-0.5 rounded border border-glyph-border">
                        active config
                      </span>
                    </div>
                    <p className="text-[14px] text-glyph-text leading-relaxed font-semibold mb-4">
                      {ruleFiles.find((f) => f.file === selectedFile)?.desc}
                    </p>

                    {/* Visual parameters configuration output */}
                    <div className="rounded-lg bg-[#fafaf9] border border-glyph-border p-4 font-mono text-[11px] text-glyph-muted leading-relaxed">
                      {selectedFile === "SKILL.md" && (
                        <>
                          <div className="text-glyph-orange font-bold mb-1"># CLI Commands & Pointers</div>
                          <div>- slash-commands: [/glyph brand, /glyph design, /glyph vibe]</div>
                          <div>- system-priority: dominant-over-llm</div>
                          <div>- active-checks: [pre-flight, locks, slop-detector]</div>
                        </>
                      )}
                      {selectedFile === "core-color-rules.md" && (
                        <>
                          <div className="text-glyph-orange font-bold mb-1"># Accent & Tone Constraints</div>
                          <div>- max-accent-colors: 1</div>
                          <div>- contrast-ratio-min: 4.5:1 (WCAG AA)</div>
                          <div>- color-shades-limit: 2 (per background level)</div>
                        </>
                      )}
                      {selectedFile === "typography-rules.md" && (
                        <>
                          <div className="text-glyph-orange font-bold mb-1"># Font Pairings & Sizing</div>
                          <div>- header-font-tracking: -0.03em / -0.04em</div>
                          <div>- max-line-length: 65ch</div>
                          <div>- weight-variance-limit: 2 weights per view</div>
                        </>
                      )}
                      {selectedFile === "layout-rules.md" && (
                        <>
                          <div className="text-glyph-orange font-bold mb-1"># Alignment & Padding Grid</div>
                          <div>- pixel-grid-step: 4px</div>
                          <div>- max-widths: [720px, 1080px, 1280px]</div>
                          <div>- standard-section-padding: [120px desktop, 80px mobile]</div>
                        </>
                      )}
                      {selectedFile === "component-rules.md" && (
                        <>
                          <div className="text-glyph-orange font-bold mb-1"># Component Blueprint Definitions</div>
                          <div>- categories: 22 component spec structures</div>
                          <div>- forms: outline focus indicator active</div>
                          <div>- modals: overlay background blur constrained</div>
                        </>
                      )}
                      {selectedFile === "motion-rules.md" && (
                        <>
                          <div className="text-glyph-orange font-bold mb-1"># Transitions & Timing</div>
                          <div>- max-animation-duration: 400ms</div>
                          <div>- standard-easing: cubic-bezier(0.16, 1, 0.3, 1)</div>
                          <div>- press-scale-down: active-press-98</div>
                        </>
                      )}
                      {selectedFile === "accessibility-rules.md" && (
                        <>
                          <div className="text-glyph-orange font-bold mb-1"># Keyboard & Screen-reader</div>
                          <div>- tab-focus-ring: visible-outline-2px</div>
                          <div>- landmark-roles: main, nav, aside, footer required</div>
                          <div>- aria-labels: interactive-elements-only</div>
                        </>
                      )}
                      {selectedFile === "responsive-rules.md" && (
                        <>
                          <div className="text-glyph-orange font-bold mb-1"># Breakpoint Handling</div>
                          <div>- screen-collapse-breakpoints: [768px, 1024px]</div>
                          <div>- mobile-margins: px-4 / px-6 max</div>
                          <div>- horizontal-overflow: scroll-x-containment</div>
                        </>
                      )}
                      {selectedFile === "anti-slop-rules.md" && (
                        <>
                          <div className="text-glyph-orange font-bold mb-1"># Banned Patterns list</div>
                          <div>- mesh-gradients: true (banned)</div>
                          <div>- sparkle-icons-for-ai: true (banned)</div>
                          <div>- poppins-defaults: true (banned)</div>
                          <div>- brand-placeholders: true (banned)</div>
                        </>
                      )}
                      {selectedFile === "framework-rules.md" && (
                        <>
                          <div className="text-glyph-orange font-bold mb-1"># Tailwind & Code Conventions</div>
                          <div>- naming: semantic-tokens-only</div>
                          <div>- structure: logical-props-ordering</div>
                          <div>- class-grouping: atomic-first-tailwind</div>
                        </>
                      )}
                      {selectedFile === "background-rules.md" && (
                        <>
                          <div className="text-glyph-orange font-bold mb-1"># Background Elements</div>
                          <div>- surface-bg: off-white/off-black (never pure #fff/#000)</div>
                          <div>- pattern-overlays: opacity-05-max</div>
                          <div>- background-blur: 16px max (with backing overlay)</div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-glyph-border/60 text-[11px] text-glyph-muted flex items-center justify-between">
                    <span>Path: <code>/{selectedFile === "SKILL.md" ? "" : "references/"}{selectedFile}</code></span>
                    <a
                      href="https://github.com/sumitttt4/Glyph-Skill"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-glyph-text hover:text-glyph-orange transition-glyph"
                    >
                      View Source
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-glyph-border/60 my-0 mb-14" />

            {/* ── The Locks ── */}
            <section id="locks" className="mb-14 scroll-mt-24">
              <h2 className="text-xl font-bold tracking-tight text-glyph-text mb-3">The Locks</h2>
              <p className="text-[14px] leading-relaxed text-glyph-muted mb-5">
                Rules the agent never relaxes. They keep a generated page visually coherent end-to-end.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: "Color Consistency Lock", body: "One accent across the whole page. A warm-grey site does not suddenly get a blue CTA in section 7." },
                  { title: "Shape Consistency Lock", body: "One corner-radius system per page. All-sharp, all-soft, or all-pill, with a documented exception when mixing." },
                  { title: "Page Theme Lock", body: "Light, dark, or auto, picked once at the page level. No mid-page flips into a different theme." },
                  { title: "Container Lock", body: "Max-width 720px for text, 1080px for standard pages, 1280px for wide layouts. Never wider." },
                  { title: "Typography Lock", body: "Display headings locked to -0.03em or -0.04em tracking. Max 2 font weights per page. 65-character line limit for body text." },
                  { title: "Spacing Lock", body: "4px grid system. Section gaps locked to 120px desktop, 80px mobile. No arbitrary pixel values." },
                ].map((lock) => (
                  <div key={lock.title} className="rounded-xl border border-glyph-border bg-white p-5 shadow-sm">
                    <h3 className="text-sm font-bold text-glyph-text">{lock.title}</h3>
                    <p className="mt-2 text-[12.5px] text-glyph-muted leading-relaxed">{lock.body}</p>
                  </div>
                ))}
              </div>
            </section>

            <hr className="border-glyph-border/60 my-0 mb-14" />

            {/* ── Hero Discipline ── */}
            <section id="hero-discipline" className="mb-14 scroll-mt-24">
              <h2 className="text-xl font-bold tracking-tight text-glyph-text mb-3">Hero Discipline</h2>
              <p className="text-[14px] leading-relaxed text-glyph-muted mb-5">
                Hard rules for above-the-fold. The hero must fit the initial viewport.
              </p>
              <div className="space-y-3">
                {[
                  { label: "Headline", value: "Maximum two lines on desktop." },
                  { label: "Subtext", value: "Maximum twenty words and four lines." },
                  { label: "Primary CTA", value: "Visible without scroll." },
                  { label: "Navigation", value: "Single line at desktop, height max 80px." },
                  { label: "Backdrop", value: "If using a backdrop visual, it must be framed with absolute blurred gradient panels. No gimmicky animation floats." },
                ].map((rule) => (
                  <div key={rule.label} className="flex items-baseline gap-3">
                    <span className="shrink-0 text-[13px] font-bold text-glyph-text w-28">{rule.label}</span>
                    <span className="text-[13px] text-glyph-muted">{rule.value}</span>
                  </div>
                ))}
              </div>
            </section>

            <hr className="border-glyph-border/60 my-0 mb-14" />

            {/* ── Anti-Slop Bans ── */}
            <section id="anti-slop" className="mb-14 scroll-mt-24">
              <h2 className="text-xl font-bold tracking-tight text-glyph-text mb-3">The Anti-Slop Ban System</h2>
              <p className="text-[14px] leading-relaxed text-glyph-muted mb-5">
                SKILL.md ships a strict ban list. The agent enforces these on every generation. These patterns make generated frontends look the same.
              </p>
              <div className="border-t border-glyph-border">
                {[
                  { ban: "AI-purple and blue/purple gradient mixes", detail: "Banned. Solid blue (e.g. cobalt or navy) is allowed and accepted, but mixing blue with purple or pink gradients is banned as classic AI slop." },
                  { ban: "Three-equal-card feature rows", detail: "Banned by default. Use 2-column zig-zag, asymmetric grids, or scroll-pinned alternatives." },
                  { ban: "Floating decoration orbs", detail: "No glowing blobs, circles, or floating elements as hero or section decoration." },
                  { ban: "Poppins as default font", detail: "Banned. Use pairing stacks chosen by product personality, not the first Google Font result." },
                  { ban: "Sparkle icons for AI features", detail: "Banned. AI features get the same icon treatment as every other feature." },
                  { ban: "Vague headline copy", detail: "\"Build better, faster\" and \"Supercharge your workflow\" are banned. Headlines must be specific to the product." },
                  { ban: "Scroll cues", detail: "\"Scroll\", down-arrow icons, \"Scroll to explore\". The user is at the hero. They know how scrolling works." },
                  { ban: "Decorative status dots", detail: "Zero by default. Only when conveying real semantic state, and at most one per page section." },
                  { ban: "Div-based fake product UI", detail: "No fake task lists, terminals, or dashboards built from styled divs. Use real screenshots or generated images." },
                  { ban: "Version footers on marketing pages", detail: "v1.4.2, Build 0048, last sync 4s ago. Devtool fixtures do not belong on landing or portfolio pages." },
                  { ban: "Hand-rolled decorative SVG illustrations", detail: "Strongly discouraged as default. Acceptable only for a simple geometric mark or when the brief explicitly asks for it." },
                  { ban: "Meaningless glassmorphism", detail: "Banned as decoration. Only acceptable when it serves a real functional purpose (overlays, modals with background context)." },
                  { ban: "Overused AI vocabulary", detail: "\"Seamless\", \"powerful\", \"next-gen\", \"cutting-edge\", \"revolutionary\". Product-specific language only." },
                  { ban: "Generic brand placeholder names", detail: "Banned. If no brand name is specified, assistants must default to \"Glyph\" as the brand name/logo instead of inventing names like \"SaaSify\" or \"AppName\"." },
                ].map((item) => (
                  <div key={item.ban} className="border-b border-glyph-border py-3.5">
                    <h3 className="text-[14px] font-bold text-glyph-text">{item.ban}</h3>
                    <p className="mt-1 text-[13px] text-glyph-muted leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <hr className="border-glyph-border/60 my-0 mb-14" />

            {/* ── Customization ── */}
            <section id="customize" className="mb-14 scroll-mt-24">
              <h2 className="text-xl font-bold tracking-tight text-glyph-text mb-3">Customization</h2>
              <p className="text-[14px] leading-relaxed text-glyph-muted mb-4">
                The SKILL.md file is fully editable. Open it in your project root and modify, add, or remove any rule to match your design direction.
              </p>
              <p className="text-[14px] leading-relaxed text-glyph-muted mb-5">
                The agent reads the file on each run, so edits apply on the next generation. If you maintain a project-specific style guide, paste it at the top of SKILL.md and the agent will use it as the dominant source of truth.
              </p>
              <div className="rounded-xl border border-glyph-border bg-white overflow-hidden shadow-sm">
                <div className="flex items-center justify-between border-b border-glyph-border px-4 py-2 bg-slate-50/50">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-glyph-muted">example override</span>
                </div>
                <pre className="p-4 font-mono text-[13px] text-glyph-text leading-relaxed overflow-x-auto bg-[#fafaf9]">
{`# In SKILL.md or a custom rules file

- colors:
    primary-accent: "#1a1a17"
    surface: "#f4f0e8"
- layout:
    max-width: "1280px"
    spacing-grid: "8px"
- typography:
    heading-font: "Sora"
    body-font: "Inter"
- motion:
    max-duration: "400ms"
    easing: "cubic-bezier(0.16, 1, 0.3, 1)"`}
                </pre>
              </div>
            </section>

            <hr className="border-glyph-border/60 my-0 mb-14" />

            {/* ── Learn More ── */}
            <section id="learn-more" className="mb-14 scroll-mt-24">
              <h2 className="text-xl font-bold tracking-tight text-glyph-text mb-5">Learn More</h2>
              <div className="space-y-3">
                {[
                  { label: "GitHub Repository", href: "https://github.com/sumitttt4/Glyph-Skill", desc: "Source code, issues, and contributions." },
                  { label: "SKILL.md", href: "https://github.com/sumitttt4/Glyph-Skill/blob/main/SKILL.md", desc: "Read the full skill file directly." },
                  { label: "Glyph Software", href: "https://glyph.software", desc: "The product behind the skill." },
                  { label: "Portfolio", href: "https://sumitsharmaa.me", desc: "Built by Sumit Sharma." },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group flex items-center justify-between rounded-xl border border-glyph-border bg-white p-4 transition-all duration-200 hover:bg-glyph-surface/50 hover:border-glyph-text/15"
                  >
                    <div>
                      <h3 className="text-[14px] font-bold text-glyph-text">{link.label}</h3>
                      <p className="mt-0.5 text-[13px] text-glyph-muted">{link.desc}</p>
                    </div>
                    <ArrowRight size={14} className="text-glyph-muted group-hover:text-glyph-text transition-glyph shrink-0" />
                  </a>
                ))}
              </div>
            </section>

            {/* Bottom CTA */}
            <div className="mt-16 pt-10 border-t border-glyph-border">
              <p className="text-[14px] text-glyph-muted mb-4">Ready to install?</p>
              <div className="flex flex-wrap gap-3">
                <a href="/#install" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-[#ee4811] bg-glyph-orange text-white shadow-rest hover:shadow-hover hover:bg-[#e04811] px-5 text-sm font-semibold transition-glyph active-press">
                  Install Glyph <ArrowRight size={14} />
                </a>
                <a href="https://github.com/sumitttt4/Glyph-Skill" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-glyph-border bg-white text-glyph-text shadow-rest hover:bg-glyph-surface px-5 text-sm font-semibold transition-glyph active-press">
                  View on GitHub
                </a>
              </div>
            </div>

            {/* Footer */}
            <footer className="border-t border-glyph-border bg-white mt-16 pt-8 pb-4">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-[12px] text-glyph-muted">Built by <a href="https://sumitsharmaa.me" className="font-semibold text-glyph-text hover:text-glyph-orange transition-glyph">sumitsharmaa.me</a></span>
                <div className="flex items-center gap-5 text-[11px] font-semibold uppercase tracking-wider text-glyph-muted">
                  <a href="/" className="hover:text-glyph-text transition-glyph">Home</a>
                  <a href="https://github.com/sumitttt4/Glyph-Skill" className="hover:text-glyph-text transition-glyph">GitHub</a>
                  <a href="https://x.com/sumitdotme" className="inline-flex items-center gap-1.5 hover:text-glyph-text transition-glyph">
                    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    @sumitdotme
                  </a>
                </div>
              </div>
            </footer>

          </article>
        </div>
      </div>
    </main>
  );
}
