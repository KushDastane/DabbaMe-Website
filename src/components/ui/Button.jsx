import { forwardRef } from 'react';
import { cn } from '@utils/cn';

/**
 * Button
 *
 * Reusable button/link component.
 * Renders as <button> by default, or as an <a> when `href` is provided.
 *
 * Props:
 *   variant  — 'primary' | 'secondary' | 'ghost' | 'outline' (default: 'primary')
 *   size     — 'sm' | 'md' | 'lg' (default: 'md')
 *   href     — if provided, renders as an anchor tag
 *   external — if true, adds target="_blank" rel="noopener noreferrer"
 *   disabled — disables the button
 *   className — additional classes
 *   children  — content
 *   ...props  — forwarded to the root element
 */
const Button = forwardRef(function Button(
  {
    variant  = 'primary',
    size     = 'md',
    href,
    external = false,
    disabled = false,
    className,
    children,
    ...props
  },
  ref
) {
  const classes = cn(
    'btn',
    `btn-${size}`,
    `btn-${variant}`,
    disabled && 'pointer-events-none opacity-45',
    className
  );

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        className={classes}
        {...(external
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      className={classes}
      disabled={disabled}
      type={props.type ?? 'button'}
      {...props}
    >
      {children}
    </button>
  );
});

export { Button };
