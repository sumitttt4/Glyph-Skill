import type { Metadata } from "next";
import "@fontsource-variable/fraunces/full.css";
import { ExampleBar, DesignNotes } from "../example-frame";
import { ClassList } from "./class-list";
import "./morrow.css";
export const metadata: Metadata = {
  title: "Morrow Clay Studio example",
  description: "A fictional ceramics workshop, designed with the Glyph skill.",
};
function Vessels() {
  return (
    <svg className="mc-vessels" viewBox="0 0 520 420" role="img" aria-label="Drawing of three handmade pots on a shelf">
      <rect x="0" y="372" width="520" height="14" rx="3" fill="#7a4a33" />
      <path d="M78 372c-34-6-48-48-40-96 7-38 30-54 30-80 0-12-8-18-8-26h76c0 8-8 14-8 26 0 26 23 42 30 80 8 48-6 90-40 96z" fill="#b5532f" />
      <path d="M60 170h76" stroke="#8c3c20" strokeWidth="6" strokeLinecap="round" />
      <path d="M50 300c30 10 66 10 96 0" stroke="#e6b98f" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M210 372c-40 0-62-30-66-74h196c-4 44-26 74-66 74z" fill="#3f6b57" />
      <path d="M144 298h196" stroke="#2c4d3e" strokeWidth="6" strokeLinecap="round" />
      <path d="M170 330c40 14 104 14 144 0" stroke="#a9c9b6" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M380 372c-14 0-22-10-22-24v-96h96v96c0 14-8 24-22 24z" fill="#e6c9a4" />
      <path d="M454 270c34 0 34 60 0 60" stroke="#e6c9a4" strokeWidth="12" fill="none" />
      <path d="M358 284h96" stroke="#b5532f" strokeWidth="10" />
      <circle cx="455" cy="88" r="38" fill="#f0b45c" opacity=".55" />
    </svg>
  );
}
const expect = [
  ["Week one", "Wedge and center the clay. Most people get their first cylinder by the end of the evening."],
  ["Weeks two & three", "Pull taller walls, trim feet and add handles. Mistakes go back in the bucket."],
  ["Week four", "Glaze your favorites. We fire them, and you collect them ten days later."],
];
export default function Morrow() {
  return (
    <div className="mc">
      <ExampleBar slug="morrow" />
      <header className="mc-nav">
        <span className="mc-logo">Morrow</span>
        <nav aria-label="Morrow">
          <a href="#classes">Classes</a>
          <a href="#expect">What to expect</a>
          <a href="#visit">Visit</a>
        </nav>
      </header>
      <main>
        <section className="mc-hero">
          <div>
            <h1>
              Make something you’ll <em>keep using.</em>
            </h1>
            <p>
              Beginner wheel and hand-building classes in a sunny studio on Alder
              Street. Clay, tools, glazing and firing are included.
            </p>
            <div className="mc-actions">
              <a className="mc-btn" href="#classes">
                Find a beginner class
              </a>
              <a className="mc-link" href="#expect">
                What happens in class
              </a>
            </div>
          </div>
          <Vessels />
        </section>
        <ul className="mc-strip" aria-label="Studio details">
          <li>Groups of six</li>
          <li>All materials included</li>
          <li>Firing & glazing included</li>
          <li>Two blocks from Alder station</li>
        </ul>
        <section id="classes" className="mc-section">
          <div className="mc-head">
            <h2>Spring classes</h2>
            <p>Showing beginner classes first. Prices include eight kilos of clay.</p>
          </div>
          <ClassList />
        </section>
        <section id="expect" className="mc-section mc-expect">
          <h2>What happens in a four-week class</h2>
          <ol>
            {expect.map(([t, d], i) => (
              <li key={t}>
                <span>{i + 1}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </li>
            ))}
          </ol>
        </section>
        <section id="visit" className="mc-section mc-visit">
          <div>
            <h2>Come by the studio</h2>
            <p>
              14 Alder Street. Open studio Wednesday to Sunday, 10:00 to 18:00.
              Wear clothes you don’t mind getting muddy.
            </p>
          </div>
          <details>
            <summary>Do I need any experience?</summary>
            <p>No. Beginner classes assume you have never touched clay.</p>
          </details>
          <details>
            <summary>What if I miss a week?</summary>
            <p>Join any open studio session that week to catch up.</p>
          </details>
        </section>
      </main>
      <DesignNotes slug="morrow" />
    </div>
  );
}
