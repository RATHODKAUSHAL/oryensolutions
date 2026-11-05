"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import {
  ArrowRightIcon,
  BagIcon,
  BankIcon,
  BuildingIcon,
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
    short: "Real Estate",
    text: "Capture, nurture and convert property leads.",
    solutions: ["Property listings", "Lead CRMs", "Site visit scheduling"],
    icon: HomeIcon,
    tile: "from-emerald-400 to-emerald-600",
    edge: "#065f46",
    glow: "bg-emerald-400/25",
  },
  {
    name: "Structural Engineering",
    short: "Engineering",
    text: "Tekla and Revit automation that removes manual detailing work.",
    solutions: ["Tekla plugins", "Drawing automation", "BOM & reports"],
    icon: BuildingIcon,
    tile: "from-cyan-500 to-[#0077b6]",
    edge: "#0c4a6e",
    glow: "bg-cyan-400/25",
  },
] as const;

export function IndustriesSection() {
  const [active, setActive] = useState(0);
  const current = industries[active];
  const Icon = current.icon;

  return (
    <section id="industries" className="scroll-mt-20 bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:gap-x-14 lg:gap-y-8 lg:px-8">
        <div className="lg:col-start-1">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--primary)]">
            <span className="h-px w-6 bg-[var(--primary)]" />
            10+ industries we serve
          </p>
          <h2 className="mt-4 text-balance text-3xl font-extrabold leading-[1.1] sm:text-4xl">
            Built for <span className="text-[var(--primary)]">your industry</span>, not a template
          </h2>
        </div>

        <div role="tablist" aria-label="Industries" className="grid grid-cols-5 gap-2 self-center sm:gap-3 lg:col-start-2 lg:row-span-2 lg:row-start-1">
          {industries.map((industry, i) => {
            const TileIcon = industry.icon;
            const selected = i === active;
            return (
              <button
                key={industry.name}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-label={industry.name}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={`group flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border p-1 text-center transition-all duration-200 sm:gap-3 ${
                  selected
                    ? "-translate-y-1 border-transparent bg-white shadow-[0_18px_40px_rgba(2,16,36,0.14)]"
                    : "border-slate-200 bg-white/60 hover:bg-white"
                }`}
              >
                <span
                  className={`inline-flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-200 sm:h-12 sm:w-12 sm:rounded-2xl ${
                    selected ? `scale-110 bg-gradient-to-br text-white ${industry.tile}` : "bg-slate-200 text-slate-500 group-hover:bg-slate-300"
                  }`}
                  style={selected ? { boxShadow: `inset 0 1px 0 rgba(255,255,255,0.45), 0 4px 0 ${industry.edge}` } : undefined}
                >
                  <TileIcon className="h-[18px] w-[18px] sm:h-6 sm:w-6" />
                </span>
                <span className={`text-[10px] font-semibold leading-tight sm:text-xs ${selected ? "text-[var(--navy)]" : "text-slate-500"}`}>
                  {industry.short}
                </span>
              </button>
            );
          })}
        </div>
        <div className="lg:col-start-1">
          {/* Detail card for the selected industry */}
          <div className="relative overflow-hidden rounded-3xl bg-[var(--navy)] p-6 sm:p-7">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                aria-live="polite"
              >
                <div className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl ${current.glow}`} />
                <div className="relative flex items-center gap-4">
                  <span
                    className={`inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${current.tile} text-white`}
                    style={{ boxShadow: `inset 0 1px 0 rgba(255,255,255,0.45), 0 5px 0 ${current.edge}, 0 14px 24px rgba(0,0,0,0.4)` }}
                  >
                    <Icon className="h-7 w-7 drop-shadow" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white">{current.name}</h3>
                    <p className="mt-0.5 text-sm text-slate-300">{current.text}</p>
                  </div>
                </div>
                <ul className="relative mt-5 flex flex-wrap gap-2">
                  {current.solutions.map((solution) => (
                    <li
                      key={solution}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-100"
                    >
                      <CheckIcon className="h-3.5 w-3.5 text-emerald-300" />
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
