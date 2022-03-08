module.exports = {
  plugins: ['react', 'react-hooks', 'jsx-a11y'],

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

  extends: [
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/index.js#L125
    'plugin:react/recommended',

    // https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/src/index.js#L14
    'plugin:react-hooks/recommended',

    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/src/index.js#L43
    'plugin:jsx-a11y/recommended',

    require.resolve('./react-testing-library'),
  ],

  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        // no need for PropTypes if using TypeScript
        'react/prop-types': 'off',
      },
    },
  ],

  rules: {
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
    'react/display-name': 'off',
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
    'react/jsx-key': [
      'warn',
      {
        checkFragmentShorthand: true,
        warnOnDuplicates: true,
      },
    ],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
    'react/jsx-pascal-case': [
      'warn',
      {
        allowAllCaps: true,
        ignore: [],
      },
    ],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
    'react/no-array-index-key': 'off', // in some cases it's acceptable
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md
    'react/no-typos': 'error',
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
    'react/self-closing-comp': 'warn',
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
    'react/style-prop-object': 'warn',

    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-role.md
    'jsx-a11y/aria-role': [
      'error',
      {
        ignoreNonDOM: true,
      },
    ],
  },
};
