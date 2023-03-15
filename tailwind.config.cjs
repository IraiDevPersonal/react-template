
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: ({ colors }) => ({
        primary: {
          200: '#3f51b5',
          300: '#3949ab',
          100: '#5c6bc0'
        },
        secondary: {
          200: '#009688',
          300: '#00897b',
          100: '#26a69a'
        },
        error: {
          200: '#f44336',
          300: '#d32f2f',
          100: '#e57373'
        },
        warning: {
          200: '#ffa726',
          300: '#f57c00',
          100: '#ffb74d'
        },
        info: {
          200: '#29b6f6',
          300: '#0288d1',
          100: '#4fc3f7'
        },
        success: {
          200: '#66bb6a',
          300: '#388e3c',
          100: '#81c784'
        },
        default: {
          100: colors.neutral[100],
          200: colors.neutral[200],
          1000: colors.neutral[700],
          1100: colors.neutral[800]
        }
      })
    }
  },
  plugins: []
}
