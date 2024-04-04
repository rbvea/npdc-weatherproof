/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}"
  ],
  theme: {
    extend: {
      colors: {
        beige: '#F3D8C3',
        blue: '#132F50',
        pink: '#d96a81'
      }
    },
  },
  plugins: [],
};

