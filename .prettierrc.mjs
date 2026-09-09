/** @type {import("prettier").Config} */
export default {
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  endOfLine: "lf",
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
