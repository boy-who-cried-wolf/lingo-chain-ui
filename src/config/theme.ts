export const theme = {
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
      100: '#AFAFAF',
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
      secondary: '#AFAFAF',
      tertiary: '#A4A4A4',
      muted: '#666666',
    }
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  }
} as const;

export type Theme = typeof theme; 