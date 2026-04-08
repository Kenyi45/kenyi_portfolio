/** @type {import('tailwindcss').Config} */
/* eslint-disable @typescript-eslint/no-var-requires */
const p = require('./src/theme/palette.json');

/** Escala derivada de `steel` y `inkBase` para utilidades primary-* */
const primary = {
  50: '#f5f8fa',
  100: '#e8eef4',
  200: '#d4dfe9',
  300: '#b8cad8',
  400: '#9bb4c8',
  500: p.steel,
  600: '#7393ae',
  700: '#5f7d96',
  800: p.inkBase,
  900: '#3e546b',
  950: '#2a3847',
};

/** Escala cálida: sand + clay como acento y CTA */
const accent = {
  50: '#fff9f0',
  100: '#fef0dc',
  200: '#fce0bc',
  300: '#f9cc95',
  400: p.sand,
  500: p.sand,
  600: p.clay,
  700: '#c27356',
  800: '#9e5f48',
  900: '#6b4233',
  950: '#3d2a20',
};

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '380px',
      },
      colors: {
        'ink-base': p.inkBase,
        'ink-raised': p.inkRaised,
        'ink-line': 'rgba(136, 162, 188, 0.38)',
        paper: {
          DEFAULT: p.paper,
          muted: p.paperMuted,
          border: 'rgba(79, 106, 143, 0.18)',
        },
        primary: primary,
        accent: accent,
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
        soft: '0 8px 30px -12px rgba(45, 56, 71, 0.12)',
        medium: '0 16px 50px -18px rgba(45, 56, 71, 0.16)',
        ring: '0 0 0 1px rgba(136, 162, 188, 0.45), 0 8px 24px -12px rgba(79, 106, 143, 0.25)',
        'card-ink': '0 18px 50px -20px rgba(35, 45, 60, 0.48)',
        'card-paper': '0 1px 0 rgba(79, 106, 143, 0.08), 0 22px 60px -28px rgba(45, 56, 71, 0.14)',
        'brutal-steel': '5px 5px 0 0 rgba(136, 162, 188, 0.55)',
        'brutal-clay': '5px 5px 0 0 rgba(217, 148, 119, 0.5)',
      },
      backgroundImage: {
        'grid-blueprint':
          'linear-gradient(rgba(136,162,188,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(136,162,188,0.22) 1px, transparent 1px)',
        'paper-noise':
          'radial-gradient(circle at 20% 30%, rgba(239, 182, 128, 0.12), transparent 45%), radial-gradient(circle at 80% 70%, rgba(217, 148, 119, 0.08), transparent 42%)',
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
