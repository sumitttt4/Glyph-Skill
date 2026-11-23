"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  BarChart3,
  Inbox,
  Map,
  Menu,
  Moon,
  Package,
  Search,
  Settings,
  Sun,
  Truck,
  Users,
} from "lucide-react";

type Status = "late" | "at-risk" | "on-time" | "delivered";
type Stop = {
  id: string;
  customer: string;
  area: string;
  driver: string;
  due: string;
  eta: string;
  status: Status;
  reason?: string;
};
// Fictional sample data.
const initial: Stop[] = [
  { id: "RL-4821", customer: "Hartley Pharmacy", area: "Riverside", driver: "Amara O.", due: "11:30", eta: "12:05", status: "late", reason: "Van stuck on ring road" },
  { id: "RL-4825", customer: "Okafor & Sons Bakery", area: "Old Town", driver: "Amara O.", due: "11:45", eta: "12:20", status: "late", reason: "Same van, knock-on delay" },
  { id: "RL-4830", customer: "Mendel Dental", area: "North Quay", driver: "Tomás R.", due: "12:00", eta: "12:12", status: "at-risk", reason: "Loading bay closed" },
  { id: "RL-4833", customer: "Pine Street Library", area: "Riverside", driver: "Jun W.", due: "12:15", eta: "12:24", status: "at-risk", reason: "Traffic on Bridge St" },
  { id: "RL-4836", customer: "Lark Florists", area: "Hillcrest", driver: "Priya S.", due: "12:30", eta: "12:18", status: "on-time" },
  { id: "RL-4840", customer: "Northwind Clinic", area: "North Quay", driver: "Tomás R.", due: "12:45", eta: "12:40", status: "on-time" },
  { id: "RL-4842", customer: "Café Aurelio", area: "Old Town", driver: "Jun W.", due: "13:00", eta: "12:51", status: "on-time" },
  { id: "RL-4817", customer: "Brightside Optics", area: "Hillcrest", driver: "Priya S.", due: "11:00", eta: "10:56", status: "delivered" },
];
const drivers = ["Amara O.", "Tomás R.", "Jun W.", "Priya S.", "Leah K."];
const tone: Record<Status, string> = {
  late: "danger",
  "at-risk": "warning",
  "on-time": "info",
  delivered: "success",
};
const label: Record<Status, string> = {
  late: "Late",
  "at-risk": "At risk",
  "on-time": "On time",
  delivered: "Delivered",
};
const filters = [
  ["attention", "Needs attention"],
  ["all", "All stops"],
  ["delivered", "Delivered"],
] as const;
const nav = [
  [Inbox, "Queue", true],
  [Map, "Live map", false],
  [Truck, "Drivers", false],
  [Package, "Parcels", false],
  [BarChart3, "Reports", false],
] as const;

// Late stops at this time yesterday (sample data), for the KPI comparison.
const lateYesterday = 1;
function Delta({ now, before }: { now: number; before: number }) {
  const d = now - before;
  if (!d) return <div className="g-delta">Same as this time yesterday</div>;
  return (
    <div className="g-delta" data-trend={d > 0 ? "bad" : "good"}>
      {d > 0 ? "↑" : "↓"} {Math.abs(d)} vs this time yesterday
    </div>
  );
}

export function Console() {
  const [stops, setStops] = useState(initial);
  const [filter, setFilter] = useState<(typeof filters)[number][0]>("attention");
  const [query, setQuery] = useState("");
  const [density, setDensity] = useState<"default" | "compact">("default");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [drawer, setDrawer] = useState(false);
  const [toast, setToast] = useState<{ text: string; undo: Stop[] } | null>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const sidebar = useRef<HTMLElement>(null);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return stops.filter((s) => {
      const inFilter =
        filter === "all" ||
        (filter === "delivered" ? s.status === "delivered" : s.status === "late" || s.status === "at-risk");
      const match = !q || `${s.id} ${s.customer} ${s.area} ${s.driver}`.toLowerCase().includes(q);
      return inFilter && match;
    });
  }, [stops, filter, query]);
  const count = (st: Status[]) => stops.filter((s) => st.includes(s.status)).length;
  const attention = count(["late", "at-risk"]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 6000);
    return () => clearTimeout(t);
  }, [toast]);

  useEffect(() => {
    if (!drawer) return;
    const first = sidebar.current?.querySelector<HTMLElement>("a, button");
    first?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setDrawer(false);
        menuButton.current?.focus();
      }
    }
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [drawer]);

  function reassign(stop: Stop, driver: string) {
    if (!driver || driver === stop.driver) return;
    setToast({ text: `${stop.id} reassigned to ${driver}`, undo: stops });
    setStops((all) =>
      all.map((s) =>
        s.id === stop.id ? { ...s, driver, status: "at-risk", reason: `Reassigned from ${stop.driver}` } : s,
      ),
    );
  }

  return (
    <div className="g g-app relay" data-density={density} data-theme={theme}>
      <nav
        ref={sidebar}
        className="g-sidebar"
        aria-label="Main"
        id="relay-nav"
        data-open={drawer}
      >
        <div className="relay-brand">
          <span aria-hidden="true">R</span> Relay
          <small>Sample data</small>
        </div>
        <span className="g-sidebar-label">Dispatch</span>
        {nav.map(([Icon, name, current]) => (
          <a
            key={name}
            className="g-nav-item"
            href="#queue"
            aria-current={current ? "page" : undefined}
            onClick={() => setDrawer(false)}
          >
            <Icon aria-hidden="true" /> {name}
            {current && <span className="g-badge relay-count" data-tone="danger">{attention}</span>}
          </a>
        ))}
        <span className="g-sidebar-label">Team</span>
        <a className="g-nav-item" href="#queue" onClick={() => setDrawer(false)}>
          <Users aria-hidden="true" /> Shifts
        </a>
        <a className="g-nav-item" href="#queue" onClick={() => setDrawer(false)}>
          <Settings aria-hidden="true" /> Settings
        </a>
      </nav>
      {drawer && <div className="relay-scrim" onClick={() => setDrawer(false)} aria-hidden="true" />}
      <header className="g-topbar">
        <button
          ref={menuButton}
          className="g-btn g-btn-ghost relay-menu"
          aria-label="Open navigation"
          aria-expanded={drawer}
          aria-controls="relay-nav"
          onClick={() => setDrawer(true)}
        >
          <Menu size={16} aria-hidden="true" />
        </button>
        <span className="g-topbar-title">Queue</span>
        <div className="g-topbar-actions">
          <button
            className="g-btn g-btn-ghost"
            aria-pressed={density === "compact"}
            onClick={() => setDensity(density === "compact" ? "default" : "compact")}
          >
            Compact
          </button>
          <button
            className="g-btn g-btn-ghost"
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
          </button>
        </div>
      </header>
      <main className="g-main" id="queue">
        <div className="g-page-head">
          <div>
            <h1>{attention ? `${attention} deliveries need attention` : "Everything is on time"}</h1>
            <p>Same-day route, Riverside depot · updated 11:52</p>
          </div>
        </div>
        <div className="g-kpis relay-kpis">
          <div className="g-kpi">
            <div className="g-kpi-label">Late now</div>
            <div className="g-kpi-value">{count(["late"])}</div>
            <Delta now={count(["late"])} before={lateYesterday} />
          </div>
          <div className="g-kpi">
            <div className="g-kpi-label">On-time rate today</div>
            <div className="g-kpi-value">94.2%</div>
            <div className="g-delta" data-trend="good">↑ 1.8 pts vs last Monday</div>
          </div>
          <div className="g-kpi">
            <div className="g-kpi-label">Stops left</div>
            <div className="g-kpi-value">{stops.length - count(["delivered"])}</div>
            <div className="g-delta">of {stops.length} on this route</div>
          </div>
        </div>
        <div className="relay-toolbar">
          <div className="g-tabs" role="group" aria-label="Filter stops">
            {filters.map(([key, name]) => (
              <button
                key={key}
                className="g-tab"
                aria-pressed={filter === key}
                aria-controls="relay-table"
                onClick={() => setFilter(key)}
              >
                {name}
              </button>
            ))}
          </div>
          <label className="relay-search">
            <Search size={15} aria-hidden="true" />
            <span className="relay-sr">Search stops</span>
            <input
              className="g-input"
              type="search"
              placeholder="Customer, area or driver"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
        </div>
        <p className="relay-sr" role="status">
          {visible.length} {visible.length === 1 ? "stop" : "stops"} shown
        </p>
        <div className="g-table-wrap" id="relay-table" role="region" aria-label="Stops" tabIndex={0}>
          {visible.length ? (
            <table className="g-table" data-stack>
              <thead>
                <tr>
                  <th scope="col">Stop</th>
                  <th scope="col">Status</th>
                  <th scope="col" className="g-num">Due</th>
                  <th scope="col" className="g-num">ETA</th>
                  <th scope="col">Driver</th>
                </tr>
              </thead>
              <tbody>
                {visible.map((s) => (
                  <tr key={s.id}>
                    <td>
                      <div className="relay-stop">
                        <strong>{s.customer}</strong>
                        <span>
                          {s.id} · {s.area}
                          {s.reason ? ` · ${s.reason}` : ""}
                        </span>
                      </div>
                    </td>
                    <td>
                      <span className="g-badge" data-tone={tone[s.status]}>{label[s.status]}</span>
                    </td>
                    <td className="g-num" data-label="Due">{s.due}</td>
                    <td className="g-num" data-label="ETA">{s.eta}</td>
                    <td data-label="Driver" className="relay-driver-cell">
                      {s.status === "delivered" ? (
                        s.driver
                      ) : (
                        <select
                          className="g-select relay-driver"
                          aria-label={`Driver for ${s.customer}`}
                          value={s.driver}
                          onChange={(e) => reassign(s, e.target.value)}
                        >
                          {drivers.map((d) => (
                            <option key={d}>{d}</option>
                          ))}
                        </select>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="g-empty">
              <strong>{query ? `No stops match “${query}”` : "Nothing needs attention"}</strong>
              <p>
                {query
                  ? "Check the spelling, or search by stop ID, area or driver."
                  : "Late and at-risk deliveries will appear here as soon as an ETA slips."}
              </p>
              {query && (
                <button className="g-btn g-btn-secondary" onClick={() => setQuery("")}>
                  Clear search
                </button>
              )}
            </div>
          )}
        </div>
      </main>
      <div aria-live="polite">
        {toast && (
          <div className="g-toast">
            {toast.text}
            <button
              className="relay-undo"
              onClick={() => {
                setStops(toast.undo);
                setToast(null);
              }}
            >
              Undo
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
