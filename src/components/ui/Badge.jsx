import { cn } from '@utils/cn';

/**
 * Badge
 *
 * Small label chip for tags, status indicators, and category labels.
 *
 * Props:
 *   variant   — 'gold' | 'dark' | 'neutral' (default: 'neutral')
 *   dot       — show a small colored dot indicator
 *   className — additional classes
 *   children  — content
 */
export function Badge({
  variant   = 'neutral',
  dot       = false,
  className,
  children,
  ...props
}) {
  return (
    <span
      className={cn('badge', `badge-${variant}`, className)}
      {...props}
    >
      {dot && (
        <span
          aria-hidden="true"
          className={cn(
            'inline-block w-1.5 h-1.5 rounded-full',
            variant === 'gold' ? 'bg-brand-gold'    : '',
            variant === 'dark' ? 'bg-white'          : '',
            variant === 'neutral' ? 'bg-brand-textMuted' : ''
          )}
        />
      )}
      {children}
    </span>
  );
}
