/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#131417",
        p: {
          2: "#1e1f26",
          3: "#868ca0",
          4: "#252830",
          5: "#444857"
        },
        w: "#dadada"
      }
    },
  },
  plugins: [],
}