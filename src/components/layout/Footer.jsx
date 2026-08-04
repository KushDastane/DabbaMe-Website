import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { BRAND } from '@constants/brand';

/* ── Inline SVG brand icons (lucide-react v1 removed social icons) ── */
const IconInstagram = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
);

const IconYoutube = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"
    aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const IconLinkedin = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
import { NAV_LINKS } from '@constants/navigation';
import { Container } from '@components/ui';
import { cn } from '@utils/cn';

/**
 * Footer
 *
 * Minimal, warm footer on the brand beige background.
 * Contains:
 * - Brand mark + tagline
 * - Quick navigation links
 * - Social links
 * - Copyright
 *
 * No props required — self-contained.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-brand-beige border-t border-brand-border"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* ── Main Footer ─────────────────────────────────────────────── */}
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

          {/* Brand column */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-5">
            {/* Logo */}
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 w-fit group"
              aria-label="DabbaMe homepage"
            >
              <img
                src="/logo.webp"
                alt=""
                className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="font-editorial font-medium text-xl tracking-tight text-brand-dark">
                Dabba<span className="text-brand-goldAccent">Me</span>
              </span>
            </Link>

            {/* Tagline */}
            <p className="text-body-sm text-brand-textMuted max-w-xs leading-relaxed text-pretty">
              {BRAND.tagline}
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-1">
              {[
                { href: BRAND.social.instagram, icon: IconInstagram, label: 'Instagram' },
                { href: BRAND.social.youtube,   icon: IconYoutube,   label: 'YouTube'   },
                { href: BRAND.social.linkedin,  icon: IconLinkedin,  label: 'LinkedIn'  },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`DabbaMe on ${label}`}
                  className={cn(
                    'w-9 h-9 rounded-full border border-brand-border',
                    'flex items-center justify-center',
                    'text-brand-textMuted hover:text-brand-dark hover:border-brand-gold',
                    'transition-all duration-300'
                  )}
                >
                  <Icon size={16} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Nav links column */}
          <nav
            className="md:col-span-3 flex flex-col gap-3"
            aria-label="Footer navigation"
          >
            <h3 className="text-label-md font-semibold text-brand-dark uppercase tracking-widest mb-1">
              Navigate
            </h3>
            {NAV_LINKS.map(({ id, label, href }) => (
              <Link
                key={id}
                to={href}
                className="text-body-sm text-brand-textMuted hover:text-brand-dark transition-colors duration-200 w-fit"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Legal column */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h3 className="text-label-md font-semibold text-brand-dark uppercase tracking-widest mb-1">
              Legal
            </h3>
            {[
              { label: 'Privacy Policy',    href: '/privacy'    },
              { label: 'Terms & Conditions', href: '/terms'     },
            ].map(({ label, href }) => (
              <Link
                key={href}
                to={href}
                className="text-body-sm text-brand-textMuted hover:text-brand-dark transition-colors duration-200 w-fit"
              >
                {label}
              </Link>
            ))}

            {/* Contact */}
            <a
              href={`mailto:${BRAND.email}`}
              className="text-body-sm text-brand-textMuted hover:text-brand-dark transition-colors duration-200 mt-2 w-fit"
            >
              {BRAND.email}
            </a>
          </div>
        </div>
      </Container>

      {/* ── Bottom Bar ────────────────────────────────────────────── */}
      <div className="border-t border-brand-border">
        <Container className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-body-xs text-brand-textMuted">
            © {year} {BRAND.name}. All rights reserved.
          </p>
          
        </Container>
      </div>
    </footer>
  );
}
