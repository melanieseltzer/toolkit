# @mels/eslint-config-base

## 1.0.0

### Major Changes

- [#26](https://github.com/melanieseltzer/toolkit/pull/26) [`b90a8d3`](https://github.com/melanieseltzer/toolkit/commit/b90a8d354a2ad804dd326406c2127f769a271354) Thanks [@melanieseltzer](https://github.com/melanieseltzer)! - Update package dependencies:

  - Drop support for ESLint v6
  - Add support for ESLint v8
  - Update and unlock dependencies

* [#38](https://github.com/melanieseltzer/toolkit/pull/38) [`08bfefb`](https://github.com/melanieseltzer/toolkit/commit/08bfefb33ad3c71734da8dd2980797683c9cc46e) Thanks [@melanieseltzer](https://github.com/melanieseltzer)! - Changed these rules:

  - `no-use-before-define`: cannot use classes before defined

  Removed these rules:

  - `no-restricted-syntax`
  - `no-script-url`
  - `no-labels`

- [#38](https://github.com/melanieseltzer/toolkit/pull/38) [`08bfefb`](https://github.com/melanieseltzer/toolkit/commit/08bfefb33ad3c71734da8dd2980797683c9cc46e) Thanks [@melanieseltzer](https://github.com/melanieseltzer)! - Fix the rule severity so `warn` and `error` are used more wisely. In general, try to stick to these principles:

  `warn`:

  - Anything stylistic or personal preference (ordering, naming, etc)

  `error`:

  - Anything that would cause a bug
  - Bad coding practices in general
  - Obsolete/deprecated language features, or just straight-up mistakes

### Minor Changes

- [#30](https://github.com/melanieseltzer/toolkit/pull/30) [`7642d43`](https://github.com/melanieseltzer/toolkit/commit/7642d43f6d8d10d0b8cbf31d52fed04860f3b6d4) Thanks [@melanieseltzer](https://github.com/melanieseltzer)! - Update the import config:

  - Use `eslint-plugin-simple-import-sort` for autofixable sorting.
  - Remove `import/no-extraneous-dependencies` rule because it's not working quite right with glob patterns.

* [#28](https://github.com/melanieseltzer/toolkit/pull/28) [`9f3ceb6`](https://github.com/melanieseltzer/toolkit/commit/9f3ceb6d55cacc389011a0c6c961d654accfc8ab) Thanks [@melanieseltzer](https://github.com/melanieseltzer)! - Added the ESLint patch into the base config, so the consumer doesn't have to worry about it.

### Patch Changes

- [#34](https://github.com/melanieseltzer/toolkit/pull/34) [`d3ea3d4`](https://github.com/melanieseltzer/toolkit/commit/d3ea3d468a26301e222a00252243dacd741f2660) Thanks [@melanieseltzer](https://github.com/melanieseltzer)! - Turn on the `camelcase` rule.

- Updated dependencies [[`b90a8d3`](https://github.com/melanieseltzer/toolkit/commit/b90a8d354a2ad804dd326406c2127f769a271354)]:
  - @mels/eslint-patch@1.0.3

## 0.2.0

### Minor Changes

- [#13](https://github.com/melanieseltzer/toolkit/pull/13) [`67cc7a8`](https://github.com/melanieseltzer/toolkit/commit/67cc7a89ae0eb7c566ab3fa09b5b5cfc1c9a6f52) Thanks [@melanieseltzer](https://github.com/melanieseltzer)! - Create a browser config and other fixes to the base config

## 0.1.0

### Minor Changes

- [#6](https://github.com/melanieseltzer/toolkit/pull/6) [`8fc2357`](https://github.com/melanieseltzer/toolkit/commit/8fc23577214fc39fc81f28e8accf8a31a9632611) Thanks [@melanieseltzer](https://github.com/melanieseltzer)! - Initial release
