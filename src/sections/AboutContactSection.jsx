import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Section, Container } from '@components/ui';
import { APP_STORES } from '@constants/brand';

/**
 * AboutContactSection Component
 *
 * Final "Our Story & Contact" section before the footer.
 * Perfectly balanced background illustration and compact mobile layout.
 */
export function AboutContactSection() {
  return (
    <Section id="contact" className="bg-[#FCFAF5] py-10 sm:py-20 lg:py-28 overflow-hidden">
      <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative w-full rounded-[24px] sm:rounded-[32px] bg-[#FFFDF9] border border-[#ECE7DF] shadow-[0_4px_24px_rgba(0,0,0,0.03)] overflow-hidden p-5 sm:p-8 lg:p-12"
        >
          {/* ── BACKGROUND ILLUSTRATION (contact.webp) ───────────────── */}
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-full lg:w-[48%] pointer-events-none overflow-hidden rounded-[24px] sm:rounded-l-[32px] z-0"
          >
            <img
              src="/contact.webp"
              alt=""
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-left-bottom block opacity-35 sm:opacity-55 lg:opacity-95"
              style={{
                WebkitMaskImage:
                  'linear-gradient(to right, rgba(0,0,0,1) 15%, rgba(0,0,0,0) 80%), linear-gradient(to top, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 90%)',
                maskImage:
                  'linear-gradient(to right, rgba(0,0,0,1) 15%, rgba(0,0,0,0) 80%), linear-gradient(to top, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 90%)',
                WebkitMaskComposite: 'source-in',
                maskComposite: 'intersect',
              }}
            />
            {/* Soft gradient fade for smooth text integration */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFFDF9]/50 to-[#FFFDF9]" />
          </div>

          {/* ── INNER CONTENT GRID ─────────────────────────────────────── */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.15fr_auto_1fr] gap-6 sm:gap-8 lg:gap-14 items-center">

            {/* ── LEFT / CENTER: About / Our Story ────────────────────── */}
            <div className="flex flex-col gap-2.5 text-left lg:pl-28 xl:pl-40">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#D49B00]">
                ABOUT
              </span>

              <h2 className="font-editorial font-medium text-2xl sm:text-4xl lg:text-5xl text-[#1E1E1E] leading-[1.12] tracking-tight">
                Our Story
              </h2>

              <div className="w-8 sm:w-10 h-[2.5px] bg-[#F5B300] rounded-full my-0.5" aria-hidden="true" />

              <div className="text-xs sm:text-base text-[#4A453F] leading-relaxed flex flex-col gap-1.5 max-w-md font-normal">
                <p>
                  We built DabbaMe because finding homemade food shouldn't be difficult.
                </p>
                <p>
                  Built by two engineers with one simple mission.
                </p>
              </div>

              <div className="pt-1.5">
                <Link
                  to="/our-story"
                  className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl border border-[#F5B300] text-xs sm:text-sm font-semibold text-[#B57F00] bg-white/90 hover:bg-white transition-all duration-200 shadow-2xs"
                >
                  Read Our Story <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* ── THIN VERTICAL DIVIDER (Desktop Only) ─────────────────── */}
            <div
              aria-hidden="true"
              className="hidden lg:block w-px h-[260px] bg-[#EFEBE4] self-center"
            />

            {/* ── RIGHT: Contact Details ──────────────────────────────── */}
            <div className="flex flex-col gap-2.5 sm:gap-3.5 text-left pt-5 sm:pt-6 lg:pt-0 border-t border-[#EFEBE4] lg:border-t-0">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#D49B00]">
                CONTACT
              </span>

              {/* Email — tight single line fit on all mobile screens */}
              <a
                href="mailto:dabbame.app@gmail.com"
                className="text-[13px] xs:text-sm sm:text-lg lg:text-xl font-semibold text-[#1E1E1E] hover:text-[#B57F00] transition-colors whitespace-nowrap"
              >
                dabbame.app@gmail.com
              </a>

              <div className="w-full h-px bg-[#EFEBE4] my-0.5" aria-hidden="true" />

              {/* Phone numbers */}
              <div className="flex flex-col gap-0.5">
                <div className="flex flex-col text-sm xs:text-base sm:text-xl font-bold text-[#1E1E1E] tracking-wide leading-snug">
                  <a href="tel:+919820060064" className="hover:text-[#B57F00] transition-colors">
                    +91 9820060064
                  </a>
                  <a href="tel:+919096613730" className="hover:text-[#B57F00] transition-colors">
                    +91 9096613730
                  </a>
                </div>
                <span className="text-[11px] sm:text-xs text-[#8C867D] mt-0.5 font-normal">
                  Call or WhatsApp us
                </span>
              </div>

              <div className="w-full h-px bg-[#EFEBE4] my-0.5" aria-hidden="true" />

              {/* Availability */}
              <div className="text-[11px] sm:text-sm font-medium text-[#6B6560]">
                Mon–Sat &nbsp;•&nbsp; 9 AM – 8 PM
              </div>

              {/* Download CTA Button */}
              <div className="pt-1.5 flex flex-col items-stretch">
                <a
                  href={APP_STORES.android}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#F5B300] hover:bg-[#E5A500] text-[#1E1E1E] font-bold rounded-xl py-2.5 sm:py-3.5 px-4 sm:px-6 flex items-center justify-center gap-2 transition-all duration-200 shadow-xs text-xs sm:text-base cursor-pointer"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 sm:w-5 sm:h-5 fill-current flex-shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734c0-.38.214-.722.609-.92zm11.312 11.313l2.454 2.454-11.45 6.44 8.996-8.894zm2.454-2.454L14.92 8.219l8.997-8.894-11.45 6.44 4.908 4.908zm-2.454-2.454L4.925 2.78l11.45 6.44-1.454-1.454z" />
                  </svg>
                  <span>Download DabbaMe</span>
                </a>
               
              </div>
            </div>

          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
