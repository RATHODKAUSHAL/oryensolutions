import { SectionHeading } from "@/components/sections/SectionHeading";
import { EyeIcon, LifebuoyIcon, TargetIcon, UserCheckIcon } from "@/components/ui/icons";

const reasons = [
  {
    title: "You work with the founders",
    text: "No account managers or hand-offs. The people who scope your project are the senior engineers who build it.",
    icon: UserCheckIcon,
  },
  {
    title: "Built around your workflow",
    text: "We map how your team works today before writing code, so the software removes real bottlenecks instead of adding new ones.",
    icon: TargetIcon,
  },
  {
    title: "Progress you can see",
    text: "Agile sprints with a working demo every week. You always know what's done, what's next and where the budget is going.",
    icon: EyeIcon,
  },
  {
    title: "Support after launch",
    text: "Monitoring, updates, security patches and new features, so your software keeps improving long after go-live.",
    icon: LifebuoyIcon,
  },
] as const;

const contrasts = [
  { them: "Generic templates", us: "Built for your process" },
  { them: "Surprise invoices", us: "Clear scope & estimates" },
  { them: "Silent for weeks", us: "Weekly working demos" },
  { them: "Gone after launch", us: "Ongoing support" },
] as const;

export function WhyChooseUs() {
  return (
<<<<<<< HEAD
    <section className="bg-[#f8fcff] py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full border border-[#7DA0CA]/70 bg-white px-4 py-1 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">
            Why Choose OryenSolutions
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#021024]">Specialized execution beats generic agency promises.</h2>
          <p className="mt-4 text-lg text-[var(--text-body)]">
            The advantage is not just speed. It is domain understanding, tighter feedback loops, and builds that fit the way your team already works.
          </p>
=======
    <section id="why-us" className="relative overflow-hidden bg-[var(--navy)] py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 dark-grid" />
      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-[#0077b6]/30 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
        <div>
          <SectionHeading
            tone="dark"
            align="left"
            eyebrow="Why Oryen"
            title="A partner that treats your project like its own"
            description="Choosing a development partner is a big decision. Here's what working with us looks like, and what you won't have to deal with."
          />

          <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
            <div className="grid grid-cols-2 bg-white/5 px-5 py-3 text-xs font-semibold uppercase tracking-wider">
              <span className="text-slate-400">Typical agency</span>
              <span className="text-sky-300">Oryen Solutions</span>
            </div>
            {contrasts.map((row) => (
              <div key={row.us} className="grid grid-cols-2 border-t border-white/10 px-5 py-3.5 text-sm">
                <span className="text-slate-400 line-through decoration-slate-500/60">{row.them}</span>
                <span className="font-semibold text-white">{row.us}</span>
              </div>
            ))}
          </div>
>>>>>>> 39a65ba (changes in new)
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:border-sky-400/40 hover:bg-white/[0.07]"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/15 text-sky-300">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-lg font-bold text-white">{reason.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-slate-300">{reason.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
