import { cn } from '@utils/cn';

/**
 * LaurelBranch
 * Bold, classical golden laurel branch with plump leaves matching reference design.
 */
function LaurelBranch({ flip = false }) {
  return (
    <svg
      viewBox="0 -10 65 120"
      fill="none"
      className={cn(
        'w-10 sm:w-12 h-20 sm:h-24 text-[#C88A2C] select-none flex-shrink-0 overflow-visible',
        flip && 'scale-x-[-1]'
      )}
      aria-hidden="true"
    >
      <g fill="currentColor">
        {/* Curved stem */}
        <path
          d="M 50 88 C 16 78, 8 30, 28 2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        {/* Plump laurel leaf pairs along curve */}
        <path d="M 0 0 C -3.96 -5.44, -3.96 -11.66, 0 -15.54 C 3.96 -11.66, 3.96 -5.44, 0 0 Z" transform="translate(38.89, 82.86) rotate(-268.6)" />
        <path d="M 0 0 C -3.96 -5.44, -3.96 -11.66, 0 -15.54 C 3.96 -11.66, 3.96 -5.44, 0 0 Z" transform="translate(38.89, 82.86) rotate(-202.6)" />
        <path d="M 0 0 C -4.29 -5.90, -4.29 -12.64, 0 -16.85 C 4.29 -12.64, 4.29 -5.90, 0 0 Z" transform="translate(30.04, 75.04) rotate(-252.7)" />
        <path d="M 0 0 C -4.29 -5.90, -4.29 -12.64, 0 -16.85 C 4.29 -12.64, 4.29 -5.90, 0 0 Z" transform="translate(30.04, 75.04) rotate(-186.7)" />
        <path d="M 0 0 C -4.53 -6.23, -4.53 -13.36, 0 -17.81 C 4.53 -13.36, 4.53 -6.23, 0 0 Z" transform="translate(23.04, 64.23) rotate(-237.6)" />
        <path d="M 0 0 C -4.53 -6.23, -4.53 -13.36, 0 -17.81 C 4.53 -13.36, 4.53 -6.23, 0 0 Z" transform="translate(23.04, 64.23) rotate(-171.6)" />
        <path d="M 0 0 C -4.62 -6.35, -4.62 -13.61, 0 -18.15 C 4.62 -13.61, 4.62 -6.35, 0 0 Z" transform="translate(18.75, 51.75) rotate(-224.6)" />
        <path d="M 0 0 C -4.62 -6.35, -4.62 -13.61, 0 -18.15 C 4.62 -13.61, 4.62 -6.35, 0 0 Z" transform="translate(18.75, 51.75) rotate(-158.6)" />
        <path d="M 0 0 C -4.53 -6.23, -4.53 -13.36, 0 -17.81 C 4.53 -13.36, 4.53 -6.23, 0 0 Z" transform="translate(17.20, 38.36) rotate(-212.7)" />
        <path d="M 0 0 C -4.53 -6.23, -4.53 -13.36, 0 -17.81 C 4.53 -13.36, 4.53 -6.23, 0 0 Z" transform="translate(17.20, 38.36) rotate(-146.7)" />
        <path d="M 0 0 C -4.29 -5.90, -4.29 -12.64, 0 -16.85 C 4.29 -12.64, 4.29 -5.90, 0 0 Z" transform="translate(18.41, 24.81) rotate(-201.0)" />
        <path d="M 0 0 C -4.29 -5.90, -4.29 -12.64, 0 -16.85 C 4.29 -12.64, 4.29 -5.90, 0 0 Z" transform="translate(18.41, 24.81) rotate(-135.0)" />
        <path d="M 0 0 C -3.96 -5.44, -3.96 -11.66, 0 -15.54 C 3.96 -11.66, 3.96 -5.44, 0 0 Z" transform="translate(22.01, 12.84) rotate(-189.4)" />
        <path d="M 0 0 C -3.96 -5.44, -3.96 -11.66, 0 -15.54 C 3.96 -11.66, 3.96 -5.44, 0 0 Z" transform="translate(22.01, 12.84) rotate(-123.4)" />
        {/* Tip leaf */}
        <path d="M 0 0 C -3.57 -4.91, -3.57 -10.52, 0 -14.03 C 3.57 -10.52, 3.57 -4.91, 0 0 Z" transform="translate(28, 2) rotate(-144.5)" />
      </g>
    </svg>
  );
}

/**
 * MilestoneCard Component
 *
 * Premium editorial award card matching DabbaMe's visual identity:
 * - Bold golden laurel wreath with star base framing the official logo closely
 * - Thin warm-gold divider
 * - Prominent achievement badge (e.g. RUNNER-UP or 1ST PRIZE)
 * - Clear organization and context event details
 * - Optional link (only rendered if URL is provided)
 * - Generous whitespace, rounded-[28px], and warm soft shadows
 */
export function MilestoneCard({ milestone, className }) {
  const {
    id,
    organization,
    achievement,
    event,
    category,
    logo,
    logoAlt,
    link,
  } = milestone;

  return (
    <article
      className={cn(
        'relative flex flex-col justify-between items-center text-center w-full h-full',
        'p-6 sm:p-7 md:p-8 rounded-[24px] sm:rounded-[28px]',
        'bg-white/95 border border-brand-border/80',
        'shadow-[0_4px_20px_rgba(45,45,45,0.04)]',
        'hover:shadow-[0_10px_32px_rgba(245,179,0,0.12)] hover:-translate-y-1',
        'transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]',
        'select-none group overflow-hidden',
        className
      )}
    >
      {/* Subtle ambient warm glow in header area */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-[24px] sm:rounded-[28px] pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(ellipse at 50% 15%, rgba(245,179,0,0.09) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 flex flex-col items-center w-full">
        {/* ── TOP EMBLEM / LOGO FRAMED TIGHTLY BY BOLD GOLDEN LAUREL WREATH ────── */}
        <div className="relative inline-flex items-center justify-center gap-1 sm:gap-2 py-1 mx-auto">
          {/* Left Laurel Branch */}
          <LaurelBranch />

          {/* Official Organization / Event Logo — Larger & Snugly Framed */}
          <div className="flex items-center justify-center min-h-[64px] sm:min-h-[76px] px-1">
            {logo ? (
              <img
                src={logo}
                alt={logoAlt || `${organization} logo`}
                className={cn(
                  'w-auto object-contain transition-transform duration-300 group-hover:scale-105 select-none',
                  id === 'ieee-eif-2026'
                    ? 'h-13 sm:h-16 max-w-[155px] sm:max-w-[185px]'
                    : 'h-13 sm:h-16 max-w-[150px] sm:max-w-[180px]'
                )}
                loading="lazy"
              />
            ) : (
              <span className="font-sans font-extrabold text-sm sm:text-base tracking-[0.16em] text-brand-dark/85 uppercase">
                {organization}
              </span>
            )}
          </div>

          {/* Right Laurel Branch (100% mirrored, identical & visible) */}
          <LaurelBranch flip />

          {/* Golden 4-point star at bottom center */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 text-[#C88A2C] text-sm leading-none select-none"
          >
            ✦
          </div>
        </div>

        {/* ── THIN WARM-GOLD DIVIDER ──────────────────────────────── */}
        <div
          aria-hidden="true"
          className="w-14 sm:w-16 h-px bg-gradient-to-r from-transparent via-brand-gold/45 to-transparent my-3 sm:my-3.5"
        />

        {/* ── PROMINENT ACHIEVEMENT BADGE ─────────────────────────── */}
        <div className="mb-2.5">
          <span
            className={cn(
              'inline-flex items-center px-3.5 py-1 rounded-full',
              'text-[11px] sm:text-xs font-bold tracking-[0.14em] uppercase',
              'bg-[#FEF6E0] text-[#9E6F00] border border-[#F5E3A8]/90',
              'shadow-[0_1px_4px_rgba(245,179,0,0.08)]'
            )}
          >
            {achievement}
          </span>
        </div>

        {/* ── ORGANIZATION NAME ────────────────────────────────────── */}
        <h3 className="font-editorial text-lg sm:text-xl font-semibold text-brand-dark tracking-tight leading-snug max-w-[340px]">
          {organization}
        </h3>

        {/* ── EVENT & ACCURATE CONTEXT DETAILS ────────────────────── */}
        <div className="mt-1.5 flex flex-col items-center gap-1 text-center max-w-[340px]">
          <p className="text-xs sm:text-[13px] text-brand-textMuted font-medium leading-relaxed">
            {event}
          </p>
          {category && (
            <span className="text-[11px] sm:text-xs text-brand-textMuted/80 font-normal">
              {category}
            </span>
          )}
        </div>
      </div>

      {/* ── OPTIONAL LINK (ONLY IF PRESENT) ────────────────────────── */}
      {link ? (
        <div className="relative z-10 pt-4 mt-3 border-t border-brand-border/40 w-full flex justify-center">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-goldAccent hover:text-brand-dark transition-colors duration-200 group-hover:translate-x-0.5 transition-transform"
            aria-label={`View details for ${organization} - ${achievement}`}
          >
            <span>View details</span>
            <span aria-hidden="true" className="text-sm">→</span>
          </a>
        </div>
      ) : (
        <div className="h-2" aria-hidden="true" />
      )}
    </article>
  );
}
