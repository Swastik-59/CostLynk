'use client';

export type IconKind =
  | 'forecast'
  | 'automation'
  | 'visibility'
  | 'optimization'
  | 'integration'
  | 'intelligence'
  | 'knowledge'
  | 'cost'
  | 'procurement'
  | 'assistant';

const glyphs: Record<IconKind, React.ReactNode> = {
  forecast: (
    <>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M14 7h7v7" />
    </>
  ),
  automation: (
    <>
      <rect x="4" y="4" width="6" height="6" rx="1" />
      <rect x="14" y="4" width="6" height="6" rx="1" />
      <rect x="9" y="14" width="6" height="6" rx="1" />
      <path d="M10 7h4" />
      <path d="M12 10v4" />
    </>
  ),
  visibility: (
    <>
      <path d="M2.5 12s2.8-6 9.5-6 9.5 6 9.5 6-2.8 6-9.5 6-9.5-6-9.5-6Z" />
      <circle cx="12" cy="12" r="2.5" />
    </>
  ),
  optimization: (
    <>
      <path d="M4 20h16" />
      <path d="M7 16v-5" />
      <path d="M12 16V6" />
      <path d="M17 16v-7" />
    </>
  ),
  integration: (
    <>
      <rect x="8" y="8" width="8" height="8" rx="1" />
      <path d="M4 12h4" />
      <path d="M16 12h4" />
      <path d="M12 4v4" />
      <path d="M12 16v4" />
    </>
  ),
  intelligence: (
    <>
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="4" r="2" />
      <circle cx="12" cy="20" r="2" />
      <circle cx="4" cy="12" r="2" />
      <circle cx="20" cy="12" r="2" />
      <path d="M12 6v2" />
      <path d="M12 16v2" />
      <path d="M6 12h2" />
      <path d="M16 12h2" />
    </>
  ),
  knowledge: (
    <>
      <path d="M4 19.5v-15A1.5 1.5 0 0 1 5.5 3H20v18H5.5a1.5 1.5 0 0 1-1.5-1.5z" />
      <path d="M12 6h4" />
      <path d="M12 10h4" />
      <path d="M12 14h4" />
    </>
  ),
  cost: (
    <>
      <rect x="4" y="6" width="16" height="12" rx="2" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M20 12h-2M4 12h2" />
    </>
  ),
  procurement: (
    <>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l-7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <path d="M3.27 6.96L12 12.01l8.73-5.05" />
      <path d="M12 22.08V12" />
    </>
  ),
  assistant: (
    <>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M8 10h.01M12 10h.01M16 10h.01" />
    </>
  ),
};

export function IconGlyph({ kind, className = '' }: { kind: IconKind; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-7 w-7 shrink-0 text-accent transition-all duration-300 ${className}`}
    >
      {glyphs[kind]}
    </svg>
  );
}