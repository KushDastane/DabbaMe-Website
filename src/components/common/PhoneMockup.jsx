import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@utils/cn';

/**
 * PhoneMockup
 *
 * Renders a clean mobile mockup frame with an <img> tag and screen entrance animation.
 * References user-provided WebP files:
 * - public/images/mockups/discover-screen.webp
 * - public/images/mockups/kitchen-details-screen.webp
 *
 * If missing/unloaded, renders a sleek empty frame preserving layout.
 * NO placeholder graphics, NO fake UI, NO generated artwork.
 */
export function PhoneMockup({
  src,
  alt = 'DabbaMe App Screen',
  delay = 0,
  className,
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={cn(
        'relative rounded-[38px] p-2.5 bg-[#1C1C1E] border border-white/15',
        'shadow-[0_20px_50px_rgba(0,0,0,0.35)] flex flex-col items-center overflow-hidden select-none',
        className
      )}
    >
      {/* Speaker Pill / Dynamic Notch */}
      <div className="absolute top-3.5 z-20 w-20 h-3.5 rounded-full bg-black/90 flex items-center justify-end px-2 gap-1 pointer-events-none">
        <div className="w-2 h-2 rounded-full bg-[#111] border border-white/10" />
      </div>

      {/* Screen area */}
      <div className="w-full h-full rounded-[30px] overflow-hidden bg-[#121212] relative flex items-center justify-center">
        {!hasError && src ? (
          <motion.img
            src={src}
            alt={alt}
            onError={() => setHasError(true)}
            initial={{ opacity: 0, scale: 1.05, y: 12 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              duration: 0.85,
              delay: delay + 0.1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="w-full h-full object-cover object-top block"
          />
        ) : (
          /* Empty frame container when WebP is missing — preserves layout cleanly */
          <div className="w-full h-full bg-[#161618] border border-white/5" />
        )}

        {/* Subtle glass gloss highlight */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent"
        />
      </div>
    </div>
  );
}
