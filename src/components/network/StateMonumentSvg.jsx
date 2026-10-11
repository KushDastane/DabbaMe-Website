/**
 * StateMonumentSvg
 *
 * Coherent set of 9 original vector landmark illustrations celebrating the cultural
 * and architectural heritage of each state in DabbaMe's kitchen network:
 *
 * 1. Maharashtra: Gateway of India
 * 2. Gujarat: Adalaj Stepwell
 * 3. Delhi: India Gate
 * 4. Uttar Pradesh: Taj Mahal
 * 5. Punjab: Golden Temple
 * 6. Bihar: Mahabodhi Temple
 * 7. West Bengal: Howrah Bridge
 * 8. Odisha: Konark Sun Temple / Sun Wheel
 * 9. Haryana: Kurukshetra Chariot & Temple Pavilion
 *
 * Palette: DabbaMe gold (#F5B300), warm yellow (#E0A106), terracotta/amber (#D97706),
 * cream (#FFF9EB), and dark navy (#1E1E1E).
 */

export function StateMonumentSvg({ stateId, illustration, className = 'w-full h-full' }) {
  const id = (illustration || stateId || '').toLowerCase();

  switch (id) {
    // ── 1. MAHARASHTRA: Gateway of India ───────────────────────────
    case 'gateway-of-india':
    case 'maharashtra':
      return (
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          role="img"
          aria-label="Gateway of India illustration for Maharashtra"
        >
          {/* Base plinth */}
          <rect x="8" y="54" width="48" height="4" rx="1" fill="#1E1E1E" />
          <rect x="11" y="50" width="42" height="4" rx="0.5" fill="#E0A106" stroke="#1E1E1E" strokeWidth="1.5" />

          {/* Central pylon walls */}
          <rect x="14" y="24" width="36" height="26" fill="#FFF9EB" stroke="#1E1E1E" strokeWidth="1.75" />

          {/* Grand central arch */}
          <path
            d="M24 50V33C24 28.5817 27.5817 25 32 25C36.4183 25 40 28.5817 40 33V50"
            fill="#F5B300"
            stroke="#1E1E1E"
            strokeWidth="1.75"
          />

          {/* Side decorative niches */}
          <path d="M17 38V33C17 31.5 18 30 19.5 30C21 30 22 31.5 22 33V38" stroke="#1E1E1E" strokeWidth="1.25" fill="#FFF9EB" />
          <path d="M42 38V33C42 31.5 43 30 44.5 30C46 30 47 31.5 47 33V38" stroke="#1E1E1E" strokeWidth="1.25" fill="#FFF9EB" />

          {/* Entablature & frieze */}
          <rect x="12" y="20" width="40" height="4" fill="#F5B300" stroke="#1E1E1E" strokeWidth="1.5" />

          {/* Upper stepped parapet */}
          <rect x="18" y="15" width="28" height="5" fill="#FFF9EB" stroke="#1E1E1E" strokeWidth="1.5" />

          {/* Corner Turrets / Domes */}
          <path d="M13 20V14C13 11 16 11 16 14V20" fill="#E0A106" stroke="#1E1E1E" strokeWidth="1.5" />
          <path d="M48 20V14C48 11 51 11 51 14V20" fill="#E0A106" stroke="#1E1E1E" strokeWidth="1.5" />

          {/* Central Domelet / Finial */}
          <path d="M29 15C29 11 32 8 32 8C32 8 35 11 35 15" fill="#F5B300" stroke="#1E1E1E" strokeWidth="1.5" />
        </svg>
      );

    // ── 2. GUJARAT: Adalaj Stepwell ────────────────────────────────
    case 'adalaj-stepwell':
    case 'gujarat':
      return (
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          role="img"
          aria-label="Adalaj Stepwell illustration for Gujarat"
        >
          {/* Base foundation / ground */}
          <rect x="6" y="54" width="52" height="4" rx="1" fill="#1E1E1E" />

          {/* Stepped pavilion levels descending */}
          <path d="M10 54L18 36H46L54 54" stroke="#1E1E1E" strokeWidth="1.75" fill="#FFF9EB" />
          <line x1="14" y1="45" x2="50" y2="45" stroke="#1E1E1E" strokeWidth="1.5" />

          {/* Stepped interior steps / pool base */}
          <path d="M22 54L27 45H37L42 54Z" fill="#F5B300" stroke="#1E1E1E" strokeWidth="1.5" />

          {/* Upper pavilion columns */}
          <rect x="18" y="24" width="4" height="12" fill="#E0A106" stroke="#1E1E1E" strokeWidth="1.5" />
          <rect x="26" y="24" width="4" height="12" fill="#E0A106" stroke="#1E1E1E" strokeWidth="1.5" />
          <rect x="34" y="24" width="4" height="12" fill="#E0A106" stroke="#1E1E1E" strokeWidth="1.5" />
          <rect x="42" y="24" width="4" height="12" fill="#E0A106" stroke="#1E1E1E" strokeWidth="1.5" />

          {/* Inter-column carved lintel / brackets */}
          <path d="M16 24H48" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" />
          <path d="M16 20H48" stroke="#1E1E1E" strokeWidth="1.5" strokeLinecap="round" />

          {/* Stepped chhatri roof */}
          <path d="M20 20L24 14H40L44 20Z" fill="#F5B300" stroke="#1E1E1E" strokeWidth="1.5" />
          <path d="M28 14L32 9L36 14Z" fill="#D97706" stroke="#1E1E1E" strokeWidth="1.5" />

          {/* Finial */}
          <line x1="32" y1="9" x2="32" y2="6" stroke="#1E1E1E" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    // ── 3. DELHI: India Gate ───────────────────────────────────────
    case 'india-gate':
    case 'delhi':
      return (
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          role="img"
          aria-label="India Gate illustration for Delhi"
        >
          {/* Base plinth */}
          <rect x="8" y="54" width="48" height="4" rx="1" fill="#1E1E1E" />
          <rect x="12" y="50" width="40" height="4" fill="#E0A106" stroke="#1E1E1E" strokeWidth="1.5" />

          {/* Massive twin pylons */}
          <rect x="15" y="20" width="10" height="30" fill="#FFF9EB" stroke="#1E1E1E" strokeWidth="1.75" />
          <rect x="39" y="20" width="10" height="30" fill="#FFF9EB" stroke="#1E1E1E" strokeWidth="1.75" />

          {/* Grand round arch */}
          <path
            d="M25 50V32C25 28.134 28.134 25 32 25C35.866 25 39 28.134 39 32V50"
            fill="#F5B300"
            stroke="#1E1E1E"
            strokeWidth="1.75"
          />

          {/* Amar Jawan Jyoti bowl in center */}
          <ellipse cx="32" cy="46" rx="3.5" ry="1.5" fill="#D97706" stroke="#1E1E1E" strokeWidth="1" />
          <path d="M32 44C32 42.5 33 41 32 39.5C31 41 32 42.5 32 44Z" fill="#D97706" />

          {/* Upper cornice */}
          <rect x="12" y="16" width="40" height="4" fill="#F5B300" stroke="#1E1E1E" strokeWidth="1.5" />

          {/* Stepped attic parapet */}
          <rect x="17" y="12" width="30" height="4" fill="#FFF9EB" stroke="#1E1E1E" strokeWidth="1.5" />
          <rect x="22" y="8" width="20" height="4" fill="#E0A106" stroke="#1E1E1E" strokeWidth="1.5" />

          {/* Crown bowl */}
          <ellipse cx="32" cy="7" rx="5" ry="1.5" fill="#1E1E1E" />
        </svg>
      );

    // ── 4. UTTAR PRADESH: Taj Mahal ────────────────────────────────
    case 'taj-mahal':
    case 'uttar-pradesh':
      return (
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          role="img"
          aria-label="Taj Mahal illustration for Uttar Pradesh"
        >
          {/* Base platform */}
          <rect x="6" y="53" width="52" height="4" rx="1" fill="#1E1E1E" />
          <rect x="9" y="49" width="46" height="4" fill="#E0A106" stroke="#1E1E1E" strokeWidth="1.5" />

          {/* Flanking minarets */}
          <path d="M10 49L11 18H14L15 49" fill="#FFF9EB" stroke="#1E1E1E" strokeWidth="1.5" />
          <path d="M10 18H15V15L12.5 12L10 15V18Z" fill="#F5B300" stroke="#1E1E1E" strokeWidth="1.25" />
          <line x1="12.5" y1="12" x2="12.5" y2="9" stroke="#1E1E1E" strokeWidth="1.25" strokeLinecap="round" />

          <path d="M49 49L50 18H53L54 49" fill="#FFF9EB" stroke="#1E1E1E" strokeWidth="1.5" />
          <path d="M49 18H54V15L51.5 12L49 15V18Z" fill="#F5B300" stroke="#1E1E1E" strokeWidth="1.25" />
          <line x1="51.5" y1="12" x2="51.5" y2="9" stroke="#1E1E1E" strokeWidth="1.25" strokeLinecap="round" />

          {/* Main mausoleum building */}
          <rect x="18" y="27" width="28" height="22" fill="#FFF9EB" stroke="#1E1E1E" strokeWidth="1.75" />

          {/* Central grand iwan arch */}
          <path
            d="M26 49V37C26 33.5 28.5 31 32 31C35.5 31 38 33.5 38 37V49"
            fill="#F5B300"
            stroke="#1E1E1E"
            strokeWidth="1.5"
          />

          {/* Side chattris */}
          <path d="M21 27V22H25V27" fill="#E0A106" stroke="#1E1E1E" strokeWidth="1.25" />
          <path d="M20 22C20 19 26 19 26 22" fill="#F5B300" stroke="#1E1E1E" strokeWidth="1.25" />

          <path d="M39 27V22H43V27" fill="#E0A106" stroke="#1E1E1E" strokeWidth="1.25" />
          <path d="M38 22C38 19 44 19 44 22" fill="#F5B300" stroke="#1E1E1E" strokeWidth="1.25" />

          {/* Iconic onion dome */}
          <path
            d="M26 27C26 19 32 14 32 14C32 14 38 19 38 27Z"
            fill="#FFF9EB"
            stroke="#1E1E1E"
            strokeWidth="1.75"
          />
          {/* Finial */}
          <line x1="32" y1="14" x2="32" y2="7" stroke="#1E1E1E" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    // ── 5. PUNJAB: Golden Temple ───────────────────────────────────
    case 'golden-temple':
    case 'punjab':
      return (
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          role="img"
          aria-label="Golden Temple illustration for Punjab"
        >
          {/* Amrit Sarovar holy water base */}
          <path d="M8 56C16 54 24 58 32 56C40 54 48 58 56 56" stroke="#1E1E1E" strokeWidth="1.75" strokeLinecap="round" />
          <path d="M12 59C20 58 28 60 36 59C44 58 50 60 54 59" stroke="#E0A106" strokeWidth="1.25" strokeLinecap="round" strokeDasharray="3 3" />

          {/* Marble causeway plinth */}
          <rect x="12" y="47" width="40" height="5" fill="#FFF9EB" stroke="#1E1E1E" strokeWidth="1.5" />

          {/* Sanctum lower floor */}
          <rect x="16" y="32" width="32" height="15" fill="#F5B300" stroke="#1E1E1E" strokeWidth="1.75" />

          {/* Arched entrance doors */}
          <path d="M21 47V38C21 36 24 36 24 38V47" fill="#1E1E1E" />
          <path d="M29 47V36C29 34 35 34 35 36V47" fill="#1E1E1E" />
          <path d="M40 47V38C40 36 43 36 43 38V47" fill="#1E1E1E" />

          {/* Gold parapet & upper pavilion */}
          <rect x="14" y="28" width="36" height="4" fill="#E0A106" stroke="#1E1E1E" strokeWidth="1.5" />
          <rect x="22" y="22" width="20" height="6" fill="#F5B300" stroke="#1E1E1E" strokeWidth="1.5" />

          {/* Corner golden chattris */}
          <path d="M17 28V23C17 21 21 21 21 23V28" fill="#F5B300" stroke="#1E1E1E" strokeWidth="1.25" />
          <path d="M43 28V23C43 21 47 21 47 23V28" fill="#F5B300" stroke="#1E1E1E" strokeWidth="1.25" />

          {/* Central inverted lotus & fluted golden dome */}
          <path
            d="M24 22C24 16 32 11 32 11C32 11 40 16 40 22Z"
            fill="#F5B300"
            stroke="#1E1E1E"
            strokeWidth="1.75"
          />
          {/* Kalasa finial */}
          <line x1="32" y1="11" x2="32" y2="6" stroke="#1E1E1E" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    // ── 6. BIHAR: Mahabodhi Temple ─────────────────────────────────
    case 'mahabodhi-temple':
    case 'bihar':
      return (
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          role="img"
          aria-label="Mahabodhi Temple illustration for Bihar"
        >
          {/* Base plinth */}
          <rect x="10" y="54" width="44" height="4" rx="1" fill="#1E1E1E" />
          <rect x="13" y="49" width="38" height="5" fill="#E0A106" stroke="#1E1E1E" strokeWidth="1.5" />

          {/* Corner miniature spires */}
          <path d="M14 49L16 34L18 49Z" fill="#FFF9EB" stroke="#1E1E1E" strokeWidth="1.25" />
          <path d="M46 49L48 34L50 49Z" fill="#FFF9EB" stroke="#1E1E1E" strokeWidth="1.25" />

          {/* Main stepped pyramidal shikhara (temple tower) */}
          <path
            d="M20 49L27 15H37L44 49Z"
            fill="#FFF9EB"
            stroke="#1E1E1E"
            strokeWidth="1.75"
          />

          {/* Horizontal architectural niche tiers */}
          <line x1="22" y1="42" x2="42" y2="42" stroke="#1E1E1E" strokeWidth="1.5" />
          <line x1="24" y1="35" x2="40" y2="35" stroke="#1E1E1E" strokeWidth="1.5" />
          <line x1="26" y1="28" x2="38" y2="28" stroke="#1E1E1E" strokeWidth="1.5" />
          <line x1="28" y1="21" x2="36" y2="21" stroke="#1E1E1E" strokeWidth="1.5" />

          {/* Center stupa/arched niche */}
          <path d="M29 49V43C29 41 35 41 35 43V49" fill="#F5B300" stroke="#1E1E1E" strokeWidth="1.25" />

          {/* Amalaka (fluted disc) crown */}
          <rect x="29" y="11" width="6" height="4" rx="1" fill="#F5B300" stroke="#1E1E1E" strokeWidth="1.5" />

          {/* Stupa pinnacle / Kalasha finial */}
          <path d="M30 11C30 7 32 5 32 5C32 5 34 7 34 11" fill="#D97706" stroke="#1E1E1E" strokeWidth="1.5" />
        </svg>
      );

    // ── 7. WEST BENGAL: Howrah Bridge ──────────────────────────────
    case 'howrah-bridge':
    case 'west-bengal':
      return (
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          role="img"
          aria-label="Howrah Bridge illustration for West Bengal"
        >
          {/* Hooghly river water base */}
          <path d="M6 56C14 54 22 58 32 56C42 54 50 58 58 56" stroke="#1E1E1E" strokeWidth="1.75" strokeLinecap="round" />
          <path d="M10 59C18 58 26 60 34 59C42 58 50 60 56 59" stroke="#E0A106" strokeWidth="1.25" strokeLinecap="round" strokeDasharray="3 3" />

          {/* Suspended bridge roadway deck */}
          <rect x="6" y="44" width="52" height="4" rx="0.5" fill="#E0A106" stroke="#1E1E1E" strokeWidth="1.75" />

          {/* Left cantilever tower */}
          <path d="M14 44L17 14H22L25 44" fill="#FFF9EB" stroke="#1E1E1E" strokeWidth="1.75" />
          {/* Right cantilever tower */}
          <path d="M39 44L42 14H47L50 44" fill="#FFF9EB" stroke="#1E1E1E" strokeWidth="1.75" />

          {/* Top connecting steel chord truss */}
          <path d="M17 14L32 20L47 14" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" />

          {/* Diagonal suspension steel truss bracing */}
          <line x1="17" y1="14" x2="25" y2="44" stroke="#1E1E1E" strokeWidth="1.5" />
          <line x1="22" y1="14" x2="14" y2="44" stroke="#1E1E1E" strokeWidth="1.5" />
          <line x1="42" y1="14" x2="50" y2="44" stroke="#1E1E1E" strokeWidth="1.5" />
          <line x1="47" y1="14" x2="39" y2="44" stroke="#1E1E1E" strokeWidth="1.5" />

          {/* Center span suspension ties */}
          <line x1="25" y1="44" x2="32" y2="20" stroke="#F5B300" strokeWidth="1.5" />
          <line x1="39" y1="44" x2="32" y2="20" stroke="#F5B300" strokeWidth="1.5" />
          <line x1="32" y1="44" x2="32" y2="20" stroke="#1E1E1E" strokeWidth="1.5" />

          {/* Pier foundation caissons */}
          <rect x="13" y="48" width="13" height="5" fill="#1E1E1E" />
          <rect x="38" y="48" width="13" height="5" fill="#1E1E1E" />
        </svg>
      );

    // ── 8. ODISHA: Konark Sun Temple Wheel ─────────────────────────
    case 'konark-sun-temple':
    case 'odisha':
      return (
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          role="img"
          aria-label="Konark Sun Temple wheel illustration for Odisha"
        >
          {/* Base stone foundation */}
          <rect x="8" y="55" width="48" height="4" rx="1" fill="#1E1E1E" />

          {/* Outer Wheel Rim */}
          <circle cx="32" cy="32" r="23" fill="#FFF9EB" stroke="#1E1E1E" strokeWidth="2" />
          <circle cx="32" cy="32" r="19" fill="#FFF9EB" stroke="#1E1E1E" strokeWidth="1.5" strokeDasharray="2.5 2" />
          <circle cx="32" cy="32" r="16" stroke="#1E1E1E" strokeWidth="1.5" fill="#FFF9EB" />

          {/* 8 Primary Spoke Beams */}
          <line x1="32" y1="16" x2="32" y2="8" stroke="#1E1E1E" strokeWidth="2" />
          <line x1="32" y1="48" x2="32" y2="56" stroke="#1E1E1E" strokeWidth="2" />
          <line x1="16" y1="32" x2="8" y2="32" stroke="#1E1E1E" strokeWidth="2" />
          <line x1="48" y1="32" x2="56" y2="32" stroke="#1E1E1E" strokeWidth="2" />

          <line x1="21" y1="21" x2="15" y2="15" stroke="#1E1E1E" strokeWidth="1.75" />
          <line x1="43" y1="43" x2="49" y2="49" stroke="#1E1E1E" strokeWidth="1.75" />
          <line x1="43" y1="21" x2="49" y2="15" stroke="#1E1E1E" strokeWidth="1.75" />
          <line x1="21" y1="43" x2="15" y2="49" stroke="#1E1E1E" strokeWidth="1.75" />

          {/* Inner Spoke Connections to Hub */}
          <line x1="32" y1="26" x2="32" y2="16" stroke="#D97706" strokeWidth="1.5" />
          <line x1="32" y1="38" x2="32" y2="48" stroke="#D97706" strokeWidth="1.5" />
          <line x1="26" y1="32" x2="16" y2="32" stroke="#D97706" strokeWidth="1.5" />
          <line x1="38" y1="32" x2="48" y2="32" stroke="#D97706" strokeWidth="1.5" />

          {/* Central Carved Hub / Axle */}
          <circle cx="32" cy="32" r="6" fill="#F5B300" stroke="#1E1E1E" strokeWidth="1.75" />
          <circle cx="32" cy="32" r="2.5" fill="#D97706" stroke="#1E1E1E" strokeWidth="1" />
        </svg>
      );

    // ── 9. HARYANA: Kurukshetra Chariot & Temple Pavilion ───────────
    case 'brahma-sarovar-chariot':
    case 'kurukshetra-chariot':
    case 'haryana':
      return (
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          role="img"
          aria-label="Kurukshetra Chariot and Temple Pavilion illustration for Haryana"
        >
          {/* Base ghat plinth / Brahma Sarovar foundation */}
          <rect x="6" y="54" width="52" height="4" rx="1" fill="#1E1E1E" />
          <rect x="10" y="50" width="44" height="4" fill="#E0A106" stroke="#1E1E1E" strokeWidth="1.5" />

          {/* Bronze Chariot Wheel */}
          <circle cx="24" cy="42" r="8" fill="#FFF9EB" stroke="#1E1E1E" strokeWidth="1.75" />
          <circle cx="24" cy="42" r="2" fill="#D97706" stroke="#1E1E1E" strokeWidth="1" />
          <line x1="24" y1="34" x2="24" y2="50" stroke="#1E1E1E" strokeWidth="1.25" />
          <line x1="16" y1="42" x2="32" y2="42" stroke="#1E1E1E" strokeWidth="1.25" />

          {/* Chariot Body / Rath */}
          <path
            d="M16 42L18 30H34L32 42Z"
            fill="#F5B300"
            stroke="#1E1E1E"
            strokeWidth="1.75"
          />

          {/* Chariot Canopy / Pavilion Dome */}
          <path
            d="M20 30L22 18H30L32 30Z"
            fill="#FFF9EB"
            stroke="#1E1E1E"
            strokeWidth="1.5"
          />

          {/* Chariot Mast and Soaring Flag (Dhwaja) */}
          <line x1="26" y1="18" x2="26" y2="8" stroke="#1E1E1E" strokeWidth="1.5" />
          <path d="M26 8L36 12L26 16Z" fill="#D97706" stroke="#1E1E1E" strokeWidth="1.5" />

          {/* Facing horses / chariot shaft */}
          <path d="M34 36H48L52 30" stroke="#1E1E1E" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M46 36L49 44" stroke="#1E1E1E" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M50 36L53 44" stroke="#1E1E1E" strokeWidth="1.5" strokeLinecap="round" />

          {/* Sacred Ghat Sun / Aura */}
          <circle cx="48" cy="18" r="4" fill="#F5B300" stroke="#1E1E1E" strokeWidth="1.25" />
          <line x1="48" y1="11" x2="48" y2="13" stroke="#D97706" strokeWidth="1.25" strokeLinecap="round" />
          <line x1="48" y1="23" x2="48" y2="25" stroke="#D97706" strokeWidth="1.25" strokeLinecap="round" />
          <line x1="41" y1="18" x2="43" y2="18" stroke="#D97706" strokeWidth="1.25" strokeLinecap="round" />
          <line x1="53" y1="18" x2="55" y2="18" stroke="#D97706" strokeWidth="1.25" strokeLinecap="round" />
        </svg>
      );

    default:
      return null;
  }
}
