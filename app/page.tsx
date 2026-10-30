import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  FileText,
  Folder,
  Hammer,
  LayoutGrid,
  ScanSearch,
} from "lucide-react";
import { Header, Footer } from "./components/shell";
import { CopyCode } from "./components/controls";
import { Walkthrough } from "./components/walkthrough";
import { HeroSession } from "./components/hero-session";
import { CtaShader, HeroShader, StageShader } from "./components/shaders";
import { examples } from "./examples/data";
import "./landing.css";
const install = "npx skills add sumitttt4/Glyph-Skill";
const facts = [
  ["1", "entry point", "SKILL.md routes the work"],
  ["16", "focused references", "loaded only when relevant"],
  ["4", "request modes", "design, audit, vibe, prompt"],
  ["0", "API keys or services", "plain Markdown files"],
];
// Each stage lists the references SKILL.md tells the assistant to load there.
const stages = [
  {
    Icon: Compass,
    title: "Understand & choose",
    text: "Inspect the existing UI, find the primary task and compare meaningfully different compositions.",
    files: ["direction-composition-assets", "landing-composition", "landing-page-research"],
  },
  {
    Icon: LayoutGrid,
    title: "Compose & express",
    text: "Resolve hierarchy, density and type with real content. Decide what carries the personality.",
    files: ["visual-craft", "layout-rules", "typography-rules", "core-color-rules"],
  },
  {
    Icon: Hammer,
    title: "Build & interact",
    text: "Use the project's actual stack. Implement every state, then add motion only where it explains.",
    files: ["implementation", "framework-rules", "component-rules", "motion-rules"],
  },
  {
    Icon: ScanSearch,
    title: "Verify & revise",
    text: "Inspect real renders, keyboard and small screens. Report what passed and what is still a risk.",
    files: ["accessibility-rules", "responsive-rules", "anti-slop-rules", "verification"],
  },
];
const defaults = [
  ["Dashboard", "Four KPI cards across the top", "Lead with the queue that needs a decision"],
  ["Landing page", "Centered hero, three feature cards", "Section order from the visitor's questions"],
  ["Color", "One accent on everything", "Roles for action, status and category"],
  ["Motion", "Every section fades in", "Animate what explains or confirms"],
  ["Done", "It builds, so it ships", "Renders checked at 320px, keyboard and failure states"],
];
const requests = [
  ["/glyph design", "Compare directions and return implementation-ready decisions."],
  ["/glyph audit", "Inspect the rendered UI and report concrete, observed fixes."],
  ["/glyph vibe", "Write one complete implementation prompt for the build."],
  ["/glyph prompt", "Turn approved decisions into reusable project rules."],
];
function Tag({ children }: { children: React.ReactNode }) {
  return <span className="tag">{children}</span>;
}
export default function Home() {
  return (
    <>
      <Header />
      <main id="main" className="landing">
        <section className="hero wrap">
          <div className="hero-copy">
            <span className="pill">
              <b>Open source</b> Design skill for coding assistants
            </span>
            <h1>
              Give the design <em>a little more thought.</em>
            </h1>
            <p>
              Glyph teaches your coding assistant to understand the product,
              choose a direction, build the interface and check what it actually
              rendered.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-solid" href="#install">
                Install Glyph
                <span className="btn-icon">
                  <ArrowRight size={14} />
                </span>
              </Link>
              <Link className="btn btn-line" href="/docs">
                Read the docs <ArrowUpRight size={15} />
              </Link>
            </div>
            <div className="hero-install">
              <CopyCode label="Install with the skills CLI" text={install} />
            </div>
          </div>
          <div className="scene hero-scene">
            <div className="scene-art" aria-hidden="true">
              <HeroShader />
            </div>
            <span className="chip chip-a" aria-hidden="true">
              <i /> SKILL.md loaded
            </span>
            <span className="chip chip-b" aria-hidden="true">
              <i /> 3 directions compared
            </span>
            <span className="chip chip-c" aria-hidden="true">
              <i /> Verified at 320px
            </span>
            <HeroSession />
          </div>
        </section>
        <dl className="facts wrap">
          {facts.map(([n, label, note]) => (
            <div key={label}>
              <dt>{n}</dt>
              <dd>
                <strong>{label}</strong>
                <span>{note}</span>
              </dd>
            </div>
          ))}
        </dl>
        <section id="examples" className="block wrap">
          <div className="block-head">
            <Tag>Built with Glyph</Tag>
            <h2>Three products. One craft baseline.</h2>
            <p>
              Each page followed the Glyph workflow and its visual craft
              reference, from brief to verified render. Open one to see the
              decisions behind it.
            </p>
          </div>
          <div className="showcase">
            {examples.map((e, i) => (
              <article key={e.slug} className="show-card">
                <Link className="show-shot" href={`/examples/${e.slug}`} tabIndex={-1} aria-hidden="true">
                  <span className="show-chrome">
                    <i />
                    <i />
                    <i />
                    <span>{e.name.toLowerCase().replace(/ /g, "")}.example</span>
                  </span>
                  <img
                    src={`/examples/${e.slug}${i === 0 ? "-tall" : ""}.webp`}
                    alt=""
                    width={i === 0 ? 1000 : 1200}
                    height={i === 0 ? 1094 : 800}
                    loading="lazy"
                  />
                </Link>
                <div className="show-body">
                  <span className="show-kind">{e.kind}</span>
                  <h3>
                    <Link href={`/examples/${e.slug}`}>{e.name}</Link>
                  </h3>
                  <p>{e.chosen}</p>
                  <div className="show-links">
                    <Link href={`/examples/${e.slug}`}>
                      Open example <ArrowUpRight size={14} />
                    </Link>
                    <Link href={`/examples/${e.slug}#design-notes`}>Design notes</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="fineprint">
            Fictional products and sample data, designed and built with the Glyph
            skill for this site.
          </p>
        </section>
        <section id="workflow" className="block wrap">
          <div className="block-head">
            <Tag>Workflow</Tag>
            <h2>Four stages. Only the guidance each one needs.</h2>
            <p>
              The assistant starts with one entry point and loads focused
              references as the work moves forward, instead of reading every
              rule for every task.
            </p>
          </div>
          <ol className="stages">
            {stages.map(({ Icon, title, text, files }, i) => (
              <li key={title} className={`stage s${i + 1}`}>
                <div className="stage-art" aria-hidden="true">
                  <StageShader index={i} />
                </div>
                <div className="stage-top">
                  <span className="stage-n">.0{i + 1}</span>
                  <Icon size={20} aria-hidden="true" />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <ul aria-label={`${title} references`}>
                  {files.map((f) => (
                    <li key={f}>
                      <code>{f}.md</code>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>
        <section id="walkthrough" className="block block-tint">
          <div className="wrap">
            <div className="block-head">
              <Tag>Walkthrough</Tag>
              <h2>Different products. Different decisions.</h2>
              <p>
                Same skill, three briefs. Pick one to see how the task shapes the
                composition, not a house style.
              </p>
            </div>
            <Walkthrough />
          </div>
        </section>
        <section id="defaults" className="block wrap">
          <div className="block-head">
            <Tag>Defaults vs decisions</Tag>
            <h2>Less autopilot. More intention.</h2>
            <p>
              Familiar patterns are allowed. Glyph asks the assistant to choose
              them on purpose.
            </p>
          </div>
          <div className="compare" role="table" aria-label="Defaults compared with Glyph decisions">
            <div className="compare-row compare-head" role="row">
              <span role="columnheader">Area</span>
              <span role="columnheader">Unconsidered default</span>
              <span role="columnheader">With a Glyph pass</span>
            </div>
            {defaults.map(([area, before, after]) => (
              <div className="compare-row" role="row" key={area}>
                <span role="rowheader">{area}</span>
                <span role="cell">{before}</span>
                <span role="cell">
                  <ArrowRight size={15} aria-hidden="true" />
                  {after}
                </span>
              </div>
            ))}
          </div>
          <p className="fineprint">
            Illustrative patterns summarized from the skill’s references, not
            measured results.
          </p>
        </section>
        <section id="inside" className="block wrap">
          <div className="block-head">
            <Tag>What you get</Tag>
            <h2>Ask in plain language, or use a request mode.</h2>
            <p>
              Request modes are conventions your assistant understands, not CLI
              commands. Everything ships as readable Markdown.
            </p>
          </div>
          <div className="inside">
            <ul className="requests">
              {requests.map(([name, text]) => (
                <li key={name}>
                  <code>{name}</code>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <div className="tree">
              <div className="tree-root">
                <Folder size={16} aria-hidden="true" /> skills/glyph/
              </div>
              <div className="tree-file">
                <FileText size={15} aria-hidden="true" />
                <code>SKILL.md</code>
              </div>
              <div className="tree-file">
                <Folder size={15} aria-hidden="true" />
                <code>references/</code>
                <span>16 files</span>
              </div>
              <div className="tree-file">
                <FileText size={15} aria-hidden="true" />
                <code>LICENSE · THIRD_PARTY_NOTICES.md</code>
              </div>
              <Link className="tree-link" href="/docs/skill-files">
                Read every file in the docs <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>
        <section id="install" className="cta wrap">
          <div className="scene cta-inner">
            <div className="scene-art" aria-hidden="true">
              <CtaShader />
            </div>
            <div>
              <Tag>Install</Tag>
              <h2>Bring Glyph to your next build.</h2>
              <p>
                One command from your project directory. Choose{" "}
                <code>glyph</code> when the installer asks. Agent support depends
                on your installer.
              </p>
              <Link className="cta-link" href="/docs/installation">
                Installation & troubleshooting <ArrowRight size={16} />
              </Link>
            </div>
            <div className="cta-command">
              <CopyCode label="Terminal" text={install} />
              <p>
                Prefer to read first? Clone the repo and run{" "}
                <code>npx skills add . --skill glyph</code>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
