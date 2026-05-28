'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SectionShell } from '@/components/section-shell';
import { site } from '@/src/config/site';
import { MOTION } from '@/lib/design-tokens';

export function ProblemSection() {
  return (
    <SectionShell
      id="challenge"
      eyebrow={site.sections.challenge.eyebrow}
      title={site.sections.challenge.title}
      lead={site.sections.challenge.lead}
      annotation={site.sections.challenge.annotation}
      atmosphere="dense"
      density="compact"
      framed
    >
      <div className="space-y-0 divide-y divide-stone-200/80">
        {site.challenges.map((challenge, index) => (
          <ChallengeRow
            key={challenge.title}
            index={index}
            label={challenge.label}
            title={challenge.title}
            body={challenge.body}
          />
        ))}
      </div>
    </SectionShell>
  );
}

interface ChallengeRowProps {
  index: number;
  label: string;
  title: string;
  body: string;
}

function ChallengeRow({ index, label, title, body }: ChallengeRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(rowRef, { once: true, margin: '-10%' });

  return (
    <div ref={rowRef} className="group relative py-8 md:py-10 first:pt-0 last:pb-0">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        <div className="md:col-span-2">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: MOTION.duration.slow, ease: MOTION.ease.smooth }}
            className="font-display text-[4rem] md:text-[4.8rem] font-semibold text-stone-200 leading-[0.82] tracking-tighter select-none"
          >
            {label}
          </motion.span>
        </div>

        <div className="md:col-span-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: MOTION.duration.slow, delay: 0.08, ease: MOTION.ease.smooth }}
            className="font-display text-heading font-semibold text-fg tracking-tight lg:col-span-4 leading-tight"
          >
            {title}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: MOTION.duration.slow, delay: 0.15, ease: MOTION.ease.smooth }}
            className="text-body text-stone-500 font-sans leading-relaxed lg:col-span-6"
          >
            {body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: MOTION.duration.slow, delay: 0.2, ease: MOTION.ease.smooth }}
            className="lg:col-span-2 flex lg:justify-end"
          >
            <span className="inline-flex items-center gap-2 font-mono text-micro text-stone-400 border border-stone-200 rounded-pill px-3 py-1.5 bg-stone-50/80">
              <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
              FRICTION
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
