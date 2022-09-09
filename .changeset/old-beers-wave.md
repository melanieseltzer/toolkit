---
'@mels/eslint-config-base': major
'@mels/eslint-config-jest': major
'@mels/eslint-config-react': major
'@mels/eslint-config-typescript': major
---

Fix the rule severity so `warn` and `error` are used more wisely. In general, try to stick to these principles:

`warn`:

- Anything stylistic or personal preference (ordering, naming, etc)

`error`:

- Anything that would cause a bug
- Bad coding practices in general
- Obsolete/deprecated language features, or just straight-up mistakes
