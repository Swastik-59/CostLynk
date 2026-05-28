'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MOTION } from '@/lib/design-tokens';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
}

export default function TextReveal({ text, className = '', delay = 0, once = true }: TextRevealProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(containerRef, { once, margin: '-10% 0px -10% 0px' });

  // Split text into words
  const words = text.split(' ');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: MOTION.stagger.tight,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: MOTION.duration.base,
        ease: MOTION.ease.smooth as [number, number, number, number],
      },
    },
  };

  return (
    <motion.span
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={`inline-flex flex-wrap gap-x-[0.25em] gap-y-[0.1em] text-pretty ${className}`}
    >
      {words.map((word, wordIndex) => {
        // Handle explicit line breaks if needed or just render normally
        if (word === '\n') {
          return <span key={wordIndex} className="w-full" />;
        }
        return (
          <span key={wordIndex} className="inline-block overflow-hidden py-[0.1em] -my-[0.1em]">
            <motion.span
              variants={wordVariants}
              className="inline-block"
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </motion.span>
  );
}
