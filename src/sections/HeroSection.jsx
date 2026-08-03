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
 * Hero layout powered by Cloudinary streaming video.
 * Replace HERO_VIDEO_URL in src/constants/media.js with your Cloudinary MP4 link.
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
      <Container className="py-32 md:py-0 md:min-h-screen flex items-center">
        {/*
         * Two-column grid.
         * Left: content · Right: intentionally empty (video is right side)
         */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">

          {/* ── Left Column — Hero Content ──────────────────────────── */}
          <motion.div
            className="flex flex-col gap-7 max-w-xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            aria-labelledby="hero-heading"
          >
            {/* Heading */}
            <motion.div variants={itemVariants}>
              <h1
                id="hero-heading"
                className="font-editorial font-medium text-white text-balance"
                style={{
                  fontSize:      'clamp(2.75rem, 5vw, 4.25rem)',
                  lineHeight:    '1.08',
                  letterSpacing: '-0.025em',
                }}
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
              className="text-body-lg text-white/70 max-w-md leading-relaxed text-pretty"
            >
              {BRAND.description}
            </motion.p>

            

            {/* Social proof */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 pt-2"
            >
              {/* Google Profile style initial avatars */}
              <div className="flex -space-x-2.5" aria-hidden="true">
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
              <div className="flex items-center gap-1.5 text-white/70">
                <Star size={14} className="fill-brand-gold text-brand-gold" aria-hidden="true" />
                <span className="text-body-xs font-medium text-white/80">
                  4.2 · Loved by 500+ customers
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right Column — Empty (Video fills this space) ────────── */}
          {/*
           * Intentionally left empty.
           * The background video is the visual centrepiece.
           * Future: overlay stats card or floating quote here.
           */}
          <div className="hidden lg:block" aria-hidden="true" />
        </div>
      </Container>

      {/* ── Scroll indicator ────────────────────────────────────────── */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
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
