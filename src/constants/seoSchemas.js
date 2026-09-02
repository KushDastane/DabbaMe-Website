import { FAQ_ITEMS } from './faq';
import { SITE, getAbsoluteUrl } from '../config/site';

export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  url: SITE.url,
  logo: getAbsoluteUrl(SITE.logo),
  email: SITE.email,
  description: SITE.description,
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: SITE.phones[0],
      contactType: 'customer service',
      availableLanguage: ['English', 'Hindi'],
    },
    {
      '@type': 'ContactPoint',
      telephone: SITE.phones[1],
      contactType: 'customer service',
      availableLanguage: ['English', 'Hindi'],
    },
  ],
  sameAs: [
    'https://instagram.com/dabbame_',
    'https://www.youtube.com/@DabbaMe',
    'https://www.linkedin.com/company/dabbame-home-kitchens-near-you/',
  ],
};

export const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE.name,
  url: SITE.url,
};

export const SOFTWARE_APPLICATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: SITE.name,
  operatingSystem: 'ANDROID',
  applicationCategory: 'FoodAndDrinkApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'INR',
  },
  downloadUrl: SITE.playStoreUrl,
};

export const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export const BREADCRUMB_HOME_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: getAbsoluteUrl('/'),
    },
  ],
};

export const BREADCRUMB_STORY_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: getAbsoluteUrl('/'),
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Our Story',
      item: getAbsoluteUrl('/our-story'),
    },
  ],
};
