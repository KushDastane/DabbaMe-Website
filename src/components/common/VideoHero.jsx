import { useRef, useEffect } from 'react';
import { cn } from '@utils/cn';

/**
 * VideoHero
 *
 * Full-viewport-height section with an HTML5 background video.
 * The video is muted, looped, and autoplayed — appropriate for
 * ambient background visuals only.
 *
 * A dark overlay is applied on top of the video for text legibility.
 * Children are positioned above the overlay on the left side.
 *
 * Props:
 *   src            — path or URL to the .mp4 video file
 *   overlayOpacity — 0–1 opacity of the dark overlay (default: 0.32)
 *   posterSrc      — optional poster image shown before video loads
 *   className      — additional classes on the root element
 *   innerClassName — additional classes on the content area
 *   children       — content rendered above the overlay (left side layout)
 */
export function VideoHero({
  id = 'hero',
  src,
  overlayOpacity = 0.12,
  posterSrc,
  className,
  innerClassName,
  children,
}) {
  const videoRef = useRef(null);

  // Ensure autoplay works on iOS/Safari which can be strict
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true; // Must be set programmatically for some browsers
    video.play().catch(() => {
      // Autoplay was blocked — video will remain paused (poster shown)
    });
  }, []);

  return (
    <section
      id={id}
      className={cn(
        'relative w-full min-h-screen flex items-center overflow-hidden bg-brand-dark',
        className
      )}
      aria-label="Hero section"
    >
      {/* ── Background Video ───────────────────────────────────────── */}
      {src && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          src={src}
          poster={posterSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
      )}

      {/* ── Dark Overlay (0.42 opacity on mobile for text legibility) ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none bg-black/45 sm:bg-transparent"
      />
      <div
        aria-hidden="true"
        className="hidden sm:block absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(
            to right,
            rgba(0, 0, 0, ${overlayOpacity + 0.15}) 0%,
            rgba(0, 0, 0, ${overlayOpacity}) 55%,
            rgba(0, 0, 0, ${overlayOpacity * 0.5}) 100%
          )`,
        }}
      />

      {/* ── Bottom Fade (softens video edge into page) ─────────────── */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(255, 253, 248, 0.8), transparent)',
        }}
      />

      {/* ── Content ───────────────────────────────────────────────── */}
      <div
        className={cn(
          'relative z-10 w-full',
          innerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
