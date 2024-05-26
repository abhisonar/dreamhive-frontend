/** @type {import('tailwindcss').Config} */
const { join } = require('path');
const { createGlobPatternsForDependencies } = require('@nx/next/tailwind');
const sharedTailwindConfig = require('../tailwind-preset/tailwind.config');

module.exports = {
  presets: [sharedTailwindConfig],
  content: [
    join(
      __dirname,
      'src/**/*!(*.stories|*.spec).{ts,tsx,html}',
      ...createGlobPatternsForDependencies(__dirname),
    ),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
