/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'elevation/3-lifted': '0px 0.4px 0.7px rgba(113, 81, 78, 0.04), 0px 1px 2px rgba(113, 81, 78, 0.06), 0px 2.4px 4.8px rgba(113, 81, 78, 0.08), 0px 8px 16px rgba(113, 81, 78, 0.12)'
      },
      colors: {
        'base-color': 'rgba(57, 41, 40)',
      },
      spacing: {
        '18': '4.5rem',
      }
    },
  },
  plugins: [],
}
