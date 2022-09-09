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
    eqeqeq: ['error', 'smart'],

    // https://eslint.org/docs/latest/rules/new-parens
    'new-parens': 'warn',

    // https://eslint.org/docs/latest/rules/no-alert
    'no-alert': 'warn',

    // https://eslint.org/docs/latest/rules/no-array-constructor
    'no-array-constructor': 'warn',

    // https://eslint.org/docs/latest/rules/no-caller
    'no-caller': 'error',

    // https://eslint.org/docs/latest/rules/no-console
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error', 'info', 'table'],
      },
    ],

    // https://eslint.org/docs/latest/rules/no-constructor-return
    'no-constructor-return': 'error',

    // https://eslint.org/docs/latest/rules/no-eval
    'no-eval': 'error',

    // https://eslint.org/docs/latest/rules/no-extend-native
    'no-extend-native': 'error',

    // https://eslint.org/docs/latest/rules/no-extra-bind
    'no-extra-bind': 'error',

    // https://eslint.org/docs/latest/rules/no-implied-eval
    'no-implied-eval': 'error',

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
    'no-new': 'error',

    // https://eslint.org/docs/latest/rules/no-new-func
    'no-new-func': 'error',

    // https://eslint.org/docs/latest/rules/no-new-wrappers
    'no-new-wrappers': 'error',

    // https://eslint.org/docs/latest/rules/no-octal-escape
    'no-octal-escape': 'error',

    // https://eslint.org/docs/latest/rules/no-self-compare
    'no-self-compare': 'error',

    // https://eslint.org/docs/latest/rules/no-sequences
    'no-sequences': 'error',

    // https://eslint.org/docs/latest/rules/no-throw-literal
    'no-throw-literal': 'error',

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
    'no-useless-call': 'error',

    // https://eslint.org/docs/latest/rules/no-use-before-define
    'no-use-before-define': ['error', 'nofunc'],

    // https://eslint.org/docs/latest/rules/radix
    radix: 'error',
  },
};
