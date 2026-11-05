"use client";

import { useEffect, useRef, useState } from "react";

const TEXT = "ORYENSOLUTIONS";
const RADIUS = 90; // px of influence around the cursor
const STRENGTH = 26; // max px a dot is pushed

type Dot = { hx: number; hy: number; x: number; y: number };

// Dot-matrix wordmark: the text is sampled into a grid of dots that bend away from the cursor like a lens, then spring back.
export function FooterWordmark() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const family = getComputedStyle(document.body).getPropertyValue("--font-jakarta").trim() || "system-ui, sans-serif";

    let dots: Dot[] = [];
    let width = 0;
    let height = 0;
    let gap = 5;
    let dotSize = 2;
    let frame = 0;
    let running = false;
    let disposed = false;
    const pointer = { x: -9999, y: -9999, active: false };

    // Returns false when the container has no size yet (hidden, collapsed or not laid out);
    // the ResizeObserver calls build again once it does.
    const build = () => {
      if (disposed) return false;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const nextWidth = Math.floor(wrap.clientWidth);

      // Fit the text to the container width.
      const probe = document.createElement("canvas").getContext("2d")!;
      probe.font = `800 100px ${family}`;
      const textWidth = probe.measureText(TEXT).width;
      const fontSize = textWidth > 0 ? (100 * nextWidth) / textWidth : 0;
      const nextHeight = Math.ceil(fontSize * 0.78);

      // getImageData throws on a 0×0 area, so wait for real dimensions.
      if (nextWidth < 1 || nextHeight < 1) return false;

      width = nextWidth;
      height = nextHeight;
      gap = width < 640 ? 3 : width < 1024 ? 4 : 5;
      dotSize = gap * 0.55;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const off = document.createElement("canvas");
      off.width = width;
      off.height = height;
      const octx = off.getContext("2d")!;
      octx.font = `800 ${fontSize}px ${family}`;
      octx.textBaseline = "alphabetic";
      octx.fillStyle = "#000";
      octx.fillText(TEXT, 0, height - fontSize * 0.04);
      const pixels = octx.getImageData(0, 0, width, height).data;

      dots = [];
      for (let y = gap / 2; y < height; y += gap) {
        for (let x = gap / 2; x < width; x += gap) {
          if (pixels[(Math.floor(y) * width + Math.floor(x)) * 4 + 3] > 128) dots.push({ hx: x, hy: y, x, y });
        }
      }
      draw();
      return true;
    };

    const rebuild = () => {
      if (build()) setReady(true);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (const d of dots) {
        const fade = 1 - (d.hy / height) * 0.65;
        const dx = d.x - pointer.x;
        const dy = d.y - pointer.y;
        const near = pointer.active ? Math.max(0, 1 - Math.sqrt(dx * dx + dy * dy) / RADIUS) : 0;
        ctx.fillStyle = near > 0 ? `rgba(125, 211, 252, ${Math.min(1, fade + near)})` : `rgba(226, 243, 255, ${fade})`;
        ctx.fillRect(d.x - dotSize / 2, d.y - dotSize / 2, dotSize, dotSize);
      }
    };

    const step = () => {
      let moving = false;
      for (const d of dots) {
        let tx = d.hx;
        let ty = d.hy;
        if (pointer.active) {
          const dx = d.hx - pointer.x;
          const dy = d.hy - pointer.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < RADIUS && dist > 0.01) {
            const force = (1 - dist / RADIUS) ** 2 * STRENGTH;
            // Push outwards with a slight swirl for the lens look.
            tx += (dx / dist) * force - (dy / dist) * force * 0.35;
            ty += (dy / dist) * force + (dx / dist) * force * 0.35;
          }
        }
        d.x += (tx - d.x) * 0.18;
        d.y += (ty - d.y) * 0.18;
        if (Math.abs(tx - d.x) > 0.05 || Math.abs(ty - d.y) > 0.05) moving = true;
      }
      draw();
      if (moving || pointer.active) {
        frame = requestAnimationFrame(step);
      } else {
        running = false;
      }
    };

    const start = () => {
      if (running || reduceMotion) return;
      running = true;
      frame = requestAnimationFrame(step);
    };

    const onMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.active = true;
      start();
    };
    const onLeave = () => {
      pointer.active = false;
      start();
    };

    let resizeTimer: ReturnType<typeof setTimeout>;
    const resizeObserver = new ResizeObserver(() => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(rebuild, 100);
    });
    resizeObserver.observe(wrap);

    // Build once the web font has loaded so the dots sample the real glyphs.
    document.fonts.ready.then(rebuild);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      clearTimeout(resizeTimer);
      resizeObserver.disconnect();
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div ref={wrapRef} className="relative select-none" aria-hidden="true">
      {/* Static SVG version shown until the canvas is ready (and when JavaScript is off). */}
      {!ready ? (
        <svg viewBox="0 0 1000 132" className="block w-full">
          <defs>
            <pattern id="wordmark-dots" width="5" height="5" patternUnits="userSpaceOnUse">
              <circle cx="2.5" cy="2.5" r="1.45" fill="#e2f3ff" />
            </pattern>
          </defs>
          <text
            x="0"
            y="118"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            fill="url(#wordmark-dots)"
            opacity="0.85"
            style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 800, fontSize: 140 }}
          >
            {TEXT}
          </text>
        </svg>
      ) : null}
      <canvas ref={canvasRef} className={`block w-full touch-pan-y ${ready ? "" : "absolute inset-0 opacity-0"}`} />
    </div>
  );
}
