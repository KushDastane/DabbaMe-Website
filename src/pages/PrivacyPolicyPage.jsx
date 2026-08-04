import { motion } from 'framer-motion';
import { Navbar, Footer } from '@components/layout';
import { Container, Section } from '@components/ui';
import { BRAND } from '@constants/brand';

/**
 * PrivacyPolicyPage
 *
 * Official Privacy Policy for DabbaMe platform.
 */
export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-brand-bg flex flex-col">
      <Navbar />

      <main id="main-content" className="flex-grow pt-28 sm:pt-36 pb-20">
        <Container className="max-w-4xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col gap-8"
          >
            {/* Header */}
            <div className="flex flex-col gap-3 pb-6 border-b border-brand-border">
            
              <h1 className="font-editorial text-4xl sm:text-5xl font-medium tracking-tight text-brand-dark">
                Privacy Policy
              </h1>
              <p className="text-body-lg text-brand-textMuted leading-relaxed max-w-2xl">
                This page outlines how DabbaMe collects, uses, and protects information for customers, kitchens, and partners using the platform.
              </p>
            </div>

            {/* Content Sections */}
            <div className="flex flex-col gap-8 text-brand-dark">
              {/* Section 1 */}
              <section className="flex flex-col gap-3 p-6 sm:p-8 rounded-2xl bg-white border border-brand-border shadow-xs">
                <h2 className="font-editorial text-2xl font-medium text-brand-dark">
                  Information We Collect
                </h2>
                <p className="text-body-md text-brand-textMuted leading-relaxed">
                  DabbaMe may collect account details, contact information, order history, kitchen onboarding details, payment references, and device usage data needed to operate the platform safely and reliably.
                </p>
              </section>

              {/* Section 2 */}
              <section className="flex flex-col gap-3 p-6 sm:p-8 rounded-2xl bg-white border border-brand-border shadow-xs">
                <h2 className="font-editorial text-2xl font-medium text-brand-dark">
                  How We Use Information
                </h2>
                <p className="text-body-md text-brand-textMuted leading-relaxed">
                  We use collected information to process orders, verify kitchens, improve customer support, personalize the product experience, maintain security, and communicate important updates about the service.
                </p>
              </section>

              {/* Section 3 */}
              <section className="flex flex-col gap-3 p-6 sm:p-8 rounded-2xl bg-white border border-brand-border shadow-xs">
                <h2 className="font-editorial text-2xl font-medium text-brand-dark">
                  Sharing and Protection
                </h2>
                <p className="text-body-md text-brand-textMuted leading-relaxed">
                  We only share data with trusted service providers, delivery or payment partners, and legal authorities when required. We apply reasonable safeguards to protect user and kitchen information from misuse or unauthorized access.
                </p>
              </section>

              {/* Section 4 */}
              <section className="flex flex-col gap-3 p-6 sm:p-8 rounded-2xl bg-white border border-brand-border shadow-xs">
                <h2 className="font-editorial text-2xl font-medium text-brand-dark">
                  Your Choices
                </h2>
                <p className="text-body-md text-brand-textMuted leading-relaxed">
                  Users may request profile updates, correction of inaccurate information, or account deletion subject to operational and legal obligations. Questions about privacy can be directed to the DabbaMe support team at{' '}
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="text-brand-dark font-semibold underline hover:text-brand-goldAccent transition-colors"
                  >
                    {BRAND.email}
                  </a>
                  .
                </p>
              </section>
            </div>
          </motion.div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
