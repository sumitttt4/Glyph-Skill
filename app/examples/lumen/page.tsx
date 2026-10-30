import type { Metadata } from "next";
import { ArrowUpRight, Lock, PauseCircle, ShieldCheck, Target } from "lucide-react";
import "@fontsource-variable/inter/opsz.css";
import "@fontsource/instrument-serif/400.css";
import { ExampleBar, DesignNotes } from "../example-frame";
import { Mesh } from "../../components/shaders";
import { Waitlist } from "./waitlist";
import "../kit.css";
import "./lumen.css";
export const metadata: Metadata = {
  title: "Lumen example",
  description: "A fictional savings app waitlist, designed with the Glyph skill.",
};
const field = ["#faf9f6", "#f6dcc4", "#d7ead9", "#f3e9d8", "#faf9f6"];
const goals = [
  ["Lisbon in June", "£620 of £1,000", 62],
  ["New bike", "£210 of £600", 35],
  ["Rainy day fund", "£1,640 of £2,000", 82],
] as const;
function Mark() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
      <rect width="22" height="22" rx="7" fill="#14532d" />
      <circle cx="11" cy="11" r="4.5" fill="#fef3c7" />
    </svg>
  );
}
function Phone() {
  return (
    <div className="lm-phone" aria-label="Sample Lumen app screen">
      <div className="lm-screen">
        <div className="lm-status">
          <span>9:41</span>
          <i />
        </div>
        <p className="lm-hello">Good morning, Ana</p>
        <div className="lm-balance">
          <span>Saved this month</span>
          <strong>£184.20</strong>
          <em>+£12.40 from round-ups this week</em>
        </div>
        <p className="lm-label">Goals</p>
        {goals.map(([name, amt, pct]) => (
          <div className="lm-goal" key={name}>
            <div>
              <b>{name}</b>
              <span>{amt}</span>
            </div>
            <i>
              <b style={{ width: `${pct}%` }} />
            </i>
          </div>
        ))}
        <p className="lm-label">Recent round-ups</p>
        {[
          ["Corner café", "£4.40", "+£0.60"],
          ["Metro card", "£27.25", "+£0.75"],
        ].map(([a, b, c]) => (
          <div className="lm-tx" key={a}>
            <span>{a}</span>
            <span className="lm-muted">{b}</span>
            <b>{c}</b>
          </div>
        ))}
      </div>
    </div>
  );
}
export default function Lumen() {
  return (
    <div className="k lm">
      <ExampleBar slug="lumen" />
      <header className="k-header">
        <div className="k-wrap">
          <a className="k-logo" href="#top">
            <Mark /> Lumen
          </a>
          <nav className="k-nav" aria-label="Lumen">
            <a href="#how">How it works</a>
            <a href="#safety">Safety</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className="k-header-links">
            <a className="k-btn k-btn-primary k-btn-sm" href="#join">
              Join waitlist
            </a>
          </div>
        </div>
      </header>
      <main id="top">
        <section className="k-hero lm-hero">
          <div className="k-wrap">
            <span className="k-pill k-rise">
              <b>Spring</b> Launching in the UK and EU
            </span>
            <h1 className="k-display k-rise k-rise-2">
              Save without <span className="lm-serif">thinking about it.</span>
            </h1>
            <p className="k-lede k-rise k-rise-3">
              Lumen rounds up everyday spending and moves the change into goals you care about. Set
              it once, then watch it add up.
            </p>
            <div className="lm-hero-form k-rise k-rise-4">
              <Waitlist id="hero-email" />
            </div>
            <div className="k-frame lm-stage">
              <div className="k-frame-art" aria-hidden="true">
                <Mesh colors={field} distortion={0.8} swirl={0.45} grain={0.05} />
              </div>
              <div className="lm-float lm-float-a" aria-hidden="true">
                <span className="lm-dot" /> Round-up · Corner café <b>+£0.60</b>
              </div>
              <div className="lm-float lm-float-b" aria-hidden="true">
                <Target size={15} /> Rainy day fund is 82% there
              </div>
              <Phone />
            </div>
          </div>
        </section>
        <section id="how" className="k-section">
          <div className="k-wrap">
            <div className="k-head">
              <span className="k-eyebrow">How it works</span>
              <h2 className="k-h2">Small change, on autopilot.</h2>
              <p>Three settings, then Lumen does the rest. All figures here are samples.</p>
            </div>
            <div className="k-bento">
              <article className="k-card k-span-4">
                <div className="k-card-visual lm-v-round">
                  <span className="lm-muted">Corner café</span>
                  <div>
                    <s>£4.40</s> <b>£5.00</b>
                  </div>
                  <em>+£0.60 saved</em>
                </div>
                <div className="k-card-body">
                  <h3>Round up every purchase</h3>
                  <p>Each card payment rounds to the next pound or euro.</p>
                </div>
              </article>
              <article className="k-card k-span-4">
                <div className="k-card-visual lm-v-goals">
                  {goals.slice(0, 2).map(([name, , pct]) => (
                    <div className="lm-goal" key={name}>
                      <div>
                        <b>{name}</b>
                        <span>{pct}%</span>
                      </div>
                      <i>
                        <b style={{ width: `${pct}%` }} />
                      </i>
                    </div>
                  ))}
                </div>
                <div className="k-card-body">
                  <h3>Split it across goals</h3>
                  <p>Choose how the change is shared between what you are saving for.</p>
                </div>
              </article>
              <article className="k-card k-span-4">
                <div className="k-card-visual lm-v-pause">
                  <div>
                    <PauseCircle size={18} />
                    <span>Pause round-ups</span>
                    <i className="lm-toggle" aria-hidden="true" />
                  </div>
                  <p className="lm-muted">Until the 1st of next month</p>
                </div>
                <div className="k-card-body">
                  <h3>Pause whenever you need</h3>
                  <p>Tight month? Pause in one tap and withdraw any time.</p>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section id="safety" className="k-section">
          <div className="k-wrap">
            <div className="k-head">
              <span className="k-eyebrow">Safety</span>
              <h2 className="k-h2">Your money stays yours.</h2>
            </div>
            <div className="lm-safety">
              {[
                [ShieldCheck, "Held with a regulated bank", "Savings would sit with a licensed partner bank, separate from Lumen."],
                [Lock, "Read-only card access", "Lumen sees transactions to round them up. It cannot spend."],
                [PauseCircle, "Withdraw any time", "No lock-ins and no fees to move money back to your account."],
              ].map(([Icon, t, d]) => {
                const I = Icon as typeof Lock;
                return (
                  <div key={t as string}>
                    <I size={20} />
                    <h3>{t as string}</h3>
                    <p>{d as string}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section id="faq" className="k-section">
          <div className="k-wrap">
            <div className="k-head">
              <h2 className="k-h2">Questions</h2>
            </div>
            <div className="k-faq">
              {[
                ["When does Lumen launch?", "This is a fictional product. In the story, it launches in the UK and EU this spring."],
                ["Does it cost anything?", "The example plan is free for round-ups, with an optional paid tier for interest-bearing goals."],
                ["Which cards work?", "Any debit or credit card from a supported bank."],
              ].map(([q, a]) => (
                <details key={q}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section id="join" className="k-section lm-cta-wrap">
          <div className="k-wrap">
            <div className="k-cta">
              <div className="k-frame-art" aria-hidden="true">
                <Mesh colors={field} distortion={0.8} swirl={0.45} grain={0.05} />
              </div>
              <h2 className="k-h2">
                Start saving <span className="lm-serif">the easy way.</span>
              </h2>
              <p className="k-lede">Join the waitlist and we will email you once, at launch.</p>
              <div className="lm-hero-form">
                <Waitlist id="cta-email" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="k-footer">
        <div className="k-wrap">
          <div className="k-footer-legal" style={{ marginTop: 0, borderTop: 0, paddingTop: 0 }}>
            <span className="k-logo">
              <Mark /> Lumen
            </span>
            <a href="#design-notes">
              Design notes <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </footer>
      <DesignNotes slug="lumen" />
    </div>
  );
}
