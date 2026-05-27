'use client';

import { motion } from 'framer-motion';
import { SectionShell } from '@/components/section-shell';
import { site } from '@/src/config/site';
import { MOTION } from '@/lib/design-tokens';
import { createStaggeredReveal } from '@/lib/motion-presets';
import { theme } from '@/lib/theme';

const cardVariants = createStaggeredReveal(MOTION.duration.base / 1000, MOTION.stagger.normal);

export function TrustSection() {
  return (
    <SectionShell
      id="trust"
      eyebrow="Why CostLynk"
      title="Built for enterprise teams that need real savings, not dashboards."
      lead="CostLynk is designed for security, scale, and fast time-to-value — so your team sees results in weeks."
    >
      <div className="grid gap-6 lg:grid-cols-[0.33fr_0.67fr] lg:items-start">
        <div className="rounded-[1.5rem] border border-line/60 bg-white/74 p-6 shadow-soft lg:sticky lg:top-24">
          <div className={theme.typography.label + ' text-muted'}>Why teams choose us</div>
          <p className="mt-5 max-w-[28ch] text-base leading-8 text-muted">
            Enterprise-grade security, fast deployment, and AI that keeps getting smarter.
          </p>
        </div>

        <motion.div
          variants={cardVariants.container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
        {site.trustPillars.map((item, i) => (
          <motion.article
            key={item.title}
            variants={cardVariants.item}
            whileHover={{ y: -2, transition: { duration: MOTION.duration.fast / 1000 } }}
            className="group rounded-[1.25rem] border border-line/50 bg-white/72 p-6 transition-colors duration-200 hover:border-line/75 hover:bg-white"
          >
            <h3 className="text-lg font-semibold tracking-[-0.03em] text-fg">
              {item.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-muted">
              {item.text}
            </p>
          </motion.article>
        ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: MOTION.duration.slow / 1000, delay: 0.3, ease: MOTION.easing.smooth }}
        viewport={{ once: true }}
        className="mt-10 grid gap-6 rounded-[1.5rem] border border-line/60 bg-[#0f1218] p-8 text-white lg:grid-cols-[0.65fr_0.35fr]"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-[0.65rem] uppercase tracking-[0.32em] text-white/50">
            Deployment approach
          </div>
          <p className="mt-5 max-w-prose text-base leading-8 text-white/85">
            A phased rollout designed for enterprise teams — see savings within weeks while maintaining
            full control over data, access, and change management.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          variants={{
            show: { transition: { staggerChildren: MOTION.stagger.subtle } }
          }}
          viewport={{ once: true }}
          className="grid gap-3 text-sm text-white/80"
        >
          {['Audit first', 'Integrate fast', 'Scale savings'].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * MOTION.stagger.subtle, duration: MOTION.duration.base / 1000 }}
              viewport={{ once: true }}
              className="rounded-lg border border-white/12 bg-white/[0.04] px-5 py-3 font-medium transition-colors hover:border-white/24 hover:bg-white/[0.08]"
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionShell>
  );
}