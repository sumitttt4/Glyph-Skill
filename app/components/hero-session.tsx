"use client";
import { useEffect, useState } from "react";
import { RotateCcw } from "lucide-react";
const steps = [
  { kind: "read", text: "SKILL.md", note: "workflow and routing" },
  { kind: "load", text: "direction-composition-assets.md", note: "choose" },
  { kind: "load", text: "layout-rules.md · core-color-rules.md", note: "compose" },
  { kind: "decide", text: "3 compositions compared", note: "exceptions-first queue" },
  { kind: "build", text: "queue, empty, error and loading states", note: "build" },
  { kind: "verify", text: "keyboard · 320px reflow · contrast", note: "1 risk reported" },
];
const queue = [
  ["DLV–1042", "Address needs checking", "Review"],
  ["DLV–1048", "Delivery rescheduled", "Waiting"],
  ["DLV–1051", "Ready for dispatch", "Ready"],
];
export function HeroSession() {
  const [shown, setShown] = useState(steps.length + 1);
  const [run, setRun] = useState(0);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(steps.length + 1);
      return;
    }
    setShown(0);
    let n = 0;
    const id = setInterval(() => {
      n += 1;
      setShown(n);
      if (n > steps.length) clearInterval(id);
    }, 620);
    return () => clearInterval(id);
  }, [run]);
  const done = shown > steps.length;
  return (
    <figure className="session" aria-label="Illustrative Glyph session">
      <div className="session-bar">
        <span className="session-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span>assistant session</span>
        <button
          className="session-replay"
          onClick={() => setRun((r) => r + 1)}
          disabled={!done}
          aria-label="Replay session"
        >
          <RotateCcw size={13} />
        </button>
      </div>
      <div className="session-body">
        <p className="session-prompt">
          <span aria-hidden="true">›</span> Use Glyph to design a dispatch
          dashboard. The team needs to find the next delivery that needs
          attention.
        </p>
        <ol className="session-steps">
          {steps.map((s, i) => (
            <li key={s.text} className={i < shown ? "is-on" : ""} data-kind={s.kind}>
              <b>{s.kind}</b>
              <span>{s.text}</span>
              <small>{s.note}</small>
            </li>
          ))}
        </ol>
        <div className={`session-output ${done ? "is-on" : ""}`}>
          <div className="session-output-head">
            <strong>Today’s attention</strong>
            <span>3 need a decision</span>
          </div>
          {queue.map(([id, desc, status]) => (
            <div className="session-row" key={id}>
              <span>
                <b>{id}</b> {desc}
              </span>
              <em data-status={status}>{status}</em>
            </div>
          ))}
        </div>
      </div>
      <figcaption>Illustrative session, not a recorded model run.</figcaption>
    </figure>
  );
}
