module.exports = {
  root: true,
  extends: [
    '@mels/base',
    '@mels/typescript',
    '@mels/react',
    '@mels/react/testing-library',
    '@mels/react/jsx-runtime',
    '@mels/jest',
    '@mels/prettier',
  ],
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
