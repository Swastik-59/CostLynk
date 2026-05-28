'use client';

import { motion } from 'framer-motion';
import { SectionShell } from '@/components/section-shell';
import { site } from '@/src/config/site';
import { motionSystem } from '@/lib/motion';

const layers = [
  {
    title: 'Data ingestion',
    body: 'CostLynk connects to your ERP, procurement, and logistics systems to pull in spend, vendor, and operations data.'
  },
  {
    title: 'AI analysis',
    body: 'Our AI models analyse cost patterns, benchmark against market rates, and identify savings opportunities across every category.'
  },
  {
    title: 'Actionable recommendations',
    body: 'Prioritised savings recommendations are delivered to your team with clear steps, expected impact, and one-click implementation.'
  }
];

const sequence = ['Connect your data', 'AI finds savings', 'You take action'];

export function OrchestrationSection() {
  return (
    <SectionShell id="system" eyebrow={site.sections.system.eyebrow} title={site.sections.system.title} lead={site.sections.system.lead}>
      <div className="grid gap-6 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: motionSystem.duration.slow / 1000, ease: motionSystem.easing.standard }}
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-4"
        >
          <div className="rounded-[1.5rem] border border-line/70 bg-white/78 p-6 shadow-soft">
            <div className="font-mono text-[0.68rem] uppercase tracking-[0.34em] text-muted">How CostLynk works</div>
            <p className="mt-5 text-sm leading-7 text-muted">
              Three simple steps. Your data stays secure. The AI does the heavy lifting.
            </p>

            <div className="mt-8 grid gap-3">
              {sequence.map((item, index) => (
                <div key={item} className="flex items-center gap-3 rounded-[1rem] border border-line/60 bg-white/70 px-4 py-3 text-sm text-fg">
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.3em] text-accent">0{index + 1}</span>
                  <span className="h-px flex-1 bg-line/70" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {['Analyse', 'Optimise', 'Save'].map((item) => (
              <div key={item} className="rounded-[1rem] border border-line/60 bg-white/70 px-4 py-3 text-sm text-fg">
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: motionSystem.duration.slower / 1000, ease: motionSystem.easing.standard, delay: 0.05 }}
          viewport={{ once: true, margin: '-100px' }}
          className="relative overflow-hidden rounded-[1.75rem] border border-line/70 bg-[#0f1218] p-6 text-white shadow-soft"
        >
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_24%),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:auto,36px_36px,36px_36px] opacity-35" />

          <div className="relative">
            <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-[0.34em] text-white/45">
              <span>AI pipeline</span>
              <span>CostLynk engine</span>
            </div>

            <div className="mt-8 grid gap-4">
              {layers.map((layer, index) => (
                <motion.article
                  key={layer.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: motionSystem.duration.base / 1000, delay: index * motionSystem.stagger.subtle, ease: motionSystem.easing.standard }}
                  viewport={{ once: true }}
                  className="rounded-[1.2rem] border border-white/10 bg-white/[0.045] p-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-accent">0{index + 1}</span>
                    <span className="h-px flex-1 bg-white/10" />
                  </div>
                  <h3 className="mt-4 text-xl font-medium tracking-[-0.04em] text-white">{layer.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/65">{layer.body}</p>
                </motion.article>
              ))}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {['Ingest', 'Analyse', 'Recommend'].map((item) => (
                <div key={item} className="rounded-[1rem] border border-white/10 bg-white/[0.045] px-4 py-3 text-sm text-white/75">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionShell>
  );
}
