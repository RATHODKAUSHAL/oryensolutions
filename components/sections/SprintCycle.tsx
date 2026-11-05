"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { CheckIcon } from "@/components/ui/icons";

const steps = [
  {
    name: "Plan",
    title: "Sprint planning",
    text: "We agree on the highest-value goals for the sprint and break them into clear, estimated tasks.",
    youGet: "A sprint plan with priorities you approve",
  },
  {
    name: "Design",
    title: "Design & architecture",
    text: "We design the screens and technical approach for this sprint's features before building them.",
    youGet: "Designs to review before development",
  },
  {
    name: "Build",
    title: "Focused development",
    text: "Engineers build the planned features with daily stand-ups to remove blockers quickly.",
    youGet: "Visible progress on a shared board",
  },
  {
    name: "Demo",
    title: "Test & demo",
    text: "Every feature is tested, then shown to you working, so feedback happens now rather than at the end.",
    youGet: "A working demo every week",
  },
  {
    name: "Improve",
    title: "Review & retrospective",
    text: "We fold your feedback into the backlog and improve how we work before the next sprint starts.",
    youGet: "An updated roadmap for the next sprint",
  },
] as const;

const ROTATE_MS = 4500;

export function SprintCycle() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (paused || reduceMotion) return;
    const t = setInterval(() => setActive((i) => (i + 1) % steps.length), ROTATE_MS);
    return () => clearInterval(t);
  }, [paused, reduceMotion]);

  const current = steps[active];

  return (
    <div
      className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Ring of steps around a centre label */}
      <div className="relative mx-auto aspect-square w-full max-w-[420px]">
        <div className="absolute inset-[12%] rounded-full border-2 border-dashed border-sky-200" />
        <motion.div
          className="absolute inset-[12%] rounded-full"
          animate={{ rotate: (active / steps.length) * 360 }}
          transition={{ type: "spring", stiffness: 60, damping: 16 }}
          style={{ background: "conic-gradient(from -36deg, rgba(0,119,182,0.18) 0deg 72deg, transparent 72deg)" }}
        />
        <div className="absolute inset-[30%] flex flex-col items-center justify-center rounded-full bg-[var(--navy)] text-center shadow-[0_24px_50px_rgba(2,16,36,0.25)]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-300 sm:text-xs">Every sprint</p>
          <p className="mt-1 text-lg font-extrabold text-white sm:text-2xl">Repeat</p>
          <p className="text-[10px] text-slate-400 sm:text-xs">until launch & beyond</p>
        </div>

        {steps.map((step, i) => {
          const angle = (i / steps.length) * 2 * Math.PI - Math.PI / 2;
          const x = 50 + 38 * Math.cos(angle);
          const y = 50 + 38 * Math.sin(angle);
          const selected = i === active;
          return (
            <button
              key={step.name}
              type="button"
              onClick={() => {
                setActive(i);
                setPaused(true);
              }}
              aria-pressed={selected}
              aria-label={`${i + 1}. ${step.title}`}
              className={`absolute flex h-[22%] w-[22%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-2 text-center transition-all duration-300 ${
                selected
                  ? "scale-110 border-transparent bg-gradient-to-br from-sky-400 to-[#0077b6] text-white shadow-[0_14px_30px_rgba(0,119,182,0.4)]"
                  : "border-sky-100 bg-white text-[var(--navy)] hover:border-sky-300"
              }`}
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <span className={`text-[10px] font-bold sm:text-xs ${selected ? "text-sky-100" : "text-sky-500"}`}>0{i + 1}</span>
              <span className="text-[11px] font-bold sm:text-sm">{step.name}</span>
            </button>
          );
        })}
      </div>

      <div className="min-h-[260px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current.name}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.3 }}
            aria-live="polite"
          >
            <p className="text-sm font-bold text-[var(--primary)]">
              Step 0{active + 1} of 0{steps.length}
            </p>
            <h3 className="mt-2 text-3xl font-extrabold">{current.title}</h3>
            <p className="mt-4 text-base leading-8 text-[var(--text-body)] sm:text-lg">{current.text}</p>
            <p className="mt-6 inline-flex items-center gap-2.5 rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800">
              <CheckIcon className="h-4 w-4 text-emerald-600" />
              You get: {current.youGet}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex gap-1.5">
          {steps.map((step, i) => (
            <button
              key={step.name}
              type="button"
              aria-label={`Show ${step.title}`}
              onClick={() => {
                setActive(i);
                setPaused(true);
              }}
              className={`h-1.5 rounded-full transition-all ${i === active ? "w-10 bg-[var(--primary)]" : "w-5 bg-slate-200 hover:bg-slate-300"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
