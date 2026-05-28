'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SectionShell } from '@/components/section-shell';
import { site } from '@/src/config/site';
import { MOTION } from '@/lib/design-tokens';

export function MethodologySection() {
  return (
    <SectionShell
      id="methodology"
      eyebrow={site.sections.methodology.eyebrow}
      title={site.sections.methodology.title}
      lead={site.sections.methodology.lead}
      annotation={site.sections.methodology.annotation}
    >
      <div className="relative mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
        <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
          <div className="h-px w-full bg-stone-300" />
          <p className="font-mono text-micro text-stone-500 whitespace-pre-line">
            {site.methodologyRail}
          </p>
          <div className="rounded-panel border border-stone-200 bg-white p-6">
            <span className="font-mono text-micro text-accent uppercase block mb-2">{site.methodologyNoteLabel}</span>
            <p className="text-caption text-stone-500 font-sans leading-relaxed">
              {site.methodologyNote}
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-12">
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
    <div
      ref={ref}
      className="group relative border-b border-stone-200/60 pb-12 last:border-0 last:pb-0"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        <div className="md:col-span-3">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
            transition={{ duration: MOTION.duration.slow, ease: MOTION.ease.smooth }}
            className="flex items-center gap-3"
          >
            <span className="font-mono text-micro text-accent font-semibold">0{index + 1}</span>
            <span className="font-display font-medium text-heading text-stone-500 group-hover:text-fg transition-colors duration-500">
              {phase}
            </span>
          </motion.div>
        </div>

        <div className="md:col-span-9 space-y-4">
          <motion.h4
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: MOTION.duration.slow, delay: 0.08, ease: MOTION.ease.smooth }}
            className="font-display text-heading font-semibold text-fg tracking-tight leading-tight"
          >
            {title}
          </motion.h4>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: MOTION.duration.slow, delay: 0.14, ease: MOTION.ease.smooth }}
            className="text-body text-stone-500 font-sans leading-relaxed"
          >
            {body}
          </motion.p>
        </div>
      </div>
    </div>
  );
}
