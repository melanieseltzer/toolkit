// This is a workaround for: https://github.com/eslint/eslint/issues/3458
require('@mels/eslint-patch');

const configs = [
  './config/best-practices',
  './config/browser',
  './config/es6',
  './config/imports',
  './config/style',
  './config/variables',
].map(require.resolve);

module.exports = {
  extends: [
    // https://github.com/eslint/eslint/blob/main/conf/eslint-recommended.js
    'eslint:recommended',

    ...configs,
  ],

  env: {
    commonjs: true,
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
