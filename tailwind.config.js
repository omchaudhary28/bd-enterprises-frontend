/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#111111',
        secondary: '#1C1C1C',
        accent: '#D62828',
        neutral: {
          '100': '#F8F9FA',
          '200': '#E9ECEF',
          '300': '#d4d4d4',
          '400': '#a3a3a3',
          '500': '#737373',
          '600': '#525252',
          '700': '#404040',
          '800': '#262626',
          '900': '#171717',
        },
        vibrant: {
          red: '#D62828',
          orange: '#F77F00',
          yellow: '#FCBF49',
          charcoal: '#111111',
          steel: '#1C1C1C',
        }
      },
      fontFamily: {
        sans: ['Barlow', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        slideDown: 'slideDown 0.6s ease-out',
        slideUp: 'slideUp 0.6s ease-out',
        fadeIn: 'fadeIn 0.8s ease-in-out',
        scaleIn: 'scaleIn 0.5s ease-out',
        bounce: 'bounce 3s infinite',
        pulse: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}

