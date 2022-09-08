module.exports = {
  rules: {
    // https://eslint.org/docs/latest/rules/array-callback-return
    'array-callback-return': 'error',

    // https://eslint.org/docs/latest/rules/default-case
    'default-case': [
      'warn',
      {
        // allow to skip a default by commenting:
        // skip default
        commentPattern: '^skip\\sdefault',
      },
    ],

    // https://eslint.org/docs/latest/rules/dot-notation
    'dot-notation': 'warn',

    // https://eslint.org/docs/latest/rules/eqeqeq
    eqeqeq: ['warn', 'smart'],

    // https://eslint.org/docs/latest/rules/new-parens
    'new-parens': 'warn',

    // https://eslint.org/docs/latest/rules/no-alert
    'no-alert': 'warn',

    // https://eslint.org/docs/latest/rules/no-array-constructor
    'no-array-constructor': 'warn',

    // https://eslint.org/docs/latest/rules/no-caller
    'no-caller': 'warn',

    // https://eslint.org/docs/latest/rules/no-console
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error', 'info', 'table'],
      },
    ],

    // https://eslint.org/docs/latest/rules/no-constructor-return
    'no-constructor-return': 'warn',

    // https://eslint.org/docs/latest/rules/no-eval
    'no-eval': 'warn',

    // https://eslint.org/docs/latest/rules/no-extend-native
    'no-extend-native': 'warn',

    // https://eslint.org/docs/latest/rules/no-extra-bind
    'no-extra-bind': 'warn',

    // https://eslint.org/docs/latest/rules/no-global-assign
    'no-global-assign': 'warn',

    // https://eslint.org/docs/latest/rules/no-implied-eval
    'no-implied-eval': 'warn',

    // https://eslint.org/docs/latest/rules/no-labels
    'no-labels': 'warn',

    // https://eslint.org/docs/latest/rules/no-lone-blocks
    'no-lone-blocks': 'warn',

    // https://eslint.org/docs/latest/rules/no-loop-func
    'no-loop-func': 'error',

    // https://eslint.org/docs/latest/rules/no-mixed-operators
    'no-mixed-operators': [
      'warn',
      {
        groups: [
          ['+', '-', '*', '/', '%', '**'],
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
        allowSamePrecedence: false,
      },
    ],

    // https://eslint.org/docs/latest/rules/no-new
    'no-new': 'warn',

    // https://eslint.org/docs/latest/rules/no-new-func
    'no-new-func': 'warn',

    // https://eslint.org/docs/latest/rules/no-new-wrappers
    'no-new-wrappers': 'warn',

    // https://eslint.org/docs/latest/rules/no-octal-escape
    'no-octal-escape': 'warn',

    // https://eslint.org/docs/latest/rules/no-restricted-syntax
    'no-restricted-syntax': ['warn', 'WithStatement'],

    // https://eslint.org/docs/latest/rules/no-script-url
    'no-script-url': 'warn',

    // https://eslint.org/docs/latest/rules/no-self-assign
    'no-self-assign': 'warn',

    // https://eslint.org/docs/latest/rules/no-self-compare
    'no-self-compare': 'warn',

    // https://eslint.org/docs/latest/rules/no-sequences
    'no-sequences': 'warn',

    // https://eslint.org/docs/latest/rules/no-template-curly-in-string
    'no-template-curly-in-string': 'warn',

    // https://eslint.org/docs/latest/rules/no-throw-literal
    'no-throw-literal': 'warn',

    // https://eslint.org/docs/latest/rules/no-unused-expressions
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],

    // https://eslint.org/docs/latest/rules/no-useless-call
    'no-useless-call': 'warn',

    // https://eslint.org/docs/latest/rules/no-useless-escape
    'no-useless-escape': 'warn',

    // https://eslint.org/docs/latest/rules/radix
    radix: 'error',
  },
};
