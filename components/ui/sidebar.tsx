"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

const SidebarContext = React.createContext<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggle: () => void;
} | null>(null);

export function SidebarProvider({ children, defaultOpen = true }: { children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = React.useState(defaultOpen);
  const value = React.useMemo(
    () => ({
      open,
      setOpen,
      toggle: () => setOpen((current) => !current),
    }),
    [open],
  );

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
}

export function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used inside SidebarProvider");
  }
  return context;
}

export function Sidebar({ children, className }: { children: React.ReactNode; className?: string }) {
  const { open } = useSidebar();

  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 hidden border-r border-slate-200 bg-white p-5 transition-[width,transform] duration-200 lg:block",
        open ? "w-72 translate-x-0" : "w-0 -translate-x-full overflow-hidden p-0",
        className,
      )}
    >
      {open ? children : null}
    </aside>
  );
}

export function SidebarInset({ children, className }: { children: React.ReactNode; className?: string }) {
  const { open } = useSidebar();

  return (
    <div className={cn("transition-[padding] duration-200", open ? "lg:pl-72" : "lg:pl-0", className)}>
      {children}
    </div>
  );
}

export function SidebarTrigger({ children, className }: { children: React.ReactNode; className?: string }) {
  const { toggle, open } = useSidebar();

  return (
    <button
      type="button"
      className={className}
      onClick={toggle}
      aria-pressed={open}
      aria-label={open ? "Close sidebar" : "Open sidebar"}
    >
      {children}
    </button>
  );
}
