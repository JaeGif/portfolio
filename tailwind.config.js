/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',

  theme: {
    extend: {
      primary: '#111111',
      secondary: '#FF1694',
      colors: {
        gray: {
          950: '#000000',
          900: '#111111',
          800: '#181818',
          700: '#333333',
          600: '#444444',
          400: '#555555',
          300: '#666666',
          200: '#777777',
          100: '#888888',
        },
      },
      boxShadow: {
        black: '0 35px 60px -15px #000000',
        white: '0 35px 60px -15px #FFFFFF',
      },

      gridTemplateColumns: {
        fluid: 'repeat(auto-fit, minmax(20rem, 1fr))',
      },
      fontFamily: {
        montserrat: ['montserrat', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
};
