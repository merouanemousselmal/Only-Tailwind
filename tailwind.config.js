/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "my-gray": "#333",
      },
    },
  },
  plugins: [],
};
