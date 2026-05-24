"use client";

import { motion, useReducedMotion } from 'framer-motion';
import { site } from '@/src/config/site';
import { MOTION } from '@/lib/design-tokens';
import { theme } from '@/lib/theme';

export function FinalCtaSection() {
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: MOTION.stagger.subtle,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: MOTION.duration.base / 1000, ease: MOTION.easing.default },
    },
  };

  return (
    <section id="contact" className="border-t border-line/40 bg-gradient-to-b from-white/0 via-white/30 to-white/0">
      <div className="mx-auto grid max-w-frame gap-10 px-6 py-20 md:px-8 md:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-[34rem]"
        >
          <motion.p variants={itemVariants} className={theme.typography.label + ' text-muted/80'}>
            Contact
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="font-display mt-6 max-w-[13ch] text-[clamp(2.8rem,5vw,5.2rem)] font-semibold leading-[0.92] tracking-[-0.06em] text-fg"
          >
            {site.cta.headline}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-prose text-base leading-8 text-muted md:text-lg"
          >
            {site.cta.subhead}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 grid gap-4 rounded-[1.25rem] border border-line/50 bg-white/72 p-6"
          >
            <div className="text-sm font-semibold text-fg">What you get in the first session</div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-3 text-sm leading-7 text-muted"
            >
              {[
                'Operational audit of the current signal flow',
                'Priority list of high-friction decisions',
                'Clear next step for forecasting, automation, or integration'
              ].map((item) => (
                <motion.div key={item} variants={itemVariants} className="flex gap-3">
                  <span className="text-accent mt-1">→</span>
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.form
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: MOTION.duration.slow / 1000, delay: 0.2, ease: MOTION.easing.smooth }}
          viewport={{ once: true }}
          className="rounded-[1.5rem] border border-line/60 bg-[#0f1218] p-8 text-white shadow-soft"
        >
          <div className={theme.typography.label + ' text-white/50'}>
            Let's start the conversation
          </div>

          <div className="mt-8 grid gap-5">
            <label className="grid gap-2 text-sm text-white/80">
              <span className="font-medium">{site.cta.form.name}</span>
              <input
                type="text"
                className="rounded-lg border border-white/12 bg-white/[0.04] px-4 py-3 text-white outline-none transition-colors duration-200 placeholder:text-white/30 focus:border-white/28 focus:bg-white/[0.08] focus:ring-1 focus:ring-accent/20"
                placeholder="Your name"
              />
            </label>
            <label className="grid gap-2 text-sm text-white/80">
              <span className="font-medium">{site.cta.form.email}</span>
              <input
                type="email"
                className="rounded-lg border border-white/12 bg-white/[0.04] px-4 py-3 text-white outline-none transition-colors duration-200 placeholder:text-white/30 focus:border-white/28 focus:bg-white/[0.08] focus:ring-1 focus:ring-accent/20"
                placeholder="name@company.com"
              />
            </label>
            <label className="grid gap-2 text-sm text-white/80">
              <span className="font-medium">{site.cta.form.message}</span>
              <textarea
                rows={4}
                className="resize-none rounded-lg border border-white/12 bg-white/[0.04] px-4 py-3 text-white outline-none transition-colors duration-200 placeholder:text-white/30 focus:border-white/28 focus:bg-white/[0.08] focus:ring-1 focus:ring-accent/20"
                placeholder="Forecast drift, exception handling, integration gaps, warehouse congestion..."
              />
            </label>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, transition: { duration: MOTION.duration.fast / 1000 } }}
              whileTap={{ scale: 0.98 }}
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-sm font-bold text-[#0f1218] transition-all duration-200 hover:shadow-lg hover:bg-white/95"
            >
              {site.cta.submit}
            </motion.button>
          </div>

          <p className="mt-6 text-xs text-white/40">
            We'll review your audit in 2 business days and schedule a working session.
          </p>
        </motion.form>
      </div>
    </section>
  );
}