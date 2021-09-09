module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,pug,js,ts}'],
  separator: '_', // to make usable with 'pugjs'
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
