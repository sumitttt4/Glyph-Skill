"use client";
import { useState } from "react";
const rows = [
  ["Mar 28", "Stripe payout #4471", "1010 · Operating", "12,480.00", "matched"],
  ["Mar 28", "AWS invoice 88-1932", "6420 · Hosting", "-3,912.44", "matched"],
  ["Mar 27", "Wire from Halden & Co.", "1200 · Receivables", "18,000.00", "exception", "Amount differs from invoice by 250.00"],
  ["Mar 27", "Payroll · Gusto batch", "6000 · Salaries", "-41,206.18", "matched"],
  ["Mar 26", "Card · Figma annual", "6450 · Software", "-1,440.00", "exception", "No receipt attached"],
  ["Mar 26", "Refund · Order 20931", "4000 · Revenue", "-89.00", "matched"],
  ["Mar 25", "Transfer to savings", "1020 · Reserve", "-25,000.00", "exception", "Missing approval"],
];
export function LedgerTable() {
  const [only, setOnly] = useState(false);
  const shown = only ? rows.filter((r) => r[4] === "exception") : rows;
  return (
    <div className="ll-app" aria-label="Sample Ledgerline close view">
      <div className="ll-app-top">
        <div>
          <strong>March close</strong>
          <span>Day 3 of 5 · sample data</span>
        </div>
        <div className="ll-progress" aria-label="Close progress 86 percent">
          <i style={{ width: "86%" }} />
        </div>
      </div>
      <dl className="ll-stats">
        <div>
          <dt>Matched</dt>
          <dd>1,284</dd>
        </div>
        <div className="is-warn">
          <dt>Exceptions</dt>
          <dd>17</dd>
        </div>
        <div>
          <dt>Unreconciled</dt>
          <dd>$43,440.00</dd>
        </div>
      </dl>
      <div className="ll-toolbar">
        <div role="group" aria-label="Filter transactions" className="ll-seg">
          <button aria-pressed={!only} onClick={() => setOnly(false)}>
            All items
          </button>
          <button aria-pressed={only} onClick={() => setOnly(true)}>
            Exceptions
          </button>
        </div>
        <span role="status">
          {only ? `${shown.length} of 17 exceptions` : `Latest ${shown.length} items`}
        </span>
      </div>
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
              <tr key={desc} className={status === "exception" ? "is-exception" : ""}>
                <td>{date}</td>
                <td>
                  {desc}
                  {why && <small>{why}</small>}
                </td>
                <td>{acct}</td>
                <td className="num">{amt}</td>
                <td>
                  <span className={`ll-pill ${status}`}>
                    {status === "matched" ? "Matched" : "Needs review"}
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
