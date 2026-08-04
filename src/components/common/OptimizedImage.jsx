import { useState } from 'react';
import { cn } from '@utils/cn';

/**
 * OptimizedImage Component
 *
 * High-performance image renderer featuring:
 * - Warm skeleton shimmer loading placeholder while loading
 * - Smooth progressive opacity fade-in transition
 * - Native performance attributes (decoding="async", loading="lazy" / "eager", fetchPriority)
 * - Graceful fallback handling
 */
export function OptimizedImage({
  src,
  alt = '',
  className,
  containerClassName,
  loading = 'lazy',
  fetchPriority = 'auto',
  isHero = false,
  aspectRatio,
  onError,
  onLoad,
  ...props
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const effectiveLoading = isHero ? 'eager' : loading;
  const effectiveFetchPriority = isHero ? 'high' : fetchPriority;

  return (
    <div
      className={cn('relative overflow-hidden inline-block w-full', containerClassName)}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {/* Shimmer loading backdrop */}
      {!loaded && !error && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#F5EFE6]/80 animate-pulse z-0"
        />
      )}

      {!error ? (
        <img
          src={src}
          alt={alt}
          loading={effectiveLoading}
          decoding="async"
          fetchPriority={effectiveFetchPriority}
          onLoad={(e) => {
            setLoaded(true);
            onLoad?.(e);
          }}
          onError={(e) => {
            setError(true);
            onError?.(e);
          }}
          className={cn(
            'transition-opacity duration-300 ease-out block',
            loaded ? 'opacity-100' : 'opacity-0',
            className
          )}
          {...props}
        />
      ) : (
        <div className="w-full h-full min-h-[100px] flex items-center justify-center bg-brand-beige/50 text-brand-textMuted text-xs p-4 text-center rounded-lg">
          <span>{alt || 'Image unavailable'}</span>
        </div>
      )}
    </div>
  );
}
