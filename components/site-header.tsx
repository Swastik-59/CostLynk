'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { site } from '@/src/config/site';
import { cn } from '@/lib/utils';
import { BRAND } from '@/lib/brand';
import { MOTION } from '@/lib/design-tokens';

export function SiteHeader() {
  const [active, setActive] = useState('#hero');
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((y) => setScrolled(y > 32));
  }, [scrollY]);

  useEffect(() => {
    const targets = ['hero', ...site.navLinks.map((link) => link.href.slice(1))];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.reduce((best, entry) => {
          if (!best) return entry;
          return entry.intersectionRatio > best.intersectionRatio ? entry : best;
        }, null as IntersectionObserverEntry | null);

        if (visible && visible.isIntersecting && visible.target instanceof HTMLElement) {
          setActive(`#${visible.target.id}`);
        }
      },
      { rootMargin: '-30% 0px -50% 0px', threshold: [0.1, 0.5] }
    );

    targets.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0.001, 1]);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDrawerOpen(false);
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [drawerOpen]);

  return (
    <>
      <div className="fixed left-0 top-0 z-[100] h-px w-full bg-transparent">
        <motion.div style={{ scaleX }} className="origin-left h-px bg-accent" />
      </div>

      <header
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-300',
          scrolled
            ? 'bg-bg/85 backdrop-blur-md border-b border-stone-200 py-3.5'
            : 'bg-transparent border-b border-transparent py-5'
        )}
      >
        <div className="frame flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 select-none group">
            <span className="font-display font-semibold text-lg tracking-[-0.03em] text-fg">
              {BRAND.name}
            </span>
          </a>

          {/* Nav links */}
          <nav aria-label="Primary" className="hidden lg:flex items-center gap-8">
            {site.navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'relative font-mono text-micro tracking-[0.16em] uppercase transition-colors duration-300',
                    isActive ? 'text-fg' : 'text-stone-400 hover:text-fg'
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      'absolute -bottom-1 left-0 h-px w-full bg-fg origin-left transition-transform duration-300',
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    )}
                  />
                </a>
              );
            })}
          </nav>

          {/* CTA / Drawer trigger */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center font-mono text-micro tracking-[0.12em] uppercase border border-stone-300 hover:border-fg rounded-pill px-5 py-2 transition-colors duration-300"
            >
              {site.headerCta}
            </a>

            <button
              aria-label="Open menu"
              aria-expanded={drawerOpen}
              onClick={() => setDrawerOpen(true)}
              className="p-1 lg:hidden text-fg hover:opacity-70 transition-opacity"
            >
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="18" height="1.5" rx="0.75" fill="currentColor" />
                <rect y="5" width="18" height="1.5" rx="0.75" fill="currentColor" />
                <rect y="10" width="18" height="1.5" rx="0.75" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>

        {/* Drawer overlay */}
        {drawerOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-10%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-10%' }}
            transition={{ duration: MOTION.duration.base, ease: MOTION.ease.smooth }}
            className="fixed inset-0 z-50 flex flex-col bg-bg px-6 py-8"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between">
              <span className="font-display font-semibold text-lg tracking-[-0.03em] text-fg">
                {BRAND.name}
              </span>
              <button
                aria-label="Close menu"
                onClick={() => setDrawerOpen(false)}
                className="p-2 text-fg hover:opacity-70 text-lg font-mono"
              >
                {site.mobileMenuClose}
              </button>
            </div>

            <nav className="mt-16 flex flex-col gap-6">
              {site.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setDrawerOpen(false)}
                  className="font-display text-[2.5rem] font-medium tracking-tight text-fg border-b border-stone-200 pb-2 hover:pl-2 transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setDrawerOpen(false)}
                className="mt-8 font-mono text-label text-center border border-fg py-4 rounded-pill hover:bg-fg hover:text-bg transition-colors duration-300"
              >
                {site.mobileMenuCta}
              </a>
            </nav>
          </motion.div>
        )}
      </header>
    </>
  );
}