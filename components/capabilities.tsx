'use client';

import { SectionShell } from '@/components/section-shell';
import { IconGlyph, IconKind } from '@/components/icon-glyph';
import { site } from '@/src/config/site';
import { SystemModule } from '@/components/visual/system-module';

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
      atmosphere="technical"
      density="default"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5">
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
  const widthClass = index % 3 === 0 ? 'lg:col-span-7' : 'lg:col-span-5';
  const variant = index % 3 === 0 ? 'primary' : 'secondary';

  return (
    <SystemModule
      index={index}
      variant={variant}
      className={`h-full ${widthClass}`}
      showIndex
      indexLabel={`MOD 0${index + 1}`}
      footer={
        <div className="flex items-center justify-between font-mono text-micro text-stone-500">
          <span>0{index + 1} // {site.capabilityMeta}</span>
          <span className="text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            →
          </span>
        </div>
      }
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-stone-200/90 bg-white/80 shadow-module">
        <IconGlyph kind={iconKind} className="text-accent" />
      </div>

      <h3 className="mt-7 font-display text-heading font-semibold text-fg tracking-tight leading-snug">
        {title}
      </h3>

      <p className="mt-3 max-w-[45ch] text-body text-stone-500 font-sans leading-relaxed">{body}</p>
    </SystemModule>
  );
}
