/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,tsx}"],
  theme: {
    extend: {
      spacing: {
        "h-85": "22rem",
      },
      borderRadius: {
        large: "5rem",
      },
      fontFamily: {
        myfont: ['"Roboto"'],
        logos: ['"Pacifico"'],
      },
      fontSize: {
        logos: "15rem",
      },
    },
  },
  plugins: [],
};
