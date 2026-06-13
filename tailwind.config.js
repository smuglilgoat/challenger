/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maple: {
          orange: '#FF8C42',
          gold: '#FFD700',
          navy: '#1a1f2e',
          charcoal: '#2d3748',
        }
      }
    },
  },
  plugins: [],
}
