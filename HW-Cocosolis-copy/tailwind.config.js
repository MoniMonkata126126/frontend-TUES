/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-pink': '#DEBAA7',
        'darker-custom-pink': '#816c65',
      },
      fontFamily: {
        arial: ['Arial', 'sans-serif'],
      },
      height: {
        '31vh': '31vh',
        '15%': '15%',
        '30%': '30%',
        '52%': '52%',
        'csvh': 'calc(100vh - 55px)',
      },
      width: {
        '12%': '12%',
        '21.5%': '21.5%',
        '23.5%': '23.5%',
        '48%': '48%',
        '83%': '83%',
        '85%': '85%',
      },
    },
  },
  plugins: [],
}

