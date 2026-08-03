/**
 * media.js
 * Media assets & video source configuration.
 *
 * CLOUDINARY VIDEO INTEGRATION:
 * Replace HERO_VIDEO_URL with your Cloudinary video URL.
 * Example: 'https://res.cloudinary.com/YOUR_CLOUD_NAME/video/upload/q_auto,f_auto/v1234567/hero.mp4'
 *
 * You can also set VITE_HERO_VIDEO_URL in your .env file.
 */

export const HERO_VIDEO_URL =
  import.meta.env.VITE_HERO_VIDEO_URL ||
  'https://res.cloudinary.com/YOUR_CLOUD_NAME/video/upload/q_auto,f_auto/hero_video_placeholder.mp4';
