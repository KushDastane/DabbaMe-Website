import { cn } from '@utils/cn';

/**
 * Heading
 *
 * Typographic heading component with consistent sizing and spacing.
 * Uses Playfair Display for editorial styling by default.
 *
 * Props:
 *   as       — rendered HTML tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' (default: 'h2')
 *   size     — visual size: '2xl' | 'xl' | 'lg' | 'md' | 'sm' (default: derived from `as`)
 *   editorial — use Playfair Display font (default: true for h1/h2)
 *   className — additional classes
 *   children  — content
 */

const SIZE_CLASSES = {
  '2xl': 'text-display-2xl',
  'xl':  'text-display-xl',
  'lg':  'text-display-lg',
  'md':  'text-display-md',
  'sm':  'text-display-sm',
};

const TAG_DEFAULT_SIZE = {
  h1: '2xl',
  h2: 'xl',
  h3: 'lg',
  h4: 'md',
  h5: 'sm',
};

export function Heading({
  as: Tag = 'h2',
  size,
  editorial,
  className,
  children,
  ...props
}) {
  const resolvedSize  = size ?? TAG_DEFAULT_SIZE[Tag] ?? 'lg';
  const isEditorial   = editorial ?? (Tag === 'h1' || Tag === 'h2');

  return (
    <Tag
      className={cn(
        SIZE_CLASSES[resolvedSize],
        isEditorial ? 'font-editorial font-medium' : 'font-sans font-semibold',
        'text-brand-dark text-balance leading-tight tracking-tight',
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
