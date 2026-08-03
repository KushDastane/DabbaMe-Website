import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@utils/cn';

/**
 * PhoneMockup
 *
 * Ultra-sleek mobile mockup frame with responsive bezel thickness.
 * On mobile, padding is reduced to p-1.5 / p-2 so bezels look razor-thin and modern.
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
        'relative rounded-[22px] xs:rounded-[28px] sm:rounded-[36px]',
        'p-1.5 xs:p-2 sm:p-2.5 md:p-3 bg-[#1C1C1E] border border-white/15',
        'shadow-[0_16px_40px_rgba(0,0,0,0.30)] flex flex-col items-center overflow-hidden select-none',
        className
      )}
    >
      {/* Speaker Pill / Dynamic Notch */}
      <div className="absolute top-2 xs:top-2.5 sm:top-3 z-20 w-12 xs:w-16 sm:w-20 h-2 xs:h-2.5 sm:h-3 rounded-full bg-black/90 flex items-center justify-end px-1.5 xs:px-2 gap-1 pointer-events-none">
        <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-[#111] border border-white/10" />
      </div>

      {/* Screen area */}
      <div className="w-full h-full rounded-[17px] xs:rounded-[22px] sm:rounded-[28px] overflow-hidden bg-[#121212] relative flex items-center justify-center">
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
          /* Empty frame container when WebP is missing */
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
