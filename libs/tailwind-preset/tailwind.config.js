// tailwind-workspace-preset.js
const generated = require('@tailwindcss/typography');

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {},
    fontFamily: {
      sans: ['var(--font-default)', ...defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [generated],
};
