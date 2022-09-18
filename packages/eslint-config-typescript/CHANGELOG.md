# @mels/eslint-config-typescript

## 1.0.1

### Patch Changes

- [#40](https://github.com/melanieseltzer/toolkit/pull/40) [`96f69c8`](https://github.com/melanieseltzer/toolkit/commit/96f69c8b51704413843f9060df9700942717eacf) Thanks [@melanieseltzer](https://github.com/melanieseltzer)! - Patch `@typescript-eslint/no-misused-promises` rule - stop checking void return.

## 1.0.0

### Major Changes

- [#26](https://github.com/melanieseltzer/toolkit/pull/26) [`b90a8d3`](https://github.com/melanieseltzer/toolkit/commit/b90a8d354a2ad804dd326406c2127f769a271354) Thanks [@melanieseltzer](https://github.com/melanieseltzer)! - Update package dependencies:

  - Drop support for ESLint v6
  - Add support for ESLint v8
  - Update and unlock dependencies

* [#29](https://github.com/melanieseltzer/toolkit/pull/29) [`6a749c7`](https://github.com/melanieseltzer/toolkit/commit/6a749c739d5eaa28dbeb8dda45f4fc0aee998a05) Thanks [@melanieseltzer](https://github.com/melanieseltzer)! - Remove project-specific defaults from the config:

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

- [#38](https://github.com/melanieseltzer/toolkit/pull/38) [`08bfefb`](https://github.com/melanieseltzer/toolkit/commit/08bfefb33ad3c71734da8dd2980797683c9cc46e) Thanks [@melanieseltzer](https://github.com/melanieseltzer)! - Fix the rule severity so `warn` and `error` are used more wisely. In general, try to stick to these principles:

  `warn`:

  - Anything stylistic or personal preference (ordering, naming, etc)

  `error`:

  - Anything that would cause a bug
  - Bad coding practices in general
  - Obsolete/deprecated language features, or just straight-up mistakes

### Minor Changes

- [#30](https://github.com/melanieseltzer/toolkit/pull/30) [`7642d43`](https://github.com/melanieseltzer/toolkit/commit/7642d43f6d8d10d0b8cbf31d52fed04860f3b6d4) Thanks [@melanieseltzer](https://github.com/melanieseltzer)! - Update the import config:

  - Split import config internally for better organization.
  - Fix bug with `import/extensions` rule - move it out of the overrides.
  - Enable `@typescript-eslint/recommended-requiring-type-checking`.

### Patch Changes

- [#24](https://github.com/melanieseltzer/toolkit/pull/24) [`4b1a7fa`](https://github.com/melanieseltzer/toolkit/commit/4b1a7fae4bca28c64684a75234634d956be3bacb) Thanks [@melanieseltzer](https://github.com/melanieseltzer)! - Remove `engines.node` from package.json

* [#36](https://github.com/melanieseltzer/toolkit/pull/36) [`ee63bad`](https://github.com/melanieseltzer/toolkit/commit/ee63badcf1c676e72b20d7e29b04f501d0ed98f8) Thanks [@melanieseltzer](https://github.com/melanieseltzer)! - Turn off `@typescript-eslint/no-non-null-asserted-optional-chain` and `@typescript-eslint/no-non-null-assertion`.

- [#35](https://github.com/melanieseltzer/toolkit/pull/35) [`dc458e8`](https://github.com/melanieseltzer/toolkit/commit/dc458e81f33088677e306489a02de125c3edcb89) Thanks [@melanieseltzer](https://github.com/melanieseltzer)! - Allow TS comments, but only if a justification is provided.

* [#34](https://github.com/melanieseltzer/toolkit/pull/34) [`d3ea3d4`](https://github.com/melanieseltzer/toolkit/commit/d3ea3d468a26301e222a00252243dacd741f2660) Thanks [@melanieseltzer](https://github.com/melanieseltzer)! - Fix the `@typescript-eslint/naming-convention` rule to allow for `PascalCase` in parameters, to support this React desctructuring convention:

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

## 0.1.1

### Patch Changes

- [#16](https://github.com/melanieseltzer/toolkit/pull/16) [`5861965`](https://github.com/melanieseltzer/toolkit/commit/5861965b0b438dec25e6d0825eab31ab43fc02e9) Thanks [@melanieseltzer](https://github.com/melanieseltzer)! - Modify file extension pattern

## 0.1.0

### Minor Changes

- [#12](https://github.com/melanieseltzer/toolkit/pull/12) [`d5592c8`](https://github.com/melanieseltzer/toolkit/commit/d5592c81844e06ed77999653532cc294c57741fe) Thanks [@melanieseltzer](https://github.com/melanieseltzer)! - Initial release
