/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx, html, js, ts,}", "./src/**/*"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			}
    },
  },
  plugins: [],
}
