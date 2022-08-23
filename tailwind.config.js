module.exports = {
  content: [
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        nunito: ['nunito', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      screens: {
        sm: { max: '768px' },
        ms: { max: '1212px' },
      },
      colors: {
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
};
