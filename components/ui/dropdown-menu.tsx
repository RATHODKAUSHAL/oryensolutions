"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

const DropdownMenuContext = React.createContext<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);

export function DropdownMenu({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);

  return (
    <DropdownMenuContext.Provider value={{ open, setOpen }}>
      <div className="relative" onMouseLeave={() => setOpen(false)}>
        {children}
      </div>
    </DropdownMenuContext.Provider>
  );
}

export function DropdownMenuTrigger({ children, className }: { children: React.ReactNode; className?: string }) {
  const ctx = React.useContext(DropdownMenuContext);
  if (!ctx) return null;

  return (
    <button
      type="button"
      className={cn("inline-flex items-center gap-1.5", className)}
      onClick={() => ctx.setOpen((prev) => !prev)}
      onMouseEnter={() => ctx.setOpen(true)}
      aria-expanded={ctx.open}
      aria-haspopup="menu"
    >
      {children}
    </button>
  );
}

export function DropdownMenuContent({ children, className }: { children: React.ReactNode; className?: string }) {
  const ctx = React.useContext(DropdownMenuContext);
  if (!ctx?.open) return null;

  return (
    <div
      role="menu"
      className={cn(
        "absolute left-0 top-full z-50 mt-2 min-w-48 rounded-xl border border-slate-200 bg-white p-2 shadow-lg",
        className,
      )}
      onMouseEnter={() => ctx.setOpen(true)}
    >
      {children}
    </div>
  );
}

export function DropdownMenuItem({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }) {
  return (
    <button
      type="button"
      role="menuitem"
      className={cn(
        "flex w-full items-center rounded-lg px-3 py-2 text-left text-sm text-slate-700 transition hover:bg-slate-100",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
