module.exports = {
  rules: {
    // https://eslint.org/docs/rules/dot-location#enforce-newline-before-and-after-dot-dot-location
    'dot-location': ['warn', 'property'],

    // https://eslint.org/docs/latest/rules/camelcase
    camelcase: [
      'warn',
      {
        allow: ['^(UNSAFE|unsafe|UNSTABLE|unstable)_'],
      },
    ],

    // https://eslint.org/docs/rules/lines-between-class-members#require-or-disallow-an-empty-line-between-class-members-lines-between-class-members
    'lines-between-class-members': 'warn',

    // https://eslint.org/docs/rules/no-else-return#disallow-return-before-else-no-else-return
    'no-else-return': [
      'warn',
      {
        allowElseIf: false,
      },
    ],

    // https://eslint.org/docs/rules/no-lonely-if#disallow-if-statements-as-the-only-statement-in-else-blocks-no-lonely-if
    'no-lonely-if': 'warn',

    // https://eslint.org/docs/rules/no-new-object#disallow-object-constructors-no-new-object
    'no-new-object': 'warn',

    // https://eslint.org/docs/rules/no-unneeded-ternary#disallow-ternary-operators-when-simpler-alternatives-exist-no-unneeded-ternary
    'no-unneeded-ternary': 'warn',

    // https://eslint.org/docs/rules/no-useless-computed-key#disallow-unnecessary-computed-property-keys-in-objects-and-classes-no-useless-computed-key
    'no-useless-computed-key': 'warn',

    // https://eslint.org/docs/rules/no-useless-concat#disallow-unnecessary-concatenation-of-strings-no-useless-concat
    'no-useless-concat': 'warn',

    // https://eslint.org/docs/rules/operator-assignment#require-or-disallow-assignment-operator-shorthand-where-possible-operator-assignment
    'operator-assignment': 'warn',

    // https://eslint.org/docs/rules/yoda#require-or-disallow-yoda-conditions-yoda
    yoda: 'warn',
  },
};
