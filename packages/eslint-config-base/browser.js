const restrictedGlobals = require('confusing-browser-globals');

module.exports = {
  extends: ['./index.js'],

  env: {
    browser: true,
  },

  rules: {
    // https://eslint.org/docs/rules/no-restricted-globals#disallow-specific-global-variables-no-restricted-globals
    'no-restricted-globals': [
      'error',
      ...['error', ...restrictedGlobals].map((global) => ({
        name: global,
        message: `Did you mean to declare a local variable '${global}'?`,
      })),
    ],
  },
};
