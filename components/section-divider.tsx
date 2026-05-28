'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MOTION } from '@/lib/design-tokens';

interface SectionDividerProps {
  label?: string;
  className?: string;
  variant?: 'light' | 'dark';
}

export default function SectionDivider({
  label,
  className = '',
  variant = 'light',
}: SectionDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20% 0px' });

  const bgChip = variant === 'dark' ? 'bg-graphite-900' : 'bg-bg';
  const lineClass = variant === 'dark' ? 'bg-stone-700' : 'kinetic-line';

  return (
    <div
      ref={ref}
      className={`frame relative flex items-center justify-between py-10 md:py-12 ${className}`}
      data-reveal
    >
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: MOTION.duration.cinematic, ease: MOTION.ease.smooth }}
        className={`absolute left-0 right-0 origin-left ${lineClass}`}
      />
      {label && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: MOTION.duration.slow, delay: 0.25, ease: MOTION.ease.out }}
          className={`relative z-10 font-mono text-micro text-stone-500 ${bgChip} px-4 select-none ml-auto flex items-center gap-3`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
          {label}
        </motion.div>
      )}
    </div>
  );
}
