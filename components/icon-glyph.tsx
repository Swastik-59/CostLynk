type IconKind =
  | 'forecast'
  | 'automation'
  | 'exceptions'
  | 'visibility'
  | 'optimization'
  | 'twin'
  | 'integration';

const glyphs: Record<IconKind, React.ReactNode> = {
  forecast: (
    <>
      <path d="M5 17l5-5 4 4 6-8" />
      <path d="M5 19h14" />
      <path d="M8 7h10" />
    </>
  ),
  automation: (
    <>
      <rect x="4" y="5" width="6" height="6" rx="1.5" />
      <rect x="14" y="5" width="6" height="6" rx="1.5" />
      <rect x="9" y="13" width="6" height="6" rx="1.5" />
      <path d="M10 8h4" />
      <path d="M12 11v2" />
    </>
  ),
  exceptions: (
    <>
      <path d="M12 5v7" />
      <path d="M12 16h.01" />
      <path d="M10.3 4.5l-6.3 11a1.2 1.2 0 0 0 1 1.8h12.6a1.2 1.2 0 0 0 1-1.8l-6.3-11a1.2 1.2 0 0 0-2 0Z" />
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
      <path d="M4 18h16" />
      <path d="M7 14V9" />
      <path d="M12 14V6" />
      <path d="M17 14v-4" />
    </>
  ),
  twin: (
    <>
      <path d="M7 7h10v10H7z" />
      <path d="M5 9h2" />
      <path d="M17 9h2" />
      <path d="M9 5v2" />
      <path d="M15 5v2" />
      <path d="M9 17v2" />
      <path d="M15 17v2" />
    </>
  ),
  integration: (
    <>
      <path d="M8 8h8v8H8z" />
      <path d="M4 12h4" />
      <path d="M16 12h4" />
      <path d="M12 4v4" />
      <path d="M12 16v4" />
    </>
  )
};

export function IconGlyph({ kind }: { kind: IconKind }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 shrink-0 text-accent"
    >
      {glyphs[kind]}
    </svg>
  );
}