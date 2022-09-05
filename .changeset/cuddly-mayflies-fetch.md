---
'@mels/eslint-config-jest': major
---

Improve and fix jest config

- Add the `jest` env to the config
- Extend from `plugin:jest/style`
- Flip all severity from `warn` to `error` to be stricter
- Add additional `**/tests/**/*.[jt]s?(x)` file matcher

Also turned on the following rules:

- `jest/expect-expect`
- `jest/no-conditional-in-test`
- `jest/consistent-test-it`
- `jest/prefer-each`
- `jest/prefer-hooks-in-order`
- `jest/prefer-mock-promise-shorthand`
- `jest/prefer-spy-on`
- `jest/unbound-method`
