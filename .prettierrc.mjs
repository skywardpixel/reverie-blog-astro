/** @type {import("prettier").Config} */
export default {
  // Use 2 spaces for indentation
  tabWidth: 2,
  useTabs: false,

  // Other formatting preferences
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  trailingComma: 'es5',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'avoid',
  printWidth: 80,
  endOfLine: 'lf',

  // Include the Astro plugin
  plugins: ['prettier-plugin-astro'],

  // Override settings for specific file types
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
