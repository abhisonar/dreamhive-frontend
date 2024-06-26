/** @type {import('tailwindcss').Config} */
const { join } = require('path');

const { createGlobPatternsForDependencies } = require('@nx/next/tailwind');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const sharedTailwindConfig = require('../../libs/tailwind-preset/tailwind.config');

module.exports = {
  presets: [sharedTailwindConfig],
  content: [
    join(
      __dirname,
      './{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}',
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
