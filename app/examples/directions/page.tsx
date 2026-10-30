import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "@fontsource-variable/inter/opsz.css";
import "@fontsource-variable/geist";
import "@fontsource-variable/geist-mono";
import "@fontsource/instrument-serif/400.css";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/figtree";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/anton/400.css";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/space-grotesk";
import "@fontsource/space-mono/400.css";
import "@fontsource/dm-serif-display/400.css";
import "@fontsource-variable/public-sans";
import "../../../skills/glyph/assets/starter.css";
import "./directions.css";
export const metadata: Metadata = {
  title: "Style directions",
  description: "One Glyph starter kit rendered in thirteen style directions.",
};
type Row = {
  dir: string;
  name: string;
  category: string;
  brand: string;
  pill: string;
  title: string;
  lede: string;
  primary: string;
  secondary: string;
  steps: [string, string][];
  note?: string;
};
const rows: Row[] = [
  { dir: "", name: "Clean product", category: "B2B SaaS", brand: "Planwise", pill: "Quarterly planning, now with goals", title: "Plan the quarter in one shared place.", lede: "Roadmaps, owners and progress that the whole team can read without a meeting.", primary: "Start free", secondary: "Book a demo", steps: [["Draft", "Turn goals into projects with owners."], ["Align", "Share one plan across teams."], ["Track", "See progress without status meetings."]] },
  { dir: "dark-technical", name: "Dark technical", category: "Developer tool", brand: "Relay", pill: "v2.4 · cold starts under 50ms", title: "Deploy edge functions in one command.", lede: "Write a handler, run relay deploy, and it is live in 30 regions with logs and rollbacks.", primary: "Get started", secondary: "Read the docs", steps: [["Write", "Plain TypeScript handlers."], ["Deploy", "One command, every region."], ["Observe", "Logs and traces built in."]] },
  { dir: "luminous", name: "Luminous AI", category: "Consumer AI", brand: "Muse", pill: "Now on iPhone and Mac", title: "Your ideas, sorted while you think.", lede: "Speak or scribble. Muse turns loose thoughts into notes, tasks and drafts you can use.", primary: "Try Muse free", secondary: "See examples", steps: [["Capture", "Voice, text or photos."], ["Sort", "Notes, tasks and drafts."], ["Use", "Share or send anywhere."]] },
  { dir: "editorial", name: "Editorial", category: "Design studio", brand: "Atelier North", pill: "Now booking projects for spring", title: "We design quiet brands for loud markets.", lede: "Identity, packaging and websites for independent companies that would rather be remembered than noticed.", primary: "Start a project", secondary: "Selected work", steps: [["Listen", "Two weeks inside your business."], ["Shape", "One clear idea, many expressions."], ["Launch", "Everything ready to use."]] },
  { dir: "warm-organic", name: "Warm organic", category: "Bakery", brand: "Crumb & Co.", pill: "Open daily from 7am", title: "Sourdough, baked before you wake.", lede: "Slow-fermented loaves and pastries from a small oven on Mill Lane. Order ahead or drop by.", primary: "Order for pickup", secondary: "See the menu", steps: [["Mix", "Flour from a local mill."], ["Rest", "Thirty-six hours of fermentation."], ["Bake", "Out of the oven at 6am."]], note: "Needs real photography of bread and the shop." },
  { dir: "luxury", name: "Luxury refined", category: "Jewellery", brand: "MAISON VALE", pill: "The Heirloom Collection", title: "Fine jewellery, made to be inherited.", lede: "Recycled gold and ethically sourced stones, set by hand in our Paris atelier.", primary: "Book an appointment", secondary: "Explore the collection", steps: [["Design", "Drawn by hand."], ["Craft", "Set in our atelier."], ["Keep", "Lifetime care included."]], note: "Needs editorial photography." },
  { dir: "bold", name: "Bold expressive", category: "Festival", brand: "NORTHERN LIGHTS", pill: "14–16 August · Riverside Park", title: "Three nights. Forty acts. One city.", lede: "Weekend passes on sale now. Day tickets from Friday.", primary: "Get tickets", secondary: "See the lineup", steps: [["Friday", "Electronic and late sets."], ["Saturday", "Headliners on two stages."], ["Sunday", "Daytime and family stage."]] },
  { dir: "playful", name: "Playful", category: "Kids app", brand: "Doodlebug", pill: "Ages 4 to 8", title: "Little stories, big imaginations.", lede: "Kids draw a character and Doodlebug turns it into a bedtime story they can read along with.", primary: "Download free", secondary: "For parents", steps: [["Draw", "Any character, any style."], ["Listen", "A new story each night."], ["Read", "Words light up as they read."]] },
  { dir: "brutalist", name: "Brutalist raw", category: "Indie studio", brand: "INDEX/STUDIO", pill: "Est. 2019 · two people", title: "Software, sites and other experiments.", lede: "We build tools for ourselves and sometimes for you. Everything we ship is listed below.", primary: "Index", secondary: "Contact", steps: [["Tools", "Things we use daily."], ["Client sites", "Kept simple and fast."], ["Experiments", "Some of them broken."]] },
  { dir: "retro", name: "Retro nostalgic", category: "Record shop", brand: "Side B Records", pill: "New arrivals every Thursday", title: "Second-hand vinyl, first-hand stories.", lede: "Crates of soul, jazz and the odd oddity, graded honestly and played before they are priced.", primary: "Browse the crates", secondary: "Sell your records", steps: [["Dig", "Thousands of records in store."], ["Listen", "Every record played first."], ["Trade", "Fair prices for collections."]] },
  { dir: "trust", name: "Trust and clarity", category: "Clinic", brand: "Harbor Health", pill: "Accepting new patients", title: "Same-week appointments with a family doctor.", lede: "Book online, see a doctor who knows your history, and get results explained in plain language.", primary: "Book an appointment", secondary: "Check your insurance", steps: [["Book", "Choose a time online."], ["Visit", "In person or video."], ["Follow up", "Results within two days."]] },
  { dir: "cinematic", name: "Cinematic immersive", category: "Mountain lodges", brand: "ALTITUDE", pill: "Winter season opens 1 December", title: "Sleep above the clouds.", lede: "Six cabins at 2,100 metres, reached by a ten-minute cable car.", primary: "Check availability", secondary: "The cabins", steps: [["Arrive", "Cable car from the village."], ["Stay", "Six cabins, wood-fired."], ["Wake", "Above the cloud line."]], note: "Needs real landscape photography or video; gradient shown as a stand-in." },
  { dir: "commerce", name: "Commerce catalog", category: "DTC product", brand: "Kettle One", pill: "Free shipping over £50", title: "The kettle that holds 80° for an hour.", lede: "Set the exact temperature for green tea or pour-over and keep it there.", primary: "Add to cart · £129", secondary: "Compare models", steps: [["Set", "Choose 40° to 100°."], ["Hold", "Keeps temperature for 60 min."], ["Pour", "Gooseneck spout for control."]], note: "Needs consistent product photography." },
];
export default function Directions() {
  return (
    <div className="dg">
      <header className="dg-top">
        <Link href="/#examples">
          <ArrowLeft size={14} /> Glyph
        </Link>
        <span>Glyph starter kit · one structure, thirteen style directions · fictional brands</span>
        <a href="#index">Index</a>
      </header>
      <section className="dg-intro" id="index">
        <h1>One kit, thirteen directions.</h1>
        <p>
          The same <code>assets/starter.css</code> from the Glyph skill, switched with one{" "}
          <code>data-direction</code> attribute and the fonts each direction names. Content follows
          the category playbook; imagery-led directions note what real assets they need.
        </p>
        <nav aria-label="Directions">
          {rows.map((r) => (
            <a key={r.name} href={`#${r.dir || "clean"}`}>
              {r.name} <small>{r.category}</small>
            </a>
          ))}
        </nav>
      </section>
      {rows.map((r) => (
        <section key={r.name} id={r.dir || "clean"} className="dg-row">
          <div className="dg-label">
            <b>{r.name}</b>
            <span>
              {r.category} · <code>{r.dir ? `data-direction="${r.dir}"` : "default"}</code>
            </span>
            {r.note && <em>{r.note}</em>}
          </div>
          <div className={`g dg-sample ${r.dir === "cinematic" ? "dg-cine" : ""}`} data-direction={r.dir || undefined}>
            <div className="dg-bar">
              <span className="g-logo">{r.brand}</span>
              <a className="g-btn g-btn-primary g-btn-sm" href={`#${r.dir || "clean"}`}>
                {r.primary}
              </a>
            </div>
            <div className="g-hero dg-hero">
              <div className="g-wrap">
                <span className="g-pill">
                  <b>●</b> {r.pill}
                </span>
                <h2 className="g-display">{r.title}</h2>
                <p className="g-lede">{r.lede}</p>
                <div className="g-actions">
                  <a className="g-btn g-btn-primary g-btn-lg" href={`#${r.dir || "clean"}`}>
                    {r.primary}
                  </a>
                  <a className="g-btn g-btn-secondary g-btn-lg" href={`#${r.dir || "clean"}`}>
                    {r.secondary} <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            </div>
            <div className="g-wrap dg-steps">
              <ol className="g-steps">
                {r.steps.map(([t, d], i) => (
                  <li key={t}>
                    <span>{i + 1}</span>
                    <h3>{t}</h3>
                    <p>{d}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
