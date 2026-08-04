/**
 * testimonials.js
 *
 * Data for "Trusted by the People Who Use It." section.
 * Customer side: 5 reviews & 5 screens.
 * Kitchen side: 4 reviews & 4 screens.
 * Each item maps 1:1 to a phone screenshot.
 */

export const TESTIMONIALS_HEADER = {
  heading: 'Trusted by Customers & Home Kitchens',
};

export const CUSTOMER_SCREENS = [
  '/customer-screen-1.webp',
  '/customer-screen-2.webp',
  '/customer-screen-3.webp',
  '/customer-screen-4.webp',
  '/customer-screen-5.webp',
];

export const KITCHEN_SCREENS = [
  '/kitchen-screen-1.webp',
  '/kitchen-screen-2.webp',
  '/kitchen-screen-3.webp',
  '/kitchen-screen-4.webp',
  '/kitchen-screen-5.webp',
];

export const CUSTOMER_TESTIMONIALS = [
  {
    id: 'cust-1',
    rating: 5,
    review:
      'Finding home made tiffins near campus was very difficult until DabbaMe.',
    name: 'Rajas S.',
    role: 'Student',
    location: 'Loni Kalbhor, Pune',
    screen: CUSTOMER_SCREENS[0],
  },
  {
    id: 'cust-2',
    rating: 5,
    review:
      'Switching kitchens anytime without monthly locks is fantastic..',
    name: 'Pushpak K.',
    role: 'Working Professional',
    location: 'Wakad, Pune',
    screen: CUSTOMER_SCREENS[1],
  },
  {
    id: 'cust-3',
    rating: 5,
    review:
      'I couldn’t imagine that we had so many home kitchens nearby..DabbaMe helped me discover them.',
    name: 'Varsha D.',
    role: 'Senior Citizen',
    location: 'Kothrud, Pune',
    screen: CUSTOMER_SCREENS[2],
  },
  {
    id: 'cust-4',
    rating: 5,
    review:
      'Smooth experience, super helpful.',
    name: 'Priya S.',
    role: 'Software Engineer',
    location: 'Baner, Pune',
    screen: CUSTOMER_SCREENS[3],
  },
  {
    id: 'cust-5',
    rating: 5,
    review:
      'One of the best apps for home food lovers.',
    name: 'Vilas S.',
    role: 'University Hostel Resident',
    location: 'Loni Kalbhor, Pune',
    screen: CUSTOMER_SCREENS[4],
  },
];

export const KITCHEN_TESTIMONIALS = [
  {
    id: 'kitch-1',
    rating: 5,
    isVerified: true,
    kitchenName: 'Aadis Kitchen',
    review:
      'Managing daily menus over WhatsApp was chaotic. DabbaMe gives us a dedicated kitchen brand page and easy management.',
    role: 'Home Kitchen Owner',
    location: 'Loni, Pune',
    screen: KITCHEN_SCREENS[0],
  },
];
