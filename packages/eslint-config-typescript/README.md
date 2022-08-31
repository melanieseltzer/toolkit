<h1 align="center">
  <br>
  <img src="https://raw.githubusercontent.com/melanieseltzer/toolkit/main/assets/toolkit.png" alt="Toolkit" width="150">
  <br>
  @mels/eslint-config-typescript
  <br>
</h1>

<h4 align="center">Shareable ESLint config for TypeScript projects.</h4>

<p align="center">
  <a href="https://www.npmjs.com/package/@mels/eslint-config-typescript"><img alt="npm (scoped)" src="https://img.shields.io/npm/v/@mels/eslint-config-typescript"></a>
  <a href="https://twitter.com/melanieseltzer"><img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/melanieseltzer?style=social"></a>
</p>

<p align="center">
  <a href="#install">Install</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#helpful-links">Helpful Links</a> •
  <a href="#credits">Credits</a> •
  <a href="#license">License</a>
</p>

## ✨ Features

This package contains all my TypeScript rules as an extensible shared ESLint config. It also disables ESLint rules which are already handled by TypeScript.

## Install

With npm:

```bash
npm install @mels/eslint-config-typescript --save-dev
```

With yarn:

```bash
yarn add @mels/eslint-config-typescript --dev
```

## How To Use

The only config option that is required is `parserOptions.project`, because this config uses rules which require type information.

```js
// .eslintrc.js
module.exports = {
  extends: ['@mels/base', '@mels/typescript'],
  parserOptions: {
    project: './tsconfig.json', // Set the path to the project tsconfig. This is required.
  },
};
```

Additional config options for `@typescript-eslint/parser` and `eslint-import-resolver-typescript` should be structured like so:

```js
// .eslintrc.js
module.exports = {
  extends: ['@mels/base', '@mels/typescript'],

  // Config options for `@typescript-eslint/parser` should go under `parserOptions`
  // Please see: https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/parser#configuration
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname, // root directory for relative tsconfig paths specified in the project option above
    // ...etc
  },

  settings: {
    'import/resolver': {
      // Config options for `eslint-import-resolver-typescript`
      // Please see: https://github.com/import-js/eslint-import-resolver-typescript#configuration
      typescript: {
        project: './tsconfig.eslint.json', // if different from default <root>/tsconfig.json
      },
    },
  },
};
```

## Helpful Links

- [Monorepo configuration help](https://typescript-eslint.io/docs/linting/typed-linting/monorepos/)
- [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/parser#configuration) config options
- [eslint-import-resolver-typescript](https://github.com/import-js/eslint-import-resolver-typescript#configuration) config options

## Credits

- Toolkit logo by <a href="https://www.flaticon.com/authors/creatype" title="Creatype">Creatype</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>

## License

MIT
