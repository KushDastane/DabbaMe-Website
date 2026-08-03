import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@utils/cn';
import { Section, Container } from '@components/ui';
import { ImageSlot, TextSlot } from '@components/common/TransformPanel';
import {
  WHY_CHOOSE_HEADER,
  TABS,
  TAB_CONTENT,
} from '@constants/whyChoose';

/* ── Framer motion animation variants ────────────────────────── */
const contentVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0,  transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.22, ease: [0.25, 0.1, 0.25, 1] } },
};

/**
 * CenterArrow — Circular arrow divider button.
 * Renders a right arrow → on desktop (centered with images) and down arrow ↓ on mobile.
 */
function CenterArrow() {
  return (
    <div className="flex items-center justify-center my-1 lg:my-0 flex-shrink-0 z-10">
      <div
        className={cn(
          'w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center',
          'bg-white border border-black/10 shadow-[0_4px_14px_rgba(0,0,0,0.08)]',
          'text-brand-dark transition-transform duration-300 hover:scale-105 select-none'
        )}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-4 h-4 sm:w-5 sm:h-5 text-brand-dark"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Desktop Right Arrow → */}
          <path className="hidden lg:block" d="M5 12h14M13 5l7 7-7 7" />
          {/* Mobile Down Arrow ↓ */}
          <path className="block lg:hidden" d="M12 5v14M5 13l7 7 7-7" />
        </svg>
      </div>
    </div>
  );
}

/**
 * WhyChooseDabbaMe Section
 *
 * Clean, compact transformation section:
 * - Reduced section padding & tight gaps to eliminate empty whitespace voids.
 * - Text-only segmented toggle.
 * - Desktop: 2-row grid for 100% identical Y-leveling & arrow centering.
 * - Mobile: Clean stacked transformation flow.
 */
export function WhyChooseDabbaMe() {
  const [activeTab, setActiveTab] = useState('customers');
  const content = TAB_CONTENT[activeTab];

  return (
    <Section
      id="why-choose-dabbame"
      className="bg-brand-bg pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-18 lg:pb-24 overflow-hidden"
    >
      <Container className="max-w-[1280px] flex flex-col items-center gap-6 sm:gap-8 md:gap-10">

        {/* ── TOP HEADER & CLEAN SEGMENTED TOGGLE ─────────────────────── */}
        <motion.div
          className="w-full flex flex-col items-center justify-center text-center gap-3 max-w-[620px] mx-auto px-2"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Small uppercase label */}
          <span className="w-full text-center text-label-md font-semibold tracking-[0.18em] uppercase text-brand-goldAccent">
            {WHY_CHOOSE_HEADER.label}
          </span>

          {/* Large editorial heading */}
          <h2 className="w-full text-center font-editorial text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-brand-dark leading-[1.12]">
            {WHY_CHOOSE_HEADER.heading}{' '}
            <span className="italic font-normal">{WHY_CHOOSE_HEADER.headingEmphasis}</span>
          </h2>

          {/* ── EQUAL-WIDTH SYMMETRIC SEGMENTED TOGGLE ───────────────── */}
          <div
            role="tablist"
            aria-label="View transformation by audience"
            className="mt-2 relative grid grid-cols-2 bg-brand-beige border border-brand-border rounded-full p-1 shadow-[inset_0_1px_3px_rgba(0,0,0,0.05)] w-full max-w-[280px] xs:max-w-[320px] mx-auto"
          >
            {TABS.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={activeTab === tab.id}
                aria-controls={`tabpanel-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'relative w-full py-2 sm:py-2.5 rounded-full text-center whitespace-nowrap',
                  'text-xs sm:text-sm font-semibold transition-colors duration-200 outline-none select-none',
                  'focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-1',
                  activeTab === tab.id
                    ? 'text-brand-dark font-bold'
                    : 'text-brand-textMuted hover:text-brand-dark',
                )}
              >
                {/* Animated active pill background */}
                {activeTab === tab.id && (
                  <motion.span
                    layoutId="why-choose-tab-pill"
                    className="absolute inset-0 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.10)]"
                    transition={{ type: 'spring', stiffness: 500, damping: 38 }}
                  />
                )}
                <span className="relative z-10">
                  {tab.id === 'kitchens' ? (
                    <>
                      <span className="hidden sm:inline">Home </span>Kitchens
                    </>
                  ) : (
                    tab.label
                  )}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* ── COMPARISON DISPLAY ───────────────────────────────────── */}
        <div
          id={`tabpanel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
          className="w-full"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeTab}
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full max-w-[1100px] mx-auto"
            >

              {/* ── DESKTOP SYNCHRONIZED GRID (lg:block) ──────────── */}
              <div className="hidden lg:flex flex-col gap-4">

                {/* ROW 1: 3D PODIUM IMAGES + PERFECTLY CENTERED ARROW */}
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-6">
                  {/* Left Image */}
                  <ImageSlot image={content.without.image} tone={content.without.tone} />

                  {/* Center Arrow — Dead centered with images */}
                  <CenterArrow />

                  {/* Right Image */}
                  <ImageSlot image={content.with.image} tone={content.with.tone} />
                </div>

                {/* ROW 2: PILL BADGES & BULLETS — 100% IDENTICAL LEVELING */}
                <div className="grid grid-cols-2 gap-16 px-2">
                  <TextSlot
                    label={content.without.label}
                    tone={content.without.tone}
                    bulletPoints={content.without.bulletPoints}
                  />
                  <TextSlot
                    label={content.with.label}
                    tone={content.with.tone}
                    bulletPoints={content.with.bulletPoints}
                  />
                </div>

              </div>

              {/* ── MOBILE STACKED FLOW (< lg) ────────────────────── */}
              <div className="flex lg:hidden flex-col items-center gap-4 w-full px-2 max-w-lg mx-auto">
                {/* WITHOUT SECTION */}
                <div className="flex flex-col items-start gap-2.5 w-full">
                  <ImageSlot image={content.without.image} tone={content.without.tone} />
                  <TextSlot
                    label={content.without.label}
                    tone={content.without.tone}
                    bulletPoints={content.without.bulletPoints}
                  />
                </div>

                {/* CENTER DOWN ARROW ↓ */}
                <CenterArrow />

                {/* WITH SECTION */}
                <div className="flex flex-col items-start gap-2.5 w-full">
                  <ImageSlot image={content.with.image} tone={content.with.tone} />
                  <TextSlot
                    label={content.with.label}
                    tone={content.with.tone}
                    bulletPoints={content.with.bulletPoints}
                  />
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </Container>
    </Section>
  );
}
