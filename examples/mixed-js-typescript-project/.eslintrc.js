module.exports = {
  extends: ['@mels/base', '@mels/typescript', '@mels/prettier'],
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: `${__dirname}/tsconfig.json`,
      },
    },
  },
};
