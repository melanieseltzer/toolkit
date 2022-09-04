module.exports = {
  env: {
    jest: true,
  },

  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],

      extends: [
        // https://github.com/jest-community/eslint-plugin-jest#rules
        'plugin:jest/recommended',

        // https://github.com/jest-community/eslint-plugin-jest#rules
        'plugin:jest/style',
      ],

      rules: {
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-conditional-in-test.md
        'jest/no-conditional-in-test': 'error',

        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-test-return-statement.md
        'jest/no-test-return-statement': 'error',

        // -----------------------
        // Style
        // -----------------------

        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/consistent-test-it.md
        'jest/consistent-test-it': 'error',

        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-comparison-matcher.md
        'jest/prefer-comparison-matcher': 'error',

        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-each.md
        'jest/prefer-each': 'error',

        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-equality-matcher.md
        'jest/prefer-equality-matcher': 'error',

        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-hooks-in-order.md
        'jest/prefer-hooks-in-order': 'error',

        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-hooks-on-top.md
        'jest/prefer-hooks-on-top': 'error',

        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-mock-promise-shorthand.md
        'jest/prefer-mock-promise-shorthand': 'error',

        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-spy-on.md
        'jest/prefer-spy-on': 'error',

        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-strict-equal.md
        'jest/prefer-strict-equal': 'error',

        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-todo.md
        'jest/prefer-todo': 'error',

        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/require-top-level-describe.md
        'jest/require-top-level-describe': 'error',
      },
    },
  ],
};
