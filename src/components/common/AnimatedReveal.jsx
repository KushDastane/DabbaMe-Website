import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useReducedMotion } from '@hooks/useReducedMotion';
import { cn } from '@utils/cn';

/**
 * AnimatedReveal
 *
 * Wraps children in a Framer Motion element that fades in with a
 * gentle upward translate as it enters the viewport.
 *
 * Animations are intentionally subtle — they should almost disappear.
 * Respects the user's OS reduced motion preference.
 *
 * Props:
 *   delay      — animation delay in seconds (default: 0)
 *   duration   — animation duration in seconds (default: 0.65)
 *   y          — upward translate distance in px (default: 12)
 *   once       — only animate once (default: true)
 *   threshold  — inView threshold (default: 0.15)
 *   as         — motion element type (default: 'div')
 *   className  — additional classes
 *   children   — content to reveal
 */
export function AnimatedReveal({
  delay     = 0,
  duration  = 0.65,
  y         = 12,
  once      = true,
  threshold = 0.15,
  as        = 'div',
  className,
  children,
}) {
  const ref            = useRef(null);
  const isInView       = useInView(ref, { once, amount: threshold });
  const reducedMotion  = useReducedMotion();

  // Respect prefers-reduced-motion — still show content, skip animation
  const variants = reducedMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden:  { opacity: 0, y },
        visible: { opacity: 1, y: 0 },
      };

  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // Apple cubic bezier
      }}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  );
}
