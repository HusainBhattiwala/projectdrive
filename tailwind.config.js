/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './hooks/**/*.{js,ts,jsx,tsx}',
    './rolnew/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      robo: 'var(--font-robo)',
      manrope: 'var(--font-manrope)',
      lato: 'var(--font-lato)',
      sans: 'var(--font-sans)',
    },
    extend: {
      screens: {
        mo: { max: '639px' },
        xs: { max: '639px', min: '500px' },
      },
      borderWidth: {
        0.4: '0.4px',
      },
      gridTemplateColumns: {
        14: 'repeat(14, minmax(0, 1fr))',
        15: 'repeat(15, minmax(0, 1fr))',
        16: 'repeat(16, minmax(0, 1fr))',
        17: 'repeat(17, minmax(0, 1fr))',
        18: 'repeat(18, minmax(0, 1fr))',
      },
      colors: {
        custom: {
          darkGray: '#EFEFEF',
          lightPink: '#FEF8F4',
          lightGray: '#F6F6F6',
          customBlue: '#E5EAFA',
          customGray: '#CED5E5',
        },
        pry: {
          50: '#fef7f4',
          100: '#fdefea',
          200: '#fad6ca',
          300: '#f7bea9',
          400: '#f28d69',
          500: '#ec5c29',
          600: '#d45325',
          700: '#b1451f',
          800: '#8e3719',
          900: '#742d14',
        },
      },
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/line-clamp')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['[data-theme=light]'],
          primary: '#EC5C29',
          neutral: '#000000',
          success: '#1B9353',
          'neutral-content': '#2C2C2C',
          'base-content': '#797979',
          'mid-grey': '#535353',
        },
      },
    ],
  },
};
