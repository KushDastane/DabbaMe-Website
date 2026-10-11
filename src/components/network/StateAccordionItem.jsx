import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronDown, MapPin } from 'lucide-react';
import { StateIllustration } from './StateIllustration';
import { getStatePartnerCount, formatPartnerCount } from '@/data/kitchenLocations';

/**
 * StateAccordionItem
 *
 * An accessible accordion item representing a state/territory on the dedicated /locations page.
 * Features a custom regional monument illustration, fluid touch targets,
 * and a clear State → City → Locality hierarchy.
 */
export function StateAccordionItem({
  state,
  isOpen,
  onToggle,
  index,
}) {
  const shouldReduceMotion = useReducedMotion();
  const partnerCount = getStatePartnerCount(state);
  const partnerCountText = formatPartnerCount(partnerCount);

  const headerId = `accordion-header-${state.id}`;
  const panelId = `accordion-panel-${state.id}`;

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.35, delay: index * 0.02, ease: [0.25, 0.1, 0.25, 1] }
      }
      className="w-full"
    >
      <div
        className={`
          w-full rounded-[16px] sm:rounded-[18px] bg-white
          border transition-all duration-200 ease-out select-none
          ${
            isOpen
              ? 'border-[#F5B300]/90 shadow-[0_4px_16px_rgba(245,179,0,0.08)] ring-1 ring-[#F5B300]/20'
              : 'border-[#ECE7DF] shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-[#F5B300]/50 hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)] hover:-translate-y-[1px]'
          }
        `}
      >
        {/* Accordion Header / Button */}
        <button
          type="button"
          id={headerId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="w-full min-h-[58px] sm:min-h-[72px] px-3 sm:px-5 py-2.5 sm:py-3.5 flex items-center justify-between gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B300] focus-visible:ring-offset-2 rounded-[16px] sm:rounded-[18px]"
        >
          {/* Left: Custom Regional Monument SVG + State Name */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0 flex-1">
            <StateIllustration stateId={state.id} illustration={state.illustration} />
            <div className="flex flex-col min-w-0">
              <span className="font-editorial font-medium text-base sm:text-lg text-[#1E1E1E] leading-snug truncate">
                {state.name}
              </span>
              <span className="text-[11px] text-[#8C867D] sm:hidden font-sans font-medium">
                {partnerCountText}
              </span>
            </div>
          </div>

          {/* Right: Partner count badge (desktop) + Chevron */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#FBF8F2] text-[#6B6560] border border-[#ECE7DF]">
              {partnerCountText}
            </span>

            <div
              className={`
                w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-colors duration-200
                ${isOpen ? 'bg-[#FFF9EB] text-[#C98B00]' : 'bg-[#F9F7F2] text-[#6B6560]'}
              `}
              aria-hidden="true"
            >
              <ChevronDown
                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 text-[#C98B00]' : 'text-[#6B6560]'
                }`}
              />
            </div>
          </div>
        </button>

        {/* Accordion Body / Content */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              initial={shouldReduceMotion ? { opacity: 1 } : { height: 0, opacity: 0 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
              }
              className="overflow-hidden"
            >
              <div className="px-3 sm:px-5 pb-3.5 sm:pb-5 pt-1 border-t border-[#F5F2EC] bg-[#FAF8F3]/60 rounded-b-[16px] sm:rounded-b-[18px]">
                {/* Cities Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3 pt-2">
                  {state.cities.map((city) => (
                    <div
                      key={city.name}
                      className="rounded-xl sm:rounded-2xl bg-white border border-[#ECE7DF] p-3 sm:p-3.5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col gap-2 transition-colors hover:border-[#F5B300]/40"
                    >
                      {/* City Name Subheading */}
                      <div className="flex items-center justify-between gap-2 border-b border-[#F7F4EE] pb-1.5">
                        <h4 className="font-editorial font-medium text-sm sm:text-base text-[#1E1E1E] leading-snug truncate">
                          {city.name}
                        </h4>
                        {city.kitchenCount ? (
                          <span className="text-[10px] sm:text-[11px] font-medium text-[#8C867D] bg-[#F7F4EE] px-1.5 sm:px-2 py-0.5 rounded-md flex-shrink-0">
                            {city.kitchenCount} {city.kitchenCount === 1 ? 'kitchen' : 'kitchens'}
                          </span>
                        ) : null}
                      </div>

                      {/* Locality Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-0.5">
                        {city.localities && city.localities.length > 0 ? (
                          city.localities.map((locality) => (
                            <span
                              key={locality}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-medium bg-[#FCFAF5] hover:bg-[#FFF9EB] border border-[#E8E2D8] hover:border-[#F5B300]/60 text-[#2D2D2D] transition-all max-w-full text-left"
                            >
                              <MapPin
                                className="w-3 h-3 text-red-500 flex-shrink-0"
                                aria-hidden="true"
                              />
                              <span className="leading-snug break-words">{locality}</span>
                            </span>
                          ))
                        ) : (
                          // Fallback for cities without verified locality details (e.g. Loni Kalbhor)
                          <span
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-normal italic bg-[#F7F5F0] border border-dashed border-[#DDD6C8] text-[#78726B] max-w-full text-left"
                            title="Locality note from verified records"
                          >
                            <MapPin
                              className="w-3 h-3 text-red-400 flex-shrink-0"
                              aria-hidden="true"
                            />
                            <span className="break-words">{city.note || 'Coverage in area'}</span>
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
