module.exports = {
  plugins: ['./node_modules/prettier-plugin-svelte', './node_modules/prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: '*.svelte',
      options: { parser: 'svelte' },
    },
  ],
};
