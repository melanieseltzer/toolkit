---
'@mels/eslint-config-jest': major
---

Move all Testing Library rules into this config.

`eslint-config-jest` will check if `@testing-library/dom` or `@testing-library/react` is installed by the consumer in their project, and if they are installed, then it will automatically enable the Testing Library rules.
