---
'@mels/eslint-config-typescript': major
---

Remove project-specific defaults from the config:

- `parserOptions.project`
- `parserOptions.tsconfigRootDir`
- `settings.'import/resolver'.typescript.project`

The consumer will now need to provide them. `parserOptions.project` is required, but the other two are optional.

```js
// .eslintrc.js
module.exports = {
  extends: ['@mels/base', '@mels/typescript'],

  parserOptions: {
    project: '...', // This is now required to consume `@mels/typescript`
    tsconfigRootDir: '...', // Optional
  },

  settings: {
    'import/resolver': {
      typescript: {
        project: '...', // Optional
      },
    },
  },
};
```
