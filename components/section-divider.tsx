'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MOTION } from '@/lib/design-tokens';

interface SectionDividerProps {
  label?: string;
  className?: string;
}

export default function SectionDivider({ label, className = '' }: SectionDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20% 0px' });

  return (
    <div
      ref={ref}
      className={`frame relative flex items-center justify-between py-10 md:py-12 ${className}`}
    >
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: MOTION.duration.cinematic, ease: MOTION.ease.smooth }}
        className="absolute left-0 right-0 h-px bg-stone-300 origin-left"
      />
      {label && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: MOTION.duration.slow, delay: 0.25, ease: MOTION.ease.out }}
          className="relative z-10 font-mono text-micro text-stone-500 bg-bg px-4 select-none ml-auto"
        >
          {label}
        </motion.div>
      )}
    </div>
  );
}
