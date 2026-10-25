"use client";
import { useEffect, useRef, useState } from "react";
import { Check, Copy, Moon, Sun } from "lucide-react";
export function ThemeControl() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    setDark(document.documentElement.dataset.theme === "dark");
  }, []);
  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    try {
      localStorage.setItem("glyph-theme", next ? "dark" : "light");
    } catch {}
  }
  return (
    <button
      className="theme-toggle"
      aria-label="Dark mode"
      aria-pressed={dark}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggle}
    >
      <span className="toggle-track">
        <span className="toggle-thumb">
          {dark ? <Moon size={12} /> : <Sun size={12} />}
        </span>
      </span>
    </button>
  );
}
export function CopyCode({
  text,
  label = "Terminal",
}: {
  text: string;
  label?: string;
}) {
  const [state, setState] = useState<"idle" | "copied" | "error">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  async function copy() {
    if (timer.current) clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(text);
      setState("copied");
    } catch {
      setState("error");
    }
    timer.current = setTimeout(() => setState("idle"), 4000);
  }
  return (
    <div className="code-block">
      <div className="code-heading">
        <span>{label}</span>
        <button onClick={copy} aria-label={`Copy ${label}`}>
          {state === "copied" ? <Check size={14} /> : <Copy size={14} />}
          <span>{state === "copied" ? "Copied" : "Copy"}</span>
        </button>
      </div>
      <pre tabIndex={0} aria-label={`${label} code`}>
        <code>{text}</code>
      </pre>
      <span className="sr-only" role="status">
        {state === "copied"
          ? "Copied to clipboard"
          : state === "error"
            ? "Copy failed. Select and copy the code manually."
            : ""}
      </span>
      {state === "error" && (
        <p className="copy-error">
          Copy unavailable. Select the command and copy it manually.
        </p>
      )}
    </div>
  );
}
