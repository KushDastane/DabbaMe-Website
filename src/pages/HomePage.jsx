import { useState } from 'react';
import { Navbar } from '@components/layout';
import { Footer } from '@components/layout';
import { LoadingScreen } from '@components/common';
import { HeroSection } from '@sections/HeroSection';
import { HowItWorks } from '@sections/HowItWorks';
import { WhyChooseDabbaMe } from '@sections/WhyChooseDabbaMe';

/**
 * HomePage
 *
 * The primary marketing page.
 * Assembles: LoadingScreen → Navbar → Sections → Footer
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

          {/* ── How It Works ──────────────────────────────────────── */}
          <HowItWorks />

          {/* ── Why Choose DabbaMe ────────────────────────────── */}
          <WhyChooseDabbaMe />

          {/*
           * ── Future Sections ───────────────────────────────────────
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
