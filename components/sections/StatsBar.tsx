import { ClockIcon, GlobeIcon, GridIcon, LayersIcon } from "@/components/ui/icons";

const stats = [
  { value: "10+", label: "Industries served", icon: GridIcon },
  { value: "US & Global", label: "Clients across time zones", icon: GlobeIcon },
  { value: "4–12 wks", label: "Typical time to launch", icon: ClockIcon },
  { value: "End-to-end", label: "Design, build & support", icon: LayersIcon },
] as const;

export function StatsBar() {
  return (
    <section aria-label="Oryen Solutions at a glance" className="border-b border-slate-200 bg-white">
      <ul className="mx-auto grid w-full max-w-7xl grid-cols-2 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <li
              key={stat.label}
              className={`flex items-center gap-3 py-6 sm:gap-4 sm:py-8 lg:justify-center ${
                i % 2 === 1 ? "pl-4 sm:pl-6" : "pr-2"
              } ${i > 1 ? "border-t border-slate-200 lg:border-t-0" : ""} ${i > 0 ? "lg:border-l lg:border-slate-200 lg:pl-6" : ""}`}
            >
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-[var(--primary)] sm:h-12 sm:w-12 sm:rounded-2xl">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </span>
              <span>
                <span className="block text-lg font-extrabold leading-tight text-[var(--navy)] sm:text-2xl">{stat.value}</span>
                <span className="block text-xs text-slate-500 sm:text-sm">{stat.label}</span>
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
