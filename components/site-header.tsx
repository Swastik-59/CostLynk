'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { site } from '@/src/config/site';
import { cn } from '@/lib/utils';
import { brand } from '@/lib/brand';
import { motionSystem } from '@/lib/motion';

export function SiteHeader() {
  const [active, setActive] = useState('#hero');
  const [compact, setCompact] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((y) => setCompact(y > 48));
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
    // lock body scroll when drawer is open and close on Escape
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
      <motion.div className="fixed left-0 top-0 z-60 h-px w-full bg-transparent">
        <motion.div style={{ scaleX }} className="origin-left h-px bg-accent/90" />
      </motion.div>

      <motion.header
        animate={{ height: compact ? 56 : 68, backgroundColor: compact ? 'rgba(10,12,16,0.94)' : 'rgba(10,12,16,0.88)' }}
        transition={{ duration: motionSystem.duration.fast / 1000, ease: motionSystem.easing.standard }}
        className={cn('sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl')}
      >
        <div className="mx-auto flex max-w-frame items-center justify-between px-6 md:px-8 lg:px-10" style={{ height: '100%' }}>
          <div className="flex items-center gap-4">
            <a href="#hero" className={cn('group flex flex-col gap-0.5 transition-transform duration-200', compact ? 'scale-[0.98]' : '')}>
              <span className="text-[0.92rem] font-semibold uppercase tracking-[0.2em] text-white">{brand.shortName}</span>
              <span className="font-mono text-[0.64rem] uppercase tracking-[0.3em] text-white/30">{brand.descriptor}</span>
            </a>

            <span aria-hidden className="hidden items-center text-neutral-600 md:flex">
              <span className="inline-block h-4 w-px bg-white/12" />
            </span>
          </div>

          <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
            {site.navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'relative text-[0.7rem] font-mono uppercase tracking-[0.24em] transition-colors duration-200',
                    isActive ? 'text-white' : 'text-white/70 hover:text-white'
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      'absolute -bottom-2 left-0 h-px w-full origin-left bg-accent transition-transform duration-200',
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    )}
                  />
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-4 lg:hidden">
            <button aria-label="Open menu" aria-expanded={drawerOpen} onClick={() => setDrawerOpen(true)} className="p-2">
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0" width="20" height="2" rx="1" fill="currentColor" />
                <rect y="6" width="20" height="2" rx="1" fill="currentColor" />
                <rect y="12" width="20" height="2" rx="1" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>

        {drawerOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: motionSystem.duration.base / 1000, ease: motionSystem.easing.standard }}
            className="fixed inset-0 z-60 flex bg-[rgba(8,10,13,0.98)]"
            role="dialog"
            aria-modal="true"
          >
            <div className="relative w-full px-8 py-8">
              <button aria-label="Close menu" onClick={() => setDrawerOpen(false)} className="absolute right-6 top-6 text-2xl text-white/70 transition-colors hover:text-white">
                ×
              </button>

              <nav className="mt-12 flex h-full flex-col items-start gap-6">
                {site.navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setDrawerOpen(false)}
                    className="border-b border-white/10 pb-3 text-[2rem] font-medium tracking-[-0.04em] text-white md:text-[2.5rem]"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </motion.header>
    </>
  );
}