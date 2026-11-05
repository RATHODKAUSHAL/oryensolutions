import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  tone?: "light" | "dark";
};

export function SectionHeading({ eyebrow, title, description, align = "center", tone = "light" }: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <p
        className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] ${
          dark ? "text-sky-300" : "text-[var(--primary)]"
        }`}
      >
        <span className={`h-px w-6 ${dark ? "bg-sky-300" : "bg-[var(--primary)]"}`} />
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-balance text-3xl font-extrabold leading-[1.1] sm:text-4xl lg:text-[2.75rem] ${
          dark ? "text-white" : "text-[var(--text-heading)]"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 text-pretty text-base leading-7 sm:text-lg sm:leading-8 ${dark ? "text-slate-300" : "text-[var(--text-body)]"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
