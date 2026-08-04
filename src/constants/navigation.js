/**
 * navigation.js
 * Central definition for all navigation links.
 * Used by Navbar and Footer to stay in sync.
 */

export const NAV_LINKS = [
  { id: 'home',         label: 'Home',          href: '/'              },
  { id: 'how-it-works', label: 'How it Works',  href: '/#how-it-works' },
  { id: 'for-kitchens', label: 'Why Choose us',  href: '/#for-kitchens' },
  { id: 'faq',          label: 'FAQ',           href: '/#faq'          },
  { id: 'our-story',    label: 'Our Story',     href: '/our-story'     },
  { id: 'contact',      label: 'Contact',        href: '/#contact'      },
];

export const NAV_CTA = {
  label: 'Get App',
  href:  'https://play.google.com/store/apps/details?id=com.kushd.dabbame',
};
