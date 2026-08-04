import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section, Container } from '@components/ui';
import { FAQ_HEADER, FAQ_ITEMS } from '@constants/faq';

/**
 * FAQItem Component
 *
 * Individual accordion item with Apple x Linear inspired minimal aesthetics.
 * Features:
 * - White card background with light gray border (#ECE7DF)
 * - 18-20px rounded corners & soft shadow
 * - Large 72-80px click target
 * - Simple + / − indicator (Dark gray collapsed, DabbaMe Gold expanded)
 * - Smooth Framer Motion height & opacity expansion
 */
function FAQItem({ item, isOpen, onToggle, index }) {
  const { question, answer } = item;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
      className="w-full"
    >
      <div
        className={`
          w-full rounded-[18px] sm:rounded-[20px] bg-white
          border transition-all duration-200 ease-out select-none
          ${
            isOpen
              ? 'border-[#F5B300]/80 shadow-[0_8px_24px_rgba(245,179,0,0.08)]'
              : 'border-[#ECE7DF] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-[#F5B300]/50 hover:shadow-[0_6px_20px_rgba(0,0,0,0.04)] hover:-translate-y-[1px]'
          }
        `}
      >
        {/* Accordion Header / Click Target */}
        <button
          type="button"
          onClick={onToggle}
          className="w-full min-h-[72px] sm:min-h-[80px] px-6 sm:px-8 py-5 flex items-center justify-between gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B300]/50 rounded-[18px] sm:rounded-[20px]"
          aria-expanded={isOpen}
        >
          <span className="font-editorial font-medium text-lg sm:text-xl text-[#1E1E1E] leading-snug tracking-tight">
            {question}
          </span>

          {/* Simple + / − indicator */}
          <span
            className={`
              flex-shrink-0 w-7 h-7 flex items-center justify-center
              text-2xl font-light font-sans leading-none transition-colors duration-200
              ${isOpen ? 'text-[#F5B300]' : 'text-[#1E1E1E]'}
            `}
            aria-hidden="true"
          >
            {isOpen ? '−' : '+'}
          </span>
        </button>

        {/* Accordion Body / Answer */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden"
            >
              <div className="px-6 sm:px-8 pb-6 pt-1 text-sm sm:text-base text-[#55504A] leading-relaxed border-t border-[#F5F2EC]">
                {answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

/**
 * FAQSection Component
 *
 * Premium, timeless, and handcrafted FAQ section.
 * Design language: Apple x Linear x Stripe inspired minimalism.
 * Warm cream background (#FCFAF5), centered single column max 860px.
 */
export function FAQSection() {
  // Only one accordion open at a time
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" className="bg-[#FCFAF5] py-20 sm:py-28 lg:py-32 overflow-hidden">
      <Container className="max-w-[1280px] flex flex-col items-center gap-12 sm:gap-16 px-4 sm:px-6">

        {/* ── SECTION HEADER ──────────────────────────────────────────────── */}
        <motion.div
          className="flex flex-col items-center text-center gap-3 max-w-[680px] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Small uppercase label */}
          <span className="text-xs sm:text-sm font-bold tracking-[0.22em] uppercase text-[#B57F00]">
            {FAQ_HEADER.label}
          </span>

          {/* Large editorial heading */}
          <h2 className="font-editorial font-medium text-3xl sm:text-4xl md:text-5xl text-[#1E1E1E] leading-[1.15] tracking-tight text-balance">
            {FAQ_HEADER.heading}
          </h2>

          {/* Small subtitle */}
          <p className="text-base sm:text-lg text-[#6B6560] leading-relaxed text-pretty">
            {FAQ_HEADER.subtitle}
          </p>

          {/* Thin gold divider */}
          <div className="w-12 sm:w-16 h-[2px] bg-[#F5B300] rounded-full mt-2" aria-hidden="true" />
        </motion.div>

        {/* ── ACCORDION LIST (Centered single column max 860px) ───────────── */}
        <div className="w-full max-w-[860px] mx-auto flex flex-col gap-3.5 sm:gap-4">
          {FAQ_ITEMS.map((item, index) => (
            <FAQItem
              key={item.id}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

      </Container>
    </Section>
  );
}
