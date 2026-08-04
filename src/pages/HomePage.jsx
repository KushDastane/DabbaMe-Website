import { useState } from 'react';
import { Navbar, Footer } from '@components/layout';
import { LoadingScreen } from '@components/common';
import { SEO } from '@components/common/SEO';
import { HeroSection } from '@sections/HeroSection';
import { HowItWorks } from '@sections/HowItWorks';
import { WhyChooseDabbaMe } from '@sections/WhyChooseDabbaMe';
import { PlatformExperience } from '@sections/PlatformExperience';
import { TestimonialsSection } from '@sections/TestimonialsSection';
import { FAQSection } from '@sections/FAQSection';
import { AboutContactSection } from '@sections/AboutContactSection';
import {
  ORGANIZATION_SCHEMA,
  WEBSITE_SCHEMA,
  SOFTWARE_APPLICATION_SCHEMA,
  FAQ_SCHEMA,
  BREADCRUMB_HOME_SCHEMA,
} from '@constants/seoSchemas';

/**
 * HomePage
 *
 * The primary marketing page.
 * Assembles SEO → LoadingScreen → Navbar → Sections → Footer
 */
export default function HomePage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <SEO
        title="DabbaMe | Discover Trusted Home Kitchens Near You"
        description="Discover trusted home kitchens near you with DabbaMe. Browse homemade meals, subscribe to fresh tiffins and connect directly with verified home kitchens."
        keywords="home food, home kitchen, homemade food, tiffin service, dabba service, home cooked meals, healthy food, lunch near me, dinner near me, student meals, home chef, Indian tiffin"
        canonical="/"
        ogImage="/og-image.jpg"
        schemas={[
          ORGANIZATION_SCHEMA,
          WEBSITE_SCHEMA,
          SOFTWARE_APPLICATION_SCHEMA,
          FAQ_SCHEMA,
          BREADCRUMB_HOME_SCHEMA,
        ]}
      />

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

          {/* ── One Platform. Two Experiences. ────────────────── */}
          <PlatformExperience />

          {/* ── Testimonials ───────────────────────────────────── */}
          <TestimonialsSection />

          {/* ── Frequently Asked Questions ─────────────────────── */}
          <FAQSection />

          {/* ── Our Story & Contact ────────────────────────────── */}
          <AboutContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
