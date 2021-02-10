module.exports = {
  purge: [],
  darkMode: 'media',
  theme: {
    extend: {},
  },
  variants: {
    extend: {
	transform: ['hover', 'focus']
    }
  },
  plugins: [require('tailwindcss-scroll-snap')]
}
