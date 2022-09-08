---
'@mels/eslint-config-typescript': patch
---

Fix the `@typescript-eslint/naming-convention` rule to allow for `PascalCase` in parameters, to support this React desctructuring convention:

```js
const Component = ({ icon: Icon }) => {
  return <Icon />;
};
```

Also be more specific for variable rules in terms of function variables.

Previously, `PascalCase` was allowed for all variables. But in reality, we only want to allow `PascalCase` for function variables (to allow for React uppercase component convention):

```js
// valid
const SomeComponent = () => ...

// not valid
const HiHello = 'hello';
```
