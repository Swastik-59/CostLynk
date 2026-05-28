import { SectionShell } from '@/components/section-shell';

const steps = [
  ['Audit', 'We analyse your current supply chain spend, contracts, and workflows to identify cost leakage.'],
  ['Map savings', 'Our AI maps every saving opportunity by category, supplier, and process — ranked by impact.'],
  ['Integrate', 'CostLynk connects to your existing systems. No rip-and-replace. Live in days.'],
  ['Optimise', 'AI-driven recommendations start flowing. Your team reviews and acts on prioritised savings.'],
  ['Automate', 'Repetitive cost decisions get automated — procurement, approvals, and reorder points.'],
  ['Scale', 'Expand AI optimisation to new categories, sites, and supply chain partners.']
];

export function ProcessSection() {
  return (
    <SectionShell
      id="process"
      eyebrow="Our process"
      title="From cost audit to continuous optimisation in weeks, not months."
      lead="We start by understanding your costs, then deploy AI that delivers measurable savings — fast and with full transparency."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {steps.map(([title, text], index) => (
          <article key={title} className="rounded-[1.35rem] border border-line/60 bg-white/74 p-5 transition-colors duration-200 hover:border-line/75 hover:bg-white">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[0.72rem] uppercase tracking-[0.3em] text-accent">
                0{index + 1}
              </span>
              <span className="ml-3 h-px flex-1 bg-line/70" />
            </div>
            <h3 className="mt-5 text-xl font-medium tracking-[-0.04em] text-fg">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}