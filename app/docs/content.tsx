import Link from "next/link";
import { ArrowRight, BookOpen, Download, Info, Terminal } from "lucide-react";
import { CopyCode } from "../components/controls";
import { FileExplorer } from "../components/file-explorer";
import files from "../generated/skill-files.json";
function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="doc-section">
      <h2>
        <a href={"#" + id}>
          {title}
          <span aria-hidden="true">#</span>
        </a>
      </h2>
      {children}
    </section>
  );
}
function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="doc-callout">
      <Info size={17} />
      <div>{children}</div>
    </div>
  );
}
export function DocContent({ slug }: { slug: string }) {
  switch (slug) {
    case "":
      return (
        <>
          <Section id="overview" title="What is Glyph?">
            <p>
              Glyph is a frontend design skill for coding assistants. It helps
              an assistant understand a product, choose a visual direction,
              compose the important screen, implement the interface and inspect
              what it built.
            </p>
            <p>
              Install one Markdown entry point with focused references. There is
              no Glyph API key or background service. Your assistant reads the
              guidance relevant to the task.
            </p>
            <Note>
              Glyph guides judgment. It does not prescribe the same font,
              palette, hero or component grid for every product.
            </Note>
          </Section>
          <Section id="principles" title="How to think about it">
            <dl className="principle-list">
              <div>
                <dt>Product first</dt>
                <dd>
                  Start with the audience, content and primary task. Preserve an
                  established brand unless a redesign is requested.
                </dd>
              </div>
              <div>
                <dt>Composition before polish</dt>
                <dd>
                  Resolve hierarchy, density and proportions before spending
                  time on button shadows.
                </dd>
              </div>
              <div>
                <dt>Personality with purpose</dt>
                <dd>
                  Typography, color, imagery and interaction can all carry
                  identity. Simple does not have to mean lifeless.
                </dd>
              </div>
              <div>
                <dt>Evidence over appearance</dt>
                <dd>
                  Inspect actual screens and behavior. A successful build is one
                  check, not proof of a finished experience.
                </dd>
              </div>
            </dl>
          </Section>
          <Section id="next-steps" title="Start building">
            <div className="doc-link-grid">
              <Link href="/docs/installation">
                <Download size={19} />
                <strong>Install Glyph</strong>
                <span>Add the skill to your assistant.</span>
                <ArrowRight size={16} />
              </Link>
              <Link href="/docs/workflow">
                <BookOpen size={19} />
                <strong>Learn the workflow</strong>
                <span>From a brief to a verified interface.</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </Section>
        </>
      );
    case "installation":
      return (
        <>
          <Section id="install" title="Install with the skills CLI">
            <p>
              Run the command from your project directory. It downloads the
              skill from GitHub and lets the installer guide agent selection.
            </p>
            <CopyCode text="npx skills add sumitttt4/Glyph-Skill" />
            <p>
              Choose the <code>glyph</code> skill. Agent support and
              installation locations are determined by the version of the skills
              installer you use, not by a blanket compatibility guarantee from
              Glyph.
            </p>
            <Note>
              Review the package and source before running an installer. No
              additional design skill is required by Glyph.
            </Note>
          </Section>
          <Section id="local" title="Install from a local checkout">
            <p>
              To inspect the files first, clone the repository and use its local
              path.
            </p>
            <CopyCode
              label="Local checkout"
              text={
                "git clone https://github.com/sumitttt4/Glyph-Skill.git\ncd Glyph-Skill\nnpx skills add . --skill glyph"
              }
            />
            <p>
              For manual setup, copy the complete <code>skills/glyph</code>{" "}
              directory into your assistant’s supported skills location. Keep{" "}
              <code>SKILL.md</code>, <code>references/</code>, the license and
              notices together.
            </p>
          </Section>
          <Section id="verify-install" title="Verify the installation">
            <ol className="doc-steps">
              <li>
                <strong>Check discovery.</strong> Confirm the installer reports
                the skill name <code>glyph</code>.
              </li>
              <li>
                <strong>Check the files.</strong> Open the installed entry point
                and verify its relative reference paths resolve.
              </li>
              <li>
                <strong>Try a specific brief.</strong> Ask the assistant to use
                Glyph for a small screen with real content, then inspect the
                result.
              </li>
            </ol>
            <CopyCode
              label="Try this prompt"
              text="Use Glyph to improve this settings screen. Inspect the existing UI first, preserve the brand, and verify keyboard navigation and small-screen behavior."
            />
          </Section>
        </>
      );
    case "workflow":
      return (
        <>
          <Section id="understand" title="Understand and choose">
            <p>
              Inspect the current UI and code. Establish the audience, primary
              task, real content, existing brand, language and technical
              constraints.
            </p>
            <p>
              For open-ended work, compare a few meaningfully different
              compositions. Explain the tradeoffs and choose a direction. For an
              established product, preserve its direction unless redesign is
              requested.
            </p>
          </Section>
          <Section id="compose" title="Compose and express">
            <p>
              Sketch or code the important screen with actual content. Decide
              hierarchy, proportions, density, typography and asset placement
              before polishing individual components.
            </p>
            <p>
              Decide what carries the personality: real product imagery,
              illustration, photography, typography, interaction or a
              combination. Check asset provenance and rights.
            </p>
          </Section>
          <Section id="build" title="Build and interact">
            <p>
              Use the actual project stack. Implement responsive behavior and
              applicable loading, empty, error, success, focus and disabled
              states.
            </p>
            <p>
              Add motion where it clarifies an action, relationship or state.
              Consider distance, frequency, interruption and reduced motion.
              There is no universal duration cap.
            </p>
          </Section>
          <Section id="verify" title="Verify and revise">
            <p>
              Inspect rendered desktop and mobile screens. Exercise interactions
              and failure paths, compare with the chosen direction, revise and
              repeat.
            </p>
            <Note>
              Report the checks performed and what remains uncertain. Do not
              call an illustrative walkthrough a controlled model evaluation.
            </Note>
            <Link className="inline-link" href="/docs/verification">
              View the verification checklist <ArrowRight size={14} />
            </Link>
          </Section>
        </>
      );
    case "commands":
      return (
        <>
          <Section id="commands" title="Request conventions">
            <p>
              These are ways to ask your assistant to work. They are not
              executable CLI commands or guaranteed native slash-command
              registrations. Natural language works too.
            </p>
            <div className="doc-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Request</th>
                    <th>What to expect</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "/glyph design",
                      "Understand the brief, compare fitting directions and produce implementation-ready decisions.",
                    ],
                    [
                      "/glyph audit",
                      "Inspect rendered UI and source; report observed problems and concrete fixes.",
                    ],
                    [
                      "/glyph vibe",
                      "Create a usable implementation prompt with composition, assets, states and verification.",
                    ],
                    [
                      "/glyph prompt",
                      "Turn chosen decisions into concise, reusable project instructions.",
                    ],
                  ].map(([a, b]) => (
                    <tr key={a}>
                      <td>
                        <code>{a}</code>
                      </td>
                      <td>{b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>
          <Section id="example" title="An example brief">
            <CopyCode
              label="Design brief"
              text={
                "Use Glyph for a delivery operations dashboard.\nAudience: a three-person dispatch team.\nPrimary task: identify the next delivery requiring attention.\nUse the supplied queue data and preserve our existing brand.\nCompare compositions, choose with reasons, implement the key states,\nand inspect desktop and mobile renders."
              }
            />
            <p>
              Specific content and a clear task give the assistant more useful
              direction than asking for a “modern, beautiful dashboard”.
            </p>
          </Section>
        </>
      );
    case "guidance":
      return (
        <>
          <Section id="rules" title="Instruction roles">
            <dl className="principle-list">
              <div>
                <dt>Requirements</dt>
                <dd>
                  Protect functionality, truthful claims and accessibility.
                  State conflicts and limitations.
                </dd>
              </div>
              <div>
                <dt>Patterns</dt>
                <dd>
                  Adaptable starting points. Change them when the task or
                  evidence calls for it.
                </dd>
              </div>
              <div>
                <dt>Taste hypotheses</dt>
                <dd>
                  Design judgments to inspect in context. They are not
                  high-confidence research findings.
                </dd>
              </div>
            </dl>
          </Section>
          <Section id="break-patterns" title="When to break a pattern">
            <p>
              Consistency means coherent roles and behavior, not identical
              layouts. A data-heavy dashboard, expressive landing and personal
              portfolio should not inherit the same hero and card grid.
            </p>
            <p>
              Meaningful categorical colors and expressive brand palettes are
              valid. Poppins, purple gradients and familiar layouts can be
              considered choices. Font pairing should follow content, language,
              brand and legibility.
            </p>
            <Note>
              The user’s goals and existing brand take precedence over aesthetic
              defaults. Accessibility and truthful reporting still need to be
              checked.
            </Note>
          </Section>
          <Section id="references" title="Research with references">
            <p>
              For reference-led landing work, use a bounded study of accessible
              sources such as Mobbin or Lapa Ninja. Record what was actually
              visible, what principle transfers, what to reject and any access
              limits.
            </p>
            <p>
              Glyph does not bundle a paid library integration. Public
              screenshots do not grant permission to redistribute assets or copy
              artwork and code. Build an original composition suited to the
              product.
            </p>
          </Section>
        </>
      );
    case "files":
      return (
        <>
          <Section id="skill-files" title="Explore the source">
            <p>
              These are the actual Markdown files from the installable skill.
              Select a filename to read it, or copy the complete file.
            </p>
            <FileExplorer files={files} />
          </Section>
          <Section id="loading" title="Load guidance selectively">
            <p>
              Start with <code>SKILL.md</code>. Read only the references
              relevant to the current task: direction and assets,
              implementation, interaction or verification. The entry point links
              to each topic.
            </p>
            <p>
              The website’s logo, typefaces and palette are not prescribed by
              the installed skill.
            </p>
          </Section>
        </>
      );
    case "customize":
      return (
        <>
          <Section id="customize" title="Bring your own direction">
            <p>
              Supply your brand tokens, content, audience, language requirements
              and examples of existing screens. Tell the assistant which
              decisions are established and which are open for exploration.
            </p>
            <p>
              Edit a local copy of the skill if you want a project-specific
              variation. Keep relative paths intact and retain license notices
              for adapted material.
            </p>
          </Section>
          <Section id="constraints" title="Write useful constraints">
            <CopyCode
              label="Project context"
              text={
                "Preserve our existing typography and semantic color roles.\nThe primary task is reviewing exceptions, not reading KPI summaries.\nUse the current React stack and real supplied content.\nNo new dependencies without a concrete need.\nTest keyboard operation, reduced motion and 320px reflow."
              }
            />
            <p>
              Avoid freezing every screen to the same layout. Describe the role
              and purpose of a constraint so it can be applied with judgment.
            </p>
          </Section>
        </>
      );
    case "troubleshooting":
      return (
        <>
          <Section id="discovery" title="The assistant cannot find Glyph">
            <p>
              Confirm the complete skill is installed in a location your agent
              supports. The entry point must be named <code>SKILL.md</code> with
              valid frontmatter and the skill name <code>glyph</code>.
            </p>
            <p>
              Restart or reload skill discovery if your assistant requires it.
              Check the installer’s output and its current agent support. For
              manual copies, verify relative references are included.
            </p>
          </Section>
          <Section id="output" title="The result feels generic">
            <p>
              Check the brief first: is the audience, primary task, real content
              and brand clear? Ask the assistant to compare different
              compositions, not only palettes.
            </p>
            <p>
              If outputs keep sharing the same hero, card grid or typography,
              investigate the skill and prompt. Do not hide the failure with
              extra decoration.
            </p>
          </Section>
          <Section id="copy" title="Copy or theme is unavailable">
            <p>
              Clipboard access can be restricted by the browser or require a
              secure context. If copying fails, select the code and copy it
              manually; the control reports the failure.
            </p>
            <p>
              The theme toggle stores an explicit light or dark preference on
              this browser. If browser storage is blocked, the selection applies
              to the current page but may not persist after navigation.
            </p>
          </Section>
        </>
      );
    case "verification":
      return (
        <>
          <Section id="checklist" title="Before shipping">
            <ul>
              <li>
                Inspect actual desktop and small-mobile renders in each
                supported theme.
              </li>
              <li>
                Check normal text at 4.5:1, large text at 3:1 and applicable
                essential UI contrast at 3:1. Do not use color as the only
                signal.
              </li>
              <li>
                Test keyboard order, visible focus, accessible names, touch
                targets, reduced motion, zoom and long content.
              </li>
              <li>
                Exercise loading, empty, failure and success paths. Confirm
                persistence before showing a saved state.
              </li>
              <li>
                Check links, images, fonts, console errors, layout shifts and
                production build output. Measure performance under recorded
                conditions.
              </li>
            </ul>
          </Section>
          <Section id="evaluation" title="Evaluating the skill">
            <p>
              Use fixed briefs for a data-heavy dashboard, expressive landing
              and portfolio. Keep model, content, assets and iteration budgets
              comparable. Record all meaningful revisions and failures.
            </p>
            <p>
              Evaluate task clarity, composition, product fit, distinctness,
              responsiveness, accessibility, states and implementation quality.
              A few examples cannot establish universal quality.
            </p>
          </Section>
          <Section id="limitations" title="Current evidence limits">
            <Note>
              The landing’s handcrafted examples explain the workflow. They are
              not controlled model outputs or measured improvement claims.
            </Note>
            <p>
              The full three-brief controlled comparison remains unperformed.
              Local build and interaction checks are recorded in the repository
              review notes. Physical-device testing and a complete
              assistive-technology audit remain separate checks.
            </p>
          </Section>
        </>
      );
    default:
      return (
        <>
          <Section id="credits" title="Source acknowledgments">
            <p>
              Emil Kowalski’s design-engineering guidance informed
              frequency-aware motion, interruption handling, overlay origins and
              implementation details. The adapted concepts and verified source
              revision are documented in the bundled third-party notices.
            </p>
            <p>
              Mobbin and Lapa Ninja are optional research starting points, not
              dependencies or affiliations. No library artwork is bundled.
            </p>
            <p>
              The website uses DM Sans and Source Serif 4 under the SIL Open
              Font License. Their notices accompany the self-hosted fonts. The
              logo is original vector artwork created for this project.
            </p>
          </Section>
          <Section id="license" title="MIT license">
            <p>
              Glyph is distributed under the repository’s MIT license. Retain
              the license and required third-party notices when redistributing
              or adapting the skill.
            </p>
            <a
              className="inline-link"
              href="https://github.com/sumitttt4/Glyph-Skill/blob/main/LICENSE"
            >
              Read the license <ArrowRight size={14} />
            </a>
          </Section>
        </>
      );
  }
}
