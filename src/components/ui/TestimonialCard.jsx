import { cn } from '@utils/cn';

/**
 * StarRating Component
 * 5 proper gold or green stars. No decimal ratings.
 */
export function StarRating({ rating = 5, colorClass = 'text-[#F5B300]', size = 'sm' }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} out of 5 stars`}
      role="img"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={cn(
            'flex-shrink-0 fill-current',
            colorClass,
            size === 'sm' ? 'w-3.5 h-3.5 sm:w-4 sm:h-4' : 'w-4 h-4 sm:w-5 sm:h-5'
          )}
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/**
 * TestimonialCard Component
 *
 * Premium marketing card with smooth rounded corners (`rounded-[28px]`),
 * soft subtle shadow, and clean concise typography.
 *
 * All layers enforce `rounded-[28px]` and `overflow-hidden` so shadow casting
 * never creates square corner artifacts.
 */
export function TestimonialCard({ data, variant = 'customer', className }) {
  const isCustomer = variant === 'customer';
  const { rating = 5, review, name, kitchenName, role, location, isVerified } = data;
  const authorName = isCustomer ? name : kitchenName;

  return (
    <div
      className={cn(
        'relative flex flex-col justify-between w-full min-h-[190px] sm:min-h-[200px]',
        'p-5 sm:p-6 rounded-[28px] overflow-hidden',
        'bg-white/95 backdrop-blur-xl',
        isCustomer
          ? 'border border-[#F5E3A8]/70 shadow-[0_16px_40px_rgba(245,179,0,0.12),0_2px_8px_rgba(0,0,0,0.03)]'
          : 'border border-[#B8D8BE]/70 shadow-[0_16px_40px_rgba(43,122,54,0.12),0_2px_8px_rgba(0,0,0,0.03)]',
        'transition-all duration-300 select-text',
        className
      )}
    >
      {/* Soft ambient background glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-[28px] pointer-events-none opacity-60 overflow-hidden"
        style={{
          background: isCustomer
            ? 'radial-gradient(ellipse at 15% 0%, rgba(245,179,0,0.07) 0%, transparent 65%)'
            : 'radial-gradient(ellipse at 15% 0%, rgba(43,122,54,0.07) 0%, transparent 65%)',
        }}
      />

      <div className="relative z-10 flex flex-col gap-2.5">
        {/* Header: Stars + Verified Badge if Kitchen */}
        <div className="flex items-center justify-between gap-2">
          <StarRating
            rating={rating}
            colorClass={isCustomer ? 'text-[#F5B300]' : 'text-[#2B7A36]'}
          />

          {!isCustomer && isVerified && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#DEEFE1] border border-[#A8D4AE]/60 text-[#1E6B2A] text-[10px] sm:text-[11px] font-bold tracking-wide uppercase">
              <svg viewBox="0 0 12 12" className="w-2.5 h-2.5 fill-current" aria-hidden="true">
                <path d="M10.22 2.22a.75.75 0 0 1 0 1.06L5 8.5 2.28 5.78a.75.75 0 1 1 1.06-1.06L5 6.38l4.16-4.16a.75.75 0 0 1 1.06 0Z" />
              </svg>
              Home Kitchen
            </span>
          )}
        </div>

        {/* Short, highly readable review (2-3 lines) */}
        <p className="text-xs sm:text-sm font-medium text-[#2D2D2D] leading-relaxed text-pretty">
          "{review}"
        </p>
      </div>

      {/* Footer: Name, Role, Location */}
      <div className="relative z-10 pt-3 mt-3 border-t border-black/5 flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="text-xs sm:text-sm font-bold text-[#1E1E1E] leading-snug">
            {authorName}
          </span>
          <span className="text-[11px] sm:text-xs text-[#6B6560] leading-snug mt-0.5 font-normal">
            {role} {location ? `· ${location}` : ''}
          </span>
        </div>
      </div>
    </div>
  );
}
