module.exports = {
  plugins: ['testing-library'],

  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: [
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/lib/configs/react.ts
        'plugin:testing-library/react',
      ],
      rules: {
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-explicit-assert.md
        'testing-library/prefer-explicit-assert': 'error',
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-wait-for.md
        'testing-library/prefer-wait-for': 'error',
      },
    },
  ],
};
