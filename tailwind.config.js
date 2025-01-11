module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      colors: {
        primary: "#4A90E2", // Color principal
        secondary: "#E94E77", // Color secundario
        neutral: "#333333", // Color neutral
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
