import { useState, useEffect } from 'react';

/**
 * useScrolled
 *
 * Returns `true` when the page has scrolled past `threshold` pixels.
 * Used by Navbar to transition from transparent to solid state.
 *
 * @param {number} threshold - scroll distance in px to trigger (default: 20)
 * @returns {boolean}
 */
export function useScrolled(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    // Set initial state (handles page refresh mid-scroll)
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
}
