const rules = [
  './config/best-practices',
  './config/es6',
  './config/imports',
  './config/style',
  './config/variables',
].map(require.resolve);

module.exports = {
  extends: [
    // https://github.com/eslint/eslint/blob/main/conf/eslint-recommended.js
    'eslint:recommended',

    ...rules,
  ],

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  ignorePatterns: [
    '!.storybook/', // unignore storybook dotfile dir
    'dist/',
    'build/',
  ],
};
