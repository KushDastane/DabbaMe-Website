import { useState } from 'react';
import { Navbar } from '@components/layout';
import { Footer } from '@components/layout';
import { LoadingScreen } from '@components/common';
import { HeroSection } from '@sections/HeroSection';

/**
 * HomePage
 *
 * The primary marketing page.
 * Assembles: LoadingScreen → Navbar → Sections → Footer
 *
 * Future sections slot in between HeroSection and Footer.
 */
export default function HomePage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* Loading splash — renders once then fades out */}
      {!loaded && (
        <LoadingScreen
          duration={1400}
          onComplete={() => setLoaded(true)}
        />
      )}

      {/* Page */}
      <div className="min-h-screen bg-brand-bg">
        {/* Sticky navigation */}
        <Navbar />

        {/* Main content */}
        <main id="main-content" tabIndex={-1}>
          {/* ── Hero ──────────────────────────────────────────────── */}
          <HeroSection />

          {/*
           * ── Future Sections ───────────────────────────────────────
           * Add sections here as they are built:
           *
           * <HowItWorksSection />
           * <FeaturedKitchensSection />
           * <WhyDabbaMeSection />
           * <ForKitchensSection />
           * <TestimonialsSection />
           * <DownloadAppSection />
           */}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
