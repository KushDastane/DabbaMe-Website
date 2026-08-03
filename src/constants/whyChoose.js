/**
 * whyChoose.js
 *
 * Content data for "Why Choose DabbaMe?" section.
 * Emojis removed for clean, modern typography.
 */

export const WHY_CHOOSE_HEADER = {
  label: 'WHY CHOOSE DABBAME?',
  heading: 'Life gets better with',
  headingEmphasis: 'DabbaMe.',
};

export const TABS = [
  { id: 'customers', label: 'Customers' },
  { id: 'kitchens',  label: 'Home Kitchens' },
];

export const TAB_CONTENT = {
  customers: {
    without: {
      label: 'WITHOUT DABBAME',
      tone: 'bad',
      bulletPoints: [
        'Expensive, unhealthy takeout every day',
        'Zero control over ingredients or portions',
        'No transparency or trust',
      ],
      image: {
        src: '/images/whychoose/customer-before.webp',
        alt: 'Unhealthy junk food — burger, cola, chips and instant noodles',
        className: 'customer-before-placeholder',
      },
    },
    with: {
      label: 'WITH DABBAME',
      tone: 'good',
      bulletPoints: [
        'Fresh homemade meals at your doorstep',
        'Handpicked, verified home kitchens',
        'Healthy, affordable & reliable',
      ],
      image: {
        src: '/images/whychoose/customer-after.webp',
        alt: 'Healthy homemade meal — stainless steel tiffin with dal, rice, rotis and salad',
        className: 'customer-after-placeholder',
      },
    },
  },

  kitchens: {
    without: {
      label: 'WITHOUT DABBAME',
      tone: 'bad',
      bulletPoints: [
        'Manual order tracking via WhatsApp',
        'Zero visibility into daily earnings',
        'No professional presence or branding',
      ],
      image: {
        src: '/images/whychoose/kitchen-before.webp',
        alt: 'Kitchen chaos — manual registers, calculator and phone calls',
        className: 'scale-[0.86] sm:scale-[0.88] origin-center',
      },
    },
    with: {
      label: 'WITH DABBAME',
      tone: 'good',
      bulletPoints: [
        'Digital dashboard for orders & earnings',
        'Automatic payments — no cash hassle',
        'Build a verified, trusted kitchen brand',
      ],
      image: {
        src: '/images/whychoose/kitchen-after.webp',
        alt: 'Kitchen dashboard — digital orders, analytics and daily khata',
        className: 'kitchen-after-placeholder',
      },
    },
  },
};
