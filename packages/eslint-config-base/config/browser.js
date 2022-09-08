const restrictedGlobals = require('confusing-browser-globals');

module.exports = {
  env: {
    browser: true,
  },

  rules: {
    // https://eslint.org/docs/latest/rules/no-restricted-globals
    'no-restricted-globals': [
      'error',
      ...['error', ...restrictedGlobals].map(global => ({
        name: global,
        message: `Did you mean to declare a local variable '${global}'?`,
      })),
    ],
  },
};
