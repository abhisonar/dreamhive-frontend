// tailwind-workspace-preset.js
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  theme: {
    extend: {},
    fontFamily: {
      sans: ['var(--font-default)', ...defaultTheme.fontFamily.sans],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
