/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'sidebar': '250px auto', // 250px for the sidebar and the rest for the content
      },
    },
  },
  plugins: [],
}
