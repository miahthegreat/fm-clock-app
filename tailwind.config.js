/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "desktop-daytime": "url('/desktop/bg-image-daytime.webp')",
        "desktop-nighttime": "url('/desktop/bg-image-nighttime.webp')",

        "tablet-daytime": "url('/tablet/bg-image-daytime.webp')",
        "tablet-nighttime": "url('/tablet/bg-image-nighttime.webp')",
        "mobile-daytime": "url('/mobile/bg-image-daytime.webp')",
        "mobile-nighttime": "url('/mobile/bg-image-nighttime.webp')",
      },
    },
  },
  plugins: [],
};
