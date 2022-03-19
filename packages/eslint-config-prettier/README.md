<h1 align="center">
  <br>
  <img src="https://raw.githubusercontent.com/melanieseltzer/toolkit/main/assets/toolkit.png" alt="Toolkit" width="150">
  <br>
  @mels/eslint-config-prettier
  <br>
</h1>

<h4 align="center">Shareable ESLint config for Prettier.</h4>

<p align="center">
  <a href="https://www.npmjs.com/package/@mels/eslint-config-prettier"><img alt="npm (scoped)" src="https://img.shields.io/npm/v/@mels/eslint-config-prettier"></a>
  <a href="https://twitter.com/melanieseltzer"><img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/melanieseltzer?style=social"></a>
</p>

<p align="center">
  <a href="#install">Install</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#credits">Credits</a> •
  <a href="#license">License</a>
</p>

## ✨ Features

This package contains my setup for having Prettier run as an ESLint rule.

## Install

With npm:

```bash
npm install @mels/eslint-config-prettier --save-dev
```

With yarn:

```bash
yarn add @mels/eslint-config-prettier --dev
```

## How To Use

Make sure to put it last in the `extends` array.

```js
// .eslintrc.js

module.exports = {
  extends: ['@mels/base', '@mels/typescript', '@mels/react', '@mels/prettier'],
  // ... rest of config
};
```

## Credits

- Toolkit logo by <a href="https://www.flaticon.com/authors/creatype" title="Creatype">Creatype</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>

## License

MIT
