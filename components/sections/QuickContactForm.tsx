"use client";

import { useState } from "react";

import { ArrowRightIcon, CheckIcon } from "@/components/ui/icons";

const needs = [
  "Startup MVP",
  "Web application",
  "Mobile app",
  "CRM / ERP system",
  "SaaS product",
  "AI & automation",
  "Something else",
] as const;

const fieldClass =
  "h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[var(--primary)] focus:ring-4 focus:ring-sky-100";

export function QuickContactForm() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);
    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: String(data.get("fullName") ?? ""),
          email: String(data.get("email") ?? ""),
          subject: `Homepage enquiry: ${String(data.get("need") ?? "")}`,
          message: String(data.get("message") ?? ""),
        }),
      });
      if (res.ok) {
        form.reset();
        setSent(true);
        return;
      }
      const { error: message } = await res.json().catch(() => ({}));
      setError(message ?? "Something went wrong. Please try again.");
    } catch {
      setError("Couldn't send your message. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl bg-white p-8 text-center shadow-[0_30px_60px_rgba(0,0,0,0.3)]">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
          <CheckIcon className="h-7 w-7 text-emerald-600" />
        </span>
        <h3 className="mt-5 text-xl font-bold">Thanks, we&apos;ve got your message</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">We&apos;ll review your project and get back to you by email.</p>
        <button type="button" onClick={() => setSent(false)} className="mt-6 text-sm font-semibold text-[var(--primary)]">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-6 shadow-[0_30px_60px_rgba(0,0,0,0.3)] sm:p-8">
      <h3 className="text-xl font-bold">Get a free project estimate</h3>
      <p className="mt-1 text-sm text-slate-500">Takes less than a minute.</p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <label className="sr-only" htmlFor="qc-name">
          Your name
        </label>
        <input id="qc-name" name="fullName" required maxLength={100} placeholder="Your name" className={fieldClass} />
        <label className="sr-only" htmlFor="qc-email">
          Work email
        </label>
        <input id="qc-email" name="email" type="email" required maxLength={254} placeholder="Work email" className={fieldClass} />
      </div>

      <label className="sr-only" htmlFor="qc-need">
        What do you need?
      </label>
      <select id="qc-need" name="need" required defaultValue="" className={`${fieldClass} mt-3 text-slate-700`}>
        <option value="" disabled>
          What do you need?
        </option>
        {needs.map((need) => (
          <option key={need} value={need}>
            {need}
          </option>
        ))}
      </select>

      <label className="sr-only" htmlFor="qc-message">
        Tell us about your project
      </label>
      <textarea
        id="qc-message"
        name="message"
        required
        maxLength={5000}
        rows={3}
        placeholder="Tell us briefly about your project or idea"
        className={`${fieldClass} mt-3 h-auto resize-none py-3`}
      />

      {error ? <p className="mt-3 text-sm text-rose-600">{error}</p> : null}

      <button
        type="submit"
        disabled={loading}
        className="group mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[var(--navy)] text-sm font-semibold text-white transition hover:bg-[var(--primary)] disabled:opacity-60"
      >
        {loading ? "Sending…" : "Send my enquiry"}
        {!loading ? <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /> : null}
      </button>
      <p className="mt-3 text-center text-xs text-slate-400">No obligation. We never share your details.</p>
    </form>
  );
}
