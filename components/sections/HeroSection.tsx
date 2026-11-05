"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import {
  ArrowRightIcon,
  CheckIcon,
  CodeIcon,
  LayersIcon,
  MobileIcon,
  SparklesIcon,
  UsersIcon,
} from "@/components/ui/icons";
import { HeroVisual } from "@/components/three/HeroVisual";
import { routes } from "@/lib/site";

const offerings = [
  {
    tab: "Web Apps",
    word: "web platforms",
    icon: CodeIcon,
    summary:
      "Fast, secure websites, customer portals and web applications that turn visitors into customers.",
    points: [
      "Next.js & React",
      "SEO-ready from day one",
      "Built to scale with traffic",
    ],
    href: routes.servicesWeb,
  },
  {
    tab: "Mobile Apps",
    word: "mobile apps",
    icon: MobileIcon,
    summary:
      "Android and iOS apps your customers enjoy using, connected to your back office in real time.",
    points: [
      "Android & iOS",
      "Intuitive UI/UX",
      "Real-time sync with your systems",
    ],
    href: routes.servicesWeb,
  },
  {
    tab: "CRM & ERP",
    word: "CRM systems",
    icon: UsersIcon,
    summary:
      "One place for leads, customers, orders and reports, designed around the way your team sells and operates.",
    points: [
      "Lead & pipeline tracking",
      "Automated follow-ups",
      "Live dashboards",
    ],
    href: routes.servicesWeb,
  },
  {
    tab: "SaaS",
    word: "SaaS products",
    icon: LayersIcon,
    summary:
      "From first MVP to a market-ready product, with subscriptions, multi-tenancy and analytics built in.",
    points: [
      "MVP in weeks",
      "Billing & subscriptions",
      "Multi-tenant architecture",
    ],
    href: routes.servicesWeb,
  },
  {
    tab: "AI & Automation",
    word: "AI automation",
    icon: SparklesIcon,
    summary:
      "Connect the tools you already use and let AI and automation take over repetitive manual work.",
    points: [
      "AI assistants & chatbots",
      "API integrations",
      "Workflow automation",
    ],
    href: routes.servicesAutomation,
  },
] as const;

const assurances = [
  "Founder-led delivery",
  "Weekly sprint demos",
  "Post-launch support",
] as const;

const ROTATE_MS = 4000;
const EASE = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const tabListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (paused || reduceMotion) return;
    const t = setInterval(
      () => setActive((i) => (i + 1) % offerings.length),
      ROTATE_MS,
    );
    return () => clearInterval(t);
  }, [paused, reduceMotion]);

  // Keep the selected tab visible in the swipeable mobile row. Scrolls only the row itself:
  // scrollIntoView would also scroll the page every time the slide rotates.
  useEffect(() => {
    const list = tabListRef.current;
    const tab = tabRefs.current[active];
    if (!list || !tab || list.scrollWidth <= list.clientWidth) return;
    const left = tab.offsetLeft - (list.clientWidth - tab.offsetWidth) / 2;
    list.scrollTo({ left, behavior: reduceMotion ? "auto" : "smooth" });
  }, [active, reduceMotion]);

  // Spotlight that follows the cursor; written to CSS variables so it doesn't re-render React.
  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  };

  const selectTab = (index: number, focus = false) => {
    setActive(index);
    setPaused(true);
    if (focus) tabRefs.current[index]?.focus();
  };

  // Standard tablist keyboard support: arrows move between tabs, Home/End jump to the ends.
  const handleTabKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    const last = offerings.length - 1;
    const next =
      event.key === "ArrowRight"
        ? index === last
          ? 0
          : index + 1
        : event.key === "ArrowLeft"
          ? index === 0
            ? last
            : index - 1
          : event.key === "Home"
            ? 0
            : event.key === "End"
              ? last
              : null;
    if (next === null) return;
    event.preventDefault();
    selectTab(next, true);
  };

  return (
    <section
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      className="relative isolate overflow-hidden bg-[var(--navy)] text-white [--spot-x:50%] [--spot-y:30%]"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 dark-grid" />
      <div className="pointer-events-none absolute -top-48 left-1/2 -z-10 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-[#0077b6]/30 blur-[130px]" />
      <div className="aurora pointer-events-none -z-10 -left-40 top-24 h-[420px] w-[520px] bg-violet-600/25" />
      <div className="aurora pointer-events-none -z-10 -bottom-40 -right-32 h-[460px] w-[460px] bg-sky-400/20 [animation-delay:-9s]" />
      <div
        className="pointer-events-none absolute inset-0 -z-10 hidden transition-opacity duration-300 md:block"
        style={{
          background:
            "radial-gradient(500px circle at var(--spot-x) var(--spot-y), rgba(56,189,248,0.13), transparent 70%)",
        }}
      />

      <div className="mx-auto w-full max-w-7xl px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pt-14">
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-6">
          <div className="text-center lg:text-left">
            <p className="fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-sky-200 backdrop-blur">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Serving startups & businesses in the US and worldwide
            </p>

            <h1 className="fade-up [animation-delay:60ms] mx-auto mt-7 max-w-5xl text-balance text-[2.5rem] font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl lg:mx-0 lg:text-[3.6rem] xl:text-[4rem]">
              <span className="sr-only">
                We build web platforms, mobile apps, CRM systems, SaaS products
                and AI automation that move your business forward.
              </span>
              <span aria-hidden="true" className="block">
                We build
                {/* Every word sits in the same grid cell, so the slot is always as wide and tall as the longest word:
                the headline never reflows and words cross-fade without a blank gap. */}
                <span className="mx-auto mt-1 grid w-fit justify-items-center lg:mx-0 lg:justify-items-start">
                  {offerings.map((item, i) => {
                    const isCurrent = i === active;
                    return (
                      <motion.span
                        key={item.word}
                        initial={false}
                        animate={
                          reduceMotion
                            ? { opacity: isCurrent ? 1 : 0 }
                            : {
                                opacity: isCurrent ? 1 : 0,
                                y: isCurrent
                                  ? "0%"
                                  : i < active
                                    ? "-35%"
                                    : "35%",
                                filter: isCurrent ? "blur(0px)" : "blur(6px)",
                              }
                        }
                        transition={{ duration: 0.55, ease: EASE }}
                        className="text-gradient col-start-1 row-start-1 whitespace-nowrap pb-[0.08em]"
                      >
                        {item.word}
                      </motion.span>
                    );
                  })}
                </span>
                <span className="block">that move your business forward.</span>
              </span>
            </h1>

            <p className="fade-up [animation-delay:120ms] mx-auto mt-6 max-w-2xl lg:mx-0 text-pretty text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              A founder-led engineering team designing, building and supporting
              custom software around how your business actually works, for
              startups and growing companies.
            </p>

            <div className="fade-up [animation-delay:180ms] mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <Link
                href={routes.contact}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-sky-400 px-7 py-3.5 text-sm font-bold text-[var(--navy)] shadow-[0_14px_34px_rgba(56,189,248,0.35)] transition hover:-translate-y-0.5 hover:bg-sky-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 sm:w-auto"
              >
                Book a free consultation
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="#services"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 sm:w-auto"
              >
                Explore our services
              </Link>
            </div>

            <ul className="fade-up mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 [animation-delay:220ms] lg:justify-start">
              {assurances.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-slate-300"
                >
                  <CheckIcon className="h-4 w-4 text-emerald-300" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Interactive 3D globe on desktop; skipped on phones to keep the hero short and light. */}
          <div className="fade-up hidden [animation-delay:200ms] lg:block">
            <HeroVisual />
          </div>
        </div>

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          className="fade-up relative mx-auto mt-14 max-w-5xl rounded-[28px] border border-white/10 bg-white/[0.04] p-2 text-left shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl [animation-delay:280ms] sm:mt-16 sm:p-3"
        >
          <div className="pointer-events-none absolute inset-x-10 -top-px h-px bg-gradient-to-r from-transparent via-sky-300/60 to-transparent" />

          <div className="flex flex-col gap-1 px-3 pb-4 pt-3 sm:flex-row sm:items-end sm:justify-between sm:px-4">
            <div>
              <h2
                id="hero-build-title"
                className="text-lg font-bold text-white sm:text-xl"
              >
                What do you want to build?
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                Pick a product type to see what we deliver.
              </p>
            </div>
            <p
              className="hidden text-xs font-medium tabular-nums text-slate-500 sm:block"
              aria-hidden="true"
            >
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(offerings.length).padStart(2, "0")}
            </p>
          </div>

          {/* One swipeable row on small screens, an even row of tabs on large ones. */}
          <div className="relative">
            <div
              ref={tabListRef}
              role="tablist"
              aria-labelledby="hero-build-title"
              className="-mx-2 flex snap-x snap-mandatory gap-1.5 overflow-x-auto px-2 pb-1 [scrollbar-width:none] sm:mx-0 sm:px-1 [&::-webkit-scrollbar]:hidden"
            >
              {offerings.map((item, i) => {
                const TabIcon = item.icon;
                const selected = i === active;
                return (
                  <button
                    key={item.tab}
                    ref={(el) => {
                      tabRefs.current[i] = el;
                    }}
                    type="button"
                    role="tab"
                    id={`hero-tab-${i}`}
                    aria-selected={selected}
                    aria-controls="hero-panel"
                    tabIndex={selected ? 0 : -1}
                    onClick={() => selectTab(i)}
                    onKeyDown={(event) => handleTabKeyDown(event, i)}
                    className={`relative isolate flex shrink-0 snap-start items-center justify-center gap-2 whitespace-nowrap rounded-2xl px-4 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 lg:flex-1 ${
                      selected
                        ? "text-[var(--navy)]"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {selected ? (
                      <motion.span
                        layoutId="hero-tab-pill"
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 34,
                        }}
                        className="absolute inset-0 -z-10 rounded-2xl bg-white shadow-[0_8px_24px_rgba(56,189,248,0.25)]"
                      />
                    ) : null}
                    <TabIcon
                      className={`h-4 w-4 ${selected ? "text-[var(--primary)]" : ""}`}
                    />
                    {item.tab}
                    {selected && !paused && !reduceMotion ? (
                      <motion.span
                        key={`progress-${active}`}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                          duration: ROTATE_MS / 1000,
                          ease: "linear",
                        }}
                        className="absolute inset-x-4 bottom-1 h-0.5 origin-left rounded-full bg-sky-400"
                      />
                    ) : null}
                  </button>
                );
              })}
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#071b38] to-transparent lg:hidden" />
          </div>

          <div
            id="hero-panel"
            role="tabpanel"
            aria-labelledby={`hero-tab-${active}`}
            className="mt-2 grid overflow-hidden rounded-[22px] border border-white/10 bg-gradient-to-br from-[#082247]/90 to-[#061a38]/90"
          >
            {/* All panels share one grid cell so the card keeps the height of the tallest one and never shifts the page. */}
            {offerings.map((item, i) => {
              const PanelIcon = item.icon;
              const isCurrent = i === active;
              return (
                <motion.div
                  key={item.tab}
                  initial={false}
                  animate={{
                    opacity: isCurrent ? 1 : 0,
                    y: isCurrent || reduceMotion ? 0 : 10,
                  }}
                  transition={{ duration: 0.35, ease: EASE }}
                  aria-hidden={!isCurrent}
                  inert={!isCurrent}
                  className={`col-start-1 row-start-1 grid gap-6 p-6 sm:p-8 md:grid-cols-[1.25fr_1fr] md:items-center md:gap-10 ${
                    isCurrent ? "" : "pointer-events-none"
                  }`}
                >
                  <div className="flex flex-col items-start gap-4 sm:flex-row">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-400/15 text-sky-300 ring-1 ring-inset ring-sky-300/20 sm:h-14 sm:w-14">
                      <PanelIcon className="h-6 w-6 sm:h-7 sm:w-7" />
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-white sm:text-2xl">
                        {item.tab}
                      </h3>
                      <p className="mt-2 text-[15px] leading-7 text-slate-300">
                        {item.summary}
                      </p>
                      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
                        <Link
                          href={item.href}
                          className="group inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15"
                        >
                          Explore {item.tab}
                          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link
                          href={routes.contact}
                          className="text-sm font-semibold text-sky-300 hover:text-sky-200"
                        >
                          Get a quote
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      What&apos;s included
                    </p>
                    <ul className="mt-3 space-y-2.5">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-slate-100"
                        >
                          <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/15">
                            <CheckIcon className="h-3.5 w-3.5 text-emerald-300" />
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
