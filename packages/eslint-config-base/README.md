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

This package contains my base/common JS rules as an extensible shared config.

## Install

With npm:

```bash
npm install @mels/eslint-config-base --save-dev
```

With yarn:

```bash
yarn add @mels/eslint-config-base --dev
```

## ⚠️ Important Note

`@mels/eslint-config-base` **must be referenced first** in the ESLint `extends` array when using other toolkit packages along with it.

It is the only one that is **required** (the rest are optional) in terms of setup. For example, if you want to use `@mels/eslint-config-typescript` then you also must use `@mels/eslint-config-base` first for the proper setup. If you just want to use `@mels/eslint-config-base` alone, then that is fine too.

Why? Because it uses [@rushstack/eslint-patch](https://www.npmjs.com/package/@rushstack/eslint-patch) under the hood to fix a [longstanding issue](https://github.com/eslint/eslint/issues/3458) with shareable configs not allowing plugins as dependencies.

Having the patch added internally here in the base config was an intentional decision so that the consumer never has to worry about adding it themselves. Doing so allows all `@mels/...` packages up the chain to bring along their own plugins as dependencies.

The trade-off is of course that the configs are bound to a specific order, with `@mels/eslint-config-base` always needing to be first. For now (and until ESLint makes progress on supporting plugins as dependencies) this trade-off is acceptable for the huge convenience in setup.

## How To Use

```js
// .eslintrc.js

module.exports = {
  extends: [
    '@mels/base', // must always be first
    // '@mels/typescript',
    // '@mels/react',
    // ... etc
  ],
  // ... any additional project-specific overrides
};
```

## Credits

- Toolkit logo by <a href="https://www.flaticon.com/authors/creatype" title="Creatype">Creatype</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>

## License

MIT
