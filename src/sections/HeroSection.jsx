import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { VideoHero } from '@components/common';
import { Container } from '@components/ui';
import { BRAND, APP_STORES } from '@constants/brand';
import { HERO_VIDEO_URL } from '@constants/media';
import { cn } from '@utils/cn';

/**
 * HeroSection
 *
 * Responsive behavior:
 * - Mobile: Hero CTA button visible (270px width, "Download DabbaMe"), rating below CTA button.
 * - Desktop: Hero CTA button hidden (sm:hidden), navbar CTA ("Get App") visible, rating naturally positioned.
 */

// Staggered fade-up variants for hero content
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren:   0.2,
    },
  },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y:       0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export function HeroSection() {
  return (
    <VideoHero
      src={HERO_VIDEO_URL}
      posterSrc={null}
      overlayOpacity={0.32}
    >
      <Container className="py-20 sm:py-32 md:py-0 md:min-h-screen flex items-center">
        {/*
         * Two-column grid.
         * Left: content · Right: intentionally empty (video is right side)
         */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center w-full">

          {/* ── Left Column — Hero Content ──────────────────────────── */}
          <motion.div
            className="flex flex-col items-center text-center sm:items-start sm:text-left gap-4 sm:gap-6 max-w-xl mx-auto sm:mx-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            aria-labelledby="hero-heading"
          >
            {/* Heading — balanced mobile line breaks */}
            <motion.div variants={itemVariants} className="w-full">
              <h1
                id="hero-heading"
                className="font-editorial font-medium text-white text-balance text-[2.2rem] xs:text-[2.5rem] sm:text-[3.5rem] md:text-[4.25rem] leading-[1.1]"
              >
                Find
                {' '}
                <em
                  className="not-italic"
                  style={{ color: '#F5B300' }}
                >
                  home kitchens
                </em>
                {' '}near you.
              </h1>
            </motion.div>

            {/* Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-body-base sm:text-body-lg text-white/80 max-w-md leading-relaxed text-pretty"
            >
              {BRAND.description}
            </motion.p>

            {/* ── Download App CTA Button (MOBILE ONLY: hidden on sm+) ── */}
            <motion.div variants={itemVariants} className="sm:hidden -mt-1 w-full flex justify-center">
              <a
                href={APP_STORES.android}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'w-full max-w-[270px]',
                  'inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full',
                  'bg-brand-gold hover:bg-brand-goldAccent text-brand-dark',
                  'font-semibold text-sm tracking-tight shadow-lg shadow-brand-gold/20',
                  'transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer'
                )}
                aria-label="Download DabbaMe App on Google Play Store"
              >
                {/* Google Play / Android Icon */}
                <svg
                  className="w-4 h-4 fill-current flex-shrink-0"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734c0-.38.214-.725.609-.92zm11.604 11.604l2.586-2.586a.996.996 0 0 0 0-1.414L15.213 6.83l-2.835 2.836 2.835 2.835zM4.735.688l11.45 6.61-2.835 2.835L3.609 1.814A.978.978 0 0 1 4.735.688zM4.735 23.312a.978.978 0 0 1-1.126-1.126l9.741-8.319 2.835 2.835-11.45 6.61z" />
                </svg>
                <span>Download DabbaMe</span>
              </a>
            </motion.div>

            {/* ── Social proof (Rating & Avatars) ──────────────────────── */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 pt-1 sm:pt-2"
            >
              {/* Desktop Avatar Group (hidden on mobile, shown on sm+) */}
              <div className="hidden sm:flex -space-x-2.5" aria-hidden="true">
                {[
                  { initials: 'SK', bg: 'bg-[#1A73E8]', text: 'text-white' },
                  { initials: 'PC', bg: 'bg-[#137333]', text: 'text-white' },
                  { initials: 'YD', bg: 'bg-[#B06000]', text: 'text-white' },
                ].map(({ initials, bg, text }, i) => (
                  <div
                    key={i}
                    className={cn(
                      'w-8 h-8 rounded-full border-2 border-black/40 flex items-center justify-center font-sans font-semibold text-[11px] tracking-wider shadow-sm select-none',
                      bg,
                      text
                    )}
                  >
                    {initials}
                  </div>
                ))}
              </div>

              {/* Rating Line */}
              <div className="flex items-center gap-1.5 text-white/80">
                <Star size={14} className="fill-brand-gold text-brand-gold" aria-hidden="true" />
                <span className="text-body-xs font-medium text-white/90">
                  4.8 · Loved by 500+ customers
                </span>
              </div>

              {/* Mobile Avatar Group (shown below rating on mobile with 8px spacing) */}
              <div className="flex sm:hidden -space-x-2 mt-0.5" aria-hidden="true">
                {[
                  { initials: 'SK', bg: 'bg-[#1A73E8]', text: 'text-white' },
                  { initials: 'PC', bg: 'bg-[#137333]', text: 'text-white' },
                  { initials: 'YD', bg: 'bg-[#B06000]', text: 'text-white' },
                ].map(({ initials, bg, text }, i) => (
                  <div
                    key={i}
                    className={cn(
                      'w-7 h-7 rounded-full border-2 border-black/40 flex items-center justify-center font-sans font-semibold text-[10px] tracking-wider shadow-sm select-none',
                      bg,
                      text
                    )}
                  >
                    {initials}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right Column — Empty (Video fills this space) ────────── */}
          <div className="hidden lg:block" aria-hidden="true" />
        </div>
      </Container>

      {/* ── Scroll indicator (Hidden on mobile devices) ────────────── */}
      <motion.div
        className="hidden sm:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        aria-hidden="true"
      >
        <span className="text-white/40 text-label-sm font-medium uppercase tracking-[0.15em]">
          Scroll
        </span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent"
          animate={{ scaleY: [0.6, 1, 0.6], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </VideoHero>
  );
}
