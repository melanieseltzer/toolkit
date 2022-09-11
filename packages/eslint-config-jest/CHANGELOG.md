# @mels/eslint-config-jest

## 1.0.0

### Major Changes

- [#26](https://github.com/melanieseltzer/toolkit/pull/26) [`b90a8d3`](https://github.com/melanieseltzer/toolkit/commit/b90a8d354a2ad804dd326406c2127f769a271354) Thanks [@melanieseltzer](https://github.com/melanieseltzer)! - Update package dependencies:

  - Drop support for ESLint v6
  - Add support for ESLint v8
  - Update and unlock dependencies

* [#33](https://github.com/melanieseltzer/toolkit/pull/33) [`e08d4b5`](https://github.com/melanieseltzer/toolkit/commit/e08d4b56346b95014ec2a9a5398fd22507f55cbd) Thanks [@melanieseltzer](https://github.com/melanieseltzer)! - Improve and fix jest config

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

- [#39](https://github.com/melanieseltzer/toolkit/pull/39) [`02506cf`](https://github.com/melanieseltzer/toolkit/commit/02506cf7f16632dba96f874d6766d9f223d96af1) Thanks [@melanieseltzer](https://github.com/melanieseltzer)! - Move all Testing Library rules into this config.

  `eslint-config-jest` will check under the hood if `@testing-library/react` is installed by the consumer, and if so, then it will automatically enable the Testing Library rules.

* [#38](https://github.com/melanieseltzer/toolkit/pull/38) [`08bfefb`](https://github.com/melanieseltzer/toolkit/commit/08bfefb33ad3c71734da8dd2980797683c9cc46e) Thanks [@melanieseltzer](https://github.com/melanieseltzer)! - Fix the rule severity so `warn` and `error` are used more wisely. In general, try to stick to these principles:

  `warn`:

  - Anything stylistic or personal preference (ordering, naming, etc)

  `error`:

  - Anything that would cause a bug
  - Bad coding practices in general
  - Obsolete/deprecated language features, or just straight-up mistakes

### Patch Changes

- [#24](https://github.com/melanieseltzer/toolkit/pull/24) [`4b1a7fa`](https://github.com/melanieseltzer/toolkit/commit/4b1a7fae4bca28c64684a75234634d956be3bacb) Thanks [@melanieseltzer](https://github.com/melanieseltzer)! - Remove `engines.node` from package.json

## 0.1.0

### Minor Changes

- [#16](https://github.com/melanieseltzer/toolkit/pull/16) [`5861965`](https://github.com/melanieseltzer/toolkit/commit/5861965b0b438dec25e6d0825eab31ab43fc02e9) Thanks [@melanieseltzer](https://github.com/melanieseltzer)! - Initial release
