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
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
