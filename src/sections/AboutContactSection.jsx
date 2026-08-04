import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Section, Container } from '@components/ui';

/**
 * AboutContactSection Component
 *
 * Final "Our Story & Contact" section before the footer.
 * Replicates the exact design from the reference screenshot:
 * - Single large warm card with `/contact.webp` fading across from the left
 * - Left/Center: About / Our Story with gold line & outlined button
 * - Right: Contact details with thin dividers & golden Download DabbaMe button
 */
export function AboutContactSection() {
  return (
    <Section id="about" className="bg-[#FCFAF5] py-16 sm:py-24 lg:py-28 overflow-hidden">
      <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative w-full rounded-[32px] bg-[#FFFDF9] border border-[#ECE7DF] shadow-[0_4px_24px_rgba(0,0,0,0.03)] overflow-hidden p-6 sm:p-10 lg:p-12"
        >
          {/* ── FADED BACKGROUND IMAGE (contact.webp) ───────────────────── */}
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-full lg:w-[50%] pointer-events-none overflow-hidden rounded-l-[32px] z-0"
          >
            <img
              src="/contact.webp"
              alt=""
              className="w-full h-full object-cover object-left-bottom block opacity-95"
              style={{
                WebkitMaskImage:
                  'linear-gradient(to right, rgba(0,0,0,1) 32%, rgba(0,0,0,0) 88%), linear-gradient(to top, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)',
                maskImage:
                  'linear-gradient(to right, rgba(0,0,0,1) 32%, rgba(0,0,0,0) 88%), linear-gradient(to top, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)',
                WebkitMaskComposite: 'source-in',
                maskComposite: 'intersect',
              }}
            />
            {/* Soft gradient overlay for smooth cream color integration */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFFDF9]/35 to-[#FFFDF9]" />
          </div>

          {/* ── INNER CONTENT GRID ─────────────────────────────────────── */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.15fr_auto_1fr] gap-8 lg:gap-10 xl:gap-14 items-center">

            {/* ── CENTER: About / Our Story ────────────────────────────── */}
            <div className="flex flex-col gap-3 text-left lg:pl-36 xl:pl-48">
              {/* Small gold label */}
              <span className="text-xs font-bold tracking-[0.22em] uppercase text-[#D49B00]">
                ABOUT
              </span>

              {/* Large serif heading */}
              <h2 className="font-editorial font-medium text-4xl sm:text-5xl text-[#1E1E1E] leading-[1.1] tracking-tight">
                Our Story
              </h2>

              {/* Gold accent bar */}
              <div className="w-10 h-[3px] bg-[#F5B300] rounded-full my-1" aria-hidden="true" />

              {/* Paragraphs */}
              <div className="text-sm sm:text-[15px] text-[#55504A] leading-relaxed flex flex-col gap-3 max-w-md">
                <p>
                  We built DabbaMe because finding homemade food shouldn't be difficult.
                </p>
                <p>
                  Built by two engineers with one simple mission.
                </p>
              </div>

              {/* Outlined button */}
              <div className="pt-2">
                <Link
                  to="/our-story"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-[#F5B300] text-sm font-semibold text-[#B57F00] bg-white/70 hover:bg-white transition-all duration-200 shadow-xs"
                >
                  Read Our Story <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* ── THIN VERTICAL DIVIDER ───────────────────────────────── */}
            <div
              aria-hidden="true"
              className="hidden lg:block w-px h-[280px] bg-[#EFEBE4] self-center"
            />

            {/* ── RIGHT: Contact Details ──────────────────────────────── */}
            <div className="flex flex-col gap-3 text-left pt-6 lg:pt-0 border-t border-[#EFEBE4] lg:border-t-0">
              {/* Small gold label */}
              <span className="text-xs font-bold tracking-[0.22em] uppercase text-[#D49B00]">
                CONTACT
              </span>

              {/* Email */}
              <a
                href="mailto:dabbame.app@gmail.com"
                className="text-lg sm:text-xl font-medium text-[#1E1E1E] hover:text-[#B57F00] transition-colors mt-0.5"
              >
                dabbame.app@gmail.com
              </a>

              <div className="w-full h-px bg-[#EFEBE4] my-1" aria-hidden="true" />

              {/* Phone numbers */}
              <div className="flex flex-col gap-1">
                <div className="flex flex-col text-lg sm:text-xl font-bold text-[#1E1E1E] tracking-wide leading-tight">
                  <a href="tel:+919800000000" className="hover:text-[#B57F00] transition-colors">
                    +91 9820060064
                  </a>
                  <a href="tel:+919700000000" className="hover:text-[#B57F00] transition-colors">
                    +91 9096613730
                  </a>
                </div>
                <span className="text-xs text-[#8C867D] mt-0.5 font-normal">
                  Call or WhatsApp us
                </span>
              </div>

              <div className="w-full h-px bg-[#EFEBE4] my-1" aria-hidden="true" />

              {/* Availability */}
              <div className="text-xs sm:text-sm font-medium text-[#6B6560]">
                Mon–Sat &nbsp;•&nbsp; 9 AM – 8 PM
              </div>

              {/* Download CTA Button */}
              <div className="pt-2 flex flex-col items-stretch">
                <a
                  href="#download"
                  className="w-full bg-[#F5B300] hover:bg-[#E5A500] text-[#1E1E1E] font-bold rounded-xl py-3.5 px-6 flex items-center justify-center gap-3 transition-all duration-200 shadow-xs text-sm sm:text-base"
                >
                  {/* Google Play store icon */}
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734c0-.38.214-.722.609-.92zm11.312 11.313l2.454 2.454-11.45 6.44 8.996-8.894zm2.454-2.454L14.92 8.219l8.997-8.894-11.45 6.44 4.908 4.908zm-2.454-2.454L4.925 2.78l11.45 6.44-1.454-1.454z" />
                  </svg>
                  Download DabbaMe
                </a>
                <span className="text-[11px] text-[#8C867D] text-center mt-1.5 font-normal">
                  Get it on Google Play
                </span>
              </div>
            </div>

          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
