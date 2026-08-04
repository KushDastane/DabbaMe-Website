import { useState, useCallback, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScrolled } from '@hooks/useScrolled';
import { NAV_LINKS, NAV_CTA } from '@constants/navigation';
import { BRAND, APP_STORES } from '@constants/brand';
import { cn } from '@utils/cn';

/**
 * Navbar Component
 *
 * Sticky navigation bar featuring:
 * - Silky smooth active underline indicator with scroll-observer lock to prevent glitching during smooth scroll
 * - Equal text coloring for all nav links
 * - Smooth section scrolling & mobile menu handling
 * - Play Store CTA link integration
 */
export function Navbar() {
  const scrolled = useScrolled(20);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('hero');

  const isManualScrolling = useRef(false);
  const scrollTimeoutRef = useRef(null);

  const closeMenu = useCallback(() => setOpen(false), []);

  const isLightPage = location.pathname !== '/';
  const useDarkText = scrolled || isLightPage;

  const lockScrollObserver = (duration = 900) => {
    isManualScrolling.current = true;
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      isManualScrolling.current = false;
    }, duration);
  };

  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  // Track active section on the homepage based on scroll position
  useEffect(() => {
    if (location.pathname !== '/') return;

    const sections = ['hero', 'how-it-works', 'for-kitchens', 'faq', 'contact'];
    
    const handleScroll = () => {
      // Don't override active section while programmatically smooth-scrolling to a target
      if (isManualScrolling.current) return;

      const scrollPosition = window.scrollY + 160;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const elem = document.getElementById(sectionId);
        if (elem) {
          const top = elem.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const isActive = (href) => {
    if (href === '/') {
      return location.pathname === '/' && activeSection === 'hero';
    }
    if (href.startsWith('/#')) {
      const targetId = href.replace('/#', '');
      return location.pathname === '/' && activeSection === targetId;
    }
    return location.pathname === href;
  };

  const handleNavClick = (e, href) => {
    closeMenu();

    if (href === '/') {
      if (location.pathname === '/') {
        e.preventDefault();
        setActiveSection('hero');
        lockScrollObserver(800);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.pushState(null, '', '/');
      }
      return;
    }

    if (href.startsWith('/#')) {
      const targetId = href.replace('/#', '');
      if (location.pathname === '/') {
        e.preventDefault();
        const elem = document.getElementById(targetId);
        if (elem) {
          setActiveSection(targetId);
          lockScrollObserver(900);
          elem.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', `/#${targetId}`);
        }
      } else {
        e.preventDefault();
        navigate(`/#${targetId}`);
      }
    }
  };

  return (
    <header
      className={cn(
        'navbar-base',
        scrolled ? 'navbar-solid' : isLightPage ? 'bg-transparent py-4' : 'navbar-transparent'
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
          onClick={(e) => handleNavClick(e, '/')}
        >
          <img
            src="/logo.webp"
            alt=""
            className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span
            className={cn(
              'font-editorial font-medium text-xl tracking-tight transition-colors duration-300',
              useDarkText ? 'text-brand-dark' : 'text-white'
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
          {NAV_LINKS.map(({ id, label, href }) => {
            const active = isActive(href);
            return (
              <li key={id}>
                <Link
                  to={href}
                  id={`nav-link-${id}`}
                  onClick={(e) => handleNavClick(e, href)}
                  className={cn(
                    'group relative px-3.5 py-2.5 rounded-lg text-body-sm font-medium transition-colors duration-200 block select-none',
                    useDarkText ? 'text-brand-dark hover:text-brand-goldAccent' : 'text-white hover:text-white/90'
                  )}
                  aria-current={active ? 'page' : undefined}
                >
                  <span>{label}</span>
                  {/* Silky smooth underline indicator */}
                  <span
                    className={cn(
                      'absolute bottom-0 left-3 right-3 h-[2px] rounded-full transition-all duration-300 ease-out origin-center pointer-events-none',
                      active
                        ? 'scale-x-100 opacity-100'
                        : 'scale-x-0 opacity-0 group-hover:scale-x-75 group-hover:opacity-40',
                      useDarkText ? 'bg-brand-gold' : 'bg-white'
                    )}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* ── Desktop CTA ("Get App" with Play Store icon) ────────── */}
        <div className="hidden md:flex items-center">
          <a
            href={APP_STORES.android}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-cta-download"
            className={cn(
              'inline-flex items-center justify-center gap-2.5 pl-4 pr-4 py-2.5 rounded-full font-semibold text-xs tracking-wide transition-all duration-300 shadow-md',
              'hover:shadow-warm hover:-translate-y-0.5 active:translate-y-0',
              useDarkText
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
            <span>{NAV_CTA.label}</span>
          </a>
        </div>

        {/* ── Mobile Hamburger Button ───────────────────────────────── */}
        <button
          className={cn(
            'md:hidden p-2 rounded transition-colors duration-200',
            'focus-visible:outline-2 focus-visible:outline-brand-gold',
            useDarkText
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
            <div className="container-site py-4 flex flex-col gap-1 items-stretch">
              {/* Nav links */}
              {NAV_LINKS.map(({ id, label, href }) => {
                const active = isActive(href);
                return (
                  <Link
                    key={id}
                    to={href}
                    id={`mobile-nav-link-${id}`}
                    className={cn(
                      'relative px-4 py-3 rounded-lg text-body-md font-medium transition-colors duration-200 flex items-center justify-between',
                      active ? 'text-brand-dark font-semibold bg-brand-beige' : 'text-brand-dark hover:bg-brand-beige/60'
                    )}
                    onClick={(e) => handleNavClick(e, href)}
                    aria-current={active ? 'page' : undefined}
                  >
                    <span>{label}</span>
                    {active && (
                      <span className="w-2 h-2 rounded-full bg-brand-gold" />
                    )}
                  </Link>
                );
              })}

              {/* Mobile Menu CTA — Full pill CTA with Get App text & Play Store icon */}
              <div className="pt-3 pb-1">
                <a
                  href={APP_STORES.android}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="mobile-nav-cta-download"
                  onClick={closeMenu}
                  className={cn(
                    'w-full flex items-center justify-center gap-2.5 px-5 py-3 rounded-full',
                    'font-semibold text-sm tracking-wide bg-brand-dark text-white shadow-md hover:bg-black transition-all duration-300 cursor-pointer'
                  )}
                  aria-label="Get App on Google Play Store"
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
