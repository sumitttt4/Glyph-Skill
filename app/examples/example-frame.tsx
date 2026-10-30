import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getExample } from "./data";
import "./examples.css";
export function ExampleBar({ slug }: { slug: string }) {
  const e = getExample(slug);
  return (
    <div className="ex-bar">
      <Link href="/#examples">
        <ArrowLeft size={14} /> Glyph
      </Link>
      <span>
        Example built with Glyph · <b>{e.name}</b> is a fictional product
      </span>
      <a href="#design-notes">Design notes</a>
    </div>
  );
}
export function DesignNotes({ slug }: { slug: string }) {
  const e = getExample(slug);
  const rows: [string, string][] = [
    ["Brief", e.brief],
    ["Primary task", e.task],
    ["Direction", e.chosen],
    ["Hero pattern", e.pattern],
    ["Type", e.type],
    ["Color", e.color],
    ["Visual", e.visual],
  ];
  return (
    <section id="design-notes" className="ex-notes" aria-labelledby="notes-title">
      <div className="ex-notes-inner">
        <span className="ex-notes-kicker">Built with Glyph</span>
        <h2 id="notes-title">Design notes</h2>
        <p className="ex-notes-lede">
          The decisions behind this page, following the Glyph workflow and its
          visual craft baseline. The product, data and people are fictional.
        </p>
        <dl>
          {rows.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
          <div>
            <dt>Compared and rejected</dt>
            <dd>
              <ul>
                {e.rejected.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </dd>
          </div>
          <div>
            <dt>Checked</dt>
            <dd>
              <ul>
                {e.checks.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </dd>
          </div>
          <div>
            <dt>References loaded</dt>
            <dd className="ex-notes-files">
              {e.references.map((r) => (
                <code key={r}>{r}</code>
              ))}
            </dd>
          </div>
        </dl>
        <Link className="ex-notes-back" href="/#examples">
          <ArrowLeft size={15} /> Back to Glyph
        </Link>
      </div>
    </section>
  );
}
