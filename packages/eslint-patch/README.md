<h1 align="center">
  <br>
  <img src="https://raw.githubusercontent.com/melanieseltzer/toolkit/main/assets/toolkit.png" alt="Toolkit" width="150">
  <br>
  @mels/eslint-patch
  <br>
</h1>

<h4 align="center">Allow shared ESLint configs to bring along their own plugins.</h4>

<p align="center">
  <a href="https://www.npmjs.com/package/@mels/eslint-patch"><img alt="npm (scoped)" src="https://img.shields.io/npm/v/@mels/eslint-patch"></a>
  <a href="https://twitter.com/melanieseltzer"><img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/melanieseltzer?style=social"></a>
</p>

<p align="center">
  <a href="#install">Install</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#credits">Credits</a> •
  <a href="#license">License</a>
</p>

## ✨ Features

`@mels/eslint-patch` uses [@rushstack/eslint-patch](https://github.com/microsoft/rushstack/tree/master/stack/eslint-patch) under the hood to enable shared ESLint configs in this toolkit to bring along their own plugins as dependencies, rather than imposing them as peer dependencies.

Please see for more info: https://www.npmjs.com/package/@rushstack/eslint-patch

## Install

With npm:

```bash
npm install @mels/eslint-patch --save-dev
```

With yarn:

```bash
yarn add @mels/eslint-patch --dev
```

## How To Use

Add a require() call to the to top of the `.eslintrc.js` file in the project that depends on the shared toolkit ESLint config.

```js
// .eslintrc.js

require('@mels/eslint-patch');

module.exports = {
  extends: ['@mels'],
  // ... etc
};
```

## Credits

- [@rushstack/eslint-patch](https://www.npmjs.com/package/@rushstack/eslint-patch)
- Toolkit logo by <a href="https://www.flaticon.com/authors/creatype" title="Creatype">Creatype</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>

## License

MIT
