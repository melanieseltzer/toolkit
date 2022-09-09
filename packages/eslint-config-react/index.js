module.exports = {
  plugins: ['react', 'react-hooks', 'jsx-a11y'],

  extends: [
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/index.js
    'plugin:react/recommended',

    // https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/src/index.js
    'plugin:react-hooks/recommended',

    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/src/index.js
    'plugin:jsx-a11y/recommended',
  ],

  env: {
    browser: true,
  },

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  settings: {
    react: {
      version: 'detect',
    },
  },

  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md
        'react/prop-types': 'off',
      },
    },
  ],

  rules: {
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
    'react/jsx-key': [
      'warn',
      {
        checkFragmentShorthand: true,
        warnOnDuplicates: true,
      },
    ],

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
    'react/jsx-pascal-case': [
      'warn',
      {
        allowNamespace: true,
      },
    ],

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
    'react/no-array-index-key': 'warn',

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-typos.md
    'react/no-typos': 'error',

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
    'react/self-closing-comp': 'warn',

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
    'react/style-prop-object': 'error',

    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-role.md
    'jsx-a11y/aria-role': [
      'error',
      {
        ignoreNonDOM: true,
      },
    ],
  },
};
