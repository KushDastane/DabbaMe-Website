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
        'Expensive, unhealthy food every day',
        'Zero control over nutrition',
        'No transparency or trust',
      ],
      image: {
        src: '/images/whychoose/customer-before.webp',
        alt: 'Unhealthy junk food — burger, cola, chips and instant noodles',
        className: 'scale-[0.92] sm:scale-100 origin-center',
      },
    },
    with: {
      label: 'WITH DABBAME',
      tone: 'good',
      bulletPoints: [
        'Fresh homemade meals',
        'Verified home kitchens',
        'Healthy, affordable & reliable',
      ],
      image: {
        src: '/images/whychoose/customer-after.webp',
        alt: 'Healthy homemade meal — stainless steel tiffin with dal, rice, rotis and salad',
        className: 'scale-[0.92] sm:scale-100 origin-center',
      },
    },
  },

  kitchens: {
    without: {
      label: 'WITHOUT DABBAME',
      tone: 'bad',
      bulletPoints: [
        'Manual order tracking via WhatsApp',
        'Handling payments & calculations manually',
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
        'Gain visibility & more discovery',
        'Build a verified, trusted kitchen brand',
      ],
      image: {
        src: '/images/whychoose/kitchen-after.webp',
        alt: 'Kitchen dashboard — digital orders, analytics and daily khata',
        className: 'scale-[0.92] sm:scale-100 origin-center',
      },
    },
  },
};
