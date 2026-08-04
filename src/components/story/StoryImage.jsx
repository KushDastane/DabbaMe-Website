import { OptimizedImage } from '@components/common/OptimizedImage';

/**
 * StoryImage
 *
 * Renders the storybook cutout illustration with optimized loading.
 */
export function StoryImage({ src, alt, className = '', isHero = false }) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      isHero={isHero}
      className={`w-full h-auto object-contain block mix-blend-multiply ${
        isHero ? 'max-h-[420px] lg:max-h-[480px]' : 'max-h-[260px] sm:max-h-[300px]'
      } ${className}`}
    />
  );
}
