const restrictedGlobals = require('confusing-browser-globals');

module.exports = {
  rules: {
    // https://eslint.org/docs/rules/no-delete-var#disallow-deleting-variables-no-delete-var
    'no-delete-var': 'warn',

    // https://eslint.org/docs/rules/no-undef-init#disallow-initializing-to-undefined-no-undef-init
    'no-undef-init': 'warn',

    // https://eslint.org/docs/rules/no-unused-vars#disallow-unused-variables-no-unused-vars
    'no-unused-vars': [
      'warn',
      {
        args: 'none',
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
      },
    ],

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
