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

```js
// .eslintrc.js

module.exports = {
  extends: ['@mels/base', '@mels/typescript'],
  // ... rest of config
};
```

If your project is part of a monorepo, you may need to add some additional configuration to help ESLint find your `tsconfig.json`:

```diff
// .eslintrc.js

module.exports = {
  extends: ['@mels/base', '@mels/typescript'],
+  parserOptions: {
+    tsconfigRootDir: __dirname,
+  },
+  settings: {
+    'import/resolver': {
+      typescript: {
+        project: `${__dirname}/tsconfig.json`,
+      },
+    },
+  },
};
```

## Credits

- Toolkit logo by <a href="https://www.flaticon.com/authors/creatype" title="Creatype">Creatype</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>

## License

MIT
