"use client";

import { useState } from "react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const benefits = [
  "Real project ownership with direct leadership collaboration",
  "Flexible and outcome-driven work culture",
  "Continuous learning across web, BIM, and automation domains",
  "Competitive compensation and growth-oriented environment",
] as const;

const process = ["Application Review", "Technical Round", "Culture Fit Discussion", "Offer & Onboarding"] as const;

export function CareersClient() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleResumeSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("");
    setLoading(true);
    const form = event.currentTarget;
    const data = new FormData(form);

    const res = await fetch("/api/resume-submit", { method: "POST", body: data });
    setLoading(false);
    if (res.ok) {
      form.reset();
      setStatus("Resume submitted successfully. We will contact you when relevant openings are available.");
      return;
    }
    const { error } = await res.json().catch(() => ({}));
    setStatus(error ?? "Resume submission failed. Please try again.");
  }

  return (
    <main className="min-h-screen bg-white text-[#021024]">
      <Navbar />

      <section className="relative overflow-hidden bg-[#f4f8fd] py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(84,131,179,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(84,131,179,0.1)_1px,transparent_1px)] bg-[size:88px_88px]" />
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex rounded-full border border-[#7DA0CA]/70 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#052659]">
              Careers
            </p>
            <h1 className="mt-5 text-4xl font-bold sm:text-5xl">Why Work With OryenSolutions?</h1>
            <p className="mt-4 text-lg text-slate-600">
              Explore careers at OryenSolutions and connect with a team working across modern web development, BIM automation, and integration engineering.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <section className="rounded-3xl border border-[#7DA0CA]/35 bg-[#f8fcff] p-6 shadow-[0_10px_24px_rgba(84,131,179,0.1)] lg:col-span-2" aria-labelledby="openings-heading">
              <h2 id="openings-heading" className="text-2xl font-bold">Current Openings</h2>
              <div className="mt-6 rounded-2xl border border-[#7DA0CA]/30 bg-white p-6">
                <p className="inline-flex rounded-full bg-[#eaf4fd] px-3 py-1 text-xs font-semibold text-[#052659]">No Active Openings</p>
                <h3 className="mt-4 text-xl font-semibold">We are not hiring at the moment</h3>
                <p className="mt-3 text-slate-600">
                  We currently do not have active job openings. However, we are always interested in hearing from professionals in web development,
                  BIM automation, and software integration.
                </p>
                <p className="mt-3 text-slate-600">Submit your resume below and we will contact you when a relevant role becomes available.</p>

                <form className="mt-5 space-y-3" onSubmit={handleResumeSubmit}>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Input aria-label="Full name" name="fullName" required placeholder="Full Name" className="h-10 rounded-xl border-[#7DA0CA]/40 bg-[#f8fcff]" />
                    <Input aria-label="Email address" name="email" required type="email" placeholder="Email" className="h-10 rounded-xl border-[#7DA0CA]/40 bg-[#f8fcff]" />
                  </div>
                  <Input aria-label="Phone number" name="phone" placeholder="Phone Number" className="h-10 rounded-xl border-[#7DA0CA]/40 bg-[#f8fcff]" />
                  <textarea
                    aria-label="Candidate message"
                    name="message"
                    placeholder="Short message (optional)"
                    className="min-h-24 w-full rounded-xl border border-[#7DA0CA]/40 bg-[#f8fcff] px-3 py-2 text-sm outline-none placeholder:text-slate-400 focus:border-[#5483B3]"
                  />
                  <Input aria-label="Resume upload" name="resume" type="file" required accept=".pdf,.doc,.docx" className="h-10 rounded-xl border-[#7DA0CA]/40 bg-white file:mr-3 file:rounded-md file:border-0 file:bg-[#eaf4fd] file:px-3 file:py-1 file:text-xs file:font-semibold file:text-[#052659]" />
                  <Button disabled={loading} type="submit" className="h-10 rounded-xl bg-[#0077b6] px-5 text-white hover:bg-[#005f92]">
                    {loading ? "Submitting..." : "Send Resume"}
                  </Button>
                  {status && <p className="text-sm text-slate-600">{status}</p>}
                </form>
              </div>
            </section>

            <div className="space-y-6">
              <section className="rounded-3xl border border-[#7DA0CA]/35 bg-white p-6 shadow-[0_10px_24px_rgba(84,131,179,0.1)]" aria-labelledby="benefits-heading">
                <h2 id="benefits-heading" className="text-xl font-semibold">Why Join Us</h2>
                <ul className="mt-4 space-y-3">
                  {benefits.map((item) => (
                    <li key={item} className="rounded-xl border border-[#7DA0CA]/25 bg-[#f8fcff] px-3 py-2 text-sm text-slate-700">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-3xl border border-[#7DA0CA]/35 bg-white p-6 shadow-[0_10px_24px_rgba(84,131,179,0.1)]" aria-labelledby="process-heading">
                <h2 id="process-heading" className="text-xl font-semibold">Hiring Process</h2>
                <ol className="mt-4 space-y-2">
                  {process.map((step, idx) => (
                    <li key={step} className="flex items-center gap-3 rounded-xl border border-[#7DA0CA]/25 bg-[#f8fcff] px-3 py-2 text-sm">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#eaf4fd] text-xs font-bold text-[#052659]">
                        {idx + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
