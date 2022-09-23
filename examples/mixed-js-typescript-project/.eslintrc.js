module.exports = {
  root: true,

  extends: ['@mels/base', '@mels/typescript', '@mels/prettier'],

  overrides: [
    {
      files: ['**/*.ts?(x)'],

      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
};
