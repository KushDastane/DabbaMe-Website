import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar, Footer } from '@components/layout';
import { Container } from '@components/ui';
import { SEO } from '@components/common/SEO';

/**
 * NotFoundPage (404)
 *
 * Custom 404 error page.
 */
export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="404 — Page Not Found | DabbaMe"
        description="The page you are looking for does not exist or has been moved."
        canonical="/404"
      />

      <div className="min-h-screen bg-brand-bg flex flex-col justify-between">
        <Navbar />

        <main id="main-content" className="flex-grow flex items-center justify-center pt-28 pb-20">
          <Container className="max-w-xl text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col items-center gap-6 p-8 sm:p-12 rounded-3xl bg-white border border-brand-border shadow-md"
            >
              <span className="font-editorial text-7xl sm:text-8xl font-bold text-brand-gold">
                404
              </span>
              <h1 className="font-editorial text-2xl sm:text-3xl font-medium text-brand-dark">
                Page Not Found
              </h1>
              <p className="text-body-md text-brand-textMuted leading-relaxed max-w-md">
                Sorry, the page you are looking for doesn't exist, was removed, or is temporarily unavailable.
              </p>

              <div className="pt-2">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-dark text-white font-semibold text-sm hover:bg-black transition-all duration-300 shadow-md"
                >
                  Back to Homepage
                </Link>
              </div>
            </motion.div>
          </Container>
        </main>

        <Footer />
      </div>
    </>
  );
}
