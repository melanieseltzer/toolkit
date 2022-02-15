const rules = [
  './rules/best-practices',
  './rules/es6',
  './rules/imports',
  './rules/style',
  './rules/variables'
].map(require.resolve);

module.exports = {
  extends: [
    // https://github.com/eslint/eslint/blob/main/conf/eslint-recommended.js
    'eslint:recommended',

    ...rules
  ],

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },

  ignorePatterns: [
    '!.storybook/', // unignore storybook dotfile dir
    'dist/',
    'build/'
  ]
};
