"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sidebar, SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  {
    label: "Dashboard",
    href: "/v1/admin",
    icon: DashboardIcon,
  },
  {
    label: "Leads",
    href: "/v1/admin/leads",
    icon: LeadsIcon,
  },
];

function DashboardIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M4 5.5C4 4.67 4.67 4 5.5 4h4C10.33 4 11 4.67 11 5.5v5c0 .83-.67 1.5-1.5 1.5h-4C4.67 12 4 11.33 4 10.5v-5ZM13 5.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5h-4C13.67 9 13 8.33 13 7.5v-2ZM13 13.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-4c-.83 0-1.5-.67-1.5-1.5v-5ZM4 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5h-4C4.67 20 4 19.33 4 18.5v-2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LeadsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M7 8.5h10M7 12h7M7 15.5h5M5.5 20h9.84c.43 0 .84-.17 1.15-.48l2.03-2.03c.31-.31.48-.72.48-1.15V5.5C19 4.67 18.33 4 17.5 4h-12C4.67 4 4 4.67 4 5.5v13c0 .83.67 1.5 1.5 1.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M20 20c0-3.31-3.58-6-8-6s-8 2.69-8 6M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LogOutIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M15 17l5-5-5-5M20 12H9M12 20H6.5A2.5 2.5 0 0 1 4 17.5v-11A2.5 2.5 0 0 1 6.5 4H12"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PanelIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M4 5.5C4 4.67 4.67 4 5.5 4h13c.83 0 1.5.67 1.5 1.5v13c0 .83-.67 1.5-1.5 1.5h-13C4.67 20 4 19.33 4 18.5v-13ZM9 4v16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <nav className="space-y-1.5">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = item.href === "/v1/admin" ? pathname === item.href : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={cn(
              "flex h-11 items-center gap-3 rounded-lg px-3 text-sm font-medium transition",
              isActive
                ? "bg-[#0077b6] text-white shadow-sm shadow-sky-900/10"
                : "text-slate-600 hover:bg-sky-50 hover:text-[#0077b6]",
            )}
          >
            <Icon className="h-5 w-5 shrink-0" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="flex h-full flex-col">
      <Link href="/v1/admin" onClick={onNavigate} className="mb-8 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0077b6] text-base font-bold text-white">
          OS
        </span>
        <span>
          <span className="block text-base font-semibold text-slate-950">Oryen Admin</span>
          <span className="block text-xs text-slate-500">Control panel</span>
        </span>
      </Link>
      <SidebarNav onNavigate={onNavigate} />
      <div className="mt-auto rounded-lg border border-sky-100 bg-sky-50 p-4">
        <p className="text-sm font-semibold text-slate-900">Protected Panel</p>
        <p className="mt-1 text-xs leading-5 text-slate-600">Supabase session required for every admin route.</p>
      </div>
    </div>
  );
}

export function AdminShell({ children }: { children: React.ReactNode }) {
  const [sheetKey, setSheetKey] = React.useState(0);
  const [email, setEmail] = React.useState("admin@oryensolutions.com");

  React.useEffect(() => {
    const token = window.localStorage.getItem("admin_access_token");
    if (!token) return;

    try {
      const [, payload] = token.split(".");
      if (!payload) return;
      const parsed = JSON.parse(window.atob(payload)) as { email?: string };
      if (parsed.email) {
        setEmail(parsed.email);
      }
    } catch {}
  }, []);

  async function handleLogout() {
    await fetch("/api/admin/auth/logout", { method: "POST" });
    window.localStorage.removeItem("admin_access_token");
    window.location.href = "/v1/admin/login";
  }

  return (
    <SidebarProvider>
      <div className="min-h-svh bg-slate-100 text-slate-950">
        <Sidebar>
          <SidebarContent />
        </Sidebar>

        <SidebarInset>
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur md:px-6">
          <div className="flex items-center gap-3">
            <SidebarTrigger className="hidden h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 lg:inline-flex">
              <PanelIcon className="h-5 w-5" />
            </SidebarTrigger>
            <Sheet key={sheetKey}>
              <SheetTrigger className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 lg:hidden">
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Open admin menu</span>
              </SheetTrigger>
              <SheetContent className="left-0 right-auto border-l-0 border-r p-5">
                <SidebarContent onNavigate={() => setSheetKey((key) => key + 1)} />
              </SheetContent>
            </Sheet>
            <div>
              <p className="text-xs font-medium uppercase text-slate-500">Admin Panel</p>
              <h1 className="text-base font-semibold text-slate-950 md:text-lg">OryenSolutions</h1>
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger className="rounded-full">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0077b6] shadow-sm transition hover:bg-sky-50">
                <UserIcon className="h-5 w-5" />
              </span>
              <span className="sr-only">Open user menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="left-auto right-0 w-64">
              <div className="border-b border-slate-100 px-3 py-3">
                <p className="text-sm font-semibold text-slate-950">Admin User</p>
                <p className="text-xs text-slate-500">{email}</p>
              </div>
              <DropdownMenuItem className="mt-2 gap-2">
                <UserIcon className="h-4 w-4" />
                User Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2 text-red-600 hover:bg-red-50" onClick={handleLogout}>
                <LogOutIcon className="h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        <main className="min-h-[calc(100svh-4rem)] p-4 md:p-6">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
