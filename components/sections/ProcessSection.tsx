import { SectionHeading } from "@/components/sections/SectionHeading";

const processSteps = [
  {
    title: "Discovery",
    detail: "We learn your goals, users and current bottlenecks, and agree on what success looks like.",
    deliverable: "Scope & estimate",
  },
  {
    title: "Design",
    detail: "We plan the architecture and design the key screens so you can see the product before it's built.",
    deliverable: "Clickable prototype",
  },
  {
    title: "Build",
    detail: "We develop in focused sprints and show you a working build every week, so feedback shapes the product.",
    deliverable: "Weekly demo builds",
  },
  {
    title: "Test",
    detail: "We test core flows, edge cases and performance on real devices before anything reaches your users.",
    deliverable: "Release-ready build",
  },
  {
    title: "Launch & grow",
    detail: "We deploy safely, monitor stability and keep improving the product as your business grows.",
    deliverable: "Live product + support",
  },
] as const;

export function ProcessSection() {
  return (
<<<<<<< HEAD
    <section id="process" className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(84,131,179,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(84,131,179,0.1)_1px,transparent_1px)] bg-[size:92px_92px]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full border border-[#7DA0CA]/70 bg-white px-4 py-1 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">
            How We Work
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#021024] sm:text-4xl">A delivery process built to keep scope clear and momentum visible.</h2>
        </div>

        <div className="mt-12 lg:hidden">
          <div className="relative space-y-5 pl-14">
            <div className="pointer-events-none absolute bottom-6 left-6 top-6 w-px bg-[#bfd8ef]" />
            <motion.div
              className="pointer-events-none absolute left-6 top-6 w-px bg-[#5483B3]"
              initial={{ height: 0 }}
              whileInView={{ height: "calc(100% - 3rem)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
=======
    <section id="process" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How we work"
          title="A clear path from idea to launch"
          description="Five steps, each ending with something concrete you can review. No black boxes, no surprises at the end."
        />
>>>>>>> 39a65ba (changes in new)

        <div className="relative mt-16">
          <div className="pointer-events-none absolute left-[10%] right-[10%] top-6 hidden h-px bg-gradient-to-r from-sky-200 via-[var(--primary)] to-sky-200 lg:block" />
          <div className="pointer-events-none absolute bottom-6 left-6 top-6 w-px bg-gradient-to-b from-sky-200 via-[var(--primary)] to-sky-200 lg:hidden" />
          <ol className="relative grid gap-10 lg:grid-cols-5 lg:gap-5">
            {processSteps.map((step, index) => (
              <li key={step.title} className="relative pl-16 lg:pl-0">
                <span className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--navy)] text-sm font-bold text-white ring-8 ring-white lg:relative lg:mx-auto">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="lg:mt-6 lg:text-center">
                  <h3 className="text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-[15px] leading-7 text-[var(--text-body)]">{step.detail}</p>
                  <p className="mt-4 inline-flex rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-[var(--primary)]">
                    You get: {step.deliverable}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
