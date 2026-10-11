import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop
 *
 * Automatically manages scroll position on route path & hash changes.
 * When returning to an anchor like /#our-growing-network, it immediately restores
 * the exact scroll position or jumps to the element with zero scroll animation
 * and without starting from the top of the page.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    // Disable native browser automatic scroll jumping
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    if (hash) {
      const id = hash.replace('#', '');
      const html = document.documentElement;
      html.style.scrollBehavior = 'auto';

      // Check if we saved the exact previous scroll position before opening locations
      if (id === 'our-growing-network') {
        try {
          const savedPos = sessionStorage.getItem('dabbame_network_scroll_pos');
          if (savedPos) {
            window.scrollTo(0, parseFloat(savedPos));
            return;
          }
        } catch {
          // ignore
        }
      }

      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'instant', block: 'start' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
