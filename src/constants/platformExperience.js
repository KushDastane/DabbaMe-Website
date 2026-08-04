/**
 * platformExperience.js
 *
 * Content data for the "One Platform. Two Experiences." section.
 * Focused on the ₹0 highlight with sparkles and forever free plan cards.
 */

export const PLATFORM_HEADER = {
  badge: '',
  heading: 'One Platform. Two Experiences.',
  subheading:
    "No subscriptions. No premium plans. ₹0 platform fee.",
};

export const PLATFORM_TABS = [
  { id: 'customers', label: 'Customers' },
  { id: 'kitchens', label: 'Home Kitchens' },
];

export const CARDS_DATA = {
  customers: {
    badge: 'THE ONLY PLAN YOU NEED',
    price: '₹0',
    title: 'Customers',
    features: [
      'Discover unlimited kitchens',
      "Browse daily menus",
      'Subscribe anytime',
      'Order single meals',
      'Daily order tracking',
      'Secure payments',
      'Unlimited subscriptions',
      'No platform fee',
      'No ads',
      'No hidden charges',
    ],
    buttonText: 'Download DabbaMe',
    buttonTextMobile: 'Download',
    buttonHref: '#download',
    showPlayIcon: true,
    theme: {
      cardBg: 'bg-[#FFFDF8]',
      cardBorder: 'border-2 border-[#F5B300]/30 hover:border-[#F5B300]/60',
      badgeBg: 'bg-[#FEF0C7]',
      badgeText: 'text-[#B88200]',
      priceColor: 'text-[#E0A106]',
      sparkleColor: 'text-[#F5B300]',
      titleColor: 'text-brand-dark',
      checkStyle: 'border border-green-500 text-green-600 bg-green-50/50',
      buttonClass:
        'bg-gradient-to-r from-[#F5B300] via-[#E0A106] to-[#D09000] text-brand-dark hover:brightness-105 shadow-md shadow-amber-500/20',
      glowColor: 'rgba(245, 179, 0, 0.14)',
    },
  },

  kitchens: {
    badge: 'GROW YOUR KITCHEN BUSINESS',
    price: '₹0',
    title: 'Kitchens',
    features: [
      'Create your kitchen brand',
      'Publish daily menus',
      'Accept & manage orders',
      'Manage customer subscriptions',
      'Digital Khata analytics',
      'Customer management tools',
      'Earnings & payouts dashboard',
      'Zero joining fee',
      'Zero monthly listing charges',
      '100% direct payouts',
    ],
    buttonText: 'Join as Kitchen',
    buttonHref: '#for-kitchens',
    showPlayIcon: false,
    theme: {
      cardBg: 'bg-[#F9FAF8]',
      cardBorder: 'border-2 border-[#2B7A36]/30 hover:border-[#2B7A36]/60',
      badgeBg: 'bg-[#DEEFE1]',
      badgeText: 'text-[#2B7A36]',
      priceColor: 'text-[#2B7A36]',
      sparkleColor: 'text-[#2B7A36]',
      titleColor: 'text-brand-dark',
      checkStyle: 'border border-green-500 text-green-600 bg-green-50/50',
      buttonClass:
        'bg-gradient-to-r from-[#2B7A36] via-[#22632B] to-[#1A4C21] text-white hover:brightness-105 shadow-md shadow-emerald-900/20',
      glowColor: 'rgba(43, 122, 54, 0.14)',
    },
  },
};
