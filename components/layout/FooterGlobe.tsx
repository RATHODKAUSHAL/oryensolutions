"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

const SIZE = 220;
// Ahmedabad, plus US locations to show where clients are served.
const AHMEDABAD: [number, number] = [23.03, 72.58];
const NEW_YORK: [number, number] = [40.71, -74.0];
const SAN_FRANCISCO: [number, number] = [37.77, -122.42];

export function FooterGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let phi = -1.2;
    let frame = 0;
    let visible = true;

    let globe: ReturnType<typeof createGlobe>;
    try {
      globe = createGlobe(canvas, {
        devicePixelRatio: dpr,
        width: SIZE * dpr,
        height: SIZE * dpr,
        phi,
        theta: 0.25,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [0.12, 0.3, 0.5],
        markerColor: [0.49, 0.83, 0.99],
        glowColor: [0.05, 0.35, 0.6],
        markers: [
          { location: AHMEDABAD, size: 0.08 },
          { location: NEW_YORK, size: 0.06 },
          { location: SAN_FRANCISCO, size: 0.05 },
        ],
        arcs: [
          { from: AHMEDABAD, to: NEW_YORK },
          { from: AHMEDABAD, to: SAN_FRANCISCO },
        ],
        arcColor: [0.22, 0.74, 0.97],
        arcWidth: 0.6,
        arcHeight: 0.35,
      });
    } catch {
      // WebGL unavailable: leave the canvas empty rather than breaking the footer.
      return;
    }

    canvas.style.opacity = "1";

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    observer.observe(canvas);

    // In cobe a point's screen x is cos(lon + phi), so increasing phi moves the visible surface from left to right.
    const tick = () => {
      if (visible && !reduceMotion) {
        phi += 0.004;
        globe.update({ phi });
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      globe.destroy();
    };
  }, []);

  return (
    <div className="relative h-44 w-44 sm:h-[220px] sm:w-[220px]">
      <div className="absolute inset-2 rounded-full bg-sky-500/10 blur-2xl" />
      <canvas
        ref={canvasRef}
        width={SIZE}
        height={SIZE}
        role="img"
        aria-label="Rotating globe showing Oryen Solutions in Ahmedabad, India, connected to clients in the US and worldwide"
        className="relative h-full w-full opacity-0 transition-opacity duration-700"
      />
    </div>
  );
}
