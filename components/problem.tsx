'use client';

import { motion } from 'framer-motion';
import { SectionShell } from '@/components/section-shell';
import { site } from '@/src/config/site';
import { MOTION } from '@/lib/design-tokens';
import { createStaggeredReveal } from '@/lib/motion-presets';
import { theme } from '@/lib/theme';

const diagnosticLabels = ['Signal drift', 'Planning lag', 'Execution gap', 'Manual triage'];

const problems = [
  {
    title: 'Demand volatility',
    text: 'Short-term shifts in orders and external demand that planning cycles do not absorb quickly.'
  },
  {
    title: 'Inventory imbalance',
    text: 'Allocation that leaves some nodes overstocked while others are undersupplied.'
  },
  {
    title: 'Delayed exception handling',
    text: 'Incidents that escalate because routing and triage are manual and slow.'
  },
  {
    title: 'Fragmented systems',
    text: 'Differing operational state across ERP, WMS, and TMS undermines cohesive action.'
  },
  {
    title: 'Warehouse congestion',
    text: 'Bottlenecks created by misaligned labor, slotting, and demand surges.'
  },
  {
    title: 'Routing inefficiency',
    text: 'Local optimizations that increase network cost and delay recovery.'
  }
];

const cardVariants = createStaggeredReveal(MOTION.duration.base / 1000, MOTION.stagger.normal);

export function ProblemSection() {
  return (
    <SectionShell id="problem" eyebrow={site.sections.problem.eyebrow} title={site.sections.problem.title} lead={site.sections.problem.lead}>
      <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: MOTION.duration.slow / 1000, ease: MOTION.easing.smooth }}
          viewport={{ once: true, margin: '-100px' }}
          className="rounded-[1.5rem] border border-line/60 bg-white/72 p-6 shadow-soft lg:sticky lg:top-24"
        >
          <div className={theme.typography.label + ' text-muted'}>Diagnostic readout</div>
          <div className="mt-8 space-y-5">
            {diagnosticLabels.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: MOTION.duration.base / 1000,
                  delay: index * MOTION.stagger.subtle,
                  ease: MOTION.easing.default
                }}
                viewport={{ once: true }}
                className="flex items-center justify-between border-b border-line/50 pb-4 last:border-0 last:pb-0"
              >
                <span className="text-sm font-medium text-fg">{item}</span>
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-accent/80">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={cardVariants.container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {problems.map((problem, index) => (
            <motion.article
              key={problem.title}
              variants={cardVariants.item}
              className="rounded-[1.25rem] border border-line/50 bg-white/68 p-5 transition-colors duration-200 hover:border-line/75 hover:bg-white"
              whileHover={{ y: -2 }}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-accent">0{index + 1}</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: MOTION.duration.slow / 1000, delay: 0.14 }}
                  viewport={{ once: true }}
                  className="ml-3 h-px flex-1 origin-left bg-line/50"
                />
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-fg">
                {problem.title}
              </h3>
              <p className="mt-3 max-w-[28ch] text-sm leading-7 text-muted">
                {problem.text}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </SectionShell>
  );
}