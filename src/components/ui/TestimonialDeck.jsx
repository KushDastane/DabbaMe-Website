import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@utils/cn';
import { TestimonialCard } from './TestimonialCard';
import { PhoneMockup } from '@components/common/PhoneMockup';

/**
 * TestimonialDeck
 *
 * Two INDEPENDENT loops running in parallel:
 *   1. Phone slideshow — cycles through `screens[]` at `screenInterval` ms.
 *      Works regardless of how many testimonials exist.
 *   2. Testimonial deck — cycles through `testimonials[]` at `interval` ms.
 *      Works regardless of how many screens exist.
 *
 * Props:
 *   testimonials   — array of review objects (any length ≥ 1)
 *   screens        — array of screenshot URLs (any length ≥ 1)
 *   variant        — 'customer' | 'kitchen'
 *   glowColor      — rgba/hex for ambient phone glow
 *   interval       — ms between testimonial card rotations (default 5000)
 *   screenInterval — ms between phone screen slides (default 3500)
 */
export function TestimonialDeck({
  testimonials = [],
  screens = [],
  variant = 'customer',
  glowColor = 'rgba(245,179,0,0.14)',
  interval = 5000,
  screenInterval = 3500,
}) {
  const reviewCount = testimonials.length;
  const screenCount = screens.length;

  // ── Independent state for each loop ──────────────────────────
  const [activeReview, setActiveReview]   = useState(0);
  const [activeScreen, setActiveScreen]   = useState(0);
  const [isHovered,    setIsHovered]      = useState(false);

  const reviewTimerRef = useRef(null);
  const screenTimerRef = useRef(null);

  // ── Phone screen loop (always runs, never pauses) ─────────────
  const advanceScreen = useCallback(() => {
    setActiveScreen((prev) => (prev + 1) % screenCount);
  }, [screenCount]);

  useEffect(() => {
    if (screenCount < 2) return; // nothing to cycle if only one screen
    screenTimerRef.current = setInterval(advanceScreen, screenInterval);
    return () => clearInterval(screenTimerRef.current);
  }, [advanceScreen, screenInterval, screenCount]);

  // ── Testimonial card loop (pauses on hover) ───────────────────
  const advanceReview = useCallback(() => {
    setActiveReview((prev) => (prev + 1) % reviewCount);
  }, [reviewCount]);

  useEffect(() => {
    if (reviewCount < 2) return; // nothing to cycle if only one review
    if (isHovered) {
      clearInterval(reviewTimerRef.current);
      return;
    }
    reviewTimerRef.current = setInterval(advanceReview, interval);
    return () => clearInterval(reviewTimerRef.current);
  }, [isHovered, advanceReview, interval, reviewCount]);

  // ── Safeguard index bounds on array length change ─────────────
  useEffect(() => {
    if (reviewCount > 0 && activeReview >= reviewCount) setActiveReview(0);
  }, [reviewCount, activeReview]);

  useEffect(() => {
    if (screenCount > 0 && activeScreen >= screenCount) setActiveScreen(0);
  }, [screenCount, activeScreen]);

  // ── Current data ──────────────────────────────────────────────
  const currentSrc    = screens[activeScreen] || null;
  const currentReview = testimonials[activeReview] || null;

  return (
    <div className="relative w-full flex flex-col items-center select-none">

      {/* ── DESKTOP & TABLET (sm+) ────────────────────────────── */}
      <div
        className="hidden sm:flex items-center justify-center w-full relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Phone — independently sliding screens */}
        <div className="relative z-10 flex-shrink-0 w-[205px] sm:w-[220px] md:w-[230px]">
          <PhoneMockup
            src={currentSrc}
            activeIndex={activeScreen}
            glowColor={glowColor}
            alt="App Screen"
          />
        </div>

        {/* Stacked card deck — independently rotating reviews */}
        <div className="relative z-20 flex-1 -ml-10 sm:-ml-12 lg:-ml-14 max-w-[340px] sm:max-w-[370px] lg:max-w-[390px] pt-16 pb-4">
          {testimonials.map((item, idx) => {
            const relPos = (idx - activeReview + reviewCount) % reviewCount;
            const isFront = relPos === 0;

            const stackStyles = getStackStyle(relPos, isFront, isHovered, variant);

            return (
              <motion.div
                key={item.id || idx}
                className={cn(
                  'w-full rounded-[28px] overflow-hidden',
                  isFront ? 'relative' : 'absolute top-16 left-0 right-0'
                )}
                style={{
                  zIndex: stackStyles.zIndex,
                  pointerEvents: isFront ? 'auto' : 'none',
                  borderRadius: '28px',
                }}
                animate={{
                  y:         stackStyles.y,
                  scale:     stackStyles.scale,
                  opacity:   stackStyles.opacity,
                  boxShadow: stackStyles.shadow,
                }}
                transition={{ type: 'spring', stiffness: 90, damping: 18, mass: 1 }}
              >
                <TestimonialCard data={item} variant={variant} />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── MOBILE (< sm) ─────────────────────────────────────── */}
      <div className="sm:hidden flex flex-col items-center w-full max-w-[340px] mx-auto">
        {/* Phone — independently sliding screens */}
        <div className="relative z-10 w-[190px] mx-auto">
          <PhoneMockup
            src={currentSrc}
            activeIndex={activeScreen}
            glowColor={glowColor}
            alt="App Screen"
          />
        </div>

        {/* Single testimonial card below phone */}
        <div className="relative z-20 w-full -mt-20 pt-6 pb-2 px-1">
          <AnimatePresence mode="wait" initial={false}>
            {currentReview && (
              <motion.div
                key={activeReview}
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{    opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                className="w-full rounded-[28px] overflow-hidden"
                style={{ borderRadius: '28px' }}
              >
                <TestimonialCard data={currentReview} variant={variant} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Dots — only shown if more than 1 review */}
        {reviewCount > 1 && (
          <div className="flex items-center justify-center gap-2 pt-3 z-30">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveReview(i)}
                className={cn(
                  'rounded-full transition-all duration-300 focus:outline-none',
                  i === activeReview
                    ? 'w-6 h-1.5'
                    : 'w-1.5 h-1.5 bg-[#D8D0C4] hover:bg-[#B8B0A4]'
                )}
                style={i === activeReview
                  ? { background: variant === 'customer' ? '#F5B300' : '#2B7A36' }
                  : undefined
                }
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Stack position helper ───────────────────────────────────── */
function getStackStyle(relPos, isFront, isHovered, variant) {
  const base = {
    0: {
      y: 0, scale: isFront && isHovered ? 1.025 : 1.0,
      opacity: 1.0, zIndex: 40,
      shadow: variant === 'customer'
        ? '0 20px 50px rgba(245,179,0,0.18), 0 4px 16px rgba(0,0,0,0.06)'
        : '0 20px 50px rgba(43,122,54,0.18), 0 4px 16px rgba(0,0,0,0.06)',
    },
    1: { y: -18, scale: 0.97, opacity: 0.85, zIndex: 30, shadow: '0 8px 24px rgba(0,0,0,0.06)' },
    2: { y: -36, scale: 0.94, opacity: 0.60, zIndex: 20, shadow: '0 4px 14px rgba(0,0,0,0.04)' },
  };
  return base[relPos] ?? { y: -54, scale: 0.90, opacity: 0, zIndex: 10, shadow: 'none' };
}
