'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { layout } from '@/lib/layout';
import { motionSystem } from '@/lib/motion';
import { theme } from '@/lib/theme';

type SectionShellProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  lead: string;
  align?: 'left' | 'center';
  className?: string;
  children?: React.ReactNode;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  lead,
  align = 'left',
  className,
  children
}: SectionShellProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: motionSystem.stagger.subtle,
        delayChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: motionSystem.duration.base / 1000, ease: motionSystem.easing.standard },
    },
  };

  return (
    <section id={id} className={cn('relative border-t border-line/50', className)}>
      <div className={cn('mx-auto', layout.frame, layout.sectionPadding)}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className={cn('grid gap-8', align === 'center' ? 'justify-items-center text-center' : '')}
        >
          {eyebrow ? (
            <motion.p
              variants={itemVariants}
              className={theme.typography.label + ' text-muted/80'}
            >
              {eyebrow}
            </motion.p>
          ) : null}
          <motion.h2
            variants={itemVariants}
            className={cn(
              'font-display max-w-[16ch] text-[clamp(2.4rem,4vw,4.4rem)] font-semibold leading-[0.94] tracking-[-0.06em] text-fg',
              align === 'center' ? 'mx-auto' : ''
            )}
          >
            {title}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className={cn(
              'max-w-prose text-base leading-8 text-muted md:text-[1.06rem] md:leading-8',
              align === 'center' ? 'mx-auto' : ''
            )}
          >
            {lead}
          </motion.p>
        </motion.div>
        {children ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: motionSystem.duration.slow / 1000, delay: 0.18, ease: motionSystem.easing.standard }}
            viewport={{ once: true }}
            className="mt-12 md:mt-14 lg:mt-16"
          >
            {children}
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}