"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  /** Classes for the outer wrapper, which is the element a parent grid lays out (e.g. col-span). */
  containerClassName?: string;
  /** Maximum tilt in degrees. */
  max?: number;
  /** Glare colour; defaults to a soft white highlight. */
  glare?: string;
};

// 3D tilt that follows the pointer, with a moving glare. Uses only transforms (GPU-composited),
// springs back on leave, and does nothing for touch input or reduced-motion users.
export function TiltCard({
  children,
  className = "",
  containerClassName = "",
  max = 7,
  glare = "rgba(255,255,255,0.35)",
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const spring = { stiffness: 220, damping: 22, mass: 0.6 };
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), spring);
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), spring);
  const glareX = useTransform(px, (v) => `${v * 100}%`);
  const glareY = useTransform(py, (v) => `${v * 100}%`);
  const glareOpacity = useSpring(0, spring);
  const glareBackground = useMotionTemplate`radial-gradient(420px circle at ${glareX} ${glareY}, ${glare}, transparent 45%)`;

  const handleMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || event.pointerType !== "mouse" || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    px.set((event.clientX - rect.left) / rect.width);
    py.set((event.clientY - rect.top) / rect.height);
    glareOpacity.set(1);
  };

  const handleLeave = () => {
    px.set(0.5);
    py.set(0.5);
    glareOpacity.set(0);
  };

  return (
    <div className={`[perspective:1000px] ${containerClassName}`}>
      <motion.div
        ref={ref}
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
        style={reduceMotion ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={`relative h-full will-change-transform ${className}`}
      >
        {children}
        <motion.div
          aria-hidden="true"
          style={{ background: glareBackground, opacity: glareOpacity }}
          className="pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-soft-light"
        />
      </motion.div>
    </div>
  );
}
