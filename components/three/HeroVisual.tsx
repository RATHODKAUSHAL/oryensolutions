"use client";

import { useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";

import { ClockIcon, GlobeIcon, MapPinIcon, SparklesIcon } from "@/components/ui/icons";

// The WebGL globe is code-split and only fetched when the device can comfortably run it.
const HeroGlobe = dynamic(() => import("./HeroGlobe"), { ssr: false });

type NavigatorWithHints = Navigator & {
  connection?: { saveData?: boolean };
  deviceMemory?: number;
};

function canRunGlobe() {
  const nav = navigator as NavigatorWithHints;
  if (!window.matchMedia("(min-width: 1024px)").matches) return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  if (nav.connection?.saveData) return false;
  if (nav.deviceMemory !== undefined && nav.deviceMemory < 4) return false;
  try {
    return !!document.createElement("canvas").getContext("webgl2");
  } catch {
    return false;
  }
}

const chips = [
  { icon: MapPinIcon, title: "HQ · Ahmedabad", text: "Founder-led team", className: "left-[2%] top-[18%] [animation-delay:0s]" },
  { icon: GlobeIcon, title: "US & Global", text: "Clients across time zones", className: "right-[-4%] top-[8%] [animation-delay:-2s]" },
  { icon: ClockIcon, title: "4–12 wks", text: "Typical time to launch", className: "right-[0%] bottom-[16%] [animation-delay:-4s]" },
  { icon: SparklesIcon, title: "Weekly demos", text: "See progress every sprint", className: "left-[-2%] bottom-[8%] [animation-delay:-1s]" },
] as const;

export function HeroVisual() {
  const [loadGlobe, setLoadGlobe] = useState(false);
  const [globeReady, setGlobeReady] = useState(false);
  const handleReady = useCallback(() => setGlobeReady(true), []);

  useEffect(() => {
    if (!canRunGlobe()) return;
    // Wait for the browser to be idle so the globe never competes with first paint or hydration.
    if ("requestIdleCallback" in window) {
      const handle = window.requestIdleCallback(() => setLoadGlobe(true), { timeout: 2500 });
      return () => window.cancelIdleCallback(handle);
    }
    // Safari has no requestIdleCallback.
    const handle = globalThis.setTimeout(() => setLoadGlobe(true), 1200);
    return () => globalThis.clearTimeout(handle);
  }, []);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px] select-none">
      {/* CSS sphere: shown immediately, and the permanent visual on phones / low-power devices. */}
      <div
        aria-hidden="true"
        className={`hero-orb absolute inset-[6%] rounded-full transition-opacity duration-1000 ${globeReady ? "opacity-0" : "opacity-100"}`}
      />
      <div aria-hidden="true" className="absolute inset-[10%] rounded-full bg-sky-400/20 blur-[70px]" />

      {loadGlobe ? (
        <div className="absolute inset-0">
          <HeroGlobe onReady={handleReady} />
        </div>
      ) : null}

      {chips.map((chip) => {
        const Icon = chip.icon;
        return (
          <div
            key={chip.title}
            className={`hero-chip absolute z-10 flex items-center gap-3 rounded-2xl border border-white/20 bg-[#0a2147]/80 px-3.5 py-2.5 text-left shadow-[0_18px_40px_rgba(0,0,0,0.45)] backdrop-blur-md ${chip.className}`}
          >
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400/30 to-violet-500/30 text-sky-200">
              <Icon className="h-4 w-4" />
            </span>
            <span>
              <span className="block text-sm font-bold text-white">{chip.title}</span>
              <span className="block text-xs text-slate-200">{chip.text}</span>
            </span>
          </div>
        );
      })}

      <p className="pointer-events-none absolute inset-x-0 -bottom-2 text-center text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
        {globeReady ? "Drag to spin the globe" : " "}
      </p>
    </div>
  );
}
