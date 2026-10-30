"use client";
import { useState } from "react";
export function Waitlist({ id }: { id: string }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "error" | "done">("idle");
  function submit(e: React.FormEvent) {
    e.preventDefault();
    setState(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "done" : "error");
  }
  if (state === "done")
    return (
      <p className="lm-done" role="status">
        You’re on the list. This is an example, so no email was sent.
      </p>
    );
  return (
    <form className="lm-form" onSubmit={submit} noValidate>
      <label htmlFor={id} className="sr-only">
        Email address
      </label>
      <input
        id={id}
        className="k-input"
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        aria-invalid={state === "error"}
        aria-describedby={`${id}-msg`}
      />
      <button className="k-btn k-btn-primary k-btn-lg" type="submit">
        Join the waitlist
      </button>
      <p id={`${id}-msg`} className={state === "error" ? "lm-msg is-error" : "lm-msg"} role="status">
        {state === "error" ? "Enter an email address like name@example.com." : "One email when we launch. No spam."}
      </p>
    </form>
  );
}
