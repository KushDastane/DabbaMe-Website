/**
 * Site Configuration
 *
 * Central configuration for site metadata, canonical domain, social sharing,
 * and brand assets. Changing VITE_SITE_URL in .env or environment variables
 * updates canonical URLs, Open Graph, Twitter Cards, JSON-LD schemas, and previews
 * across the entire application.
 */
const DEFAULT_SITE_URL = 'https://dabbame.netlify.app';

export const SITE = {
  name: 'DabbaMe',
  url: (import.meta.env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, ''),
  title: 'DabbaMe | Discover Trusted Home Kitchens Near You',
  description:
    'Discover trusted home kitchens near you with DabbaMe. Browse homemade meals, subscribe to fresh tiffins and connect directly with verified home kitchens.',
  keywords:
    'home food, home kitchen, homemade food, tiffin service, dabba service, home cooked meals, healthy food, lunch near me, dinner near me, student meals, home chef, Indian tiffin',
  themeColor: '#E6A400',
  author: 'DabbaMe',
  twitterHandle: '@dabbame_',
  ogImage: '/og-image.jpg',
  logo: '/logo.webp',
  email: 'dabbame.app@gmail.com',
  phones: ['+919820060064', '+919096613730'],
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.kushd.dabbame',
};

/**
 * Helper function to resolve absolute URLs relative to the configured SITE.url
 */
export function getAbsoluteUrl(path = '') {
  if (!path) return SITE.url;
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE.url}${cleanPath}`;
}
