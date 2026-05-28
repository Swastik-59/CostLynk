'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MOTION } from '@/lib/design-tokens';

export function ScrollEffects() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Direct reveals
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
        gsap.fromTo(
          element,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: MOTION.duration.slow,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 86%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // Parallax elements
      gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((element) => {
        const speed = Number(element.dataset.parallax ?? '1');

        gsap.to(element, {
          y: -18 * speed,
          ease: 'none',
          scrollTrigger: {
            trigger: element.parentElement ?? element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });

      // Set scroll progress css variable
      ScrollTrigger.create({
        start: 0,
        end: 'max',
        onUpdate: (self) => {
          document.documentElement.style.setProperty('--scroll-progress', String(self.progress));
        },
      });
    });

    return () => {
      ctx.revert();
      document.documentElement.style.removeProperty('--scroll-progress');
    };
  }, []);

  return null;
}