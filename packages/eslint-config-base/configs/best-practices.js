module.exports = {
  rules: {
    // https://eslint.org/docs/rules/array-callback-return#enforces-return-statements-in-callbacks-of-arrays-methods-array-callback-return
    'array-callback-return': 'error',

    // https://eslint.org/docs/rules/default-case#require-default-case-in-switch-statements-default-case
    'default-case': [
      'warn',
      {
        // allow to skip a default by commenting:
        // skip default
        commentPattern: '^skip\\sdefault'
      }
    ],

    // https://eslint.org/docs/rules/dot-notation#require-dot-notation-dot-notation
    'dot-notation': 'warn',

    // https://eslint.org/docs/rules/eqeqeq#require--and--eqeqeq
    eqeqeq: ['warn', 'smart'],

    // https://eslint.org/docs/rules/new-parens#require-parentheses-when-invoking-a-constructor-with-no-arguments-new-parens
    'new-parens': 'warn',

    // https://eslint.org/docs/rules/no-alert#disallow-use-of-alert-no-alert
    'no-alert': 'warn',

    // https://eslint.org/docs/rules/no-array-constructor#disallow-array-constructors-no-array-constructor
    'no-array-constructor': 'warn',

    // https://eslint.org/docs/rules/no-caller#disallow-use-of-callercallee-no-caller
    'no-caller': 'warn',

    // https://eslint.org/docs/rules/no-console#disallow-the-use-of-console-no-console
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error', 'info', 'table']
      }
    ],

    // https://eslint.org/docs/rules/no-constructor-return#disallow-returning-value-in-constructor-no-constructor-return
    'no-constructor-return': 'warn',

    // https://eslint.org/docs/rules/no-eval#disallow-eval-no-eval
    'no-eval': 'warn',

    // https://eslint.org/docs/rules/no-extend-native#disallow-extending-of-native-objects-no-extend-native
    'no-extend-native': 'warn',

    // https://eslint.org/docs/rules/no-extra-bind#disallow-unnecessary-function-binding-no-extra-bind
    'no-extra-bind': 'warn',

    // https://eslint.org/docs/rules/no-global-assign#disallow-assignment-to-native-objects-or-read-only-global-variables-no-global-assign
    'no-global-assign': 'warn',

    // https://eslint.org/docs/rules/no-implied-eval#disallow-implied-eval-no-implied-eval
    'no-implied-eval': 'warn',

    // https://eslint.org/docs/rules/no-labels#disallow-labeled-statements-no-labels
    'no-labels': 'warn',

    // https://eslint.org/docs/rules/no-lone-blocks#disallow-unnecessary-nested-blocks-no-lone-blocks
    'no-lone-blocks': 'warn',

    // https://eslint.org/docs/rules/no-loop-func#disallow-functions-in-loops-no-loop-func
    'no-loop-func': 'error',

    // https://eslint.org/docs/rules/no-mixed-operators#disallow-mixes-of-different-operators-no-mixed-operators
    'no-mixed-operators': [
      'warn',
      {
        groups: [
          ['+', '-', '*', '/', '%', '**'],
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof']
        ],
        allowSamePrecedence: false
      }
    ],

    // https://eslint.org/docs/rules/no-new#disallow-new-for-side-effects-no-new
    'no-new': 'warn',

    // https://eslint.org/docs/rules/no-new-func#disallow-function-constructor-no-new-func
    'no-new-func': 'warn',

    // https://eslint.org/docs/rules/no-new-wrappers#disallow-primitive-wrapper-instances-no-new-wrappers
    'no-new-wrappers': 'warn',

    // https://eslint.org/docs/rules/no-octal-escape#disallow-octal-escape-sequences-in-string-literals-no-octal-escape
    'no-octal-escape': 'warn',

    // https://eslint.org/docs/rules/no-restricted-syntax#disallow-specified-syntax-no-restricted-syntax
    'no-restricted-syntax': ['warn', 'WithStatement'],

    // https://eslint.org/docs/rules/no-script-url#disallow-script-urls-no-script-url
    'no-script-url': 'warn',

    // https://eslint.org/docs/rules/no-self-assign#disallow-self-assignment-no-self-assign
    'no-self-assign': 'warn',

    // https://eslint.org/docs/rules/no-self-compare#disallow-self-compare-no-self-compare
    'no-self-compare': 'warn',

    // https://eslint.org/docs/rules/no-sequences#disallow-use-of-the-comma-operator-no-sequences
    'no-sequences': 'warn',

    // https://eslint.org/docs/rules/no-template-curly-in-string#disallow-template-literal-placeholder-syntax-in-regular-strings-no-template-curly-in-string
    'no-template-curly-in-string': 'warn',

    // https://eslint.org/docs/rules/no-throw-literal#restrict-what-can-be-thrown-as-an-exception-no-throw-literal
    'no-throw-literal': 'warn',

    // https://eslint.org/docs/rules/no-unused-expressions#disallow-unused-expressions-no-unused-expressions
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true
      }
    ],

    // https://eslint.org/docs/rules/no-useless-call#disallow-unnecessary-call-and-apply-no-useless-call
    'no-useless-call': 'warn',

    // https://eslint.org/docs/rules/no-useless-escape#disallow-unnecessary-escape-usage-no-useless-escape
    'no-useless-escape': 'warn',

    // https://eslint.org/docs/rules/radix#require-radix-parameter-radix
    radix: 'error'
  }
};
