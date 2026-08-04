import { OptimizedImage } from '@components/common/OptimizedImage';

/**
 * IllustrationFrame
 *
 * Fades all four edges of an illustration into the page background (#FCFAF5).
 * Uses OptimizedImage for progressive loading and shimmer placeholders.
 */
export function IllustrationFrame({
  src,
  alt,
  className = '',
  isHero = false,
}) {
  const BG = '#FCFAF5';

  return (
    <div className={`relative w-full ${className}`} style={{ display: 'inline-block' }}>
      {/* Image with skeleton placeholder and smooth fade-in */}
      <OptimizedImage
        src={src}
        alt={alt}
        className="w-full h-auto block"
        isHero={isHero}
      />

      {/* Left edge fade */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(to right, ${BG} 0%, ${BG}CC 5%, transparent 22%)`,
          pointerEvents: 'none',
          zIndex: 10,
        }}
      />

      {/* Right edge fade */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(to left, ${BG} 0%, ${BG}CC 5%, transparent 22%)`,
          pointerEvents: 'none',
          zIndex: 10,
        }}
      />

      {/* Top edge fade */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(to bottom, ${BG} 0%, ${BG}CC 4%, transparent 18%)`,
          pointerEvents: 'none',
          zIndex: 10,
        }}
      />

      {/* Bottom edge fade */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(to top, ${BG} 0%, ${BG}CC 4%, transparent 18%)`,
          pointerEvents: 'none',
          zIndex: 10,
        }}
      />
    </div>
  );
}
