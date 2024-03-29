<h1 align="center">
  <br>
  <img src="https://raw.githubusercontent.com/melanieseltzer/toolkit/main/assets/toolkit.png" alt="Toolkit" width="150">
  <br>
  @mels/eslint-config-react
  <br>
</h1>

<h4 align="center">Shareable ESLint config for React projects.</h4>

<p align="center">
  <a href="https://www.npmjs.com/package/@mels/eslint-config-react"><img alt="npm (scoped)" src="https://img.shields.io/npm/v/@mels/eslint-config-react"></a>
  <a href="https://twitter.com/melanieseltzer"><img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/melanieseltzer?style=social"></a>
</p>

<p align="center">
  <a href="#install">Install</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#credits">Credits</a> •
  <a href="#license">License</a>
</p>

## ✨ Features

This package contains all my React-related rules as an extensible shared ESLint config.

- React ([eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react))
- React Hooks ([eslint-plugin-react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks))
- JSX A11y (accessibility rules) ([eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y))
- JSX runtime config (if extended with `@mels/react/jsx-runtime`)

## Install

With npm:

```bash
npm install @mels/eslint-config-react --save-dev
```

With yarn:

```bash
yarn add @mels/eslint-config-react --dev
```

## How To Use

```js
// .eslintrc.js

module.exports = {
  extends: ['@mels/base', '@mels/react'],
  // ... rest of config
};
```

This package also exports a `jsx-runtime` config, if you're using the [new JSX transform from React 17](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#removing-unused-react-imports).

```js
// .eslintrc.js

module.exports = {
  extends: ['@mels/base', '@mels/react', '@mels/react/jsx-runtime'],
  // ... rest of config
};
```

## Credits

- Toolkit logo by <a href="https://www.flaticon.com/authors/creatype" title="Creatype">Creatype</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>

## License

MIT
