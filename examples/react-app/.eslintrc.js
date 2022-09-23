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
        project: './tsconfig.json',
      },
    },
  ],
};
