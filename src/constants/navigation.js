/**
 * navigation.js
 * Central definition for all navigation links.
 * Used by Navbar and Footer to stay in sync.
 */

export const NAV_LINKS = [
  { id: 'home',         label: 'Home',          href: '/'              },
  { id: 'how-it-works', label: 'How it Works',  href: '/#how-it-works' },
  { id: 'for-kitchens', label: 'For Kitchens',  href: '/#for-kitchens' },
  { id: 'about',        label: 'About',          href: '/#about'        },
  { id: 'contact',      label: 'Contact',        href: '/#contact'      },
];

export const NAV_CTA = {
  label: 'Get App',
  href:  '#download',
};
