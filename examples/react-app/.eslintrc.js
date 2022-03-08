module.exports = {
  extends: ['@mels/base', '@mels/typescript', '@mels/react'],
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
