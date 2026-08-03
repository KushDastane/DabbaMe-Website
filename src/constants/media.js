/**
 * media.js
 * Media assets & Cloudinary video streaming configuration.
 */

export const CLOUDINARY_CONFIG = {
  cloudName: 'dyiaqidiq',
  publicId:  'km_website_hook_1080p_24f_20260803_192723_a7fpwi',
};

export const HERO_VIDEO_URL =
  import.meta.env.VITE_HERO_VIDEO_URL ||
  `https://res.cloudinary.com/${CLOUDINARY_CONFIG.cloudName}/video/upload/q_auto,f_auto/${CLOUDINARY_CONFIG.publicId}.mp4`;
