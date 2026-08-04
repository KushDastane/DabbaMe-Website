import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@utils/cn';
import { Section, Container } from '@components/ui';
import { APP_STORES } from '@constants/brand';
import {
  PLATFORM_HEADER,
  PLATFORM_TABS,
  CARDS_DATA,
} from '@constants/platformExperience';

/* ── Motion Variants ─────────────────────────────────────────── */
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const mobileTabVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.22, ease: [0.25, 0.1, 0.25, 1] } },
};

/**
 * FeatureCard Component
 *
 * Renders an experience card matching exact reference design:
 * - Top Plan Badge
 * - MASSIVE centered ₹0 highlight with gold sparkles & radial sunburst
 * - FOREVER FREE subtitle + horizontal divider
 * - 10 Bullet features with green circular checkmarks
 * - Full Pill Gradient Action Button
 */
function FeatureCard({ data }) {
  const { badge, price, title, features, buttonText, buttonTextMobile, buttonHref, showPlayIcon, theme } = data;

  return (
    <div
      className={cn(
        'relative flex flex-col justify-between w-full h-full',
        'p-5 xs:p-6 sm:p-10 rounded-[24px] sm:rounded-[32px]',
        theme.cardBg,
        theme.cardBorder,
        'shadow-[0_10px_35px_rgba(0,0,0,0.05)]',
        'transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]',
        'hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.09)]',
        'group overflow-hidden'
      )}
    >
      {/* Subtle radial sunburst glow behind ₹0 */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-80 rounded-[24px] sm:rounded-[32px]"
        style={{
          background: `radial-gradient(circle at 50% 28%, ${theme.glowColor} 0%, transparent 65%)`,
        }}
      />

      <div className="relative z-10 flex flex-col items-center">

        {/* ── TOP BADGE ──────────────────────────────────────────────── */}
        <span
          className={cn(
            'px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase text-center shadow-xs',
            theme.badgeBg,
            theme.badgeText
          )}
        >
          {badge}
        </span>

        {/* ── MASSIVE CENTERED ₹0 HIGHLIGHT WITH SPARKLES ───────────── */}
        <div className="relative my-2 sm:my-5 flex items-center justify-center gap-1.5 sm:gap-3">
          {/* Left Sparkle */}
          <span className={cn('text-lg sm:text-2xl select-none', theme.sparkleColor)}>
            ✦
          </span>

          {/* Huge ₹0 */}
          <span className={cn('font-sans font-extrabold text-5xl xs:text-6xl sm:text-8xl tracking-tight leading-none', theme.priceColor)}>
            {price}
          </span>

          {/* Right Sparkle */}
          <span className={cn('text-lg sm:text-2xl select-none', theme.sparkleColor)}>
            ✦
          </span>
        </div>

        {/* ── SUBTITLE (FOREVER FREE / FREE TO JOIN) ────────────────── */}
        <h3 className={cn('text-xs xs:text-sm sm:text-lg font-extrabold tracking-[0.12em] sm:tracking-[0.14em] uppercase text-center', theme.titleColor)}>
          {title}
        </h3>

        {/* Divider Line */}
        <div className="w-full h-px bg-black/5 my-3 sm:my-6" />

        {/* ── FEATURES LIST ─────────────────────────────────────────── */}
        <ul className="w-full flex flex-col gap-2 sm:gap-3.5 list-none mb-4 sm:mb-8">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2.5 sm:gap-3">
              {/* Green Circle Checkmark */}
              <span className={cn('w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold flex-shrink-0', theme.checkStyle)}>
                ✓
              </span>
              {/* Feature text */}
              <span className="text-xs xs:text-sm sm:text-base font-medium text-brand-dark leading-snug">
                {feature}
              </span>
            </li>
          ))}
        </ul>

      </div>

      {/* ── PRIMARY GRADIENT BUTTON ──────────────────────────────────── */}
      <div className="relative z-10 pt-1 sm:pt-2">
        <a
          href={buttonHref === '#download' ? APP_STORES.android : buttonHref}
          target={buttonHref === '#download' ? '_blank' : '_self'}
          rel={buttonHref === '#download' ? 'noopener noreferrer' : ''}
          className={cn(
            'w-full inline-flex items-center justify-center gap-2 sm:gap-2.5 py-3 sm:py-4 px-5 sm:px-6 rounded-full',
            'font-bold text-sm sm:text-lg tracking-tight transition-all duration-300',
            'active:scale-[0.98] cursor-pointer select-none',
            theme.buttonClass
          )}
        >
          {showPlayIcon && (
            <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 fill-current" aria-hidden="true">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734c0-.38.214-.725.609-.92zm11.604 11.604l2.586-2.586a.996.996 0 0 0 0-1.414L15.213 6.83l-2.835 2.836 2.835 2.835zM4.735.688l11.45 6.61-2.835 2.835L3.609 1.814A.978.978 0 0 1 4.735.688zM4.735 23.312a.978.978 0 0 1-1.126-1.126l9.741-8.319 2.835 2.835-11.45 6.61z" />
            </svg>
          )}
          {buttonTextMobile ? (
            <>
              <span className="sm:hidden">{buttonTextMobile}</span>
              <span className="hidden sm:inline">{buttonText}</span>
            </>
          ) : (
            <span>{buttonText}</span>
          )}
        </a>
      </div>
    </div>
  );
}

/**
 * PlatformExperience Section
 *
 * "One Platform. Two Experiences." homepage section focused on ₹0.
 * - Desktop: Side-by-side equal dimension feature cards.
 * - Mobile: Segmented tab toggle switching between Customers and Home Kitchens.
 */
export function PlatformExperience() {
  const [activeTab, setActiveTab] = useState('customers');

  return (
    <Section
      id="platform-experience"
      className="bg-brand-bg pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-18 lg:pb-24 overflow-hidden"
    >
      <Container className="max-w-[1280px] flex flex-col items-center gap-10 sm:gap-14 md:gap-16">

        {/* ── SECTION HEADER ────────────────────────────────────────── */}
        <motion.div
          className="w-full flex flex-col items-center justify-center text-center gap-3.5 max-w-[680px] mx-auto px-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Small badge */}
          <span className="text-label-md font-semibold tracking-[0.18em] uppercase text-[#B57F00] bg-[#FEF2D0] border border-[#F5E5C0] px-3.5 py-1 rounded-full shadow-xs">
            {PLATFORM_HEADER.badge}
          </span>

          {/* Heading */}
          <h2 className="w-full text-center font-editorial text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-brand-dark leading-[1.12]">
            {PLATFORM_HEADER.heading}
          </h2>

          {/* Subheading */}
          <p className="text-body-md sm:text-body-lg text-brand-textMuted leading-relaxed text-pretty max-w-xl">
            {PLATFORM_HEADER.subheading}
          </p>

          {/* ── MOBILE SEGMENTED TOGGLE (< lg) ────────────────────── */}
          <div
            role="tablist"
            aria-label="View experience by audience"
            className="mt-3 lg:hidden relative grid grid-cols-2 bg-brand-beige border border-brand-border rounded-full p-1 shadow-[inset_0_1px_3px_rgba(0,0,0,0.05)] w-full max-w-[280px] xs:max-w-[320px] mx-auto"
          >
            {PLATFORM_TABS.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                id={`platform-tab-${tab.id}`}
                aria-selected={activeTab === tab.id}
                aria-controls={`platform-panel-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'relative w-full py-2 sm:py-2.5 rounded-full text-center whitespace-nowrap',
                  'text-xs sm:text-sm font-semibold transition-colors duration-200 outline-none select-none',
                  'focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-1',
                  activeTab === tab.id
                    ? 'text-brand-dark font-bold'
                    : 'text-brand-textMuted hover:text-brand-dark'
                )}
              >
                {/* Animated active pill background */}
                {activeTab === tab.id && (
                  <motion.span
                    layoutId="platform-tab-pill"
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

        {/* ── DESKTOP LAYOUT (≥ 1024px / lg:grid) ──────────────────── */}
        <div className="hidden lg:grid grid-cols-2 gap-8 w-full max-w-[1100px] mx-auto items-stretch">
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="h-full"
          >
            <FeatureCard data={CARDS_DATA.customers} />
          </motion.div>

          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="h-full"
          >
            <FeatureCard data={CARDS_DATA.kitchens} />
          </motion.div>
        </div>

        {/* ── MOBILE LAYOUT (< 1024px / lg:hidden) ─────────────────── */}
        <div
          id={`platform-panel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`platform-tab-${activeTab}`}
          className="w-full lg:hidden max-w-md mx-auto"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeTab}
              variants={mobileTabVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              <FeatureCard data={CARDS_DATA[activeTab]} />
            </motion.div>
          </AnimatePresence>
        </div>

      </Container>
    </Section>
  );
}
