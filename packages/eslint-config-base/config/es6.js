module.exports = {
  env: {
    es6: true
  },

  rules: {
    // https://eslint.org/docs/rules/arrow-body-style#require-braces-in-arrow-function-body-arrow-body-style
    'arrow-body-style': ['warn', 'as-needed'],

    // https://eslint.org/docs/rules/no-use-before-define#disallow-early-use-no-use-before-define
    'no-use-before-define': [
      'warn',
      {
        functions: false,
        classes: false,
        variables: false
      }
    ],

    // https://eslint.org/docs/rules/no-useless-constructor#disallow-unnecessary-constructor-no-useless-constructor
    'no-useless-constructor': 'warn',

    // https://eslint.org/docs/rules/no-useless-rename#disallow-renaming-import-export-and-destructured-assignments-to-the-same-name-no-useless-rename
    'no-useless-rename': 'warn',

    // https://eslint.org/docs/rules/object-shorthand#require-object-literal-shorthand-syntax-object-shorthand
    'object-shorthand': 'warn',

    // https://eslint.org/docs/rules/prefer-arrow-callback#require-using-arrow-functions-for-callbacks-prefer-arrow-callback
    'prefer-arrow-callback': 'warn',

    // https://eslint.org/docs/rules/prefer-const#suggest-using-const-prefer-const
    'prefer-const': 'warn',

    // https://eslint.org/docs/rules/prefer-rest-params#suggest-using-the-rest-parameters-instead-of-arguments-prefer-rest-params
    'prefer-rest-params': 'warn',

    // https://eslint.org/docs/rules/prefer-spread#suggest-using-spread-syntax-instead-of-apply-prefer-spread
    'prefer-spread': 'warn'
  }
};
