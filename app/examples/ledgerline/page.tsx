import type { Metadata } from "next";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import { ExampleBar, DesignNotes } from "../example-frame";
import { LedgerTable } from "./ledger-table";
import "./ledgerline.css";
export const metadata: Metadata = {
  title: "Ledgerline example",
  description: "A fictional month-end close tool, designed with the Glyph skill.",
};
const steps = [
  ["Import", "Bank feeds, card exports and your ERP sync overnight. Nothing to upload by hand."],
  ["Match", "Rules and invoice references clear the routine items. You see the logic for every match."],
  ["Review", "Only the exceptions reach a person, with the reason and the evidence beside them."],
];
const trail = [
  ["09:42", "Priya N.", "approved", "Transfer to savings · 25,000.00"],
  ["09:18", "Ledgerline", "flagged", "Wire from Halden & Co. · amount differs"],
  ["Yesterday", "Marco D.", "attached receipt", "Card · Figma annual"],
  ["Yesterday", "Ledgerline", "matched", "312 card transactions by rule"],
];
export default function Ledgerline() {
  return (
    <div className="ll">
      <ExampleBar slug="ledgerline" />
      <header className="ll-nav">
        <span className="ll-logo">
          <i aria-hidden="true" /> Ledgerline
        </span>
        <nav aria-label="Ledgerline">
          <a href="#how">How it works</a>
          <a href="#trail">Audit trail</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <a className="ll-btn ll-btn-sm" href="#pricing">
          Book a walkthrough
        </a>
      </header>
      <main>
        <section className="ll-hero">
          <div className="ll-hero-copy">
            <span className="ll-kicker">Month-end close for small finance teams</span>
            <h1>Close the books on the exceptions, not the whole ledger.</h1>
            <p>
              Ledgerline matches the routine transactions and brings you only the
              ones that need judgment, with the reason and the evidence attached.
            </p>
            <div className="ll-actions">
              <a className="ll-btn" href="#pricing">
                Book a walkthrough
              </a>
              <a className="ll-link" href="#how">
                See how matching works →
              </a>
            </div>
          </div>
          <LedgerTable />
        </section>
        <section id="how" className="ll-section">
          <h2>How the close runs</h2>
          <ol className="ll-steps">
            {steps.map(([t, d], i) => (
              <li key={t}>
                <span>0{i + 1}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </li>
            ))}
          </ol>
        </section>
        <section id="trail" className="ll-section ll-split">
          <div>
            <h2>Every decision leaves a trail.</h2>
            <p>
              Auditors see who matched, flagged or approved each item, and why.
              Export the log with the close packet.
            </p>
          </div>
          <ul className="ll-trail" aria-label="Sample audit trail">
            {trail.map(([time, who, verb, what]) => (
              <li key={what}>
                <time>{time}</time>
                <span>
                  <b>{who}</b> {verb} <em>{what}</em>
                </span>
              </li>
            ))}
          </ul>
        </section>
        <section id="pricing" className="ll-section ll-pricing">
          <div>
            <h2>One price per entity.</h2>
            <p>Unlimited users and transactions. Walkthroughs use your own sample month.</p>
          </div>
          <div className="ll-price">
            <span>
              <b>$400</b> / entity / month
            </span>
            <a className="ll-btn" href="#design-notes">
              Book a walkthrough
            </a>
            <small>Fictional pricing for this example.</small>
          </div>
        </section>
      </main>
      <DesignNotes slug="ledgerline" />
    </div>
  );
}
