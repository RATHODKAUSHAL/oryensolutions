"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring } from "framer-motion";

import { SectionHeading } from "@/components/sections/SectionHeading";
import { CheckIcon, CodeIcon, LayersIcon, RocketIcon, TargetIcon } from "@/components/ui/icons";

const processSteps = [
  {
    title: "Discovery",
    detail: "We learn your goals, users and current bottlenecks, and agree on what success looks like.",
    deliverable: "Scope & estimate",
    icon: TargetIcon,
  },
  {
    title: "Design",
    detail: "We plan the architecture and design the key screens so you can see the product before it's built.",
    deliverable: "Clickable prototype",
    icon: LayersIcon,
  },
  {
    title: "Build",
    detail: "We develop in focused sprints and show you a working build every week, so feedback shapes the product.",
    deliverable: "Weekly demo builds",
    icon: CodeIcon,
  },
  {
    title: "Test",
    detail: "We test core flows, edge cases and performance on real devices before anything reaches your users.",
    deliverable: "Release-ready build",
    icon: CheckIcon,
  },
  {
    title: "Launch & grow",
    detail: "We deploy safely, monitor stability and keep improving the product as your business grows.",
    deliverable: "Live product + support",
    icon: RocketIcon,
  },
] as const;

export function ProcessSection() {
  const listRef = useRef<HTMLOListElement>(null);
  const reduceMotion = useReducedMotion();
  // Progress runs from the list entering the lower part of the screen to it reaching the upper part.
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 80%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  const [reached, setReached] = useState(reduceMotion ? processSteps.length : 0);

  // Only re-render when the number of reached steps changes, not on every scroll frame.
  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const next = Math.min(processSteps.length, Math.floor(value * processSteps.length + 0.35));
    setReached((current) => (current === next ? current : next));
  });

  const allReached = reduceMotion ? processSteps.length : reached;

  return (
    <section id="process" className="relative scroll-mt-20 overflow-hidden bg-white py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px] bg-[radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.08),transparent_65%)]" />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How we work"
          title={
            <>
              A clear path from <span className="text-gradient-dark">idea to launch</span>
            </>
          }
          description="Five steps, each ending with something concrete you can review. No black boxes, no surprises at the end."
        />

        <div className="relative mt-16">
          {/* Track + scroll-linked fill: horizontal on desktop, vertical on mobile. */}
          <div className="pointer-events-none absolute left-[10%] right-[10%] top-7 hidden h-[3px] rounded-full bg-slate-200 lg:block">
            <motion.div
              style={{ scaleX: reduceMotion ? 1 : progress }}
              className="h-full origin-left rounded-full bg-gradient-to-r from-[var(--primary)] via-sky-400 to-violet-500"
            />
          </div>
          <div className="pointer-events-none absolute bottom-7 left-7 top-7 w-[3px] -translate-x-1/2 rounded-full bg-slate-200 lg:hidden">
            <motion.div
              style={{ scaleY: reduceMotion ? 1 : progress }}
              className="h-full origin-top rounded-full bg-gradient-to-b from-[var(--primary)] via-sky-400 to-violet-500"
            />
          </div>

          <ol ref={listRef} className="relative grid gap-8 lg:grid-cols-5 lg:gap-5">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isReached = index < allReached;
              return (
                <li key={step.title} className="relative pl-20 lg:pl-0">
                  <span
                    className={`absolute left-0 top-0 flex h-14 w-14 items-center justify-center rounded-2xl ring-8 ring-white transition-all duration-500 lg:relative lg:mx-auto ${
                      isReached
                        ? "bg-gradient-to-br from-[var(--primary)] to-violet-500 text-white shadow-[0_12px_28px_rgba(0,119,182,0.35)]"
                        : "bg-slate-100 text-slate-400"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <div
                    className={`rounded-2xl border p-5 transition-all duration-500 lg:mt-6 lg:text-center ${
                      isReached
                        ? "border-sky-100 bg-white shadow-[0_18px_40px_rgba(2,16,36,0.08)]"
                        : "border-transparent bg-slate-50/60"
                    }`}
                  >
                    <p className={`text-xs font-bold uppercase tracking-[0.16em] ${isReached ? "text-[var(--primary)]" : "text-slate-400"}`}>
                      Step {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-1.5 text-lg font-bold">{step.title}</h3>
                    <p className="mt-2 text-[15px] leading-7 text-[var(--text-body)]">{step.detail}</p>
                    <p
                      className={`mt-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-colors duration-500 ${
                        isReached ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <CheckIcon className="h-3.5 w-3.5" />
                      You get: {step.deliverable}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
