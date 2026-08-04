import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@utils/cn';

/**
 * PhoneMockup Component
 *
 * Sleek, thin-bezel phone frame with minimal punch-hole camera.
 * Renders screens with smooth transitions.
 *
 * Props:
 *   src         — image URL string (e.g. '/customer-screen-1.webp')
 *   activeIndex — active index for slide tracking & keying
 *   alt         — image description
 *   glowColor   — rgba or hex string for subtle radial backdrop glow
 *   className   — extra class overrides
 *   animated    — set to true when animating between slide transitions
 */
export function PhoneMockup({
  src,
  activeIndex = 0,
  alt = 'DabbaMe App Screen',
  glowColor = 'rgba(245,179,0,0.14)',
  className,
  animated = false,
}) {
  return (
    <div
      className={cn(
        'relative w-full select-none flex-shrink-0 mx-auto',
        className
      )}
    >
      {/* Subtle radial backdrop glow creating depth */}
      <div
        aria-hidden="true"
        className="absolute -inset-6 sm:-inset-8 rounded-full blur-2xl opacity-70 pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${glowColor} 0%, transparent 70%)`,
        }}
      />

      {/* Sleek Ultra-Thin Phone Hardware Frame */}
      <div
        className="relative z-10 rounded-[28px] sm:rounded-[32px] bg-[#1A1A1C] p-1 sm:p-1.5 border border-black/25 overflow-hidden"
        style={{
          boxShadow: '0 24px 50px rgba(0,0,0,0.28), 0 4px 16px rgba(0,0,0,0.15)',
        }}
      >
        {/* Sleek Minimal Punch-Hole Camera Notch */}
        <div
          aria-hidden="true"
          className="absolute top-2 left-1/2 -translate-x-1/2 z-30 w-7 sm:w-9 h-1.5 rounded-full bg-black flex items-center justify-center pointer-events-none shadow-sm"
        >
          <div className="w-1 h-1 rounded-full bg-[#1A1A1A]" />
        </div>

        {/* Screen Area (9 : 19.5 aspect ratio) */}
        <div
          className="relative w-full rounded-[24px] sm:rounded-[28px] overflow-hidden bg-[#121212]"
          style={{ aspectRatio: '9 / 19.5' }}
        >
          {animated ? (
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
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover object-top block"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-b from-[#1A1A1E] via-[#121215] to-[#0A0A0C]" />
                )}
              </motion.div>
            </AnimatePresence>
          ) : (
            <div className="absolute inset-0 w-full h-full">
              {src ? (
                <img
                  src={src}
                  alt={alt}
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover object-top block"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-b from-[#1A1A1E] via-[#121215] to-[#0A0A0C]" />
              )}
            </div>
          )}

          {/* Glass gloss highlight */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent z-20"
          />
        </div>

        {/* Minimal hardware side button accents */}
        <div aria-hidden="true" className="absolute -right-px top-16 w-0.5 h-6 rounded-l bg-white/10" />
        <div aria-hidden="true" className="absolute -left-px top-14 w-0.5 h-4 rounded-r bg-white/10" />
        <div aria-hidden="true" className="absolute -left-px top-20 w-0.5 h-4 rounded-r bg-white/10" />
      </div>
    </div>
  );
}
