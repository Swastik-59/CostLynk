'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { site } from '@/src/config/site';
import { SectionShell } from '@/components/section-shell';
import { cn } from '@/lib/utils';

const tabs = [
  { key: 'logistics', label: 'Logistics' },
  { key: 'manufacturing', label: 'Manufacturing' },
  { key: 'warehousing', label: 'Warehousing' },
  { key: 'distribution', label: 'Distribution' },
  { key: 'retail', label: 'Retail supply chain' }
] as const;

export function IndustryFocusSection() {
  const [active, setActive] = useState<(typeof tabs)[number]['key']>('logistics');
  const current = site.sectors[active];

  return (
    <SectionShell
      id="sectors"
      eyebrow="Industry focus"
      title="Different operating models, one coherent delivery pattern."
      lead="Each vertical gets its own emphasis, but the system pattern remains the same: clean signal capture, better decisions, and controlled automation."
    >
      <div className="grid gap-6 lg:grid-cols-[0.36fr_0.64fr] lg:items-start">
        <div className="flex flex-wrap gap-2 lg:flex-col lg:gap-3">
          {tabs.map((tab) => {
            const isActive = tab.key === active;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActive(tab.key)}
                className={cn(
                  'rounded-full border px-4 py-2 text-left text-sm transition-colors duration-200 lg:w-full',
                  isActive
                    ? 'border-fg bg-fg text-white'
                    : 'border-line/70 bg-white/70 text-muted hover:border-fg/30 hover:text-fg'
                )}
                aria-selected={isActive}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.article
            key={active}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[1.75rem] border border-line/60 bg-white/82 p-6 shadow-soft"
          >
            <div className="font-mono text-[0.7rem] uppercase tracking-[0.32em] text-muted">
              {current.headline}
            </div>
            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-fg md:text-4xl">
              {current.summary}
            </h3>

            <div className="mt-8 grid gap-3 md:grid-cols-3">
              {current.points.map((point) => (
                <div key={point} className="rounded-2xl border border-line/60 bg-[color:rgba(244,242,236,0.78)] p-4 text-sm leading-7 text-fg">
                  {point}
                </div>
              ))}
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </SectionShell>
  );
}