import { useState, useEffect } from 'react';

/**
 * useReducedMotion
 *
 * Returns `true` if the user's OS has requested reduced motion.
 * Pass this to AnimatedReveal and other animation components to
 * gracefully disable or simplify animations for accessibility.
 *
 * @returns {boolean}
 */
export function useReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(
    () =>
      typeof window !== 'undefined'
        ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
        : false
  );

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e) => setPrefersReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return prefersReduced;
}
