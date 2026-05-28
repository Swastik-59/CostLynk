'use client';

import { motion } from 'framer-motion';

export type AtmosphereVariant =
  | 'hero'
  | 'light'
  | 'dense'
  | 'technical'
  | 'diagram'
  | 'dark'
  | 'immersive';

interface SectionAtmosphereProps {
  variant?: AtmosphereVariant;
  className?: string;
}

export function SectionAtmosphere({ variant = 'light', className = '' }: SectionAtmosphereProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div className="atmosphere-grain absolute inset-0" />

      {variant === 'hero' && <HeroLayers />}
      {variant === 'light' && <LightLayers />}
      {variant === 'dense' && <DenseLayers />}
      {variant === 'technical' && <TechnicalLayers />}
      {variant === 'diagram' && <DiagramLayers />}
      {variant === 'dark' && <DarkLayers />}
      {variant === 'immersive' && <ImmersiveLayers />}
    </div>
  );
}

function HeroLayers() {
  return (
    <>
      <BlueprintGrid size={68} opacity={0.22} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(77,105,141,0.16),transparent_42%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_88%,rgba(132,122,102,0.1),transparent_38%)]" />
      <ArchitecturalLines />
      <motion.div
        data-parallax="0.6"
        className="absolute -right-24 top-24 h-64 w-64 rounded-full border border-accent/20"
        animate={{ opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
    </>
  );
}

function LightLayers() {
  return (
    <>
      <BlueprintGrid size={56} opacity={0.14} />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.35)_0%,transparent_28%)]" />
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-stone-300/60 to-transparent" />
    </>
  );
}

function DenseLayers() {
  return (
    <>
      <BlueprintGrid size={48} opacity={0.18} />
      <div className="absolute inset-0 bg-stone-100/40" />
      <div className="absolute inset-x-0 top-0 h-px bg-stone-300/80" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-stone-300/50" />
    </>
  );
}

function TechnicalLayers() {
  return (
    <>
      <BlueprintGrid size={40} opacity={0.2} />
      <WorkflowMesh />
      <div className="absolute right-0 top-1/4 h-1/2 w-1/3 bg-[radial-gradient(circle_at_70%_50%,rgba(77,105,141,0.08),transparent_70%)]" />
    </>
  );
}

function DiagramLayers() {
  return (
    <>
      <BlueprintGrid size={44} opacity={0.16} />
      <ProcessSchematic />
    </>
  );
}

function DarkLayers() {
  return (
    <>
      <BlueprintGrid size={52} opacity={0.08} light />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(110,134,168,0.14),transparent_45%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(13,16,22,0)_40%,rgba(13,16,22,0.85)_100%)]" />
      <ArchitecturalLines dark />
    </>
  );
}

function ImmersiveLayers() {
  return (
    <>
      <BlueprintGrid size={60} opacity={0.12} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(77,105,141,0.1),transparent_55%)]" />
      <div className="absolute inset-x-8 md:inset-x-16 top-8 bottom-8 border border-stone-300/40 rounded-panel" />
      <CornerMarks />
    </>
  );
}

function BlueprintGrid({
  size,
  opacity,
  light = false,
}: {
  size: number;
  opacity: number;
  light?: boolean;
}) {
  const color = light ? 'rgba(255,255,255,0.06)' : 'rgba(132,122,102,0.14)';
  return (
    <div
      className="absolute inset-0"
      style={{
        opacity,
        backgroundImage: `linear-gradient(to right, ${color} 1px, transparent 1px), linear-gradient(to bottom, ${color} 1px, transparent 1px)`,
        backgroundSize: `${size}px ${size}px`,
      }}
    />
  );
}

function ArchitecturalLines({ dark = false }: { dark?: boolean }) {
  const stroke = dark ? 'rgba(255,255,255,0.08)' : 'rgba(132,122,102,0.2)';
  return (
    <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
      <line x1="8%" y1="0" x2="8%" y2="100%" stroke={stroke} strokeWidth="1" />
      <line x1="92%" y1="0" x2="92%" y2="100%" stroke={stroke} strokeWidth="1" />
      <line x1="0" y1="72%" x2="100%" y2="72%" stroke={stroke} strokeWidth="1" />
    </svg>
  );
}

function WorkflowMesh() {
  return (
    <svg className="absolute right-0 top-0 h-full w-1/2 max-w-md opacity-[0.35]" viewBox="0 0 400 400" fill="none">
      <circle cx="320" cy="80" r="4" fill="rgba(77,105,141,0.5)" />
      <circle cx="280" cy="160" r="4" fill="rgba(77,105,141,0.4)" />
      <circle cx="340" cy="240" r="4" fill="rgba(77,105,141,0.35)" />
      <circle cx="260" cy="300" r="4" fill="rgba(77,105,141,0.3)" />
      <path
        d="M320 80 L280 160 L340 240 L260 300"
        stroke="rgba(77,105,141,0.25)"
        strokeWidth="1"
        strokeDasharray="4 6"
      />
      <path d="M80 120 L200 120 L200 280 L80 280 Z" stroke="rgba(132,122,102,0.2)" strokeWidth="1" />
      <path d="M120 160 L180 160" stroke="rgba(132,122,102,0.15)" strokeWidth="1" />
      <path d="M120 200 L180 200" stroke="rgba(132,122,102,0.15)" strokeWidth="1" />
      <path d="M120 240 L180 240" stroke="rgba(132,122,102,0.15)" strokeWidth="1" />
    </svg>
  );
}

function ProcessSchematic() {
  return (
    <svg className="absolute left-0 bottom-0 h-2/3 w-2/5 max-w-sm opacity-[0.2]" viewBox="0 0 240 240" fill="none">
      <rect x="20" y="40" width="80" height="48" stroke="rgba(77,105,141,0.4)" strokeWidth="1" />
      <rect x="140" y="40" width="80" height="48" stroke="rgba(77,105,141,0.35)" strokeWidth="1" />
      <rect x="80" y="140" width="80" height="48" stroke="rgba(77,105,141,0.3)" strokeWidth="1" />
      <path d="M100 88 L100 116 L120 116 L120 140" stroke="rgba(77,105,141,0.25)" strokeWidth="1" />
      <path d="M180 88 L180 116 L120 116" stroke="rgba(77,105,141,0.25)" strokeWidth="1" />
    </svg>
  );
}

function CornerMarks() {
  const mark = 'absolute h-8 w-8 border-stone-400/50';
  return (
    <>
      <span className={`${mark} left-6 top-6 border-l border-t md:left-12 md:top-8`} />
      <span className={`${mark} right-6 top-6 border-r border-t md:right-12 md:top-8`} />
      <span className={`${mark} bottom-6 left-6 border-b border-l md:bottom-8 md:left-12`} />
      <span className={`${mark} bottom-6 right-6 border-b border-r md:bottom-8 md:right-12`} />
    </>
  );
}
