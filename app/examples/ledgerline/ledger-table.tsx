"use client";
import { useState } from "react";
const rows = [
  ["Mar 28", "Stripe payout #4471", "Operating", "12,480.00", "matched"],
  ["Mar 28", "AWS invoice 88-1932", "Hosting", "−3,912.44", "matched"],
  ["Mar 27", "Wire · Halden & Co.", "Receivables", "18,000.00", "exception", "Differs from invoice by 250.00"],
  ["Mar 27", "Payroll · Gusto batch", "Salaries", "−41,206.18", "matched"],
  ["Mar 26", "Card · Figma annual", "Software", "−1,440.00", "exception", "No receipt attached"],
  ["Mar 26", "Refund · Order 20931", "Revenue", "−89.00", "matched"],
  ["Mar 25", "Transfer to reserve", "Reserve", "−25,000.00", "exception", "Missing approval"],
];
export function LedgerTable() {
  const [only, setOnly] = useState(false);
  const shown = only ? rows.filter((r) => r[4] === "exception") : rows;
  return (
    <div className="ll-main">
      <div className="ll-main-head">
        <div>
          <h4>March close</h4>
          <span>Day 3 of 5 · sample data</span>
        </div>
        <div className="ll-seg" role="group" aria-label="Filter transactions">
          <button aria-pressed={!only} onClick={() => setOnly(false)}>
            All
          </button>
          <button aria-pressed={only} onClick={() => setOnly(true)}>
            Exceptions
          </button>
        </div>
      </div>
      <dl className="ll-stats">
        <div>
          <dt>Matched</dt>
          <dd>1,284</dd>
        </div>
        <div>
          <dt>Needs review</dt>
          <dd className="is-warn">17</dd>
        </div>
        <div>
          <dt>Unreconciled</dt>
          <dd>$44,440.00</dd>
        </div>
        <div>
          <dt>Close progress</dt>
          <dd>
            86%
            <i className="ll-bar">
              <b style={{ width: "86%" }} />
            </i>
          </dd>
        </div>
      </dl>
      <span className="sr-only" role="status">
        {shown.length} transactions shown
      </span>
      <div className="ll-table-wrap" tabIndex={0} aria-label="Transactions">
        <table className="ll-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Account</th>
              <th className="num">Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {shown.map(([date, desc, acct, amt, status, why]) => (
              <tr key={desc}>
                <td className="muted">{date}</td>
                <td>
                  {desc}
                  {why && <small>{why}</small>}
                </td>
                <td className="muted">{acct}</td>
                <td className="num">{amt}</td>
                <td>
                  <span className={`ll-status ${status}`}>
                    <i />
                    {status === "matched" ? "Matched" : "Review"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
