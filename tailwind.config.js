const multipleLinesPlugin = require('tailwindcss-plugin-multiple-lines');

module.exports = {
  theme: {
    extend: {
      inset: {
        '-2': '-2rem',
        '2-6': '2.6rem'
      },
      colors: {
        covid: {
          100: '#f6f5f0',
          200: '#efd9c8',
          300: '#a3a686',
          400: '#efd9c8',
          500: '#af694e',
          600: '#89644d',
          900: '#363232'
        }
      },
    },
    container: {

    },
  },
  variants: {},
  plugins: [
    multipleLinesPlugin(),
    require('@tailwindcss/custom-forms')
  ],
}

