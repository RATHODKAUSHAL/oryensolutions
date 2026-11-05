"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import {
  ArrowRightIcon,
  BagIcon,
  BankIcon,
  CarIcon,
  CheckIcon,
  GraduationIcon,
  HeartPulseIcon,
  HomeIcon,
  PlaneIcon,
  TruckIcon,
  UtensilsIcon,
} from "@/components/ui/icons";
import { routes } from "@/lib/site";

const industries = [
  {
    name: "Healthcare",
    tint: "bg-rose-50 text-rose-600",
    short: "Healthcare",
    text: "Easier access for patients, less admin for clinics.",
    solutions: ["Patient portals", "Appointment booking", "Clinic management"],
    icon: HeartPulseIcon,
    tile: "from-rose-400 to-rose-600",
    edge: "#9f1239",
    glow: "bg-rose-400/25",
  },
  {
    name: "Banking & Finance",
    tint: "bg-blue-50 text-blue-600",
    short: "Finance",
    text: "Secure, compliant software for faster approvals.",
    solutions: ["Loan workflows", "KYC onboarding", "Finance dashboards"],
    icon: BankIcon,
    tile: "from-blue-500 to-blue-700",
    edge: "#1e3a8a",
    glow: "bg-blue-500/25",
  },
  {
    name: "Education",
    tint: "bg-violet-50 text-violet-600",
    short: "Education",
    text: "Simpler learning, teaching and administration.",
    solutions: ["Learning platforms", "Student portals", "Fee management"],
    icon: GraduationIcon,
    tile: "from-violet-400 to-violet-600",
    edge: "#5b21b6",
    glow: "bg-violet-400/25",
  },
  {
    name: "Logistics & Supply Chain",
    tint: "bg-orange-50 text-orange-600",
    short: "Logistics",
    text: "Real-time visibility from warehouse to doorstep.",
    solutions: ["Shipment tracking", "Fleet apps", "Warehouse systems"],
    icon: TruckIcon,
    tile: "from-amber-400 to-orange-500",
    edge: "#9a3412",
    glow: "bg-orange-400/25",
  },
  {
    name: "Automotive",
    tint: "bg-slate-100 text-slate-700",
    short: "Automotive",
    text: "Tools for dealers and service centres to sell and serve better.",
    solutions: ["Dealer CRMs", "Service booking", "Inventory tools"],
    icon: CarIcon,
    tile: "from-slate-500 to-slate-700",
    edge: "#1e293b",
    glow: "bg-slate-400/25",
  },
  {
    name: "Retail & Fashion",
    tint: "bg-fuchsia-50 text-fuchsia-600",
    short: "Retail",
    text: "Shopping experiences that build loyal customers.",
    solutions: ["E-commerce stores", "Catalogues", "Loyalty apps"],
    icon: BagIcon,
    tile: "from-pink-400 to-fuchsia-600",
    edge: "#86198f",
    glow: "bg-fuchsia-400/25",
  },
  {
    name: "Travel & Hospitality",
    tint: "bg-sky-50 text-sky-600",
    short: "Travel",
    text: "Seamless booking and guest journeys.",
    solutions: ["Booking engines", "Itinerary apps", "Guest experience"],
    icon: PlaneIcon,
    tile: "from-sky-400 to-sky-600",
    edge: "#075985",
    glow: "bg-sky-400/25",
  },
  {
    name: "Food & Restaurants",
    tint: "bg-red-50 text-red-600",
    short: "Food",
    text: "Ordering and operations that keep the kitchen moving.",
    solutions: ["Online ordering", "POS integrations", "Delivery apps"],
    icon: UtensilsIcon,
    tile: "from-red-400 to-red-600",
    edge: "#991b1b",
    glow: "bg-red-400/25",
  },
  {
    name: "Real Estate",
    tint: "bg-emerald-50 text-emerald-600",
    short: "Real Estate",
    text: "Capture, nurture and convert property leads.",
    solutions: ["Property listings", "Lead CRMs", "Site visit scheduling"],
    icon: HomeIcon,
    tile: "from-emerald-400 to-emerald-600",
    edge: "#065f46",
    glow: "bg-emerald-400/25",
  },
] as const;

export function IndustriesSection() {
  const [active, setActive] = useState(0);
  const current = industries[active];
  const Icon = current.icon;

  return (
    <section id="industries" className="relative scroll-mt-20 overflow-hidden bg-slate-50 py-20 sm:py-24">
      <div className="pointer-events-none absolute -right-40 top-10 h-[420px] w-[420px] rounded-full bg-violet-200/40 blur-[120px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[380px] w-[380px] rounded-full bg-sky-200/50 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-x-16 lg:px-8">
        <div className="lg:col-start-1 lg:row-start-1">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--primary)]">
            <span className="h-px w-6 bg-[var(--primary)]" />
            Industries we serve
          </p>
          <h2 className="mt-4 text-balance text-3xl font-extrabold leading-[1.1] sm:text-4xl lg:text-[2.75rem]">
            Built for <span className="text-gradient-dark">your industry</span>, not a template
          </h2>
          <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-[var(--text-body)] sm:text-lg sm:leading-8">
            Every product is shaped around the way your industry actually works. Pick an industry to see what we build for it.
          </p>
        </div>

        {/* 3×3 industry picker */}
        <div
          role="tablist"
          aria-label="Industries"
          className="grid grid-cols-3 gap-3 sm:gap-4 lg:col-start-2 lg:row-span-2 lg:row-start-1"
        >
          {industries.map((industry, i) => {
            const TileIcon = industry.icon;
            const selected = i === active;
            return (
              <button
                key={industry.name}
                type="button"
                role="tab"
                id={`industry-tab-${i}`}
                aria-selected={selected}
                aria-controls="industry-panel"
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={`group relative flex flex-col items-center justify-center gap-3 rounded-2xl border p-4 text-center transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] sm:p-5 ${
                  selected
                    ? "-translate-y-1 border-transparent bg-white shadow-[0_22px_45px_rgba(2,16,36,0.14)]"
                    : "border-slate-200/80 bg-white/70 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_12px_30px_rgba(2,16,36,0.08)]"
                }`}
              >
                {selected ? (
                  <motion.span
                    layoutId="industry-ring"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br p-px ${industry.tile} [mask:linear-gradient(#000_0_0)_content-box_exclude,linear-gradient(#000_0_0)]`}
                  />
                ) : null}
                <span
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 sm:h-14 sm:w-14 sm:rounded-2xl ${
                    selected ? `scale-110 bg-gradient-to-br text-white ${industry.tile}` : `${industry.tint} group-hover:scale-105`
                  }`}
                  style={selected ? { boxShadow: `inset 0 1px 0 rgba(255,255,255,0.45), 0 5px 0 ${industry.edge}, 0 14px 24px rgba(2,16,36,0.2)` } : undefined}
                >
                  <TileIcon className="h-5 w-5 sm:h-7 sm:w-7" />
                </span>
                <span className={`text-xs font-semibold leading-tight sm:text-sm ${selected ? "text-[var(--navy)]" : "text-slate-600"}`}>
                  {industry.short}
                </span>
              </button>
            );
          })}
        </div>

        <div className="lg:col-start-1 lg:row-start-2">
          {/* Detail card for the selected industry */}
          <div
            id="industry-panel"
            role="tabpanel"
            aria-labelledby={`industry-tab-${active}`}
            className="relative overflow-hidden rounded-3xl bg-[var(--navy)] p-6 shadow-[0_30px_60px_rgba(2,16,36,0.25)] sm:p-8"
          >
            <div className="pointer-events-none absolute inset-0 dark-grid opacity-50" />
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                aria-live="polite"
                className="relative"
              >
                <div className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl ${current.glow}`} />
                <div className="relative flex items-center gap-4">
                  <span
                    className={`inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${current.tile} text-white`}
                    style={{ boxShadow: `inset 0 1px 0 rgba(255,255,255,0.45), 0 5px 0 ${current.edge}, 0 14px 24px rgba(0,0,0,0.4)` }}
                  >
                    <Icon className="h-7 w-7 drop-shadow" />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-white">{current.name}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-300">{current.text}</p>
                  </div>
                </div>
                <p className="relative mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">What we build</p>
                <ul className="relative mt-3 grid gap-2.5 sm:grid-cols-3">
                  {current.solutions.map((solution) => (
                    <li
                      key={solution}
                      className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-3.5 py-3 text-sm font-medium text-slate-100"
                    >
                      <CheckIcon className="h-4 w-4 shrink-0 text-emerald-300" />
                      {solution}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

          <Link
            href={routes.contact}
            className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)]"
          >
            Discuss a project in your industry
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
