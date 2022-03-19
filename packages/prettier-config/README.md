<h1 align="center">
  <br>
  <img src="https://raw.githubusercontent.com/melanieseltzer/toolkit/main/assets/toolkit.png" alt="Toolkit" width="150">
  <br>
  @mels/prettier-config
  <br>
</h1>

<h4 align="center">Shareable Prettier configuration.</h4>

<p align="center">
  <a href="https://www.npmjs.com/package/@mels/prettier-config"><img alt="npm (scoped)" src="https://img.shields.io/npm/v/@mels/prettier-config"></a>
  <a href="https://twitter.com/melanieseltzer"><img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/melanieseltzer?style=social"></a>
</p>

<p align="center">
  <a href="#install">Install</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#credits">Credits</a> •
  <a href="#license">License</a>
</p>

## ✨ Features

This package contains all my Prettier rules as a shareable configuration.

## Install

With npm:

```bash
npm install @mels/prettier-config --save-dev
```

With yarn:

```bash
yarn add @mels/prettier-config --dev
```

## How To Use

You can use this config in multiple ways, depending on your preference.

Reference it in your `package.json` using the `prettier` property:

```js
{
  "name": "some-lib",
  "version": "0.0.0",
  "prettier": "@mels/prettier-config"
}
```

Use any of the supported extensions to export a string:

```js
// .prettierrc.json
'@mels/prettier-config';
```

```js
// prettier.config.js or .prettierrc.js
module.exports = '@mels/prettier-config';
```

If you need to extend the config, you can do so with `.prettierrc.js` or `prettier.config.js` and export the modifications in an object:

```js
// prettier.config.js or .prettierrc.js
module.exports = {
  ...require('@mels/prettier-config'), // import the package
  semi: false // add modifications
};
```

## Credits

- Toolkit logo by <a href="https://www.flaticon.com/authors/creatype" title="Creatype">Creatype</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>

## License

MIT
