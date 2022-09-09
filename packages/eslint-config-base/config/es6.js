module.exports = {
  env: {
    es6: true,
  },

  rules: {
    // https://eslint.org/docs/latest/rules/arrow-body-style
    'arrow-body-style': ['warn', 'as-needed'],

    // https://eslint.org/docs/latest/rules/no-lone-blocks
    'no-lone-blocks': 'error',

    // https://eslint.org/docs/latest/rules/no-template-curly-in-string
    'no-template-curly-in-string': 'error',

    // https://eslint.org/docs/latest/rules/no-useless-constructor
    'no-useless-constructor': 'error',

    // https://eslint.org/docs/latest/rules/no-useless-rename
    'no-useless-rename': 'error',

    // https://eslint.org/docs/latest/rules/object-shorthand
    'object-shorthand': 'error',

    // https://eslint.org/docs/latest/rules/prefer-arrow-callback
    'prefer-arrow-callback': 'error',

    // https://eslint.org/docs/latest/rules/prefer-const
    'prefer-const': 'error',

    // https://eslint.org/docs/latest/rules/prefer-rest-params
    'prefer-rest-params': 'error',

    // https://eslint.org/docs/latest/rules/prefer-spread
    'prefer-spread': 'error',
  },
};
