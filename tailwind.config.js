/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#ebd5cf',
          300: '#e0b4b4',
          400: '#d3939b',
          500: '#c27d84',
          600: '#a8646b',
          700: '#8e4b52',
          800: '#73393e',
          900: '#5c2b30',
          950: '#3a1b1e',
        },
        secondary: {
          50: '#faf9f7',
          100: '#f0efeb',
          200: '#e5e2db',
          300: '#d4cfc3',
          400: '#b8b0a0',
          500: '#a39689',
          600: '#8a7d6f',
          700: '#726659',
          800: '#5d544a',
          900: '#4c453e',
          950: '#2a2420',
        },
        accent: {
          50: '#f7f3f0',
          100: '#ede5df',
          200: '#dbc8be',
          300: '#c4a594',
          400: '#b08970',
          500: '#9d6f55',
          600: '#8b5a47',
          700: '#73483c',
          800: '#5f3c35',
          900: '#50342f',
          950: '#2a1a17',
        },
        neutral: {
          50: '#fafaf9',
          100: '#f4f4f3',
          200: '#e7e7e5',
          300: '#d3d3d0',
          400: '#b0b0ab',
          500: '#91918b',
          600: '#7c7c75',
          700: '#68675f',
          800: '#56544e',
          900: '#494641',
          950: '#25241f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      fontSize: {
        'fluid-display': ['var(--text-4xl)', { lineHeight: 'var(--leading-display)', letterSpacing: '-0.02em' }],
        'fluid-h2': ['var(--text-3xl)', { lineHeight: 'var(--leading-tight)', letterSpacing: '-0.02em' }],
        'fluid-lead': ['var(--text-lg)', { lineHeight: 'var(--leading-relaxed)' }],
        'fluid-body': ['var(--text-base)', { lineHeight: 'var(--leading-normal)' }],
        'fluid-sm': ['var(--text-sm)', { lineHeight: 'var(--leading-normal)' }],
      },
      spacing: {
        '18': '4.5rem',
        'section': 'var(--space-section-y)',
        'block': 'var(--space-block)',
        'phi': 'var(--gap-phi)',
      },
      transitionDuration: {
        'smooth': '280ms',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'fade-in': 'fadeIn var(--duration) var(--ease-out-expo) forwards',
        'slide-up': 'slideUp var(--duration) var(--ease-out-expo) forwards',
        'float': 'float 5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(var(--reveal-y))' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      boxShadow: {
        soft: '0 2px 15px -3px rgba(58, 27, 30, 0.06), 0 6px 20px -4px rgba(58, 27, 30, 0.04)',
        medium: '0 8px 28px -6px rgba(58, 27, 30, 0.08), 0 4px 12px -4px rgba(58, 27, 30, 0.05)',
        ring: '0 0 0 1px rgba(194, 125, 132, 0.12)',
      },
      backgroundImage: {
        'grid-warm': `linear-gradient(to right, rgba(194, 125, 132, 0.06) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(194, 125, 132, 0.06) 1px, transparent 1px)`,
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
