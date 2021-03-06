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
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-render-in-setup.md
        'testing-library/no-render-in-setup': 'off',
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-explicit-assert.md
        'testing-library/prefer-explicit-assert': 'warn',
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-wait-for.md
        'testing-library/prefer-wait-for': 'warn',
      },
    },
  ],
};
