import { motion } from 'framer-motion';

/**
 * NetworkCTA
 *
 * Compact, inviting CTA banner positioned immediately below the state locations accordion.
 * Features the DabbaMe mascot in a friendly pointing/inviting gesture.
 * Highly responsive across mobile phones, tablets, and desktop.
 */
export function NetworkCTA({ onOpenModal }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="w-full max-w-[960px] mx-auto mt-7 sm:mt-12"
    >
      <div className="relative rounded-[20px] sm:rounded-[26px] bg-[#FFFDF9] border border-[#ECE7DF] shadow-[0_2px_16px_rgba(0,0,0,0.03)] p-4 sm:p-8 lg:p-10 overflow-hidden">
        {/* Subtle warm decorative background aura */}
        <div
          aria-hidden="true"
          className="absolute -right-12 -bottom-12 w-48 h-48 bg-[#F5B300]/10 rounded-full blur-2xl pointer-events-none"
        />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-8">
          {/* Left: Mascot + Text Content */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3.5 sm:gap-6 max-w-xl">
            {/* Mascot in friendly pointing pose */}
            <div className="flex-shrink-0 relative group">
              <img
                src="/dabbame-mascot.webp"
                alt="DabbaMe friendly tiffin mascot pointing invitingly to suggest a kitchen"
                loading="lazy"
                decoding="async"
                className="w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-contain drop-shadow-[0_3px_8px_rgba(245,179,0,0.16)] transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Heading & Description */}
            <div className="flex flex-col gap-1 sm:gap-1.5">
              <h3 className="font-editorial font-medium text-lg sm:text-2xl lg:text-[26px] text-[#1E1E1E] leading-snug text-balance">
                Know a kitchen or an area we should be in?
              </h3>
              <p className="text-xs sm:text-base text-[#6B6560] leading-relaxed text-pretty">
                Suggest a home kitchen or a locality and help us bring more ghar ka khana to your neighbourhood.
              </p>
            </div>
          </div>

          {/* Right: Single CTA Button */}
          <div className="flex-shrink-0 w-full sm:w-auto flex justify-center">
            <button
              type="button"
              onClick={onOpenModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#F5B300] hover:bg-[#E0A106] text-[#1E1E1E] font-semibold text-xs sm:text-base shadow-[0_2px_10px_rgba(245,179,0,0.22)] hover:shadow-[0_4px_16px_rgba(245,179,0,0.32)] transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B300] focus-visible:ring-offset-2"
            >
              <span>Suggest an Area / Kitchen</span>
              <span aria-hidden="true" className="text-base sm:text-lg leading-none">→</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
