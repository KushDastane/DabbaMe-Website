import { motion } from 'framer-motion';
import { cn } from '@utils/cn';

/**
 * HowItWorksStep
 *
 * Step item for How It Works section:
 * - Mobile: Compact, semi-transparent card box (bg-white/40) for readability.
 * - Desktop: Clean, unboxed typography-first layout.
 */

export function HowItWorksStep({ number, title, description, delay = 0, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(
        'flex items-start gap-3 sm:gap-4 lg:gap-8 w-full',
        'p-3.5 sm:p-4 lg:p-0 rounded-xl lg:rounded-none',
        'bg-white/40 border border-[#E8E2D8]/60 backdrop-blur-sm',
        'shadow-[0_2px_10px_rgba(0,0,0,0.02)] lg:bg-transparent lg:border-none lg:shadow-none lg:backdrop-blur-none',
        'transition-all duration-300 group',
        className
      )}
    >
      {/* Large DabbaMe Gold Number */}
      <span className="font-editorial text-2xl sm:text-3xl lg:text-5xl font-semibold text-brand-goldAccent leading-none select-none flex-shrink-0 pt-0.5 min-w-[28px] sm:min-w-[36px] lg:min-w-[50px]">
        {number}
      </span>

      {/* Title & Description */}
      <div className="flex flex-col gap-1 pt-0.5 flex-1 min-w-0">
        <h3 className="text-base sm:text-lg lg:text-2xl font-semibold text-brand-dark tracking-tight leading-snug">
          {title}
        </h3>
        <p className="text-xs sm:text-body-sm lg:text-body-md text-brand-textMuted leading-relaxed text-pretty">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
