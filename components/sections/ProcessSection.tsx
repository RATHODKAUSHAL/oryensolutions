"use client";

import { motion } from "framer-motion";

const processSteps = [
  {
    title: "Discovery",
    detail: "We align on goals, users, current bottlenecks, and measurable outcomes before writing code.",
  },
  {
    title: "Design",
    detail: "We define architecture and UX flows with clear milestones, constraints, and handoff-ready specs.",
  },
  {
    title: "Development",
    detail: "We build in focused sprints using clean, scalable implementation and transparent progress updates.",
  },
  {
    title: "Testing",
    detail: "We validate across core paths, edge cases, and performance baselines to ensure release confidence.",
  },
  {
    title: "Deployment",
    detail: "We launch safely, monitor stability, and support post-release optimization with zero-friction rollout.",
  },
] as const;

export function ProcessSection() {
  return (
    <section id="process" className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(84,131,179,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(84,131,179,0.1)_1px,transparent_1px)] bg-[size:92px_92px]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full border border-[#7DA0CA]/70 bg-white px-4 py-1 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">
            How We Work
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#021024] sm:text-4xl">A delivery process built to keep scope clear and momentum visible.</h2>
        </div>

        <div className="mt-12 lg:hidden">
          <div className="relative space-y-5 pl-14">
            <div className="pointer-events-none absolute bottom-6 left-6 top-6 w-px bg-[#bfd8ef]" />
            <motion.div
              className="pointer-events-none absolute left-6 top-6 w-px bg-[#5483B3]"
              initial={{ height: 0 }}
              whileInView={{ height: "calc(100% - 3rem)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />

            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="relative"
              >
                <div className="absolute -left-14 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#7DA0CA]/70 bg-gradient-to-br from-[#eaf4fd] to-[#cfe5fa] text-sm font-bold text-[#052659] shadow-[0_0_0_6px_rgba(234,244,253,1)]">
                  {index + 1}
                </div>
                <div className="rounded-2xl border border-[#7DA0CA]/35 bg-gradient-to-br from-[#f8fcff] to-white p-5 text-left shadow-[0_10px_24px_rgba(84,131,179,0.12)]">
                  <p className="text-base font-semibold text-[#021024]">{step.title}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{step.detail}</p>
                  <div className="mt-4 h-1.5 w-14 rounded-full bg-[#C1E8FF]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 hidden lg:block">
          <div className="mx-auto">
            <div className="relative grid grid-cols-5 gap-4">
              <div className="pointer-events-none absolute left-[10%] right-[10%] top-5 h-px bg-[#bfd8ef]" />
              <motion.div
                className="pointer-events-none absolute left-[10%] top-5 h-px bg-[#5483B3]"
                initial={{ width: 0 }}
                whileInView={{ width: "80%" }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
              />

              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  className="group"
                >
                  <div className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#7DA0CA]/70 bg-gradient-to-br from-[#eaf4fd] to-[#cfe5fa] text-sm font-bold text-[#052659] shadow-[0_0_0_6px_rgba(234,244,253,1)]">
                    {index + 1}
                  </div>
                  <p className="mt-3 text-center text-base font-semibold text-[#021024]">{step.title}</p>

                  <div className="mt-4 rounded-2xl border border-[#7DA0CA]/35 bg-gradient-to-br from-[#f8fcff] to-white p-5 text-left shadow-[0_10px_24px_rgba(84,131,179,0.12)] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-[#5483B3]/60 group-hover:shadow-[0_14px_32px_rgba(84,131,179,0.2)]">
                    <p className="text-sm leading-6 text-slate-600">{step.detail}</p>
                    <div className="mt-4 h-1.5 w-14 rounded-full bg-[#C1E8FF] transition-all duration-300 group-hover:w-20 group-hover:bg-[#5483B3]" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
