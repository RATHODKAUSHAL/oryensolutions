import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const items = [
  {
    title: "Tekla Workflow Intelligence",
    text: "Automate repetitive drawing and model coordination tasks with precision-first engineering logic.",
    tags: ["Tekla API", "Drawing Automation", "BIM Accuracy"],
    accent: "from-[#e9f2ff] to-[#f7fbff]",
    border: "border-[#7DA0CA]/45",
    chip: "bg-[#e9f2ff] text-[#2f5f90]",
    button: "bg-[#0077b6] hover:bg-[#005f92]",
    type: "tekla" as const,
  },
  {
    title: "Web Product Acceleration",
    text: "Build scalable web platforms with modern architecture, clean code quality, and rapid release cycles.",
    tags: ["Next.js", "SaaS Build", "Performance"],
    accent: "from-[#e8f9f7] to-[#f5fefd]",
    border: "border-[#5ec7bd]/45",
    chip: "bg-[#e8f9f7] text-[#0f766e]",
    button: "bg-[#0077b6] hover:bg-[#005f92]",
    type: "web" as const,
  },
  {
    title: "Mobile-First Experiences",
    text: "Deliver intuitive mobile apps with strong UX, real-time data handling, and stable integrations.",
    tags: ["Android & iOS", "UI/UX", "API Connected"],
    accent: "from-[#eefcf2] to-[#f9fefb]",
    border: "border-[#66c28b]/45",
    chip: "bg-[#eefcf2] text-[#15803d]",
    button: "bg-[#0077b6] hover:bg-[#005f92]",
    type: "mobile" as const,
  },
] as const;

function Thumbnail({ type }: { type: "tekla" | "web" | "mobile" }) {
  if (type === "tekla") {
    return (
      <div className="relative h-36 rounded-2xl border border-[#7DA0CA]/35 bg-white p-3">
        <div className="h-full rounded-xl border border-[#7DA0CA]/25 bg-[linear-gradient(to_right,rgba(84,131,179,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(84,131,179,0.15)_1px,transparent_1px)] bg-[size:16px_16px]" />
        <div className="absolute left-7 top-8 h-14 w-20 rounded border-2 border-[#2f5f90]" />
      </div>
    );
  }

  if (type === "web") {
    return (
      <div className="h-36 rounded-2xl border border-[#5ec7bd]/30 bg-white p-3">
        <div className="h-full rounded-xl border border-[#5ec7bd]/30 bg-white">
          <div className="flex items-center gap-1 border-b border-[#5ec7bd]/25 px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-[#0f766e]" />
            <span className="h-2 w-2 rounded-full bg-[#5ec7bd]" />
            <span className="h-2 w-2 rounded-full bg-[#7ad6ce]" />
          </div>
          <div className="grid h-[calc(100%-36px)] grid-cols-3 gap-2 p-3">
            <div className="rounded bg-[#e8f9f7]" />
            <div className="col-span-2 rounded bg-[#d5f4f1]" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-36 items-center justify-center rounded-2xl border border-[#66c28b]/35 bg-white p-3">
      <div className="h-full w-20 rounded-[1.5rem] border-2 border-[#15803d] bg-[#eefcf2] p-2">
        <div className="h-full rounded-xl border border-[#66c28b]/40 bg-white" />
      </div>
    </div>
  );
}

export function WhyChooseUs() {
  return (
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
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <Card
              key={item.title}
              className={`group overflow-hidden rounded-3xl ${item.border} bg-gradient-to-br ${item.accent} shadow-[0_10px_28px_rgba(84,131,179,0.1)] transition-all duration-300 hover:-translate-y-1.5`}
            >
              <CardHeader className="pb-3">
                <Thumbnail type={item.type} />
                <CardTitle className="pt-3 text-2xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-7 text-slate-600">{item.text}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag} className={`rounded-full border-0 px-3 py-1 ${item.chip}`}>
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Link href={item.type === "tekla" ? "/services/bim-automation-tekla-custom-development" : "/services/web-development-digital-solutions"}>
                  <Button className={`mt-6 h-10 rounded-full px-5 text-sm text-white ${item.button}`}>Learn more -&gt;</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
