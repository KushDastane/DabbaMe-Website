import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Section, Container } from '@components/ui';
import {
  networkStatsList,
  stateNamesList,
} from '@/data/kitchenLocations';

/**
 * NetworkLocationsSection
 *
 * Compact homepage section for "Our Growing Network".
 * Features:
 * - Simple text eyebrow & editorial heading
 * - Clean 3-column stats bar (with "Home Kitchens" on mobile)
 * - Centered state location chips with red location pins
 * - Prominent "Explore Locations →" CTA linking to /locations
 */
export function NetworkLocationsSection() {
  return (
    <Section
      id="our-growing-network"
      className="bg-[#FCFAF5] py-8 sm:py-12 lg:py-14 overflow-hidden border-t border-[#F2ECE1]"
    >
      <Container className="max-w-[800px] flex flex-col items-center px-3.5 sm:px-6">

        {/* ── SECTION HEADER ──────────────────────────────────────────────── */}
        <motion.div
          className="flex flex-col items-center text-center gap-1.5 sm:gap-2 max-w-[600px] mx-auto px-1"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Eyebrow */}
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#B57F00]">
            OUR GROWING NETWORK
          </span>

          {/* Heading */}
          <h2 className="font-editorial font-medium text-2xl xs:text-3xl sm:text-4xl text-[#1E1E1E] leading-[1.15] tracking-tight text-balance">
            Near your neighborhood
          </h2>


        </motion.div>

        {/* ── UNIFIED NETWORK SHOWCASE CARD ───────────────────────────────── */}
        <motion.div
          className="w-full max-w-[560px] mx-auto mt-5 sm:mt-6 bg-white rounded-2xl sm:rounded-3xl border border-[#ECE7DF] shadow-[0_4px_24px_rgba(0,0,0,0.03)] p-4 sm:p-6 flex flex-col gap-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.45, delay: 0.08, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* 1. Strictly Uniform 3-Column Stats Bar (Shows "Home Kitchens" on phone) */}
          <div className="grid grid-cols-3 divide-x divide-[#EDE7DC] bg-[#FAF8F3] rounded-xl sm:rounded-2xl p-2 sm:p-3 border border-[#EFEBE4]">
            {networkStatsList.map((stat) => (
              <div
                key={stat.id}
                className="flex flex-col items-center justify-center text-center px-1 py-1"
              >
                <span className="font-editorial text-xl xs:text-2xl sm:text-3xl font-bold text-[#1E1E1E] tracking-tight text-gradient-gold leading-none">
                  {stat.value}
                </span>
                <span className="text-[10px] xs:text-[11px] sm:text-xs font-medium text-[#6B6560] mt-1 leading-tight text-balance">
                  <span className="hidden sm:inline">{stat.label}</span>
                  <span className="sm:hidden">{stat.shortLabel || stat.label}</span>
                </span>
              </div>
            ))}
          </div>

          {/* 2. Centered State Chips with Red Location Pins */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 xs:gap-2 px-1">
            {stateNamesList.map((stateName) => (
              <span
                key={stateName}
                className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[11px] xs:text-xs font-medium text-[#2D2D2D] bg-[#FCFAF5] border border-[#E5DFD5] shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-colors hover:border-[#F5B300]/70 hover:bg-[#FFFDF8]"
              >
                <MapPin className="w-3 h-3 text-red-500 fill-red-500/20 flex-shrink-0" aria-hidden="true" />
                <span>{stateName}</span>
              </span>
            ))}
          </div>

          {/* 3. Single Prominent CTA Button & Disclaimer */}
          <div className="flex flex-col items-center gap-2 pt-2 border-t border-[#F5F2EC]">
            <Link
              to="/locations"
              onClick={() => {
                try {
                  sessionStorage.setItem('dabbame_network_scroll_pos', window.scrollY.toString());
                } catch {
                  // ignore
                }
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#F5B300] hover:bg-[#E0A106] text-[#1E1E1E] font-semibold text-xs xs:text-sm sm:text-base shadow-[0_2px_12px_rgba(245,179,0,0.22)] hover:shadow-[0_4px_16px_rgba(245,179,0,0.32)] transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B300] focus-visible:ring-offset-2"
            >
              <span>Explore Locations</span>
              <span aria-hidden="true" className="text-base sm:text-lg leading-none">→</span>
            </Link>

            <p className="text-[10px] xs:text-[11px] text-[#8C867D] text-center max-w-xs leading-relaxed">
              Availability varies by locality. Check the app for kitchens near you.
            </p>
          </div>
        </motion.div>

      </Container>
    </Section>
  );
}
