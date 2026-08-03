import { motion } from 'framer-motion';
import { Section, Container } from '@components/ui';
import { PhoneMockup } from '@components/common/PhoneMockup';
import { HowItWorksStep } from './HowItWorksStep';
import {
  HOW_IT_WORKS_HEADER,
  HOW_IT_WORKS_STEPS,
  MOCKUP_IMAGES,
} from '@constants/howItWorks';

/**
 * HowItWorks Section
 *
 * Apple / Airbnb / Linear style product showcase section.
 * - Desktop: 45% / 55% split layout.
 * - Left: Two overlapping PNG/WebP phone mockups (Back: -6° @ 90%, Front: vertical z-10).
 *   Layered reveal: Back phone starts first, Front phone starts 150ms later.
 * - Right: Three steps housed inside subtle, semi-transparent glass cards.
 * - Responsive: Fully centered and visible without any clipping or text overflow.
 */

export function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      className="bg-brand-bg py-16 sm:py-24 md:py-32 overflow-hidden"
    >
      <Container className="max-w-[1280px] flex flex-col gap-12 sm:gap-16 md:gap-20">

        {/* ── TOP SECTION HEADER ────────────────────────────────────── */}
        <motion.div
          className="flex flex-col items-center text-center gap-3.5 max-w-[580px] mx-auto px-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Small uppercase label */}
          <span className="text-label-md font-semibold tracking-[0.18em] uppercase text-brand-goldAccent">
            {HOW_IT_WORKS_HEADER.label}
          </span>

          {/* Large Editorial Heading */}
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-brand-dark leading-[1.12] text-balance">
            {HOW_IT_WORKS_HEADER.headingLine1}{' '}
            <span className="italic font-normal">{HOW_IT_WORKS_HEADER.headingLine2}</span>
          </h2>

          {/* Centered Description */}
          <p className="text-body-md text-brand-textMuted leading-relaxed text-pretty">
            {HOW_IT_WORKS_HEADER.description}
          </p>
        </motion.div>

        {/* ── MAIN LAYOUT: 45% / 55% SPLIT ───────────────────────────── */}
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-10 sm:gap-14 lg:gap-16 w-full">

          {/* ── LEFT COLUMN (45% DESKTOP): OVERLAPPING PHONES ────────── */}
          <motion.div
            className="w-full lg:w-[45%] flex justify-center items-center py-4 px-4 overflow-visible"
            whileHover={{ y: -6 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative flex items-center justify-center w-full max-w-[340px] sm:max-w-[440px] md:max-w-[480px] mx-auto overflow-visible">

              {/* BACK PHONE (-6° rotation, 90% size, starts first) */}
              <motion.div
                className="relative -mr-12 xs:-mr-14 sm:-mr-20 md:-mr-24 z-0 transform -rotate-6 opacity-95 flex-shrink-0"
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 0.95, y: 0, scale: 0.9 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.9, delay: 0, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <PhoneMockup
                  src={MOCKUP_IMAGES.discover}
                  alt="DabbaMe Discover Screen"
                  delay={0}
                  className="w-[150px] xs:w-[175px] sm:w-[220px] md:w-[250px] aspect-[9/19.5]"
                />
              </motion.div>

              {/* FRONT PHONE (Vertical, 100% size, highest z-index, starts +150ms later) */}
              <motion.div
                className="relative z-10 flex-shrink-0"
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <PhoneMockup
                  src={MOCKUP_IMAGES.kitchenDetails}
                  alt="DabbaMe Kitchen Details Screen"
                  delay={0.15}
                  className="w-[170px] xs:w-[195px] sm:w-[245px] md:w-[280px] aspect-[9/19.5]"
                />
              </motion.div>

            </div>
          </motion.div>

          {/* ── RIGHT COLUMN (55% DESKTOP): THREE STEPS ──────────────── */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center my-auto gap-3 sm:gap-4 lg:gap-14 pl-0 lg:pl-2 max-w-xl lg:max-w-none mx-auto">
            {HOW_IT_WORKS_STEPS.map((step) => (
              <HowItWorksStep
                key={step.id}
                number={step.number}
                title={step.title}
                description={step.description}
                delay={step.delay}
              />
            ))}
          </div>

        </div>

      </Container>
    </Section>
  );
}
