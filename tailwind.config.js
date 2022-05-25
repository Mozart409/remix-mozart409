const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        emerald: colors.emerald,
        lime: colors.lime,
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
