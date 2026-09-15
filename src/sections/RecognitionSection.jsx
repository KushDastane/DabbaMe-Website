import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@utils/cn';
import { Section, Container } from '@components/ui';
import { MilestoneCard } from '@components/ui/MilestoneCard';
import { useReducedMotion } from '@hooks/useReducedMotion';
import {
  MILESTONES_HEADER,
  MILESTONES_DATA,
} from '@constants/milestones';

/**
 * RecognitionSection Component
 *
 * Minimal, editorial "Recognition & Milestones" section.
 * Shows DabbaMe's genuine achievements and recognitions as authentic social proof.
 *
 * Dynamic Features:
 * - When milestones.length <= 2:
 *   - No arrows, no pagination dots.
 *   - Cards sit elegantly centered on the page.
 * - When milestones.length > 2:
 *   - Left/right navigation arrows automatically appear.
 *   - Dynamic pagination dots appear below.
 *   - Desktop: 2 cards at a time with smooth track sliding.
 *   - Mobile: 1 card at a time with touch swipe/drag.
 *   - Gentle auto-rotation (8s, pauses on hover/touch).
 */
export function RecognitionSection({
  milestones = MILESTONES_DATA,
  className,
}) {
  const totalMilestones = milestones.length;
  const showControls = totalMilestones > 2;
  const reducedMotion = useReducedMotion();

  // Carousel state
  const [activeIndex, setActiveIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  // Safeguard bounds
  useEffect(() => {
    if (activeIndex >= totalMilestones) {
      setActiveIndex(0);
      setStartIndex(0);
    }
  }, [totalMilestones, activeIndex]);

  // Adjust startIndex for desktop 2-card sliding window
  const updateDesktopWindow = useCallback((newActive) => {
    const maxStart = Math.max(0, totalMilestones - 2);
    setStartIndex((currentStart) => {
      if (newActive < currentStart) {
        return Math.max(0, newActive);
      }
      if (newActive > currentStart + 1) {
        return Math.min(newActive - 1, maxStart);
      }
      return currentStart;
    });
  }, [totalMilestones]);

  // Navigation handlers
  const handlePrev = useCallback(() => {
    setSlideDirection(-1);
    setActiveIndex((prev) => {
      const nextIndex = prev > 0 ? prev - 1 : totalMilestones - 1;
      updateDesktopWindow(nextIndex);
      return nextIndex;
    });
  }, [totalMilestones, updateDesktopWindow]);

  const handleNext = useCallback(() => {
    setSlideDirection(1);
    setActiveIndex((prev) => {
      const nextIndex = prev < totalMilestones - 1 ? prev + 1 : 0;
      updateDesktopWindow(nextIndex);
      return nextIndex;
    });
  }, [totalMilestones, updateDesktopWindow]);

  const handleSelect = useCallback((index) => {
    setSlideDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    updateDesktopWindow(index);
  }, [activeIndex, updateDesktopWindow]);

  // Keyboard navigation
  const handleKeyDown = useCallback((e) => {
    if (!showControls) return;
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    }
  }, [showControls, handlePrev, handleNext]);

  // Gentle auto-rotation only when more than 2 milestones exist
  const timerRef = useRef(null);
  useEffect(() => {
    if (!showControls || isPaused || reducedMotion) {
      return;
    }
    timerRef.current = setInterval(() => {
      handleNext();
    }, 8000);

    return () => clearInterval(timerRef.current);
  }, [showControls, isPaused, reducedMotion, handleNext]);

  if (!milestones || totalMilestones === 0) {
    return null;
  }

  return (
    <Section
      id="recognition"
      aria-label="Recognition and milestones"
      noContainer
      className={cn(
        'bg-brand-bg py-10 sm:py-14 lg:py-16 overflow-hidden select-none',
        className
      )}
    >
      <Container className="max-w-[1100px] flex flex-col items-center">

        {/* ── SECTION HEADER ────────────────────────────────────────── */}
        <motion.div
          className="w-full flex flex-col items-center justify-center text-center gap-2 sm:gap-2.5 max-w-[620px] mx-auto px-4 mb-6 sm:mb-8"
          initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Main Editorial Heading */}
          <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-brand-dark leading-[1.15]">
            {MILESTONES_HEADER.heading}
          </h2>

          {/* Subtle Supporting Line */}
          {MILESTONES_HEADER.subheading && (
            <p className="text-xs sm:text-sm text-brand-textMuted font-normal tracking-normal max-w-md">
              {MILESTONES_HEADER.subheading}
            </p>
          )}
        </motion.div>

        {/* ── MILESTONES CONTENT ────────────────────────────────────── */}
        {!showControls ? (
          /* When total milestones <= 2: Simply sit centered on the page with NO arrows and NO dots */
          <div className="w-full max-w-[820px] mx-auto">
            <motion.div
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 16, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 items-stretch justify-center w-full"
            >
              {milestones.map((milestone, idx) => (
                <motion.div
                  key={milestone.id || idx}
                  initial={reducedMotion ? {} : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.1,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="h-full"
                >
                  <MilestoneCard milestone={milestone} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        ) : (
          /* When total milestones > 2: Dynamic carousel with arrows & dots */
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label="Recognition awards carousel"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            className="w-full flex flex-col items-center outline-none"
          >
            {/* Controls + Viewport row */}
            <div className="w-full flex items-center justify-center gap-2 sm:gap-3 md:gap-5">

              {/* Previous Button */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous milestone"
                className={cn(
                  'w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0',
                  'bg-white/95 border border-brand-border/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)]',
                  'text-brand-dark/70 hover:text-brand-dark hover:border-brand-gold/60 hover:bg-white',
                  'transition-all duration-200 focus-visible:ring-2 focus-visible:ring-brand-gold outline-none',
                  'active:scale-95'
                )}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                  aria-hidden="true"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              {/* ── DESKTOP CAROUSEL (≥ 768px): 2 cards per view with sliding track ── */}
              <div className="hidden md:block w-full max-w-[820px] overflow-hidden py-1">
                <motion.div
                  initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 16, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  className="w-full"
                >
                  <motion.div
                    className="flex gap-6 items-stretch"
                    animate={{
                      x: `calc(-${startIndex} * (50% + 12px))`,
                    }}
                    transition={{
                      duration: reducedMotion ? 0 : 0.45,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  >
                    {milestones.map((milestone, idx) => (
                      <div
                        key={milestone.id || idx}
                        className="w-[calc(50%-12px)] flex-shrink-0 h-full"
                      >
                        <MilestoneCard
                          milestone={milestone}
                          className={cn(
                            'transition-all duration-300',
                            idx === activeIndex
                              ? 'border-brand-gold/50 shadow-[0_8px_24px_rgba(245,179,0,0.10)]'
                              : ''
                          )}
                        />
                      </div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>

              {/* ── MOBILE CAROUSEL (< 768px): 1 card per view with swipe/drag ── */}
              <div className="block md:hidden w-full max-w-[340px] xs:max-w-[360px] mx-auto overflow-hidden">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={activeIndex}
                    initial={
                      reducedMotion
                        ? { opacity: 1 }
                        : { opacity: 0, x: slideDirection > 0 ? 24 : -24 }
                    }
                    animate={{ opacity: 1, x: 0 }}
                    exit={
                      reducedMotion
                        ? { opacity: 0 }
                        : { opacity: 0, x: slideDirection > 0 ? -24 : 24 }
                    }
                    transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(e, { offset, velocity }) => {
                      if (offset.x < -40 || velocity.x < -350) {
                        handleNext();
                      } else if (offset.x > 40 || velocity.x > 350) {
                        handlePrev();
                      }
                    }}
                    className="w-full cursor-grab active:cursor-grabbing"
                  >
                    <MilestoneCard milestone={milestones[activeIndex]} />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Next Button */}
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next milestone"
                className={cn(
                  'w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0',
                  'bg-white/95 border border-brand-border/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)]',
                  'text-brand-dark/70 hover:text-brand-dark hover:border-brand-gold/60 hover:bg-white',
                  'transition-all duration-200 focus-visible:ring-2 focus-visible:ring-brand-gold outline-none',
                  'active:scale-95'
                )}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                  aria-hidden="true"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>

            </div>

            {/* ── PAGINATION DOTS (Only rendered when > 2 milestones) ── */}
            <div
              role="tablist"
              aria-label="Milestones pagination"
              className="flex items-center justify-center gap-2 pt-5 sm:pt-6"
            >
              {milestones.map((item, i) => (
                <button
                  key={item.id || i}
                  type="button"
                  role="tab"
                  id={`milestone-dot-${i}`}
                  aria-selected={i === activeIndex}
                  aria-label={`Go to milestone ${i + 1}: ${item.organization}`}
                  onClick={() => handleSelect(i)}
                  className={cn(
                    'rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold',
                    i === activeIndex
                      ? 'w-6 h-1.5 bg-brand-gold'
                      : 'w-1.5 h-1.5 bg-[#D8D0C4] hover:bg-[#B8B0A4]'
                  )}
                />
              ))}
            </div>

          </div>
        )}

      </Container>
    </Section>
  );
}
