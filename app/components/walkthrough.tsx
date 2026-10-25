"use client";
import { useState } from "react";
import { ArrowDown, ArrowRight, Check, SlidersHorizontal } from "lucide-react";
const scenarios = [
  {
    id: "dashboard",
    label: "Dashboard",
    brief:
      "Help a small operations team decide which delivery needs attention next.",
    decision:
      "Lead with the exception queue, not four decorative KPI cards. Use color for urgency, with explicit labels.",
    title: "Today's attention",
    sub: "Sample dispatch queue · illustrative data",
    items: [
      ["DLV–1042", "Address needs checking", "Review"],
      ["DLV–1048", "Delivery rescheduled", "Waiting"],
      ["DLV–1051", "Ready for dispatch", "Ready"],
    ],
  },
  {
    id: "landing",
    label: "Product landing",
    brief:
      "Introduce a neighborhood ceramics workshop. Help a first-time visitor choose a class.",
    decision:
      "Lead with the hands-on experience and the next available class. Let expressive typography carry warmth; make booking practical.",
    title: "Make something worth keeping.",
    sub: "Illustrative ceramics workshop · sample sessions",
    items: [
      ["First forms", "Saturday · 10:00", "Beginner"],
      ["Wheel practice", "Sunday · 14:00", "All levels"],
      ["Glazing studio", "Wednesday · 18:00", "Returning"],
    ],
  },
  {
    id: "portfolio",
    label: "Portfolio",
    brief:
      "Help a hiring manager understand a frontend engineer's contribution, quickly.",
    decision:
      "Put selected work and specific contributions first. Use a readable project index; avoid a greeting that delays the evidence.",
    title: "Interfaces, built with care.",
    sub: "Illustrative portfolio · fictional projects",
    items: [
      ["01 / Fieldwork", "Frontend architecture & interaction", "Case study"],
      ["02 / Almanac", "Accessible reading experience", "Case study"],
      ["03 / Relay", "Data-table performance", "Case study"],
    ],
  },
];
export function Walkthrough() {
  const [selected, setSelected] = useState("dashboard");
  const d = scenarios.find((x) => x.id === selected)!;
  return (
    <div className="workbench">
      <div className="workbench-bar">
        <span>
          <i />
          The design workbench
        </span>
        <span>Illustrative walkthrough</span>
      </div>
      <div
        className="scenario-controls"
        role="group"
        aria-label="Choose interface example"
      >
        {scenarios.map((x) => (
          <button
            key={x.id}
            aria-pressed={selected === x.id}
            onClick={() => setSelected(x.id)}
          >
            {x.label}
          </button>
        ))}
      </div>
      <div className="workbench-grid">
        <div className="decision-column">
          <div>
            <span className="eyebrow">01 / The brief</span>
            <p>{d.brief}</p>
          </div>
          <ArrowDown size={20} />
          <div>
            <span className="eyebrow">02 / The decisions</span>
            <p>{d.decision}</p>
          </div>
          <small>
            <Check size={15} /> Composition before components
          </small>
        </div>
        <div className={`example-ui example-${selected}`}>
          <div className="example-toolbar">
            <span className="eyebrow">03 / The composition</span>
            <SlidersHorizontal size={17} />
          </div>
          <h3>{d.title}</h3>
          <p className="example-sub">{d.sub}</p>
          <div className="example-list">
            {d.items.map(([name, desc, status]) => (
              <div className="example-row" key={name}>
                <div>
                  <strong>{name}</strong>
                  <span>{desc}</span>
                </div>
                <span className="example-status">{status}</span>
              </div>
            ))}
          </div>
          <div className="example-caption">
            Structure and sample content only <ArrowRight size={15} />
          </div>
        </div>
      </div>
      <p className="workbench-disclaimer">
        Handcrafted to explain the process. These are not measured model outputs
        or a measured quality comparison.
      </p>
    </div>
  );
}
