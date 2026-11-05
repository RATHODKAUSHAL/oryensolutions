import { PlusIcon } from "@/components/ui/icons";

type FaqAccordionProps = {
  items: readonly { question: string; answer: string }[];
  openFirst?: boolean;
};

// Native <details> keeps every answer in the HTML for search engines while staying collapsible.
export function FaqAccordion({ items, openFirst = true }: FaqAccordionProps) {
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <details
          key={item.question}
          open={openFirst && i === 0}
          className="group rounded-2xl border border-slate-200 bg-white transition open:border-sky-200 open:shadow-[0_16px_40px_rgba(2,16,36,0.06)]"
        >
          <summary className="flex cursor-pointer items-center justify-between gap-6 px-6 py-5 text-left text-base font-semibold text-[var(--navy)]">
            {item.question}
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition group-open:rotate-45 group-open:bg-[var(--primary)] group-open:text-white">
              <PlusIcon className="h-4 w-4" />
            </span>
          </summary>
          <p className="px-6 pb-6 text-[15px] leading-7 text-[var(--text-body)]">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
