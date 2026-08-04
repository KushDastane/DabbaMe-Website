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
 * Product showcase section featuring overlapping phone mockups and 3 steps.
 * Responsive: Fully visible and centered on mobile viewports.
 */
export function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      className="bg-brand-bg pt-10 pb-12 sm:pt-14 sm:pb-16 lg:pt-18 lg:pb-20 overflow-hidden"
    >
      <Container className="max-w-[1280px] flex flex-col gap-10 sm:gap-16 md:gap-20 px-4 sm:px-6">

        {/* ── TOP SECTION HEADER ────────────────────────────────────── */}
        <motion.div
          className="flex flex-col items-center text-center gap-3.5 max-w-[580px] mx-auto px-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
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

          {/* ── LEFT COLUMN: OVERLAPPING PHONES (VISIBLE ON ALL SCREENS) ── */}
          <motion.div
            className="w-full lg:w-[45%] flex justify-center items-center py-2 sm:py-4 px-2 overflow-visible"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative flex items-center justify-center w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[420px] md:max-w-[480px] mx-auto overflow-visible">

              {/* BACK PHONE (-6° rotation, starts first) */}
              <motion.div
                className="relative -mr-8 xs:-mr-10 sm:-mr-18 md:-mr-24 z-0 transform -rotate-6 opacity-95 flex-shrink-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.95, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <PhoneMockup
                  src={MOCKUP_IMAGES.discover}
                  alt="DabbaMe Discover Screen"
                  className="w-[130px] xs:w-[155px] sm:w-[210px] md:w-[250px] max-w-full"
                />
              </motion.div>

              {/* FRONT PHONE (Vertical, highest z-index) */}
              <motion.div
                className="relative z-10 flex-shrink-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <PhoneMockup
                  src={MOCKUP_IMAGES.kitchenDetails}
                  alt="DabbaMe Kitchen Details Screen"
                  className="w-[150px] xs:w-[178px] sm:w-[235px] md:w-[280px] max-w-full"
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
