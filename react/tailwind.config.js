/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor: 'hsla(190, 76%, 27%, 1)',
        secondaryColor: 'hsla(224, 39%, 52%, 1)',
        bgColor: 'hsl(215, 100%, 98%)',
        textColor: 'hsla(223, 23%, 27%, 1)',
        hoverColor: 'hsla(184, 59%, 49%, 1)'
      },
      fontFamily:{
        poppins: 'var(--poppins)',
        opensans: 'var(--opensans)'
      }
    },
  },
  plugins: [],
}

