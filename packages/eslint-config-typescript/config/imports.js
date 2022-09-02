// Make `eslint-plugin-import` work with TypeScript

const jsExtensions = ['.js', '.jsx', '.mjs'];
const tsExtensions = ['.ts', '.tsx'];
const mixedJsAndTsExtensions = [...jsExtensions, ...tsExtensions];

module.exports = {
  settings: {
    // https://github.com/import-js/eslint-plugin-import#resolvers
    'import/resolver': {
      // https://github.com/import-js/eslint-plugin-import/tree/main/resolvers/node
      node: {
        extensions: [...mixedJsAndTsExtensions, '.json'],
      },

      // Turns on the typescript resolver
      // https://github.com/alexgorbatchev/eslint-import-resolver-typescript#readme
      typescript: {
        alwaysTryTypes: true,
      },
    },

    // File extensions that will be parsed as modules and inspected for exports
    'import/extensions': mixedJsAndTsExtensions,

    'import/external-module-folders': ['node_modules', 'node_modules/@types'],

    'import/parsers': {
      '@typescript-eslint/parser': tsExtensions,
    },
  },

  rules: {
    // Enforces extensions for all import statements
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md
    'import/extensions': [
      'warn',
      'ignorePackages',
      // ... except for the following:
      mixedJsAndTsExtensions.reduce(
        (finalResult, extension) => ({
          ...finalResult,
          // removing the period from the extension
          [extension.slice(1)]: 'never',
        }),
        {}
      ),
    ],

    // TypeScript compilation already ensures that named imports exist in the referenced module
    'import/named': 'off',
  },
};
