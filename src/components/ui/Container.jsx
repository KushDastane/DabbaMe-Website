import { cn } from '@utils/cn';

/**
 * Container
 *
 * The primary layout constraint for all page content.
 * Uses the `.container-site` class defined in globals.css.
 *
 * Props:
 *   as        — rendered HTML tag (default: 'div')
 *   className — additional classes
 *   children  — content
 */
export function Container({ as: Tag = 'div', className, children, ...props }) {
  return (
    <Tag className={cn('container-site', className)} {...props}>
      {children}
    </Tag>
  );
}
