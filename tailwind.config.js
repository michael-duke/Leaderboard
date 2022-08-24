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
        'goldy-gold': '#e5cf8a',
        'regal-gold': '#cbb26b',
      },
      boxShadow: {
        '3D': '5px 5px 10px rgba(255, 255, 255, 0.35)',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
};
