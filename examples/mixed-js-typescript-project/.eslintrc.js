module.exports = {
  root: true,
  extends: ['@mels/base', '@mels/typescript', '@mels/prettier'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
