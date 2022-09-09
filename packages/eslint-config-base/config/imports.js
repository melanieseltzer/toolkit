const jsExtensions = ['.js', '.jsx', '.mjs'];

module.exports = {
  plugins: ['import', 'simple-import-sort'],

  extends: [
    // https://github.com/import-js/eslint-plugin-import/blob/main/config/recommended.js
    'plugin:import/recommended',
  ],

  settings: {
    // https://github.com/import-js/eslint-plugin-import#resolvers
    'import/resolver': {
      // https://github.com/import-js/eslint-plugin-import/tree/main/resolvers/node
      node: {
        extensions: [...jsExtensions, '.json'],
      },
    },

    // File extensions that will be parsed as modules and inspected for exports
    // https://github.com/import-js/eslint-plugin-import#importextensions
    'import/extensions': jsExtensions,

    // Will not report the matching module if no exports are found
    // https://github.com/import-js/eslint-plugin-import#importignore
    'import/ignore': ['node_modules', '\\.(scss|css|less|hbs|svg|json)$'],
  },

  rules: {
    // -----------------------
    // Any overrides to `eslint-plugin-import` recommended
    // -----------------------

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md
    'import/no-unresolved': [
      'error',
      {
        commonjs: true,
        caseSensitive: true,
      },
    ],

    // -----------------------
    // Anything else not covered in `eslint-plugin-import` recommended
    // -----------------------

    // Enforces extensions for all import statements
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md
    'import/extensions': [
      'warn',
      'ignorePackages',
      // ... except for the following:
      jsExtensions.reduce(
        (finalResult, extension) => ({
          ...finalResult,
          // removing the period from the extension
          [extension.slice(1)]: 'never',
        }),
        {}
      ),
    ],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md
    'import/first': 'warn',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-anonymous-default-export.md
    'import/no-anonymous-default-export': 'error',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md
    'import/newline-after-import': 'warn',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md
    'import/no-cycle': 'error',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-mutable-exports.md
    'import/no-mutable-exports': 'error',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-self-import.md
    'import/no-self-import': 'error',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-useless-path-segments.md
    'import/no-useless-path-segments': ['warn', { commonjs: true }],

    // -----------------------
    // Import sorting/ordering
    // -----------------------

    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // Side effects, i.e. import 'some-package';
          ['^\\u0000'],
          // Node.js builtins.
          [
            '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
          ],
          // External packages. `react` or 'next' packages come first.
          ['^react', '^next', '^@?\\w'],
          // Internal packages that are aliased.
          ['^(~|@|src|components|app)(/.*|$)'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.s?css$'],
        ],
      },
    ],
  },
};
