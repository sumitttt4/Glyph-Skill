import type { Metadata } from "next";
import { ArrowRight, Check, FileCheck2, Inbox, LayoutDashboard, ListChecks, Receipt, Settings } from "lucide-react";
import "@fontsource-variable/inter/opsz.css";
import { ExampleBar, DesignNotes } from "../example-frame";
import { Mesh } from "../../components/shaders";
import { LedgerTable } from "./ledger-table";
import "../kit.css";
import "./ledgerline.css";
export const metadata: Metadata = {
  title: "Ledgerline example",
  description: "A fictional month-end close tool, designed with the Glyph skill.",
};
const plans = [
  { name: "Starter", note: "One entity, monthly close", price: "$250", items: ["Bank and card feeds", "Rule-based matching", "Exceptions queue"] },
  { name: "Growth", note: "Up to five entities", price: "$400", featured: true, items: ["Everything in Starter", "Invoice and receipt matching", "Approvals and audit export"] },
  { name: "Scale", note: "Multi-entity groups", price: "Custom", items: ["Everything in Growth", "Intercompany eliminations", "SSO and audit support"] },
];
const faqs = [
  ["Which bank feeds do you support?", "In this example, Ledgerline imports bank, card and payout exports nightly and syncs to the general ledger."],
  ["Do we have to change our chart of accounts?", "No. Matching rules map to the accounts you already use."],
  ["How long does setup take?", "A typical setup is one walkthrough using your own sample month."],
  ["Can auditors see the history?", "Every match, flag and approval is logged with who and why, and exports with the close packet."],
];
const sidebar: [typeof Inbox, string, boolean?][] = [
  [LayoutDashboard, "Overview"],
  [ListChecks, "Close", true],
  [Inbox, "Exceptions"],
  [Receipt, "Receipts"],
  [FileCheck2, "Reports"],
  [Settings, "Settings"],
];
function Mark() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
      <rect width="22" height="22" rx="6" fill="#0a0a0a" />
      <path d="M6 7.5h10M6 11h7M6 14.5h10" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
export default function Ledgerline() {
  return (
    <div className="k ll">
      <ExampleBar slug="ledgerline" />
      <header className="k-header">
        <div className="k-wrap">
          <a className="k-logo" href="#top">
            <Mark /> Ledgerline
          </a>
          <nav className="k-nav" aria-label="Ledgerline">
            <a href="#product">Product</a>
            <a href="#how">How it works</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className="k-header-links">
            <a className="k-hide-sm" href="#pricing">
              Log in
            </a>
            <a className="k-btn k-btn-primary k-btn-sm" href="#pricing">
              Book a demo
            </a>
          </div>
        </div>
      </header>
      <main id="top">
        <section className="k-hero">
          <div className="k-wrap">
            <a className="k-pill k-rise" href="#product">
              <b>New</b> Auto-match for card exports <ArrowRight size={13} />
            </a>
            <h1 className="k-display k-rise k-rise-2">Close the month without the spreadsheet chase.</h1>
            <p className="k-lede k-rise k-rise-3">
              Ledgerline matches routine transactions and brings you only the exceptions, with the
              reason and the evidence attached.
            </p>
            <div className="k-actions k-rise k-rise-4">
              <a className="k-btn k-btn-primary k-btn-lg" href="#pricing">
                Book a demo
              </a>
              <a className="k-btn k-btn-secondary k-btn-lg" href="#how">
                See how it works
              </a>
            </div>
            <p className="k-proof">Fictional product · sample data throughout</p>
            <div className="k-frame ll-hero-frame">
              <div className="k-frame-art" aria-hidden="true">
                <Mesh colors={["#ffffff", "#dfeee6", "#cfe0f7", "#f2ede4"]} distortion={0.7} swirl={0.3} grain={0.04} />
              </div>
              <div className="k-window ll-app" aria-label="Sample Ledgerline close view">
                <div className="k-window-bar">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="ll-app-grid">
                  <aside className="ll-side">
                    <span className="ll-org">
                      <Mark /> Northwind Ltd
                    </span>
                    {sidebar.map(([Icon, label, active]) => (
                      <span key={label} className={active ? "is-active" : ""}>
                        <Icon size={15} /> {label}
                      </span>
                    ))}
                  </aside>
                  <LedgerTable />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="product" className="k-section">
          <div className="k-wrap">
            <div className="k-head">
              <span className="k-eyebrow">Product</span>
              <h2 className="k-h2">The routine work, handled.</h2>
              <p>Rules clear what is obvious. People spend the close on what needs judgment.</p>
            </div>
            <div className="k-bento">
              <article className="k-card k-span-7">
                <div className="k-card-visual ll-v-match">
                  {[
                    ["Stripe payout #4471", "INV-2231 · Acme", "12,480.00"],
                    ["AWS 88-1932", "Bill · Amazon Web Services", "3,912.44"],
                    ["Gusto batch 03/27", "Payroll journal", "41,206.18"],
                  ].map(([a, b, amt]) => (
                    <div key={a} className="ll-match">
                      <span>{a}</span>
                      <i />
                      <span>{b}</span>
                      <b>{amt}</b>
                    </div>
                  ))}
                </div>
                <div className="k-card-body">
                  <h3>Auto-match with visible logic</h3>
                  <p>Every match shows the rule or reference that made it, so nothing is a black box.</p>
                </div>
              </article>
              <article className="k-card k-span-5">
                <div className="k-card-visual ll-v-queue">
                  {[
                    ["Wire · Halden & Co.", "Amount differs"],
                    ["Card · Figma annual", "No receipt"],
                    ["Transfer to reserve", "Needs approval"],
                  ].map(([a, b]) => (
                    <div key={a}>
                      <span>{a}</span>
                      <em>{b}</em>
                    </div>
                  ))}
                </div>
                <div className="k-card-body">
                  <h3>One queue for exceptions</h3>
                  <p>Each item arrives with its reason and the documents beside it.</p>
                </div>
              </article>
              <article className="k-card k-span-5">
                <div className="k-card-visual ll-v-trail">
                  {[
                    ["09:42", "Priya approved transfer to reserve"],
                    ["09:18", "Ledgerline flagged Halden wire"],
                    ["Yesterday", "Marco attached Figma receipt"],
                  ].map(([t, a]) => (
                    <div key={a}>
                      <time>{t}</time>
                      <span>{a}</span>
                    </div>
                  ))}
                </div>
                <div className="k-card-body">
                  <h3>An audit trail by default</h3>
                  <p>Who matched, flagged or approved each item, and why.</p>
                </div>
              </article>
              <article className="k-card k-span-7">
                <div className="k-card-visual ll-v-check">
                  {[
                    ["Bank reconciliations", true],
                    ["Card and receipts", true],
                    ["Accruals and prepaids", true],
                    ["Intercompany", false],
                    ["Review and lock", false],
                  ].map(([a, done]) => (
                    <div key={a as string} className={done ? "is-done" : ""}>
                      <i>{done && <Check size={11} strokeWidth={3} />}</i>
                      {a}
                    </div>
                  ))}
                </div>
                <div className="k-card-body">
                  <h3>A close checklist that fills itself in</h3>
                  <p>Tasks complete as their accounts reconcile, so status meetings get shorter.</p>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section id="how" className="k-section">
          <div className="k-wrap">
            <div className="k-head">
              <span className="k-eyebrow">How it works</span>
              <h2 className="k-h2">Three steps, every month.</h2>
            </div>
            <ol className="k-steps">
              {[
                ["Import", "Bank, card and payout feeds sync overnight. Nothing to upload by hand."],
                ["Match", "Rules and references clear routine items, with the logic shown for each."],
                ["Review", "Only exceptions reach a person, with the evidence attached."],
              ].map(([t, d], i) => (
                <li key={t}>
                  <span>{i + 1}</span>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section id="pricing" className="k-section">
          <div className="k-wrap">
            <div className="k-head">
              <span className="k-eyebrow">Pricing</span>
              <h2 className="k-h2">Priced per entity, not per seat.</h2>
              <p>Unlimited users on every plan. Prices are fictional for this example.</p>
            </div>
            <div className="k-pricing">
              {plans.map((p) => (
                <div key={p.name} className={`k-plan ${p.featured ? "is-featured" : ""}`}>
                  <h3>{p.name}</h3>
                  <p>{p.note}</p>
                  <div className="k-price">
                    {p.price} {p.price !== "Custom" && <small>/ month</small>}
                  </div>
                  <a className={`k-btn ${p.featured ? "k-btn-primary" : "k-btn-secondary"}`} href="#design-notes">
                    {p.price === "Custom" ? "Talk to us" : "Book a demo"}
                  </a>
                  <ul>
                    {p.items.map((it) => (
                      <li key={it}>
                        <Check size={14} /> {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="faq" className="k-section">
          <div className="k-wrap">
            <div className="k-head">
              <h2 className="k-h2">Questions</h2>
            </div>
            <div className="k-faq">
              {faqs.map(([q, a]) => (
                <details key={q}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section className="k-section ll-cta-wrap">
          <div className="k-wrap">
            <div className="k-cta">
              <div className="k-frame-art" aria-hidden="true">
                <Mesh colors={["#ffffff", "#dfeee6", "#cfe0f7", "#f2ede4"]} distortion={0.7} swirl={0.3} grain={0.04} />
              </div>
              <h2 className="k-h2">Make next month’s close the calm one.</h2>
              <p className="k-lede">Bring a sample month. We will run it through Ledgerline with you.</p>
              <div className="k-actions">
                <a className="k-btn k-btn-primary k-btn-lg" href="#design-notes">
                  Book a demo
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="k-footer">
        <div className="k-wrap">
          <div className="k-footer-grid">
            <div>
              <span className="k-logo">
                <Mark /> Ledgerline
              </span>
              <p style={{ marginTop: 12, maxWidth: 280 }}>Month-end close for small finance teams. A fictional product.</p>
            </div>
            {[
              ["Product", ["Matching", "Exceptions", "Audit trail", "Pricing"]],
              ["Company", ["About", "Careers", "Contact"]],
              ["Resources", ["Guides", "Security", "Status"]],
            ].map(([h, items]) => (
              <div key={h as string}>
                <h4>{h}</h4>
                <ul>
                  {(items as string[]).map((i) => (
                    <li key={i}>
                      <a href="#top">{i}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="k-footer-legal">
            <span>© Ledgerline (example)</span>
            <span>Designed with Glyph</span>
          </div>
        </div>
      </footer>
      <DesignNotes slug="ledgerline" />
    </div>
  );
}
