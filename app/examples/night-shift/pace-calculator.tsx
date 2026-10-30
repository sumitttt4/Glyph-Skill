"use client";
import { useState } from "react";
const START = 21 * 60 + 30;
function parse(v: string) {
  const parts = v.trim().split(":").map(Number);
  if (parts.some((n) => !Number.isInteger(n) || n < 0)) return null;
  const [h, m, s] =
    parts.length === 3 ? parts : parts.length === 2 ? [0, ...parts] : [null, null, null];
  if (h === null || m === null || s === null || m > 59 || s > 59) return null;
  return h * 3600 + m * 60 + s;
}
const pad = (n: number) => String(n).padStart(2, "0");
export function PaceCalculator() {
  const [value, setValue] = useState("55:00");
  const total = parse(value);
  const valid = total !== null && total >= 25 * 60 && total <= 3 * 3600;
  const pace = valid ? Math.round(total / 10) : 0;
  const finish = valid ? START + Math.round(total / 60) : 0;
  return (
    <form className="ns-calc" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="ns-target">Your target 10K time</label>
      <input
        id="ns-target"
        inputMode="numeric"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        aria-describedby="ns-calc-help"
        aria-invalid={!valid}
      />
      <p id="ns-calc-help" className={valid ? "" : "is-error"} role="status">
        {valid
          ? "Type minutes:seconds or hours:minutes:seconds."
          : "Use a time between 25:00 and 3:00:00, like 55:00 or 1:05:30."}
      </p>
      <dl>
        <div>
          <dt>Pace</dt>
          <dd>{valid ? `${Math.floor(pace / 60)}:${pad(pace % 60)}` : "–"}<small>/km</small></dd>
        </div>
        <div>
          <dt>You finish at</dt>
          <dd>{valid ? `${pad(Math.floor(finish / 60) % 24)}:${pad(finish % 60)}` : "–"}</dd>
        </div>
      </dl>
    </form>
  );
}
