module.exports = {
  root: true,

  extends: [
    '@mels/base',
    '@mels/typescript',
    '@mels/react',
    '@mels/react/jsx-runtime',
    '@mels/jest',
    '@mels/prettier',
  ],

  overrides: [
    {
      files: ['**/*.ts?(x)'],

      parserOptions: {
        ecmaVersion: 2020,
        project: './tsconfig.eslint.json',
        tsconfigRootDir: __dirname,
      },

      settings: {
        'import/resolver': {
          typescript: {
            project: './tsconfig.eslint.json',
          },
        },
      },
    },
  ],
};
