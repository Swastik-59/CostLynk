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
    >
      <div className="mt-20 space-y-12">
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
    <div ref={rowRef} className="group relative">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: MOTION.duration.slower, ease: MOTION.ease.smooth }}
        className="absolute top-0 left-0 right-0 h-px bg-stone-300 origin-left"
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-8 pb-4">
        <div className="md:col-span-2 flex flex-col justify-between">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: MOTION.duration.slow, ease: MOTION.ease.smooth }}
            className="font-display text-[4.5rem] md:text-[5.2rem] font-semibold text-stone-200 leading-[0.82] tracking-tighter select-none"
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
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: MOTION.duration.slow, delay: 0.2, ease: MOTION.ease.smooth }}
            className="font-mono text-micro text-stone-400 lg:col-span-2 lg:text-right"
          >
            SYSTEM FRICTION
          </motion.p>
        </div>
      </div>
    </div>
  );
}