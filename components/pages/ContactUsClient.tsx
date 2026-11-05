"use client";

import { useState } from "react";

import { ArrowRightIcon, CheckIcon } from "@/components/ui/icons";

const services = [
  "Startup MVP",
  "Web application",
  "Mobile app",
  "CRM / ERP system",
  "SaaS product",
  "AI & automation",
  "Something else",
] as const;

const budgets = ["Under $5k", "$5k – $15k", "$15k – $50k", "$50k+", "Not sure yet"] as const;
const timelines = ["As soon as possible", "Within 1–3 months", "In 3–6 months", "Flexible"] as const;

const fieldClass =
  "h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[var(--primary)] focus:ring-4 focus:ring-sky-100";
const labelClass = "mb-1.5 block text-xs font-semibold text-slate-600";

function ChoiceGroup({ name, label, options }: { name: string; label: string; options: readonly string[] }) {
  return (
    <fieldset>
      <legend className={labelClass}>{label}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <label key={option} className="cursor-pointer">
            <input type="radio" name={name} value={option} className="peer sr-only" />
            <span className="inline-flex rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-600 transition peer-checked:border-[var(--navy)] peer-checked:bg-[var(--navy)] peer-checked:text-white peer-focus-visible:ring-4 peer-focus-visible:ring-sky-100 hover:border-slate-300">
              {option}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function ContactUsForm() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const value = (key: string) => String(formData.get(key) ?? "");

    try {
      const res = await fetch("/api/contact-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: value("fullName"),
          companyName: value("companyName"),
          email: value("email"),
          phone: value("phone"),
          service: value("service"),
          budget: value("budget"),
          timeline: value("timeline"),
          message: value("message"),
        }),
      });
      if (res.ok) {
        form.reset();
        setSent(true);
        return;
      }
      const { error: message } = await res.json().catch(() => ({}));
      setError(message ?? "Submission failed. Please try again.");
    } catch {
      setError("Couldn't send your message. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div className="flex min-h-[520px] flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-[0_30px_60px_rgba(2,16,36,0.08)]">
        <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
          <CheckIcon className="h-8 w-8 text-emerald-600" />
        </span>
        <h2 className="mt-6 text-2xl font-bold">Thank you, your enquiry is in</h2>
        <p className="mt-3 max-w-sm text-[15px] leading-7 text-slate-600">
          We&apos;ll review your project and reply by email with next steps and a time to talk.
        </p>
        <button type="button" onClick={() => setSent(false)} className="mt-8 text-sm font-semibold text-[var(--primary)]">
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-labelledby="contact-form-heading"
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_30px_60px_rgba(2,16,36,0.08)] sm:p-9"
    >
      <h2 id="contact-form-heading" className="text-2xl font-bold">
        Tell us about your project
      </h2>
      <p className="mt-1.5 text-sm text-slate-500">The more you share, the more useful our first reply will be.</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="c-name" className={labelClass}>
            Full name *
          </label>
          <input id="c-name" name="fullName" required maxLength={100} placeholder="Jane Smith" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="c-company" className={labelClass}>
            Company
          </label>
          <input id="c-company" name="companyName" maxLength={150} placeholder="Company name" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="c-email" className={labelClass}>
            Email *
          </label>
          <input id="c-email" name="email" type="email" required maxLength={254} placeholder="you@company.com" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="c-phone" className={labelClass}>
            Phone
          </label>
          <input id="c-phone" name="phone" type="tel" maxLength={30} placeholder="+1 555 000 0000" className={fieldClass} />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="c-service" className={labelClass}>
          What do you need? *
        </label>
        <select id="c-service" name="service" required defaultValue="" className={`${fieldClass} text-slate-700`}>
          <option value="" disabled>
            Select a service
          </option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5 grid gap-5">
        <ChoiceGroup name="budget" label="Estimated budget" options={budgets} />
        <ChoiceGroup name="timeline" label="When do you want to start?" options={timelines} />
      </div>

      <div className="mt-5">
        <label htmlFor="c-message" className={labelClass}>
          Project details *
        </label>
        <textarea
          id="c-message"
          name="message"
          required
          maxLength={5000}
          rows={5}
          placeholder="What are you building, who is it for, and what problem should it solve?"
          className={`${fieldClass} h-auto resize-y py-3`}
        />
      </div>

      <label className="mt-5 flex items-start gap-3 text-sm text-slate-600">
        <input type="checkbox" name="consent" required className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 accent-[var(--primary)]" />
        I agree to Oryen Solutions contacting me about this enquiry.
      </label>

      {error ? <p className="mt-4 text-sm text-rose-600">{error}</p> : null}

      <button
        type="submit"
        disabled={loading}
        className="group mt-7 inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-[var(--navy)] py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--primary)] disabled:opacity-60 sm:w-auto sm:px-8"
      >
        {loading ? "Sending…" : "Send enquiry"}
        {!loading ? <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /> : null}
      </button>
    </form>
  );
}
