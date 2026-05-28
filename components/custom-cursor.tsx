'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { MOTION } from '@/lib/design-tokens';

type CursorMode = 'default' | 'pointer' | 'text' | 'pressed';

const INTERACTIVE =
  'a, button, [role="button"], input, textarea, select, summary, [data-cursor="pointer"]';

export function CustomCursor() {
  const [active, setActive] = useState(false);
  const [mode, setMode] = useState<CursorMode>('default');
  const [visible, setVisible] = useState(false);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  const x = useSpring(rawX, { stiffness: 520, damping: 36, mass: 0.35 });
  const y = useSpring(rawY, { stiffness: 520, damping: 36, mass: 0.35 });

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    if (reduced || !finePointer) return;

    setActive(true);
    document.documentElement.classList.add('custom-cursor-active');

    return () => {
      document.documentElement.classList.remove('custom-cursor-active');
    };
  }, []);

  useEffect(() => {
    if (!active) return;

    const resolveMode = (target: EventTarget | null): CursorMode => {
      if (!(target instanceof Element)) return 'default';
      if (target.closest('input, textarea, [contenteditable="true"]')) return 'text';
      if (target.closest(INTERACTIVE)) return 'pointer';
      return 'default';
    };

    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      setVisible(true);
      setMode(resolveMode(e.target));
    };

    const onOver = (e: MouseEvent) => setMode(resolveMode(e.target));
    const onDown = () => setMode((m) => (m === 'text' ? 'text' : 'pressed'));
    const onUp = (e: MouseEvent) => setMode(resolveMode(e.target));
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    document.documentElement.addEventListener('mouseleave', onLeave);
    document.documentElement.addEventListener('mouseenter', onEnter);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      document.documentElement.removeEventListener('mouseenter', onEnter);
    };
  }, [active, rawX, rawY]);

  if (!active) return null;

  const isPointer = mode === 'pointer';
  const isText = mode === 'text';
  const isPressed = mode === 'pressed';

  const ringSize = isPointer ? 44 : isText ? 4 : isPressed ? 14 : 22;
  const dotScale = isPressed ? 1.35 : isPointer ? 0.85 : 1;

  return (
    <motion.div
      aria-hidden
      className="custom-cursor-root -translate-x-1/2 -translate-y-1/2"
      style={{ x, y }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ opacity: { duration: MOTION.duration.fast } }}
    >
      {/* Precision crosshair lines */}
      <motion.span
        className="custom-cursor-cross custom-cursor-cross-h"
        animate={{
          width: isPointer ? 56 : isText ? 0 : 28,
          opacity: isText ? 0 : isPointer ? 0.5 : 0.35,
        }}
        transition={{ duration: MOTION.duration.fast, ease: MOTION.ease.smooth }}
      />
      <motion.span
        className="custom-cursor-cross custom-cursor-cross-v"
        animate={{
          height: isPointer ? 56 : isText ? 0 : 28,
          opacity: isText ? 0 : isPointer ? 0.5 : 0.35,
        }}
        transition={{ duration: MOTION.duration.fast, ease: MOTION.ease.smooth }}
      />

      {/* Corner brackets on interactive hover */}
      <motion.span
        className="custom-cursor-bracket custom-cursor-bracket-tl"
        animate={{
          opacity: isPointer ? 1 : 0,
          scale: isPointer ? 1 : 0.6,
        }}
        transition={{ duration: MOTION.duration.fast, ease: MOTION.ease.smooth }}
      />
      <motion.span
        className="custom-cursor-bracket custom-cursor-bracket-tr"
        animate={{
          opacity: isPointer ? 1 : 0,
          scale: isPointer ? 1 : 0.6,
        }}
        transition={{ duration: MOTION.duration.fast, ease: MOTION.ease.smooth }}
      />
      <motion.span
        className="custom-cursor-bracket custom-cursor-bracket-bl"
        animate={{
          opacity: isPointer ? 1 : 0,
          scale: isPointer ? 1 : 0.6,
        }}
        transition={{ duration: MOTION.duration.fast, ease: MOTION.ease.smooth }}
      />
      <motion.span
        className="custom-cursor-bracket custom-cursor-bracket-br"
        animate={{
          opacity: isPointer ? 1 : 0,
          scale: isPointer ? 1 : 0.6,
        }}
        transition={{ duration: MOTION.duration.fast, ease: MOTION.ease.smooth }}
      />

      {/* Outer ring */}
      <motion.span
        className="custom-cursor-ring"
        animate={{
          width: ringSize,
          height: ringSize,
          borderColor: isPointer
            ? 'rgba(77, 105, 141, 0.55)'
            : isText
              ? 'rgba(22, 24, 29, 0.2)'
              : 'rgba(132, 122, 102, 0.45)',
        }}
        transition={{ duration: MOTION.duration.fast, ease: MOTION.ease.smooth }}
      />

      {/* Center datum point */}
      <motion.span
        className="custom-cursor-dot"
        animate={{
          scale: dotScale,
          backgroundColor: isPointer ? '#4D698D' : '#16181D',
        }}
        transition={{ duration: MOTION.duration.fast, ease: MOTION.ease.smooth }}
      />
    </motion.div>
  );
}
