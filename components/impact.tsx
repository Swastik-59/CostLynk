'use client';

import { motion } from 'framer-motion';
import { SectionShell } from '@/components/section-shell';
import { site } from '@/src/config/site';
import { MOTION } from '@/lib/design-tokens';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: MOTION.duration.base / 1000,
      delay: i * MOTION.stagger.normal,
      ease: MOTION.easing.default,
    },
  }),
};

export function ImpactSection() {
  return (
    <SectionShell id="proof" eyebrow={site.sections.proof.eyebrow} title={site.sections.proof.title} lead={site.sections.proof.lead}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        className="grid gap-5 md:grid-cols-2 xl:grid-cols-5"
      >
        {site.proofMetrics.map((item, i) => (
          <motion.article
            key={item.label}
            custom={i}
            variants={cardVariants}
            whileHover={{ y: -2, transition: { duration: MOTION.duration.fast / 1000 } }}
            className="group rounded-[1.25rem] border border-line/50 bg-white/74 p-6 transition-colors duration-200 hover:border-line/75 hover:bg-white"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * MOTION.stagger.normal + 0.15, duration: MOTION.duration.base / 1000 }}
              className="font-mono text-3xl font-bold tracking-[-0.06em] text-accent"
            >
              {item.value}
            </motion.div>
            <p className="mt-4 text-sm leading-7 text-muted transition-colors duration-200 group-hover:text-fg/80">
              {item.label}
            </p>
          </motion.article>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: MOTION.duration.base / 1000, delay: 0.4, ease: MOTION.easing.default }}
        viewport={{ once: true }}
        className="mt-10 rounded-[1.25rem] border border-line/50 bg-white/70 px-6 py-5 text-sm leading-7 text-muted"
      >
        <p>
          <span className="font-semibold text-fg">Representative impact</span> from comparable operations programs. Actual outcomes vary by data quality, integration depth, and adoption.
        </p>
      </motion.div>
    </SectionShell>
  );
}