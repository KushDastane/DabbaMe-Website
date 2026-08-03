import { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScrolled } from '@hooks/useScrolled';
import { NAV_LINKS, NAV_CTA } from '@constants/navigation';
import { BRAND } from '@constants/brand';
import { Button } from '@components/ui';
import { cn } from '@utils/cn';

/**
 * Navbar
 *
 * Sticky navigation bar with:
 * - Transparent state at top of page
 * - Frosted-glass solid state on scroll
 * - Subtle animated active link indicator
 * - Mobile hamburger menu with slide-down panel
 * - Premium transitions throughout
 *
 * No props required — self-contained.
 */
export function Navbar() {
  const scrolled   = useScrolled(20);
  const [open, setOpen] = useState(false);
  const location   = useLocation();

  const closeMenu = useCallback(() => setOpen(false), []);

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href.split('#')[0]);
  };

  return (
    <header
      className={cn(
        'navbar-base',
        scrolled ? 'navbar-solid' : 'navbar-transparent'
      )}
      role="banner"
    >
      <nav
        className="container-site flex items-center justify-between"
        aria-label="Primary navigation"
      >
        {/* ── Logo ─────────────────────────────────────────────────── */}
        <Link
          to="/"
          className="flex items-center gap-2.5 focus-visible:rounded group"
          aria-label={`${BRAND.name} — go to homepage`}
          onClick={closeMenu}
        >
          <img
            src="/logo.webp"
            alt=""
            className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span
            className={cn(
              'font-editorial font-medium text-xl tracking-tight transition-colors duration-300',
              scrolled ? 'text-brand-dark' : 'text-white'
            )}
          >
            Dabba<span className="text-brand-goldAccent">Me</span>
          </span>
        </Link>

        {/* ── Desktop Nav Links ─────────────────────────────────────── */}
        <ul
          className="hidden md:flex items-center gap-1"
          role="list"
          aria-label="Navigation links"
        >
          {NAV_LINKS.map(({ id, label, href }) => (
            <li key={id}>
              <Link
                to={href}
                id={`nav-link-${id}`}
                className={cn(
                  'link-underline relative px-3 py-2 rounded text-body-sm font-medium',
                  'transition-colors duration-200',
                  scrolled
                    ? isActive(href)
                      ? 'text-brand-dark'
                      : 'text-brand-textMuted hover:text-brand-dark'
                    : isActive(href)
                    ? 'text-white'
                    : 'text-white/70 hover:text-white'
                )}
                aria-current={isActive(href) ? 'page' : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ── Desktop CTA ───────────────────────────────────────────── */}
        <div className="hidden md:flex items-center">
          <a
            href={NAV_CTA.href}
            id="nav-cta-download"
            className={cn(
              'inline-flex items-center gap-2.5 px-4 py-2 rounded-full font-medium text-xs tracking-wide transition-all duration-300 shadow-sm',
              'hover:shadow-warm hover:-translate-y-0.5 active:translate-y-0',
              scrolled
                ? 'bg-brand-dark text-white hover:bg-black'
                : 'bg-white text-brand-dark hover:bg-brand-goldAccent'
            )}
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.609 1.814C3.23 2.012 3 2.42 3 2.915v18.17c0 .496.23.903.609 1.101l9.948-10.185L3.609 1.814z" fill="#00A0FF"/>
              <path d="M16.924 8.528l-3.367 3.472 3.367 3.472 3.805-2.188c.677-.389.677-1.023 0-1.412l-3.805-2.344z" fill="#FFCC00"/>
              <path d="M13.557 12L3.609 21.821c.264.085.556.057.818-.094l12.497-7.2-3.367-2.527z" fill="#FF3333"/>
              <path d="M4.427 2.273C4.165 2.122 3.873 2.094 3.609 2.179L13.557 12l3.367-2.527-12.497-7.2z" fill="#00E676"/>
            </svg>
            <span>Get App</span>
          </a>
        </div>

        {/* ── Mobile Hamburger ──────────────────────────────────────── */}
        <button
          className={cn(
            'md:hidden p-2 rounded transition-colors duration-200',
            'focus-visible:outline-2 focus-visible:outline-brand-gold',
            scrolled
              ? 'text-brand-dark hover:bg-brand-beige'
              : 'text-white hover:bg-white/10'
          )}
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          id="nav-hamburger"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* ── Mobile Menu Panel ─────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className={cn(
              'absolute top-full left-0 right-0 md:hidden',
              'bg-brand-bg border-b border-brand-border',
              'shadow-medium'
            )}
            aria-label="Mobile navigation"
          >
            <div className="container-site py-4 flex flex-col gap-1">
              {/* Nav links */}
              {NAV_LINKS.map(({ id, label, href }) => (
                <Link
                  key={id}
                  to={href}
                  id={`mobile-nav-link-${id}`}
                  className={cn(
                    'px-3 py-3 rounded text-body-md font-medium transition-colors duration-200',
                    isActive(href)
                      ? 'text-brand-dark bg-brand-beige'
                      : 'text-brand-textMuted hover:text-brand-dark hover:bg-brand-beige'
                  )}
                  onClick={closeMenu}
                  aria-current={isActive(href) ? 'page' : undefined}
                >
                  {label}
                </Link>
              ))}

              {/* Mobile CTA */}
              <div className="pt-2 pb-1">
                <a
                  href={NAV_CTA.href}
                  id="mobile-nav-cta-download"
                  onClick={closeMenu}
                  className={cn(
                    'w-full flex items-center justify-center gap-2.5 px-4 py-3 rounded-full font-medium text-sm tracking-wide bg-brand-dark text-white shadow-sm hover:bg-black transition-all duration-300'
                  )}
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.609 1.814C3.23 2.012 3 2.42 3 2.915v18.17c0 .496.23.903.609 1.101l9.948-10.185L3.609 1.814z" fill="#00A0FF"/>
                    <path d="M16.924 8.528l-3.367 3.472 3.367 3.472 3.805-2.188c.677-.389.677-1.023 0-1.412l-3.805-2.344z" fill="#FFCC00"/>
                    <path d="M13.557 12L3.609 21.821c.264.085.556.057.818-.094l12.497-7.2-3.367-2.527z" fill="#FF3333"/>
                    <path d="M4.427 2.273C4.165 2.122 3.873 2.094 3.609 2.179L13.557 12l3.367-2.527-12.497-7.2z" fill="#00E676"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
