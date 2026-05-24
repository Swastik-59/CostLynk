import { SectionShell } from '@/components/section-shell';

const steps = [
  ['Assess', 'Map the current operating model, data flows, and exception load.'],
  ['Model', 'Define the highest-value decision paths and system dependencies.'],
  ['Integrate', 'Connect source systems and normalize the signals that matter.'],
  ['Automate', 'Move repetitive actions and handoffs into governed workflows.'],
  ['Optimize', 'Tune forecasting, routing, and response logic against outcomes.'],
  ['Scale', 'Roll the system into adjacent teams, sites, or operating regions.']
];

export function ProcessSection() {
  return (
    <SectionShell
      id="process"
      eyebrow="Delivery model"
      title="A disciplined sequence from audit to autonomous execution."
      lead="The work stays concrete: first understand the operating system, then shape the decision model, then automate what should no longer depend on manual judgment."
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