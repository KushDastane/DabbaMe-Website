import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@utils/cn';

/**
 * PhoneMockup Component
 *
 * Fixed, static phone frame (no floating / hovering movement).
 * Renders screens sliding from right to left like native mobile app navigation.
 *
 * Props:
 *   src         — image URL string (e.g. '/customer-screen-1.webp')
 *   activeIndex — active index for slide tracking & keying
 *   alt         — image description
 *   glowColor   — rgba or hex string for subtle radial backdrop glow
 *   className   — extra class overrides
 */
export function PhoneMockup({
  src,
  activeIndex = 0,
  alt = 'DabbaMe App Screen',
  glowColor = 'rgba(245,179,0,0.14)',
  className,
}) {
  return (
    <div
      className={cn(
        'relative w-full max-w-[200px] sm:max-w-[215px] md:max-w-[225px] mx-auto select-none flex-shrink-0',
        className
      )}
    >
      {/* Extremely subtle radial backdrop glow creating depth */}
      <div
        aria-hidden="true"
        className="absolute -inset-6 sm:-inset-8 rounded-full blur-2xl opacity-80 pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${glowColor} 0%, transparent 70%)`,
        }}
      />

      {/* Static Phone Hardware Frame (Fixed, no floating/hovering animation) */}
      <div
        className="relative z-10 rounded-[34px] bg-[#1C1C1E] p-2 sm:p-2.5 border border-white/15 overflow-hidden"
        style={{
          boxShadow: '0 24px 60px rgba(0,0,0,0.28), 0 4px 14px rgba(0,0,0,0.16)',
        }}
      >
        {/* Dynamic Island Top Notch */}
        <div
          aria-hidden="true"
          className="absolute top-3.5 left-1/2 -translate-x-1/2 z-30 w-20 sm:w-22 h-4 sm:h-4.5 rounded-full bg-black flex items-center justify-end px-2 gap-1 pointer-events-none"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#222] border border-white/10" />
        </div>

        {/* Screen Area (9 : 19.5 aspect ratio) */}
        <div
          className="relative w-full rounded-[26px] overflow-hidden bg-[#121212]"
          style={{ aspectRatio: '9 / 19.5' }}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={`${activeIndex}-${src || 'empty'}`}
              initial={{ x: '100%' }}
              animate={{ x: '0%' }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              {src ? (
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-full object-cover object-top block"
                />
              ) : (
                /* Sleek, clean minimal dark display when image is loading / empty */
                <div className="w-full h-full bg-gradient-to-b from-[#1A1A1E] via-[#121215] to-[#0A0A0C]" />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Glass gloss highlight */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent z-20"
          />
        </div>

        {/* Physical hardware side buttons */}
        <div aria-hidden="true" className="absolute -right-px top-20 w-0.5 h-8 rounded-l bg-white/15" />
        <div aria-hidden="true" className="absolute -left-px top-16 w-0.5 h-6 rounded-r bg-white/15" />
        <div aria-hidden="true" className="absolute -left-px top-26 w-0.5 h-6 rounded-r bg-white/15" />
      </div>
    </div>
  );
}
