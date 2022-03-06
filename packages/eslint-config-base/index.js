const configs = [
  './configs/best-practices',
  './configs/es6',
  './configs/imports',
  './configs/style',
  './configs/variables',
].map(require.resolve);

module.exports = {
  extends: [
    // https://github.com/eslint/eslint/blob/main/conf/eslint-recommended.js
    'eslint:recommended',

    ...configs,
  ],

  env: {
    node: true,
  },

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
