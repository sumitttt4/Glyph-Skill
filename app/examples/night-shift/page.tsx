import type { Metadata } from "next";
import "@fontsource-variable/bricolage-grotesque/wdth.css";
import { ExampleBar, DesignNotes } from "../example-frame";
import { NightShader } from "./night-shader";
import { PaceCalculator } from "./pace-calculator";
import "./night-shift.css";
export const metadata: Metadata = {
  title: "Night Shift 10K example",
  description: "A fictional city night run, designed with the Glyph skill.",
};
const facts = [
  ["Date", "Sat 18 May"],
  ["Start", "21:30"],
  ["Distance", "10 km"],
  ["Route", "Riverside loop"],
];
const schedule = [
  ["19:30", "Bib pickup opens", "Pier 4 hall"],
  ["21:00", "Warm-up with the pacers", "Start line"],
  ["21:30", "Gun", "All waves, 3 minutes apart"],
  ["23:00", "Finish party", "Riverside lawn, until midnight"],
];
const markers = [
  [60, 210, "0"],
  [215, 95, "3"],
  [420, 70, "5"],
  [610, 150, "7"],
  [520, 250, "10"],
];
export default function NightShift() {
  return (
    <div className="ns">
      <ExampleBar slug="night-shift" />
      <header className="ns-nav">
        <span className="ns-logo">NIGHT SHIFT</span>
        <a className="ns-btn ns-btn-sm" href="#register">
          Register
        </a>
      </header>
      <main>
        <section className="ns-hero">
          <div className="ns-hero-art" aria-hidden="true">
            <NightShader />
          </div>
          <h1>
            Run the city
            <span>after dark.</span>
          </h1>
          <dl className="ns-facts">
            {facts.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <div className="ns-hero-cta" id="register">
            <a className="ns-btn" href="#design-notes">
              Register · $45
            </a>
            <p>
              1,140 of 2,000 places taken. <span>Sample numbers.</span>
            </p>
          </div>
        </section>
        <section className="ns-section ns-route">
          <div>
            <h2>One loop. Lit the whole way.</h2>
            <p>
              Ten kilometres along both banks and across two bridges. Flat,
              closed to traffic and lit end to end, with water at 3, 5 and 7 km.
            </p>
          </div>
          <svg viewBox="0 0 700 300" role="img" aria-label="Route map: a loop along the river with water stations at kilometres 3, 5 and 7">
            <path d="M0 140 C140 120 300 175 440 150 S620 125 700 135 L700 172 C600 165 470 190 330 192 S120 160 0 178Z" fill="#0c2235" />
            <text x="330" y="186" textAnchor="middle" fill="#5d7f99" fontSize="12" letterSpacing="3">RIVER</text>
            <path
              d="M60 210 C80 120 160 90 215 95 S360 60 420 70 S600 90 610 150 S600 250 520 250 S260 260 160 245 S50 250 60 210Z"
              fill="none"
              stroke="#d4ff3a"
              strokeWidth="5"
              strokeLinejoin="round"
            />
            {markers.map(([x, y, km]) => (
              <g key={km as string}>
                <circle cx={x} cy={y} r="14" fill="#000" stroke="#d4ff3a" strokeWidth="3" />
                <text x={x} y={(y as number) + 5} textAnchor="middle" fill="#d4ff3a" fontSize="13" fontWeight="700">
                  {km}
                </text>
              </g>
            ))}
          </svg>
        </section>
        <section className="ns-section ns-two">
          <div>
            <h2>Find your pace.</h2>
            <p>
              Pick a target and we will seat you in the right wave with a pacer
              holding that time.
            </p>
            <PaceCalculator />
          </div>
          <div>
            <h2>The night</h2>
            <ol className="ns-schedule">
              {schedule.map(([t, what, where]) => (
                <li key={t}>
                  <time>{t}</time>
                  <span>
                    <b>{what}</b>
                    {where}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>
      <DesignNotes slug="night-shift" />
    </div>
  );
}
