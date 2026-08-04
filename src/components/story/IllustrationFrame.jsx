/**
 * IllustrationFrame
 *
 * Fades all four edges of an illustration into the page background (#FCFAF5).
 *
 * Four gradient overlay divs sit absolutely over each edge of the image.
 * Each goes from the page cream color → transparent inward.
 * The image fills the full container width (no object-contain letterboxing).
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
      {/* Image — fills full container width, height proportional */}
      <img
        src={src}
        alt={alt}
        style={{ display: 'block', width: '100%', height: 'auto' }}
        loading={isHero ? 'eager' : 'lazy'}
      />

      {/* Left edge fade */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(to right, ${BG} 0%, ${BG}CC 5%, transparent 22%)`,
        pointerEvents: 'none',
      }} />

      {/* Right edge fade */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(to left, ${BG} 0%, ${BG}CC 5%, transparent 22%)`,
        pointerEvents: 'none',
      }} />

      {/* Top edge fade */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(to bottom, ${BG} 0%, ${BG}CC 4%, transparent 18%)`,
        pointerEvents: 'none',
      }} />

      {/* Bottom edge fade */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(to top, ${BG} 0%, ${BG}CC 4%, transparent 18%)`,
        pointerEvents: 'none',
      }} />
    </div>
  );
}
