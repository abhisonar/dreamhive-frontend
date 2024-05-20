
/** @type {import('tailwindcss').Config} */
const { join } = require('path');
const { createGlobPatternsForDependencies } = require('@nx/next/tailwind');
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}',
      ...createGlobPatternsForDependencies(__dirname)
    ),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [require('../../tailwind-workspace-preset')],
};
