import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRAND } from '@constants/brand';

/**
 * LoadingScreen
 *
 * Minimal brand splash screen shown on initial page load.
 * Fades out gracefully after `duration` ms.
 *
 * Intentionally simple — the brand mark and a subtle pulse.
 * No spinners, no progress bars, no over-designed intros.
 *
 * Props:
 *   duration  — how long to show the loading screen in ms (default: 1400)
 *   onComplete — optional callback fired when the screen exits
 */
export function LoadingScreen({ duration = 1400, onComplete }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onComplete?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading-screen"
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
          }}
          aria-label="Loading DabbaMe"
          aria-live="polite"
        >
          {/* Brand mark */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col items-center gap-3"
          >
            {/* Logo text */}
            <span
              className="font-editorial text-3xl font-medium tracking-tight text-brand-dark"
              aria-label={BRAND.name}
            >
              Dabba<span className="text-brand-goldAccent">Me</span>
            </span>

            {/* Subtle gold dot pulse */}
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-brand-gold"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration:   1.2,
                repeat:     Infinity,
                ease:       'easeInOut',
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
