/** @type {import('tailwindcss').Config} */
import tailwindcssVite from '@tailwindcss/vite'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [tailwindcssVite()],
}
