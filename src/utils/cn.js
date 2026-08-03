/**
 * cn.js — classname utility
 *
 * A lightweight merge utility for Tailwind class strings.
 * Filters out falsy values and joins with a space.
 * For projects needing full clsx + tailwind-merge, swap internals here.
 */

/**
 * Merges class names, filtering out falsy values.
 * @param {...(string|undefined|null|false)} classes
 * @returns {string}
 */
export function cn(...classes) {
  return classes
    .flat()
    .filter(Boolean)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
}
