'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function ScrollEffects() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element, index) => {
        gsap.fromTo(
          element,
          { y: 16, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power2.out',
            delay: index * 0.015,
            scrollTrigger: {
              trigger: element,
              start: 'top 86%'
            }
          }
        );
      });

      gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((element) => {
        const speed = Number(element.dataset.parallax ?? '1');

        gsap.to(element, {
          y: -16 * speed,
          ease: 'none',
          scrollTrigger: {
            trigger: element.parentElement ?? element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      });
      // Set a CSS variable with normalized page scroll progress for 3D scenes to read
      ScrollTrigger.create({
        start: 0,
        end: 'max',
        onUpdate: (self) => {
          const v = String(self.progress.toFixed(4));
          document.documentElement.style.setProperty('--scroll-progress', v);
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}