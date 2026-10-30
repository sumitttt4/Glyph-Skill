import type { Metadata } from "next";
import { ArrowRight, AudioLines, Check, CircleDot, ListTodo, Search, Sparkles } from "lucide-react";
import "@fontsource-variable/geist";
import "@fontsource-variable/geist-mono";
import { ExampleBar, DesignNotes } from "../example-frame";
import { Mesh } from "../../components/shaders";
import "../kit.css";
import "./halo.css";
export const metadata: Metadata = {
  title: "Halo example",
  description: "A fictional AI meeting-notes app, designed with the Glyph skill.",
};
const field = ["#000000", "#1b1640", "#3b2a8c", "#0b1d3a", "#000000"];
function Mark() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
      <circle cx="11" cy="11" r="9" fill="none" stroke="#a78bfa" strokeWidth="2.4" />
      <circle cx="11" cy="11" r="3.2" fill="#fafafa" />
    </svg>
  );
}
function Summary() {
  return (
    <div className="k-window hl-window" aria-label="Sample Halo meeting summary">
      <div className="k-window-bar">
        <i />
        <i />
        <i />
        <span>Weekly product sync · 32 min</span>
      </div>
      <div className="hl-sum">
        <div className="hl-sum-head">
          <span className="hl-live">
            <i /> Summary ready
          </span>
          <span className="hl-mono">Tue 09:30</span>
        </div>
        <h3>Ship the onboarding checklist on the 14th; pricing page waits for legal.</h3>
        <div className="hl-block">
          <h4>Decisions</h4>
          <ul>
            <li>
              <Check size={14} /> Onboarding checklist ships behind a flag on the 14th
            </li>
            <li>
              <Check size={14} /> Annual plan discount stays at two months
            </li>
          </ul>
        </div>
        <div className="hl-block">
          <h4>Action items</h4>
          <ul className="hl-todo">
            <li>
              <span>Draft rollout note for support</span>
              <em className="hl-mono">@maya · Thu</em>
            </li>
            <li>
              <span>Send pricing copy to legal</span>
              <em className="hl-mono">@jon · today</em>
            </li>
            <li>
              <span>Add checklist events to analytics</span>
              <em className="hl-mono">@ravi · Fri</em>
            </li>
          </ul>
        </div>
        <div className="hl-quote">
          <span className="hl-mono">14:02</span>
          “If legal needs more than a week, we ship pricing separately.”
        </div>
      </div>
    </div>
  );
}
export default function Halo() {
  return (
    <div className="k hl">
      <ExampleBar slug="halo" />
      <header className="k-header">
        <div className="k-wrap">
          <a className="k-logo" href="#top">
            <Mark /> Halo
          </a>
          <nav className="k-nav" aria-label="Halo">
            <a href="#features">Features</a>
            <a href="#how">How it works</a>
            <a href="#pricing">Pricing</a>
          </nav>
          <div className="k-header-links">
            <a className="k-hide-sm" href="#pricing">
              Sign in
            </a>
            <a className="k-btn k-btn-primary k-btn-sm" href="#pricing">
              Start free
            </a>
          </div>
        </div>
      </header>
      <main id="top">
        <section className="hl-hero">
          <div className="hl-hero-art" aria-hidden="true">
            <Mesh colors={field} distortion={0.9} swirl={0.6} grain={0.12} />
          </div>
          <div className="k-wrap hl-hero-grid">
            <div className="hl-hero-copy">
              <a className="k-pill k-rise" href="#features">
                <b>New</b> Works with Google Meet <ArrowRight size={13} />
              </a>
              <h1 className="hl-display k-rise k-rise-2">Every meeting ends with a plan.</h1>
              <p className="hl-lede k-rise k-rise-3">
                Halo listens to the call and hands back decisions, owners and dates, ready to paste
                into your tracker before everyone leaves the room.
              </p>
              <div className="hl-actions k-rise k-rise-4">
                <a className="k-btn k-btn-primary k-btn-lg" href="#pricing">
                  Start free
                </a>
                <a className="k-btn k-btn-secondary k-btn-lg" href="#how">
                  See a summary
                </a>
              </div>
              <p className="hl-proof">Fictional product · sample meeting</p>
            </div>
            <div className="hl-hero-visual k-rise k-rise-3">
              <Summary />
            </div>
          </div>
        </section>
        <section id="features" className="k-section">
          <div className="k-wrap">
            <div className="k-head">
              <span className="k-eyebrow">Features</span>
              <h2 className="k-h2">Notes you will actually read.</h2>
              <p>Halo writes what changed, who owns it and when, then gets out of the way.</p>
            </div>
            <div className="k-bento">
              <article className="k-card k-span-7">
                <div className="k-card-visual hl-v-wave">
                  <div className="hl-wave" aria-hidden="true">
                    {Array.from({ length: 48 }, (_, i) => (
                      <i key={i} style={{ height: `${18 + Math.abs(Math.sin(i * 0.7) * 46) + (i % 5) * 4}%` }} />
                    ))}
                  </div>
                  <div className="hl-wave-meta">
                    <span>
                      <AudioLines size={14} /> Recording
                    </span>
                    <span className="hl-mono">18:42</span>
                  </div>
                </div>
                <div className="k-card-body">
                  <h3>Joins the call so you don’t take notes</h3>
                  <p>Halo transcribes with speaker names and timestamps you can jump back to.</p>
                </div>
              </article>
              <article className="k-card k-span-5">
                <div className="k-card-visual hl-v-tasks">
                  {[
                    ["Draft rollout note", "@maya"],
                    ["Send pricing to legal", "@jon"],
                    ["Add analytics events", "@ravi"],
                  ].map(([t, o]) => (
                    <div key={t}>
                      <ListTodo size={14} />
                      <span>{t}</span>
                      <em className="hl-mono">{o}</em>
                    </div>
                  ))}
                </div>
                <div className="k-card-body">
                  <h3>Owners and dates, extracted</h3>
                  <p>Action items land in Linear or Asana with the right assignee.</p>
                </div>
              </article>
              <article className="k-card k-span-5">
                <div className="k-card-visual hl-v-search">
                  <div className="hl-search">
                    <Search size={14} /> When did we agree on the annual discount?
                  </div>
                  <div className="hl-answer">
                    <Sparkles size={14} />
                    <p>
                      In the 2 April product sync. Two months free, confirmed by Jon at{" "}
                      <span className="hl-mono">22:15</span>.
                    </p>
                  </div>
                </div>
                <div className="k-card-body">
                  <h3>Ask across every meeting</h3>
                  <p>Answers cite the meeting and the moment, so you can check them.</p>
                </div>
              </article>
              <article className="k-card k-span-7">
                <div className="k-card-visual hl-v-apps">
                  {["Google Meet", "Zoom", "Slack", "Linear", "Notion", "Asana"].map((a) => (
                    <span key={a}>
                      <CircleDot size={13} /> {a}
                    </span>
                  ))}
                </div>
                <div className="k-card-body">
                  <h3>Fits the tools you already use</h3>
                  <p>Summaries post to Slack; tasks sync to your tracker. Integration names are illustrative.</p>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section id="how" className="k-section">
          <div className="k-wrap">
            <div className="k-head">
              <span className="k-eyebrow">How it works</span>
              <h2 className="k-h2">Invite Halo. Then just talk.</h2>
            </div>
            <ol className="k-steps">
              {[
                ["Connect your calendar", "Halo joins the meetings you choose, never the ones you don’t."],
                ["Hold the meeting", "Speak normally. Halo tracks decisions and commitments as they happen."],
                ["Get the plan", "A summary with owners and dates arrives before the call ends."],
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
              <h2 className="k-h2">Free for your first ten meetings.</h2>
              <p>Prices are fictional for this example.</p>
            </div>
            <div className="k-pricing hl-pricing">
              {[
                { name: "Free", note: "For trying it out", price: "$0", items: ["10 meetings a month", "Summaries and action items", "Slack posting"] },
                { name: "Team", note: "For teams that meet a lot", price: "$12", featured: true, items: ["Unlimited meetings", "Ask across meetings", "Tracker sync"] },
              ].map((p) => (
                <div key={p.name} className={`k-plan ${p.featured ? "is-featured" : ""}`}>
                  <h3>{p.name}</h3>
                  <p>{p.note}</p>
                  <div className="k-price">
                    {p.price} <small>/ seat / month</small>
                  </div>
                  <a className={`k-btn ${p.featured ? "k-btn-primary" : "k-btn-secondary"}`} href="#design-notes">
                    Start free
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
        <section className="k-section hl-cta-wrap">
          <div className="k-wrap">
            <div className="k-cta">
              <div className="k-frame-art" aria-hidden="true">
                <Mesh colors={field} distortion={0.9} swirl={0.6} grain={0.12} />
              </div>
              <h2 className="k-h2">Leave your next meeting with a plan.</h2>
              <p className="k-lede">Free for ten meetings. No card needed.</p>
              <div className="k-actions">
                <a className="k-btn k-btn-primary k-btn-lg" href="#design-notes">
                  Start free
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="k-footer">
        <div className="k-wrap">
          <div className="k-footer-legal" style={{ marginTop: 0, borderTop: 0, paddingTop: 0 }}>
            <span className="k-logo">
              <Mark /> Halo
            </span>
            <span>A fictional product · Designed with Glyph</span>
          </div>
        </div>
      </footer>
      <DesignNotes slug="halo" />
    </div>
  );
}
