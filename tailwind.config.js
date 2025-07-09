/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF9E6',
          100: '#FFF2CC',
          200: '#FFE599',
          300: '#FFD866',
          400: '#FFCC33',
          500: '#FFC800', // Primary color
          600: '#E6B400',
          700: '#CC9F00',
          800: '#B38A00',
          900: '#997500',
        },
        error: {
          50: '#FDF2F2',
          100: '#FCE8E8',
          200: '#F9D5D5',
          300: '#F5B3B3',
          400: '#F08181',
          500: '#A83838', // Error color
          600: '#972D2D',
          700: '#7C2525',
          800: '#651D1D',
          900: '#541818',
        },
        dark: {
          50: '#F7F7F7',
          100: '#E3E3E3',
          200: '#C8C8C8',
          300: '#A4A4A4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#383838',
          900: '#272727', // Default button background
          950: '#1A1A1A',
        },
        background: {
          primary: '#0F0F0F',
          secondary: '#1A1A1A',
          tertiary: '#272727',
        },
        surface: {
          primary: '#1A1A1A',
          secondary: '#272727',
          tertiary: '#383838',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#E3E3E3',
          tertiary: '#A4A4A4',
          muted: '#666666',
        }
      },
      backgroundColor: {
        'button-default': '#272727',
        'button-hover': '#383838',
        'button-active': '#434343',
      },
      borderColor: {
        'border-primary': '#272727',
        'border-secondary': '#383838',
      }
    },
  },
  plugins: [],
} 