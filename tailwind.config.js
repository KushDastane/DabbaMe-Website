/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      // ─── Responsive Breakpoints ──────────────────────────────────────────
      screens: {
        'xs': '375px',
      },

      // ─── Brand Color Palette ─────────────────────────────────────────────
      colors: {
        brand: {
          gold:       '#F5B300',
          goldAccent: '#E0A106',
          bg:         '#FFFDF8',
          beige:      '#F8F5EF',
          dark:       '#1E1E1E',
          text:       '#2D2D2D',
          textMuted:  '#6B6560',
          border:     '#E8E2D8',
          success:    '#22C55E',
        },
      },

      // ─── Typography ───────────────────────────────────────────────────────
      fontFamily: {
        sans:      ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        editorial: ['"Playfair Display"', 'Georgia', 'serif'],
      },

      fontSize: {
        // Display scale — editorial headings
        'display-2xl': ['clamp(3rem,   5vw, 5rem)',    { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        'display-xl':  ['clamp(2.5rem, 4vw, 3.75rem)', { lineHeight: '1.1',  letterSpacing: '-0.02em'  }],
        'display-lg':  ['clamp(2rem,   3vw, 3rem)',    { lineHeight: '1.15', letterSpacing: '-0.018em' }],
        'display-md':  ['clamp(1.5rem, 2.5vw, 2.25rem)', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        'display-sm':  ['clamp(1.25rem,2vw, 1.75rem)', { lineHeight: '1.25', letterSpacing: '-0.01em'  }],
        // Body
        'body-xl': ['1.25rem',  { lineHeight: '1.75' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],
        'body-md': ['1rem',     { lineHeight: '1.7'  }],
        'body-sm': ['0.9375rem',{ lineHeight: '1.65' }],
        'body-xs': ['0.875rem', { lineHeight: '1.6'  }],
        // Label
        'label-lg': ['0.8125rem', { lineHeight: '1', letterSpacing: '0.08em' }],
        'label-md': ['0.75rem',   { lineHeight: '1', letterSpacing: '0.08em' }],
        'label-sm': ['0.6875rem', { lineHeight: '1', letterSpacing: '0.1em'  }],
      },

      // ─── Spacing Scale ────────────────────────────────────────────────────
      spacing: {
        '18':  '4.5rem',
        '22':  '5.5rem',
        '26':  '6.5rem',
        '30':  '7.5rem',
        '34':  '8.5rem',
        '38':  '9.5rem',
        '42':  '10.5rem',
        '46':  '11.5rem',
        '50':  '12.5rem',
        '54':  '13.5rem',
        '58':  '14.5rem',
        '62':  '15.5rem',
        '66':  '16.5rem',
        '70':  '17.5rem',
        '128': '32rem',
        '144': '36rem',
      },

      // ─── Max Widths ───────────────────────────────────────────────────────
      maxWidth: {
        'site': '1320px',
        'text': '680px',
        'wide': '1560px',
      },

      // ─── Border Radius ────────────────────────────────────────────────────
      borderRadius: {
        'xs':  '4px',
        'sm':  '8px',
        'md':  '12px',
        'lg':  '16px',
        'xl':  '24px',
        '2xl': '32px',
        '3xl': '40px',
      },

      // ─── Custom Easing Curves ─────────────────────────────────────────────
      transitionTimingFunction: {
        'apple':   'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'smooth':  'cubic-bezier(0.4, 0, 0.2, 1)',
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo':'cubic-bezier(0.19, 1, 0.22, 1)',
      },

      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
        '400': '400ms',
        '500': '500ms',
        '600': '600ms',
        '800': '800ms',
      },

      // ─── Z-Index Scale ────────────────────────────────────────────────────
      zIndex: {
        '60':  '60',
        '70':  '70',
        '80':  '80',
        '90':  '90',
        '100': '100',
      },

      // ─── Box Shadow ───────────────────────────────────────────────────────
      boxShadow: {
        'soft':   '0 2px 16px rgba(45, 45, 45, 0.06)',
        'medium': '0 4px 32px rgba(45, 45, 45, 0.1)',
        'warm':   '0 8px 48px rgba(245, 179, 0, 0.12)',
        'nav':    '0 1px 0 rgba(232, 226, 216, 1)',
      },

      // ─── Animations ───────────────────────────────────────────────────────
      keyframes: {
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-down': {
          '0%':   { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in':  'fade-in  600ms cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
        'fade-up':  'fade-up  700ms cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
        'fade-down':'fade-down 500ms cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
      },
    },
  },

  plugins: [],
};
