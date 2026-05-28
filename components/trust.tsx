'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SectionShell } from '@/components/section-shell';
import { site } from '@/src/config/site';
import { MOTION } from '@/lib/design-tokens';

export function TrustSection() {
  return (
    <SectionShell
      id="trust"
      eyebrow={site.sections.trust.eyebrow}
      title={site.sections.trust.title}
      lead={site.sections.trust.lead}
      annotation={site.sections.trust.annotation}
    >
      <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
        {site.trustPillars.map((pillar, index) => (
          <TrustPill
            key={pillar.title}
            index={index}
            title={pillar.title}
            body={pillar.body}
          />
        ))}
      </div>
    </SectionShell>
  );
}

interface TrustPillProps {
  index: number;
  title: string;
  body: string;
}

function TrustPill({ index, title, body }: TrustPillProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <div ref={ref} className="group relative pt-8">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: MOTION.duration.slower, ease: MOTION.ease.smooth, delay: index * MOTION.stagger.subtle }}
        className="absolute top-0 left-0 right-0 h-px bg-stone-300 origin-left"
      />

      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: MOTION.duration.slow, ease: MOTION.ease.smooth }}
          className="flex items-center justify-between"
        >
          <span className="font-mono text-micro text-accent font-semibold">
            0{index + 1} // {site.trustMeta}
          </span>
          <span className="font-mono text-micro text-stone-500 group-hover:text-fg transition-colors">
            {site.trustStatus}
          </span>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: MOTION.duration.slow, delay: 0.1, ease: MOTION.ease.smooth }}
          className="font-display text-heading font-semibold text-fg tracking-tight leading-snug"
        >
          {title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: MOTION.duration.slow, delay: 0.18, ease: MOTION.ease.smooth }}
            className="text-body text-stone-500 font-sans leading-relaxed"
        >
          {body}
        </motion.p>
      </div>
    </div>
  );
}