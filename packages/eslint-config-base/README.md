<h1 align="center">
  <br>
  <img src="https://raw.githubusercontent.com/melanieseltzer/toolkit/main/assets/toolkit.png" alt="Toolkit" width="150">
  <br>
  @mels/eslint-config-base
  <br>
</h1>

<h4 align="center">Shareable base JS ESLint config.</h4>

<p align="center">
  <a href="https://www.npmjs.com/package/@mels/eslint-config-base"><img alt="npm (scoped)" src="https://img.shields.io/npm/v/@mels/eslint-config-base"></a>
  <a href="https://twitter.com/melanieseltzer"><img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/melanieseltzer?style=social"></a>
</p>

<p align="center">
  <a href="#install">Install</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#credits">Credits</a> •
  <a href="#license">License</a>
</p>

## ✨ Features

This package contains all my common base JS rules as an extensible shared config.

## Install

With npm:

```bash
npm install @mels/eslint-config-base --save-dev
```

With yarn:

```bash
yarn add -D @mels/eslint-config-base
```

## ⚠️ Important Note

`@mels/eslint-config-base` is the only preset that is **required** when using other toolkit packages, and must always be first in the `extends` array.

It uses [@rushstack/eslint-patch](https://www.npmjs.com/package/@rushstack/eslint-patch) under the hood to fix a [longstanding issue](https://github.com/eslint/eslint/issues/3458) with shareable configs not allowing plugins as dependencies.

Having the patch added internally here in the base config was an intentional decision so that the consumer never has to worry about adding it themselves.

The tradeoff is of course that the configs need to be referenced in a particular order, with `@mels/base` always being first.

## How To Use

```js
// .eslintrc.js

module.exports = {
  extends: [
    '@mels/base', // must always be first in the extends array
    // ... any other toolkit packages
  ],
  // ... any additional project-specific overrides
};
```

## Credits

- Toolkit logo by <a href="https://www.flaticon.com/authors/creatype" title="Creatype">Creatype</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>

## License

MIT
