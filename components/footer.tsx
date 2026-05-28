'use client';

import { site } from '@/src/config/site';
import { BRAND } from '@/lib/brand';

export default function Footer() {
  return (
    <footer className="relative bg-graphite-950 text-stone-100 border-t border-stone-800">
      <div className="frame py-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Left Column: Brand & Tagline */}
        <div className="space-y-3">
          <span className="font-display font-semibold text-lg tracking-[-0.03em] text-stone-100">
            {BRAND.name}
          </span>
          <p className="text-caption text-stone-400 max-w-[280px]">
            {site.tagline}
          </p>
        </div>

        {/* Right Column: Navigation & Copyright */}
        <div className="flex flex-col items-start md:items-end gap-6">
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {site.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-micro text-stone-400 hover:text-stone-100 transition-colors uppercase"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="font-mono text-micro text-stone-600">
            {BRAND.name} · © {new Date().getFullYear()} {site.footerRights}
          </div>
        </div>
      </div>
    </footer>
  );
}
