/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'ink-base': '#0d1117',
        'ink-raised': '#121826',
        'ink-line': 'rgba(100, 116, 139, 0.22)',
        paper: {
          DEFAULT: '#f4f1ea',
          muted: '#e8e4db',
          border: 'rgba(15, 23, 42, 0.08)',
        },
        primary: {
          DEFAULT: '#06b6d4',
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
          950: '#083344',
        },
        accent: {
          DEFAULT: '#f59e0b',
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        neutral: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#09090b',
        },
        secondary: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#09090b',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Syne', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        soft: '0 8px 30px -12px rgba(15, 23, 42, 0.08)',
        medium: '0 16px 50px -18px rgba(15, 23, 42, 0.12)',
        ring: '0 0 0 1px rgba(6, 182, 212, 0.35), 0 8px 24px -12px rgba(6, 182, 212, 0.2)',
        'card-ink': '0 18px 50px -20px rgba(0, 0, 0, 0.45)',
        'card-paper': '0 1px 0 rgba(15, 23, 42, 0.06), 0 22px 60px -28px rgba(15, 23, 42, 0.12)',
        'brutal-cyan': '5px 5px 0 0 rgba(6, 182, 212, 0.45)',
        'brutal-amber': '5px 5px 0 0 rgba(245, 158, 11, 0.35)',
      },
      backgroundImage: {
        'grid-blueprint':
          'linear-gradient(rgba(100,116,139,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(100,116,139,0.14) 1px, transparent 1px)',
        'paper-noise':
          'radial-gradient(circle at 20% 30%, rgba(6, 182, 212, 0.06), transparent 45%), radial-gradient(circle at 80% 70%, rgba(245, 158, 11, 0.05), transparent 40%)',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
      transitionDuration: {
        smooth: '280ms',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.9s cubic-bezier(0.16, 1, 0.3, 1) both',
        'slide-up': 'slide-up 0.85s cubic-bezier(0.16, 1, 0.3, 1) both',
        float: 'float 3.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
