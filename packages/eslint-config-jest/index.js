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

        'plugin:jest/style',
      ],

      rules: {
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/expect-expect.md
        'jest/expect-expect': 'off',
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-test-return-statement.md
        'jest/no-test-return-statement': 'warn',
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-comparison-matcher.md
        'jest/prefer-comparison-matcher': 'warn',
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-equality-matcher.md
        'jest/prefer-equality-matcher': 'warn',
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-hooks-on-top.md
        'jest/prefer-hooks-on-top': 'warn',
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-todo.md
        'jest/prefer-todo': 'warn',
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/require-top-level-describe.md
        'jest/require-top-level-describe': 'warn',
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-title.md
        'jest/valid-title': 'warn',
      },
    },
  ],
};
