import { useState } from 'react';
import { cn } from '@utils/cn';

/**
 * ImageSlot — Renders the WebP image in a tight, responsive container.
 */
export function ImageSlot({ image, tone }) {
  const isBad = tone === 'bad';
  const [hasError, setHasError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="w-full h-[210px] xs:h-[240px] sm:h-[280px] md:h-[310px] flex items-center justify-center relative">
      {!loaded && !hasError && (
        <div className="absolute inset-4 rounded-2xl bg-brand-beige/60 animate-pulse pointer-events-none" />
      )}
      {!hasError ? (
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setHasError(true)}
          className={cn(
            'max-w-full max-h-full object-contain select-none pointer-events-none drop-shadow-xl transition-opacity duration-300',
            loaded ? 'opacity-100' : 'opacity-0',
            image.className
          )}
          draggable="false"
        />
      ) : (
        /* Sleek placeholder podium frame while WebP asset is missing */
        <div
          className={cn(
            'w-full h-[90%] rounded-[32px] border flex flex-col items-center justify-end pb-4 relative overflow-hidden',
            isBad
              ? 'bg-gradient-to-b from-white to-red-50/40 border-red-200/60 shadow-[0_10px_30px_rgba(239,68,68,0.08)]'
              : 'bg-gradient-to-b from-white to-green-50/40 border-green-200/60 shadow-[0_10px_30px_rgba(34,197,94,0.08)]'
          )}
        >
          <div
            className={cn(
              'absolute bottom-0 inset-x-4 h-1.5 rounded-full blur-[1px]',
              isBad ? 'bg-red-400' : 'bg-green-400'
            )}
          />
          <span className="text-body-xs font-mono text-brand-textMuted uppercase tracking-wider z-10 px-2 text-center">
            {image.src.split('/').pop()}
          </span>
        </div>
      )}
    </div>
  );
}

/**
 * TextSlot — Renders the solid Pill label and bullet points.
 */
export function TextSlot({ label, tone, bulletPoints }) {
  const isBad = tone === 'bad';

  return (
    <div className="flex flex-col items-start gap-2.5 w-full">
      {/* Solid Pill Badge */}
      <span
        className={cn(
          'inline-flex items-center px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white shadow-sm',
          isBad ? 'bg-[#EF4444]' : 'bg-[#22C55E]'
        )}
      >
        {label}
      </span>

      {/* Bullet Points */}
      <ul className="flex flex-col gap-2 w-full list-none">
        {bulletPoints.map((point, index) => (
          <li key={index} className="flex items-start gap-2.5">
            <span
              className={cn(
                'w-5 h-5 rounded-full flex items-center justify-center text-white text-[11px] font-extrabold flex-shrink-0 shadow-sm mt-0.5',
                isBad ? 'bg-[#EF4444]' : 'bg-[#22C55E]'
              )}
            >
              {isBad ? '✕' : '✓'}
            </span>
            <span className="text-sm sm:text-base font-medium text-brand-text leading-snug">
              {point}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
