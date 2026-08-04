import { motion } from 'framer-motion';
import { APP_STORES } from '@constants/brand';

/**
 * StoryCTA Component
 *
 * Paper-note style card closing the storybook layout (matching Reference Image 2 UI):
 * - Cream paper card backdrop with subtle tape tab
 * - Heading: "Be a part of our journey."
 * - Paragraph & Golden Download DabbaMe CTA button
 */
export function StoryCTA() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="max-w-md sm:max-w-lg mx-auto px-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24, rotate: 1 }}
          whileInView={{ opacity: 1, y: 0, rotate: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative rounded-2xl bg-[#FFFDF7] border border-[#E5DEC7] shadow-md p-7 sm:p-9 text-center flex flex-col items-center"
        >
          {/* Subtle paper tape tab at top matching Reference Image 2 */}
          <div
            className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-14 h-4 bg-[#E2D6BC]/80 rounded-xs shadow-2xs rotate-[-1deg]"
            aria-hidden="true"
          />

          {/* Dabba icon / accent */}
          <div className="w-10 h-10 rounded-xl bg-[#F7EED9] text-[#B87F1B] flex items-center justify-center mb-4">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>

          {/* Title */}
          <h2 className="font-editorial font-bold text-2xl sm:text-3xl text-[#2B231D] tracking-tight mb-3">
            Be a part of our journey.
          </h2>

          {/* Paragraph */}
          <p className="font-sans text-xs sm:text-sm text-[#5D554D] leading-relaxed mb-6 max-w-sm">
            Whether you&apos;re looking for homemade food or want to grow your home kitchen, we&apos;d love to have you with us.
          </p>

          {/* Golden CTA Button matching Reference Image 2 */}
          <a
            href={APP_STORES.android}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#E8A51B] text-[#1E1E1E] font-bold text-sm shadow-sm hover:bg-[#D99610] hover:-translate-y-0.5 transition-all duration-200"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0 fill-current" aria-hidden="true">
              <path d="M3.609 1.814C3.23 2.012 3 2.42 3 2.915v18.17c0 .496.23.903.609 1.101l9.948-10.185L3.609 1.814z" />
              <path d="M16.924 8.528l-3.367 3.472 3.367 3.472 3.805-2.188c.677-.389.677-1.023 0-1.412l-3.805-2.344z" />
              <path d="M13.557 12L3.609 21.821c.264.085.556.057.818-.094l12.497-7.2-3.367-2.527z" />
              <path d="M4.427 2.273C4.165 2.122 3.873 2.094 3.609 2.179L13.557 12l3.367-2.527-12.497-7.2z" />
            </svg>
            <span>Download DabbaMe</span>
          </a>

          {/* Subtext */}
          <span className="text-[11px] font-sans text-[#8A7E72] mt-3">
            Available on Google Play
          </span>
        </motion.div>
      </div>
    </section>
  );
}
