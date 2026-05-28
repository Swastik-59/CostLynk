'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { site } from '@/src/config/site';
import { SectionShell } from '@/components/section-shell';
import { MOTION } from '@/lib/design-tokens';
import { SystemModule } from '@/components/visual/system-module';

const tabs = [
  { key: 'logistics', label: 'LOGISTICS' },
  { key: 'manufacturing', label: 'MANUFACTURING' },
  { key: 'warehousing', label: 'WAREHOUSING' },
  { key: 'distribution', label: 'DISTRIBUTION' },
  { key: 'retail', label: 'RETAIL' },
] as const;

type TabKey = (typeof tabs)[number]['key'];

export function IndustryFocusSection() {
  const [active, setActive] = useState<TabKey>('logistics');

  const currentIndex = tabs.findIndex((t) => t.key === active);
  const currentData = site.industriesList[currentIndex] ?? site.industriesList[0];

  return (
    <SectionShell
      id="industries"
      eyebrow={site.sections.industries.eyebrow}
      title={site.sections.industries.title}
      lead={site.sections.industries.lead}
      variant="dark"
      annotation={site.sections.industries.annotation}
      atmosphere="dark"
      density="expansive"
      className="border-y border-stone-800"
    >
      <div className="space-y-10">
        <div className="flex flex-wrap gap-2 pb-6 border-b border-stone-800/80">
          {tabs.map((tab) => {
            const isActive = tab.key === active;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActive(tab.key)}
                className={`relative font-mono text-micro px-5 py-2.5 rounded-pill border select-none transition-all duration-300 ${
                  isActive
                    ? 'bg-stone-100 text-graphite-950 border-stone-100 shadow-glow'
                    : 'bg-graphite-800/40 text-stone-400 border-stone-700 hover:text-stone-100 hover:border-stone-500'
                }`}
                aria-selected={isActive}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="min-h-[22rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: MOTION.duration.base, ease: MOTION.ease.smooth }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              <div className="lg:col-span-4 panel-frame-dark space-y-4">
                <span className="font-mono text-micro text-accent font-semibold block uppercase">
                  {currentData.name} Focus
                </span>
                <h3 className="font-display text-display font-semibold text-stone-100 leading-tight max-w-[16ch]">
                  {currentData.headline}
                </h3>
                <p className="text-body text-stone-300 font-sans leading-relaxed">
                  {currentData.body}
                </p>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <span className="font-mono text-micro text-stone-500 block">
                  SYSTEM LEVERAGE OPPORTUNITIES
                </span>
                <div className="grid gap-3 md:grid-cols-2">
                  {currentData.points.map((point, index) => (
                    <SystemModule
                      key={point}
                      index={index}
                      variant="dark"
                      className="!p-5"
                    >
                      <div className="flex items-start gap-4">
                        <span className="font-mono text-micro text-accent shrink-0">
                          0{index + 1}
                        </span>
                        <p className="text-body text-stone-200 font-medium leading-snug">
                          {point}
                        </p>
                      </div>
                    </SystemModule>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionShell>
  );
}
