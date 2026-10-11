import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Navbar, Footer } from '@components/layout';
import { SEO } from '@components/common/SEO';
import { Container } from '@components/ui';
import { StateAccordionItem } from '@/components/network/StateAccordionItem';
import { NetworkCTA } from '@/components/network/NetworkCTA';
import { SuggestionModal } from '@/components/network/SuggestionModal';
import { kitchenLocations } from '@/data/kitchenLocations';
import {
  ORGANIZATION_SCHEMA,
  WEBSITE_SCHEMA,
} from '@constants/seoSchemas';

/**
 * LocationsPage
 *
 * Dedicated directory page showcasing all states, cities, and localities.
 * Direct, minimal header: just "← Back to Home" followed immediately by the state directory.
 * All states collapsed by default.
 */
export default function LocationsPage() {
  const navigate = useNavigate();
  // All states closed by default
  const [expandedStateId, setExpandedStateId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggle = (stateId) => {
    setExpandedStateId((prev) => (prev === stateId ? null : stateId));
  };

  const handleBackToHome = (e) => {
    e.preventDefault();
    navigate('/#our-growing-network');
  };

  return (
    <>
      <SEO
        title="Kitchen Locations & Coverage | DabbaMe"
        description="Explore the states, cities, and localities where DabbaMe home kitchen partners operate across India. Discover authentic home-cooked meals near you."
        canonical="/locations"
        keywords="DabbaMe locations, home kitchens India, tiffin service Mumbai, homemade food Ahmedabad, dabba service Delhi, home cooks Lucknow, tiffin Kolkata"
        schemas={[ORGANIZATION_SCHEMA, WEBSITE_SCHEMA]}
      />

      <div className="min-h-screen bg-brand-bg flex flex-col">
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main id="main-content" className="flex-1 pt-18 sm:pt-22 pb-10 sm:pb-16">
          <Container className="max-w-[860px] flex flex-col items-center px-3.5 sm:px-6">

            {/* Clean Back Link with zero excess empty space */}
            <div className="w-full flex items-center justify-start mb-2.5 sm:mb-4">
              <Link
                to="/#our-growing-network"
                onClick={handleBackToHome}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#8C867D] hover:text-[#B57F00] transition-colors py-1 group"
              >
                <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:-translate-x-0.5" />
                <span>Back to Home</span>
              </Link>
            </div>

            {/* State-wise Accordion (Directly starts here, all closed by default) */}
            <div className="w-full flex flex-col gap-2.5 sm:gap-3">
              {kitchenLocations.map((state, index) => (
                <StateAccordionItem
                  key={state.id}
                  state={state}
                  index={index}
                  isOpen={expandedStateId === state.id}
                  onToggle={() => handleToggle(state.id)}
                />
              ))}
            </div>

            {/* Bottom CTA with Mascot */}
            <NetworkCTA onOpenModal={() => setIsModalOpen(true)} />

            {/* Suggestion Modal */}
            <SuggestionModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />

          </Container>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
