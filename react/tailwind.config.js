/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor: '#23527c',
        secondaryColor: '#00a3c8',
        bgColor: '#EEEEEE',
        textColor: '#F9F9F9',
        darkText: '#191919',
      },
      fontFamily:{
        roboto: 'var(--roboto)',
      }
    },
  },
  plugins: [],
}

