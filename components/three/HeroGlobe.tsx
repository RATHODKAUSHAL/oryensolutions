"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

// Ahmedabad HQ plus the regions in `areaServed` (lib/site.ts): US, UK, UAE, Australia, Canada.
const HQ: [number, number] = [23.0225, 72.5714];
const CLIENT_CITIES: Array<[number, number]> = [
  [40.7128, -74.006], // New York
  [37.7749, -122.4194], // San Francisco
  [51.5072, -0.1276], // London
  [25.2048, 55.2708], // Dubai
  [-33.8688, 151.2093], // Sydney
  [43.6532, -79.3832], // Toronto
];

// Start with India facing the viewer.
const START_PHI = -1.25;
const AUTO_SPEED = 0.0028;

type HeroGlobeProps = { onReady?: () => void };

// Interactive WebGL globe (cobe, ~6 KB gzip). Renders only while visible on screen and the tab is
// active; drag to spin, it eases back to auto-rotation when released.
export default function HeroGlobe({ onReady }: HeroGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointer = useRef<{ x: number; phi: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let size = canvas.offsetWidth;
    let phi = START_PHI;
    let dragPhi = 0;
    let velocity = 0;
    let frame = 0;
    let visible = false;

    const globe = createGlobe(canvas, {
      devicePixelRatio: dpr,
      width: size * dpr,
      height: size * dpr,
      phi,
      theta: 0.28,
      dark: 1,
      diffuse: 1.4,
      mapSamples: 14000,
      mapBrightness: 5.5,
      mapBaseBrightness: 0.04,
      baseColor: [0.11, 0.2, 0.38],
      markerColor: [0.49, 0.83, 0.99],
      glowColor: [0.24, 0.42, 0.78],
      arcColor: [0.65, 0.55, 0.98],
      arcWidth: 0.6,
      arcHeight: 0.28,
      markerElevation: 0.02,
      markers: [
        { location: HQ, size: 0.09, color: [0.98, 0.75, 0.3] },
        ...CLIENT_CITIES.map((location) => ({ location, size: 0.045 })),
      ],
      arcs: CLIENT_CITIES.map((to) => ({ from: HQ, to })),
    });

    const render = () => {
      if (!pointer.current) {
        // Momentum after a flick, decaying back into the slow auto-rotation.
        velocity *= 0.94;
        phi += AUTO_SPEED + velocity;
      }
      globe.update({ phi: phi + dragPhi, width: size * dpr, height: size * dpr });
      frame = requestAnimationFrame(render);
    };

    const start = () => {
      if (!frame && visible && document.visibilityState === "visible") frame = requestAnimationFrame(render);
    };
    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    });
    io.observe(canvas);

    const onVisibility = () => (document.visibilityState === "visible" ? start() : stop());
    document.addEventListener("visibilitychange", onVisibility);

    const ro = new ResizeObserver(() => {
      size = canvas.offsetWidth;
    });
    ro.observe(canvas);

    const onDown = (event: PointerEvent) => {
      pointer.current = { x: event.clientX, phi: dragPhi };
      canvas.setPointerCapture(event.pointerId);
      canvas.style.cursor = "grabbing";
    };
    const onMove = (event: PointerEvent) => {
      if (!pointer.current) return;
      const next = pointer.current.phi + (event.clientX - pointer.current.x) / 180;
      velocity = (next - dragPhi) * 0.25;
      dragPhi = next;
    };
    const onUp = () => {
      pointer.current = null;
      canvas.style.cursor = "grab";
    };
    canvas.addEventListener("pointerdown", onDown);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerup", onUp);
    canvas.addEventListener("pointercancel", onUp);

    // Fade in once the first frame has been drawn.
    requestAnimationFrame(() => {
      canvas.style.opacity = "1";
      onReady?.();
    });

    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      canvas.removeEventListener("pointerdown", onDown);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerup", onUp);
      canvas.removeEventListener("pointercancel", onUp);
      globe.destroy();
    };
  }, [onReady]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="aspect-square w-full cursor-grab touch-pan-y opacity-0 transition-opacity duration-1000 [contain:layout_paint_size]"
    />
  );
}
