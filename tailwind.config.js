/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container : {
      center: true,
      screens: {
        lg: '700px',
        xl: '700px',
        '2xl' : '700px'
      }
    },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat','sans-serif']
      }
    },
  },
  plugins: [],
}
