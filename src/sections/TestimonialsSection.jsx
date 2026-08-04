import { motion } from 'framer-motion';
import { Section, Container, TestimonialDeck } from '@components/ui';
import {
  TESTIMONIALS_HEADER,
  CUSTOMER_TESTIMONIALS,
  KITCHEN_TESTIMONIALS,
  CUSTOMER_SCREENS,
  KITCHEN_SCREENS,
} from '@constants/testimonials';

/* Stagger reveal animation for header */
const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

/**
 * TestimonialsSection
 *
 * "Trusted by the People Who Use It." premium product showcase.
 * Inspired by Apple, Airbnb & Linear.
 *
 * Features:
 * - Two-column layout (Customer App on left, Home Kitchen App on right)
 * - Single floating phone per side with 40% testimonial deck overlap
 * - Top-edge peeking credit-card stacked deck
 * - Synchronized 5-second rotation & screenshot crossfade
 * - Offset rotation timing between sides
 * - Stacked vertical mobile layout (1 card visible, zero deck clutter)
 */
export function TestimonialsSection() {
  return (
    <Section
      id="testimonials"
      className="bg-[#FDFCF8] overflow-hidden py-10 sm:py-14 lg:py-14"
    >
      <Container className="max-w-[1280px] flex flex-col items-center gap-14 sm:gap-20">

        {/* ── SECTION HEADER ──────────────────────────────────────────────── */}
        <motion.div
          className="flex flex-col items-center text-center gap-3 max-w-[680px] mx-auto px-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Heading */}
          <h2 className="font-editorial font-medium text-3xl sm:text-4xl md:text-5xl text-[#1E1E1E] leading-[1.12] tracking-tight text-balance">
            {TESTIMONIALS_HEADER.heading}
          </h2>
        </motion.div>

        {/* ── TWO-COLUMN SHOWCASE (CUSTOMERS | HOME KITCHENS) ──────────────── */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 xl:gap-16 items-start">

          {/* ── LEFT COLUMN: Customer Showcase ───────────────────────────── */}
          <motion.div
            className="flex flex-col items-center gap-6 w-full"
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            {/* Testimonial Deck with Phone (Warm Amber Glow) */}
            <TestimonialDeck
              testimonials={CUSTOMER_TESTIMONIALS}
              screens={CUSTOMER_SCREENS}
              variant="customer"
              glowColor="rgba(245,179,0,0.16)"
              interval={5000}
              screenInterval={3500}
            />
          </motion.div>

          {/* ── RIGHT COLUMN: Home Kitchens Showcase ─────────────────────── */}
          <motion.div
            className="flex flex-col items-center gap-6 w-full pt-10 lg:pt-0"
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            {/* Testimonial Deck with Phone (Soft Sage Glow, Offset Timing) */}
            <TestimonialDeck
              testimonials={KITCHEN_TESTIMONIALS}
              screens={KITCHEN_SCREENS}
              variant="kitchen"
              glowColor="rgba(43,122,54,0.16)"
              interval={5700}
              screenInterval={3800}
            />
          </motion.div>

        </div>

      </Container>
    </Section>
  );
}
