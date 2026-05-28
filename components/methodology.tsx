'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SectionShell } from '@/components/section-shell';
import { site } from '@/src/config/site';
import { MOTION } from '@/lib/design-tokens';
import { SystemModule } from '@/components/visual/system-module';

export function MethodologySection() {
  return (
    <SectionShell
      id="methodology"
      eyebrow={site.sections.methodology.eyebrow}
      title={site.sections.methodology.title}
      lead={site.sections.methodology.lead}
      annotation={site.sections.methodology.annotation}
      atmosphere="diagram"
      density="expansive"
    >
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
        <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
          <div className="kinetic-line" />
          <SystemModule variant="secondary" index={0} className="!p-6">
            <p className="font-mono text-micro text-stone-500 whitespace-pre-line leading-relaxed">
              {site.methodologyRail}
            </p>
            <div className="mt-6 pt-6 border-t border-stone-200/80">
              <span className="font-mono text-micro text-accent uppercase block mb-2">
                {site.methodologyNoteLabel}
              </span>
              <p className="text-caption text-stone-500 font-sans leading-relaxed">
                {site.methodologyNote}
              </p>
            </div>
          </SystemModule>
        </div>

        <div className="lg:col-span-8 space-y-4">
          {site.methodologySteps.map((step, index) => (
            <MethodologyRow
              key={step.phase}
              index={index}
              phase={step.phase}
              title={step.title}
              body={step.body}
            />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

interface MethodologyRowProps {
  index: number;
  phase: string;
  title: string;
  body: string;
}

function MethodologyRow({ index, phase, title, body }: MethodologyRowProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20% 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -12 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
      transition={{
        duration: MOTION.duration.slow,
        delay: index * MOTION.stagger.subtle,
        ease: MOTION.ease.smooth,
      }}
      className="group relative panel-frame !p-6 md:!p-7 hover:border-stone-300 transition-colors duration-500"
    >
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        <div className="md:col-span-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-micro text-accent font-semibold">0{index + 1}</span>
            <span className="font-display font-medium text-heading text-stone-500 group-hover:text-fg transition-colors duration-500">
              {phase}
            </span>
          </div>
        </div>

        <div className="md:col-span-9 space-y-3">
          <h4 className="font-display text-heading font-semibold text-fg tracking-tight leading-tight">
            {title}
          </h4>
          <p className="text-body text-stone-500 font-sans leading-relaxed">{body}</p>
        </div>
      </div>
    </motion.div>
  );
}
