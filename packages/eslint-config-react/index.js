module.exports = {
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  extends: [
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/index.js#L125
    'plugin:react/recommended',

    // https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/src/index.js#L14
    'plugin:react-hooks/recommended',

    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/src/index.js#L43
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
        // no need for PropTypes if using TypeScript
        'react/prop-types': 'off',
      },
    },
  ],
  rules: {
    'react/display-name': 'off',
    'react/jsx-key': [
      'warn',
      {
        checkFragmentShorthand: true,
        warnOnDuplicates: true,
      },
    ],
    'react/jsx-pascal-case': [
      'warn',
      {
        allowAllCaps: true,
        ignore: [],
      },
    ],
    'react/no-array-index-key': 'off', // in some cases it's acceptable
    'react/no-typos': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': 'warn',
    'react/style-prop-object': 'warn',
  },
};
