import { motion } from 'framer-motion';
import { Navbar, Footer } from '@components/layout';
import { Container } from '@components/ui';
import { BRAND } from '@constants/brand';

/**
 * TermsPage
 *
 * Official Terms & Conditions for DabbaMe platform.
 */
export default function TermsPage() {
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
                Terms & Conditions
              </h1>
              <p className="text-body-lg text-brand-textMuted leading-relaxed max-w-2xl">
                These terms describe the expectations, responsibilities, and platform rules for customers and kitchen partners using DabbaMe.
              </p>
            </div>

            {/* Content Sections */}
            <div className="flex flex-col gap-8 text-brand-dark">
              {/* Section 1 */}
              <section className="flex flex-col gap-3 p-6 sm:p-8 rounded-2xl bg-white border border-brand-border shadow-xs">
                <h2 className="font-editorial text-2xl font-medium text-brand-dark">
                  Platform Use
                </h2>
                <p className="text-body-md text-brand-textMuted leading-relaxed">
                  DabbaMe provides a platform connecting customers with home kitchens. By using the service, users agree to provide accurate information and to use the platform only for lawful ordering, kitchen operations, and related communication.
                </p>
              </section>

              {/* Section 2 */}
              <section className="flex flex-col gap-3 p-6 sm:p-8 rounded-2xl bg-white border border-brand-border shadow-xs">
                <h2 className="font-editorial text-2xl font-medium text-brand-dark">
                  Orders and Payments
                </h2>
                <p className="text-body-md text-brand-textMuted leading-relaxed">
                  Customers are responsible for reviewing menus, pricing, and delivery details before placing an order. Kitchens are responsible for fulfilling accepted orders accurately and maintaining transparent availability and pricing.
                </p>
              </section>

              {/* Section 3 */}
              <section className="flex flex-col gap-3 p-6 sm:p-8 rounded-2xl bg-white border border-brand-border shadow-xs">
                <h2 className="font-editorial text-2xl font-medium text-brand-dark">
                  Kitchen Responsibilities
                </h2>
                <p className="text-body-md text-brand-textMuted leading-relaxed">
                  Kitchen partners must maintain required hygiene, food quality, and licensing standards applicable in their region. DabbaMe may suspend listings that create trust, quality, or safety concerns.
                </p>
              </section>

              {/* Section 4 */}
              <section className="flex flex-col gap-3 p-6 sm:p-8 rounded-2xl bg-white border border-brand-border shadow-xs">
                <h2 className="font-editorial text-2xl font-medium text-brand-dark">
                  Liability and Changes
                </h2>
                <p className="text-body-md text-brand-textMuted leading-relaxed">
                  DabbaMe may update product features, pricing structures, and these terms from time to time. Continued use of the platform after updates means the revised terms apply unless prohibited by law.
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
