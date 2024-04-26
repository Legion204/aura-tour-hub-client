/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/src/assets/Animated Shape.svg')"
      }
    },
  },
  plugins: [require("daisyui")],
  themes: ["light", "dark"],
}

