"use client";

import { useState } from "react";

type LogoImageProps = {
  name: string;
  short: string;
  logo: string;
};

export function LogoImage({ name, short, logo }: LogoImageProps) {
  const [hasError, setHasError] = useState(!logo);

  return (
    <div className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center sm:h-12 sm:w-12">
      {!hasError ? (
        // SVG brand marks are loaded directly to avoid Next image optimization errors on remote SVGs.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logo}
          alt={`${name} logo`}
          loading="lazy"
          className="h-10 w-10 sm:h-12 sm:w-12"
          onError={() => setHasError(true)}
        />
      ) : null}
      <span
        aria-hidden="true"
        className={`${hasError ? "inline-flex" : "hidden"} h-10 w-10 items-center justify-center rounded-2xl bg-[#eaf4fd] font-mono text-sm font-semibold text-[#052659] sm:h-12 sm:w-12`}
      >
        {short}
      </span>
    </div>
  );
}
