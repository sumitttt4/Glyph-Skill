import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  FileText,
  Folder,
  Layers,
  ScanLine,
  Waypoints,
} from "lucide-react";
import { Header, Footer } from "./components/shell";
import { CopyCode } from "./components/controls";
import { Walkthrough } from "./components/walkthrough";
const requests = [
  ["/glyph design", "Compare directions and return implementation-ready decisions."],
  ["/glyph audit", "Inspect the rendered UI and report concrete, observed fixes."],
  ["/glyph vibe", "Write one complete implementation prompt for the build."],
  ["/glyph prompt", "Turn approved decisions into reusable project rules."],
];
// Grouped by the workflow stage that loads them; tones match the design path.
const references = [
  { stage: "Choose", tone: "s1", files: ["direction-composition-assets", "landing-page-research"] },
  { stage: "Compose", tone: "s2", files: ["layout-rules", "typography-rules", "core-color-rules", "background-rules"] },
  { stage: "Build", tone: "s3", files: ["implementation", "framework-rules", "component-rules", "motion-rules"] },
  { stage: "Verify", tone: "s4", files: ["accessibility-rules", "responsive-rules", "anti-slop-rules", "verification"] },
];
export default function Home() {
  return (
    <>
      <Header />
      <main id="main" className="landing-page">
        <section className="hero page-width">
          <div className="pixel-field" aria-hidden="true">
            <svg viewBox="0 0 1200 620" fill="none">
              {Array.from({ length: 44 }, (_, i) => {
                const x = (i * 137 + 41) % 1200,
                  y = (i * 83 + 19) % 620,
                  edge = Math.abs(x - 600) / 600;
                if (edge < 0.43 && y < 470) return null;
                return (
                  <rect
                    key={i}
                    x={Math.floor(x / 16) * 16}
                    y={Math.floor(y / 16) * 16}
                    width={i % 4 === 0 ? 32 : 16}
                    height="16"
                    className={i % 5 === 0 ? "p2" : i % 3 === 0 ? "p3" : "p1"}
                    opacity={0.25 + edge * 0.55}
                  />
                );
              })}
            </svg>
          </div>
          <div className="hero-topline">
            <span className="eyebrow">
              A frontend design skill for coding assistants
            </span>
          </div>
          <h1>
            Give the design
            <br />
            <span>a little more thought.</span>
          </h1>
          <div className="hero-bottom">
            <p>
              One skill to help your coding assistant understand the product,
              choose a direction, build the interface and check the result.
            </p>
            <div className="hero-actions">
              <Link className="button primary" href="#install">
                Install Glyph <ArrowRight size={17} />
              </Link>
              <Link className="text-link" href="/docs">
                Read the field guide <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
          <div className="hero-install-command">
            <CopyCode
              label="Install Glyph"
              text="npx skills add sumitttt4/Glyph-Skill"
            />
          </div>
          <aside
            className="hero-note brief-note"
            aria-label="Illustrative brief"
          >
            <span className="note-index">01 / A brief</span>
            <p>“Help the team see what needs attention.”</p>
            <span className="note-foot">Start with the task.</span>
          </aside>
          <aside
            className="hero-note direction-note"
            aria-label="Illustrative design decisions"
          >
            <span className="note-index">02 / A direction</span>
            <p>
              Exceptions first.
              <br />
              Clear density.
              <br />
              Color with a job.
            </p>
            <div className="note-swatches" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
          </aside>
          <div className="hero-rule">
            <span>Not a fixed aesthetic.</span>
            <span>A more deliberate process.</span>
          </div>
        </section>
        <div
          className="design-path page-width"
          aria-label="Glyph design process"
        >
          {[
            "Understand the brief",
            "Find the direction",
            "Build with intention",
            "Check the result",
          ].map((x, i) => (
            <span key={x}>
              <i />
              {x}
              {i < 3 && <b aria-hidden="true">→</b>}
            </span>
          ))}
        </div>
        <section className="page-width walkthrough-section" id="walkthrough">
          <div className="section-heading">
            <div>
              <span className="eyebrow">From intention to interface</span>
              <h2>
                Different products.
                <br />
                Different decisions.
              </h2>
            </div>
            <p>
              Start with what someone needs to do. Then make the composition,
              personality and interaction serve that task.
            </p>
          </div>
          <Walkthrough />
        </section>
        <section id="features" className="process-section page-width">
          <span className="eyebrow">What changes in your workflow</span>
          <div className="process-grid">
            <h2>
              Less guessing.
              <br />
              More intention.
            </h2>
            <div className="process-list">
              {[
                {
                  Icon: Waypoints,
                  title: "Choose before you decorate.",
                  text: "Compare distinct directions. Resolve hierarchy, density and proportions before polishing buttons.",
                },
                {
                  Icon: Layers,
                  title: "Keep the personality.",
                  text: "Color, type, imagery and interaction can all carry a brand. No compulsory palette, font pairing or card grid.",
                },
                {
                  Icon: ScanLine,
                  title: "Check what you actually built.",
                  text: "Inspect rendered screens, try the failure states and test small viewports. Report what is still unverified.",
                },
              ].map(({ Icon, title, text }) => (
                <article key={title}>
                  <Icon size={22} />
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="inside" className="inside-section page-width">
          <div className="section-heading">
            <div>
              <span className="eyebrow">What you get</span>
              <h2>
                One entry point.
                <br />
                Fourteen focused references.
              </h2>
            </div>
            <p>
              Plain Markdown your assistant reads on demand: the workflow first,
              then only the references the task needs.
            </p>
          </div>
          <div className="inside-grid">
            <div className="inside-card">
              <span className="eyebrow">Ask for it</span>
              <ul className="request-list">
                {requests.map(([name, text]) => (
                  <li key={name}>
                    <code>{name}</code>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <small>
                Request conventions, not CLI commands. Plain language works
                too.
              </small>
            </div>
            <div className="inside-card tree-card">
              <div className="tree-root">
                <Folder size={16} /> skills/glyph/
              </div>
              <div className="tree-entry">
                <FileText size={15} />
                <code>SKILL.md</code>
                <span>Workflow and routing</span>
              </div>
              <div className="tree-groups">
                {references.map(({ stage, tone, files }) => (
                  <div key={stage} className={`tree-group ${tone}`}>
                    <span className="tree-stage">
                      <i />
                      {stage}
                    </span>
                    <ul>
                      {files.map((f) => (
                        <li key={f}>
                          <code>{f}.md</code>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <Link className="tree-link" href="/docs/skill-files">
                Read every file in the docs <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>
        <section id="install" className="install-section page-width">
          <div>
            <span className="eyebrow">One skill. One install.</span>
            <h2>
              Bring Glyph
              <br />
              to your next build.
            </h2>
            <p>
              For builders working with coding assistants. The Markdown entry
              point and focused references travel together; no Glyph API key or
              background service.
            </p>
            <Link className="text-link" href="/docs/installation">
              Installation & troubleshooting <ArrowRight size={16} />
            </Link>
          </div>
          <div>
            <CopyCode text="npx skills add sumitttt4/Glyph-Skill" />
            <p className="install-note">
              Installs from GitHub. See the docs for local installation and
              agent setup.
            </p>
            <div className="install-facts">
              <span>
                Skill name <code>glyph</code>
              </span>
              <span>
                Format <b>Markdown, 15 files</b>
              </span>
              <span>
                API key or service <b>None</b>
              </span>
              <span>
                Agent support <b>Depends on your installer</b>
              </span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
