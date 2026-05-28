'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import TextReveal from './text-reveal';
import { MOTION } from '@/lib/design-tokens';
import {
  SectionAtmosphere,
  type AtmosphereVariant,
} from '@/components/visual/section-atmosphere';

interface SectionShellProps {
  id?: string;
  eyebrow?: string;
  title: string;
  lead: string;
  align?: 'left' | 'center';
  className?: string;
  children?: React.ReactNode;
  variant?: 'light' | 'dark';
  annotation?: string;
  atmosphere?: AtmosphereVariant;
  density?: 'default' | 'compact' | 'expansive';
  framed?: boolean;
}

export function SectionShell({
  id,
  eyebrow,
  title,
  lead,
  align = 'left',
  className = '',
  children,
  variant = 'light',
  annotation,
  atmosphere,
  density = 'default',
  framed = false,
}: SectionShellProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  const isDark = variant === 'dark';
  const atmosphereVariant = atmosphere ?? (isDark ? 'dark' : 'light');

  const sectionPadding =
    density === 'compact'
      ? 'section-compact'
      : density === 'expansive'
        ? 'py-28 md:py-36 lg:py-44'
        : 'section';

  return (
    <section
      id={id}
      ref={ref}
      className={`relative w-full overflow-hidden ${
        isDark ? 'bg-graphite-900 text-stone-100' : 'bg-bg text-fg'
      } ${className}`}
    >
      <SectionAtmosphere variant={atmosphereVariant} />

      <div className={`${sectionPadding} frame relative z-10`}>
        <div
          className={`grid gap-10 md:gap-12 ${
            align === 'center' ? 'text-center justify-items-center' : 'text-left'
          }`}
        >
          <div
            className={`grid gap-8 lg:grid-cols-12 lg:items-end ${
              align === 'center' ? 'justify-items-center' : ''
            }`}
          >
            <div className="space-y-6 lg:col-span-8">
              {eyebrow && (
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: MOTION.duration.slow, ease: MOTION.ease.smooth }}
                  className="font-mono text-label text-accent"
                >
                  {eyebrow}
                </motion.p>
              )}

              <h2
                className={`font-display text-display font-semibold text-pretty tracking-tight max-w-[22ch] ${
                  isDark ? 'text-stone-50' : 'text-fg'
                }`}
              >
                <TextReveal text={title} once />
              </h2>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{
                duration: MOTION.duration.slow,
                delay: 0.12,
                ease: MOTION.ease.smooth,
              }}
              className={`lg:col-span-4 lg:justify-self-end max-w-[24rem] border-l pl-5 ${
                isDark ? 'border-stone-700 text-stone-400' : 'border-stone-300 text-stone-500'
              } ${align === 'center' ? 'text-left' : ''}`}
            >
              <p className="font-mono text-micro leading-relaxed">
                {annotation ?? 'Operational systems design. Practical AI deployment.'}
              </p>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: MOTION.duration.slow, delay: 0.2, ease: MOTION.ease.smooth }}
            className={`max-w-prose text-body-lg text-pretty leading-relaxed ${
              isDark ? 'text-stone-300' : 'text-stone-500'
            }`}
          >
            {lead}
          </motion.p>
        </div>

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: MOTION.duration.slow, delay: 0.28, ease: MOTION.ease.smooth }}
            className={`mt-14 md:mt-20 ${framed ? (isDark ? 'panel-frame-dark' : 'panel-frame') : ''}`}
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
