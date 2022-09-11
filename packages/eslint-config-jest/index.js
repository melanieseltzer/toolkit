const readPkgUp = require('read-pkg-up');

const { packageJson } = readPkgUp.sync();

const allDeps = Object.keys({
  ...packageJson.peerDependencies,
  ...packageJson.devDependencies,
  ...packageJson.dependencies,
});

const hasTestingLibrary = [
  '@testing-library/dom',
  '@testing-library/react',
].some(dependency => allDeps.includes(dependency));

const overrides = [
  {
    files: [
      '**/__tests__/**/*.[jt]s?(x)',
      '**/tests/**/*.[jt]s?(x)',
      '**/?(*.)+(spec|test).[jt]s?(x)',
    ],

    plugins: [hasTestingLibrary ? 'testing-library' : null].filter(Boolean),

    extends: [
      // https://github.com/jest-community/eslint-plugin-jest#rules
      'plugin:jest/recommended',

      // https://github.com/jest-community/eslint-plugin-jest#rules
      'plugin:jest/style',

      // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/lib/configs/react.ts
      hasTestingLibrary ? 'plugin:testing-library/react' : null,
    ].filter(Boolean),

    rules: {
      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/consistent-test-it.md
      'jest/consistent-test-it': 'warn',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-conditional-in-test.md
      'jest/no-conditional-in-test': 'error',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-test-return-statement.md
      'jest/no-test-return-statement': 'error',

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

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-todo.md
      'jest/prefer-todo': 'warn',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/require-top-level-describe.md
      'jest/require-top-level-describe': 'warn',

      ...(hasTestingLibrary
        ? {
            // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-explicit-assert.md
            'testing-library/prefer-explicit-assert': 'warn',

            // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-wait-for.md
            'testing-library/prefer-wait-for': 'error',
          }
        : {}),
    },
  },
];

try {
  require.resolve('@typescript-eslint/eslint-plugin');

  overrides.push({
    files: [
      '**/__tests__/**/*.ts?(x)',
      '**/tests/**/*.ts?(x)',
      '**/?(*.)+(spec|test).ts?(x)',
    ],

    rules: {
      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/unbound-method.md
      '@typescript-eslint/unbound-method': 'off',
      'jest/unbound-method': 'error',
    },
  });
} catch (error) {
  // do nothing
}

module.exports = {
  env: {
    jest: true,
  },

  overrides,
};
