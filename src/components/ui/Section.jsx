import { cn } from '@utils/cn';
import { Container } from './Container';

/**
 * Section
 *
 * Full-width section wrapper with vertical rhythm.
 * Wraps content in a Container by default.
 *
 * Props:
 *   as            — rendered HTML tag (default: 'section')
 *   id            — anchor ID for in-page navigation
 *   className     — additional classes on the section element
 *   innerClassName — additional classes on the inner Container
 *   noContainer   — if true, renders children without a Container
 *   tight         — halves the vertical padding
 *   children      — content
 */
export function Section({
  as: Tag = 'section',
  id,
  className,
  innerClassName,
  noContainer = false,
  tight = false,
  children,
  ...props
}) {
  return (
    <Tag
      id={id}
      className={cn(
        tight
          ? 'py-12 md:py-16 lg:py-20'
          : 'py-20 md:py-28 lg:py-36',
        className
      )}
      {...props}
    >
      {noContainer ? (
        children
      ) : (
        <Container className={innerClassName}>{children}</Container>
      )}
    </Tag>
  );
}
