import { StateMonumentSvg } from './StateMonumentSvg';

/**
 * StateIllustration
 *
 * Renders the custom regional landmark illustration for each state/territory.
 * Styled in a consistent 36–44px badge adhering to DabbaMe's warm cream & gold palette.
 */
export function StateIllustration({ stateId, illustration, className = '' }) {
  return (
    <div
      className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 bg-[#FFF9EB] border border-[#F5E5BE] p-1 sm:p-1.5 shadow-[0_1px_3px_rgba(245,179,0,0.06)] ${className}`}
      aria-hidden="true"
    >
      <StateMonumentSvg stateId={stateId} illustration={illustration} className="w-full h-full" />
    </div>
  );
}
