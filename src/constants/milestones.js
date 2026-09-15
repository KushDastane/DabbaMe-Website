/**
 * milestones.js
 * Recognition and milestones data constants.
 * Single source of truth for social proof achievements and awards.
 *
 * Extensible: add new milestones to MILESTONES_DATA without altering UI code.
 */

export const MILESTONES_HEADER = {
  eyebrow: '',
  heading: 'Recognition & Milestones',
  subheading: 'Every milestone brings us one step closer.',
};

export const MILESTONES_DATA = [
  {
    id: 'ieee-eif-2026',
    organization: 'IEEE Maharashtra Section',
    achievement: 'Runner-Up',
    event: 'Entrepreneurship & Innovation Fellowship 2026',
    category: '',
    logo: '/ieee-maharashtra-section.png',
    logoAlt: 'IEEE Maharashtra Section Official Logo',
    link: '',
  },
  {
    id: 'sih-2026-internal',
    organization: 'Smart India Hackathon 2026',
    achievement: '1st Prize',
    event: 'Internal Hackathon · MIT ADT University',
    category: 'Miscellaneous Category',
    logo: '/sih-logo.png',
    logoAlt: 'Smart India Hackathon 2026 Official Logo',
    link: '',
  },
];
