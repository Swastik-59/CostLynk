'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, type ReactNode } from 'react';
import { MOTION } from '@/lib/design-tokens';
import { cn } from '@/lib/utils';

interface SystemModuleProps {
  children: ReactNode;
  className?: string;
  index?: number;
  variant?: 'primary' | 'secondary' | 'dark';
  showIndex?: boolean;
  indexLabel?: string;
  footer?: ReactNode;
}

export function SystemModule({
  children,
  className = '',
  index = 0,
  variant = 'primary',
  showIndex = false,
  indexLabel,
  footer,
}: SystemModuleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-8%' });

  const surface =
    variant === 'primary'
      ? 'surface-module-primary'
      : variant === 'secondary'
        ? 'surface-module-secondary'
        : 'surface-module-dark';

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{
        duration: MOTION.duration.slow,
        delay: index * MOTION.stagger.normal,
        ease: MOTION.ease.smooth,
      }}
      className={cn('group relative', surface, className)}
      data-reveal
    >
      <span className="module-corner module-corner-tl" aria-hidden />
      <span className="module-corner module-corner-br" aria-hidden />
      {showIndex && indexLabel && (
        <span className="absolute right-5 top-5 font-mono text-micro text-stone-400 group-hover:text-accent transition-colors">
          {indexLabel}
        </span>
      )}
      <div className="relative z-[1]">{children}</div>
      {footer && (
        <div className="relative z-[1] mt-8 border-t border-stone-200/70 pt-4 dark:border-stone-700/60">
          {footer}
        </div>
      )}
    </motion.article>
  );
}
