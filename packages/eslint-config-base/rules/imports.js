module.exports = {
  extends: [
    // https://github.com/import-js/eslint-plugin-import/blob/main/config/recommended.js
    'plugin:import/recommended'
  ],

  settings: {
    // https://github.com/import-js/eslint-plugin-import#resolvers
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.mjs', '.json']
      }
    },

    // File extensions that will be parsed as modules and inspected for exports
    // https://github.com/import-js/eslint-plugin-import#importextensions
    'import/extensions': ['.js', '.jsx', '.mjs'],

    // Will not report the matching module if no exports are found
    // https://github.com/import-js/eslint-plugin-import#importignore
    'import/ignore': ['node_modules', '\\.(scss|css|less|hbs|svg|json)$']
  },

  rules: {
    // Enforces extensions for all import statements
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md
    'import/extensions': [
      'warn',
      'ignorePackages',
      // ... except for the following:
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never'
      }
    ],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md
    'import/first': 'warn',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-anonymous-default-export.md
    'import/no-anonymous-default-export': 'warn',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ],
        alphabetize: {
          order: 'asc'
        }
      }
    ],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md
    'import/newline-after-import': 'warn',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md
    'import/no-cycle': 'error',

    // Forbid imports that are not declared in the package.json's `dependencies`
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          // ... but allow imports of `devDependencies` inside test/story files
          '**/*.{test,spec,stories,story}.{js,jsx,ts,tsx}',
          '**/__tests__/**',
          '**/__mocks__/**',
          '**/.storybook/**',
          '**/stories/**',
          '**/jest.config.js',
          '**/jest.setup.js',
          '**/webpack.config.js',
          '**/webpack.config.*.js',
          '**/rollup.config.js',
          '**/rollup.config.*.js',
          '**/.eslintrc.js'
        ],
        peerDependencies: true
      }
    ],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-mutable-exports.md
    'import/no-mutable-exports': 'error',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-self-import.md
    'import/no-self-import': 'error',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md
    'import/no-unresolved': [
      'error',
      {
        commonjs: true,
        caseSensitive: true
      }
    ],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-useless-path-segments.md
    'import/no-useless-path-segments': ['warn', { commonjs: true }]
  }
};
