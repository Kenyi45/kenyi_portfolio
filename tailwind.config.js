/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Paleta de marrones amelonados profesional
        primary: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#ebd5cf',
          300: '#e0b4b4',
          400: '#d3939b',
          500: '#c27d84', // Color principal amelonado
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
          500: '#a39689', // Marrón neutro
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
          500: '#9d6f55', // Acento café
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
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      fontSize: {
        'display-2xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-xl': ['3.75rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'display-lg': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'display-md': ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.02em' }],
        'display-sm': ['1.875rem', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'large': '0 10px 40px -10px rgba(0, 0, 0, 0.1), 0 2px 10px -2px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

