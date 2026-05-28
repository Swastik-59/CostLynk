'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SectionShell } from '@/components/section-shell';
import { IconGlyph, IconKind } from '@/components/icon-glyph';
import { site } from '@/src/config/site';
import { MOTION } from '@/lib/design-tokens';

const capabilityIcons: Record<number, IconKind> = {
  0: 'automation',
  1: 'assistant',
  2: 'knowledge',
  3: 'integration',
  4: 'cost',
  5: 'procurement',
};

export function CapabilitiesSection() {
  return (
    <SectionShell
      id="capabilities"
      eyebrow={site.sections.capabilities.eyebrow}
      title={site.sections.capabilities.title}
      lead={site.sections.capabilities.lead}
      annotation={site.sections.capabilities.annotation}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {site.capabilitiesList.map((capability, index) => (
          <CapabilityCard
            key={capability.title}
            index={index}
            title={capability.title}
            body={capability.body}
            iconKind={capabilityIcons[index] ?? 'intelligence'}
          />
        ))}
      </div>
    </SectionShell>
  );
}

interface CapabilityCardProps {
  index: number;
  title: string;
  body: string;
  iconKind: IconKind;
}

function CapabilityCard({ index, title, body, iconKind }: CapabilityCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-5%' });

  const widthClass = index % 3 === 0 ? 'lg:col-span-7' : 'lg:col-span-5';

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: MOTION.duration.slow,
        delay: index * MOTION.stagger.normal,
        ease: MOTION.ease.smooth,
      }}
      className={`group relative flex flex-col justify-between border rounded-card p-7 md:p-8 h-full transition-all duration-500 ease-smooth ${
        index % 3 === 0
          ? 'bg-white border-stone-200 hover:border-stone-300'
          : 'bg-stone-100/80 border-stone-200 hover:border-stone-300'
      } ${widthClass}`}
    >
      <div>
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white border border-stone-200 shadow-soft transition-transform duration-500 group-hover:scale-105">
          <IconGlyph
            kind={iconKind}
            className="text-accent group-hover:stroke-[1.75px]"
          />
        </div>

        <h3 className="mt-8 font-display text-heading font-semibold text-fg tracking-tight leading-snug">
          {title}
        </h3>

        <p className="mt-4 max-w-[45ch] text-body text-stone-500 font-sans leading-relaxed">
          {body}
        </p>
      </div>

      <div className="mt-10 flex items-center justify-between border-t border-stone-200/70 pt-4 font-mono text-micro text-stone-500">
        <span>0{index + 1} // {site.capabilityMeta}</span>
        <span>→</span>
      </div>
    </motion.div>
  );
}
