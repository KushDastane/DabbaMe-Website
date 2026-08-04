/**
 * StoryImage
 *
 * Renders the storybook PNG/WebP cutout illustration directly on the page canvas.
 * - NO background boxes
 * - NO borders or dashed outlines
 * - NO card containers
 * - NO drop shadows
 * - NO placeholder text or fallback UI
 */
export function StoryImage({ src, alt, className = '', isHero = false }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full h-auto object-contain block mix-blend-multiply ${
        isHero ? 'max-h-[420px] lg:max-h-[480px]' : 'max-h-[260px] sm:max-h-[300px]'
      } ${className}`}
      loading={isHero ? 'eager' : 'lazy'}
    />
  );
}
