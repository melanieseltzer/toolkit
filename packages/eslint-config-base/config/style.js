module.exports = {
  rules: {
    // https://eslint.org/docs/latest/rules/dot-location
    'dot-location': ['warn', 'property'],

    // https://eslint.org/docs/latest/rules/camelcase
    camelcase: [
      'warn',
      {
        allow: ['^(UNSAFE|unsafe|UNSTABLE|unstable)_'],
      },
    ],

    // https://eslint.org/docs/latest/rules/lines-between-class-members
    'lines-between-class-members': 'warn',

    // https://eslint.org/docs/latest/rules/no-else-return
    'no-else-return': [
      'warn',
      {
        allowElseIf: false,
      },
    ],

    // https://eslint.org/docs/latest/rules/no-lonely-if
    'no-lonely-if': 'warn',

    // https://eslint.org/docs/latest/rules/no-new-object
    'no-new-object': 'warn',

    // https://eslint.org/docs/latest/rules/no-unneeded-ternary
    'no-unneeded-ternary': 'warn',

    // https://eslint.org/docs/latest/rules/no-useless-computed-key
    'no-useless-computed-key': 'warn',

    // https://eslint.org/docs/latest/rules/no-useless-concat
    'no-useless-concat': 'warn',

    // https://eslint.org/docs/latest/rules/operator-assignment
    'operator-assignment': ['warn', 'always'],

    // https://eslint.org/docs/latest/rules/yoda
    yoda: 'warn',
  },
};
