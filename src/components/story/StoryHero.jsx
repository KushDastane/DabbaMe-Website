import { motion } from 'framer-motion';
import { IllustrationFrame } from './IllustrationFrame';

/**
 * StoryHero Component
 *
 * Clean Hero section matching user reference screenshot:
 * Left: OUR STORY label with gold accent line, editorial heading, belief paragraph.
 * Right: Upright hero illustration (story-01-hero.webp).
 * NO download button here.
 * NO dotted line here.
 */
export function StoryHero() {
  return (
    <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-18">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* ── LEFT COLUMN: EDITORIAL HEADING & TEXT ────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            {/* Small uppercase gold label with line */}
            <div className="flex flex-col items-start gap-2 mb-4">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.22em] uppercase text-[#D49B00]">
                OUR STORY
              </span>
              <div className="w-8 h-[2px] bg-[#F5B300] rounded-full" aria-hidden="true" />
            </div>

            {/* Editorial heading */}
            <h1 className="font-editorial text-3xl sm:text-4xl lg:text-[44px] text-[#2B231D] font-medium leading-[1.12] tracking-tight mb-5">
              Every startup begins with an idea.<br />
              <span className="text-[#C8881B] font-medium">Ours began with hunger.</span>
            </h1>

            {/* Paragraph text */}
            <p className="font-sans text-sm sm:text-base text-[#5D554D] leading-relaxed max-w-md">
              We started DabbaMe with one simple belief:<br />
              Finding homemade food should be just as easy as ordering online.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-6 flex justify-center lg:justify-end"
          >
            <IllustrationFrame
              src="/story-01-hero.webp"
              alt="DabbaMe Founders together — Our Story Hero Illustration"
              blobIndex={0}
              isHero={true}
              className="max-w-lg"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
