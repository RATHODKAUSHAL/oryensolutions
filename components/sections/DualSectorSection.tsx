"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const sectorTabs = [
  {
    id: "it",
    label: "IT & Digital Products",
    heading: "Custom software for the teams that have outgrown off-the-shelf tools.",
    description:
      "From client-facing platforms to internal systems, we build software that matches the way your business already works instead of forcing your process into a generic product.",
    items: [
      "Full-Stack Web Development",
      "Custom CRM And SaaS Product Development",
      "Mobile App Development (Android & iOS)",
      "UI/UX Design & Development",
      "API Integration & Data Visualization",
      "Website Maintenance & SEO Optimization",
    ],
  },
  {
    id: "bim",
    label: "BIM Automation",
    heading: "Engineering automation that removes repetitive drafting and coordination work.",
    description:
      "We build custom Tekla plugins, macros, and workflow tools that reduce manual effort across drawings, reports, model coordination, and production data handoffs.",
    items: [
      "Tekla Plugin & Macro Development",
      "Automated Drawing Creation Tools",
      "BOM & Report Customization",
      "Tekla-Excel Data Integration",
      "Rebar & Revit Automation Solutions",
      "Custom Tekla API Tool Development",
    ],
  },
] as const;

export function DualSectorSection() {
  const [active, setActive] = useState<(typeof sectorTabs)[number]["id"]>("it");
  const activeTab = sectorTabs.find((tab) => tab.id === active)!;

  return (
    <section id="dual-sector" className="relative overflow-hidden bg-[#f8fcff] py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(84,131,179,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(84,131,179,0.1)_1px,transparent_1px)] bg-[size:90px_90px]" />
      <div className="pointer-events-none absolute -left-20 top-20 h-56 w-56 rounded-full bg-[#C1E8FF] blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-[#7DA0CA]/40 blur-3xl" />
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative text-center">
          <p className="inline-flex rounded-full border border-[#7DA0CA]/70 bg-white px-4 py-1 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">Why The Mix Matters</p>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#021024] sm:text-5xl">A rare combination: product engineering and BIM automation under one roof.</h2>
        </div>

        <div className="relative mx-auto mt-10 flex w-fit rounded-full border border-[#7DA0CA]/45 bg-white/90 p-1 shadow-[0_8px_18px_rgba(84,131,179,0.14)]">
          {sectorTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                active === tab.id ? "bg-[#052659] text-white shadow-[0_8px_16px_rgba(2,16,36,0.22)]" : "text-slate-600 hover:bg-[#eaf4fd] hover:text-slate-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="relative mt-8 rounded-3xl border border-[#7DA0CA]/45 bg-white/95 p-8 shadow-[0_12px_30px_rgba(84,131,179,0.16)]"
          >
            <div className="pointer-events-none absolute right-6 top-6 h-16 w-16 rounded-full bg-[#C1E8FF]/70 blur-xl" />
            <h3 className="text-3xl font-bold tracking-tight">{activeTab.heading}</h3>
            <p className="mt-4 max-w-4xl text-lg text-[var(--text-body)]">{activeTab.description}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {activeTab.items.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.04 }}
                  className="rounded-xl border border-[#7DA0CA]/35 bg-gradient-to-r from-[#f8fcff] to-white px-4 py-3 text-slate-700 transition hover:border-[#5483B3]/60 hover:shadow-[0_6px_18px_rgba(84,131,179,0.14)]"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
