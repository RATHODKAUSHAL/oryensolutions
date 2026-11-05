"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type ProgressState = "idle" | "loading" | "done";

// Slim top progress bar for client-side navigations. The App Router has no navigation events,
// so it starts on internal link clicks and completes when the pathname changes.
export function RouteProgress() {
  const pathname = usePathname();
  const [state, setState] = useState<ProgressState>("idle");
  const [lastPathname, setLastPathname] = useState(pathname);

  // Navigation finished: adjust state during render instead of in an effect.
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    if (state === "loading") setState("done");
  }

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = (event.target as Element | null)?.closest?.("a");
      if (!link || link.target === "_blank" || link.hasAttribute("download")) return;
      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname === window.location.pathname) return;
      setState("loading");
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  useEffect(() => {
    if (state === "idle") return;
    // "done" fades out quickly; "loading" gives up after 8s so a cancelled navigation never leaves the bar hanging.
    const t = window.setTimeout(() => setState("idle"), state === "done" ? 450 : 8000);
    return () => window.clearTimeout(t);
  }, [state]);

  return (
    <div
      aria-hidden="true"
      className={`route-progress ${state === "loading" ? "is-loading" : ""} ${state === "done" ? "is-done" : ""}`}
    />
  );
}
