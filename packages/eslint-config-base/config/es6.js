module.exports = {
  env: {
    es6: true,
  },

  rules: {
    // https://eslint.org/docs/latest/rules/arrow-body-style
    'arrow-body-style': ['warn', 'as-needed'],

    // https://eslint.org/docs/latest/rules/no-use-before-define
    'no-use-before-define': [
      'warn',
      {
        functions: false,
        classes: false,
        variables: false,
      },
    ],

    // https://eslint.org/docs/latest/rules/no-useless-constructor
    'no-useless-constructor': 'warn',

    // https://eslint.org/docs/latest/rules/no-useless-rename
    'no-useless-rename': 'warn',

    // https://eslint.org/docs/latest/rules/object-shorthand
    'object-shorthand': 'warn',

    // https://eslint.org/docs/latest/rules/prefer-arrow-callback
    'prefer-arrow-callback': 'warn',

    // https://eslint.org/docs/latest/rules/prefer-const
    'prefer-const': 'warn',

    // https://eslint.org/docs/latest/rules/prefer-rest-params
    'prefer-rest-params': 'warn',

    // https://eslint.org/docs/latest/rules/prefer-spread
    'prefer-spread': 'warn',
  },
};
