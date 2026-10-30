"use client";
import { useState } from "react";
type Level = "Beginner" | "Returning";
const classes: { name: string; level: Level; when: string; weeks: string; price: string; seats: number }[] = [
  { name: "First forms on the wheel", level: "Beginner", when: "Saturdays · 10:00–12:30", weeks: "4 weeks", price: "$220", seats: 3 },
  { name: "Hand-building basics", level: "Beginner", when: "Tuesdays · 18:30–21:00", weeks: "4 weeks", price: "$190", seats: 0 },
  { name: "Try the wheel", level: "Beginner", when: "Sunday 14 Apr · 14:00", weeks: "One evening", price: "$65", seats: 5 },
  { name: "Lidded jars & teapots", level: "Returning", when: "Thursdays · 18:30–21:00", weeks: "6 weeks", price: "$310", seats: 2 },
];
export function ClassList() {
  const [level, setLevel] = useState<"All" | Level>("Beginner");
  const [held, setHeld] = useState<string | null>(null);
  const shown = classes.filter((c) => level === "All" || c.level === level);
  return (
    <div className="mc-classes">
      <div className="mc-filter" role="group" aria-label="Filter by level">
        {(["Beginner", "Returning", "All"] as const).map((l) => (
          <button key={l} aria-pressed={level === l} onClick={() => setLevel(l)}>
            {l === "All" ? "All classes" : l}
          </button>
        ))}
      </div>
      <ul>
        {shown.map((c) => (
          <li key={c.name} className="mc-class">
            <div>
              <span className="mc-level">{c.level}</span>
              <h3>{c.name}</h3>
              <p>
                {c.when} · {c.weeks}
              </p>
            </div>
            <div className="mc-class-side">
              <strong>{c.price}</strong>
              <span className={c.seats ? "" : "is-full"}>
                {c.seats ? `${c.seats} seats left` : "Full · waitlist open"}
              </span>
              <button
                className={c.seats ? "mc-btn" : "mc-btn mc-btn-quiet"}
                onClick={() => setHeld(c.name)}
              >
                {c.seats ? "Reserve a seat" : "Join waitlist"}
              </button>
            </div>
            {held === c.name && (
              <p className="mc-confirm" role="status">
                {c.seats
                  ? "In the real studio this would hold your seat for 10 minutes while you check out."
                  : "In the real studio we would email you when a seat opens."}{" "}
                This is an example, so nothing was booked.
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
