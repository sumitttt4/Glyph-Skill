import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Layers,
  ScanLine,
  Waypoints,
} from "lucide-react";
import { Header, Footer } from "./components/shell";
import { CopyCode } from "./components/controls";
import { Walkthrough } from "./components/walkthrough";
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
                    fill={
                      i % 5 === 0
                        ? "#c3b3f1"
                        : i % 3 === 0
                          ? "#a6daca"
                          : "#a9cbff"
                    }
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
              {i < 3 && <b aria-hidden="true">↗</b>}
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
              <span>Plain Markdown + references</span>
              <span>Agent support depends on your installer</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
