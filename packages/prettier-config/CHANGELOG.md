# @mels/prettier-config

## 1.0.0

### Major Changes

- [#27](https://github.com/melanieseltzer/toolkit/pull/27) [`b995a77`](https://github.com/melanieseltzer/toolkit/commit/b995a77e975d95e752ac9e974107714bd7c08b61) Thanks [@melanieseltzer](https://github.com/melanieseltzer)! - First stable release! 🥳

  ### Features

  - Bump peer dependency to `2.6.0` for `singleAttributePerLine` support.
  - The config now explicitly declares values for every rule, rather than implicitely relying on the defaults that Prettier sets.
    - Promotes visibility for each rule (see at a glance everything that is set).
    - No longer have to comb through Prettier docs to check what the defaults are for each rule.
    - The rules in our config won't change randomly if the Prettier defaults suddenly change under the hood.

  ### Rule change(s)

  - Switched to using trailing commas where valid in es5. [Info about this rule](https://prettier.io/docs/en/options.html#trailing-commas).

  ```diff
  - trailingComma: 'none'
  + trailingComma: 'es5'
  ```

### Patch Changes

- [#24](https://github.com/melanieseltzer/toolkit/pull/24) [`4b1a7fa`](https://github.com/melanieseltzer/toolkit/commit/4b1a7fae4bca28c64684a75234634d956be3bacb) Thanks [@melanieseltzer](https://github.com/melanieseltzer)! - Remove `engines.node` from package.json

## 0.1.0

### Minor Changes

- [#19](https://github.com/melanieseltzer/toolkit/pull/19) [`225ab9d`](https://github.com/melanieseltzer/toolkit/commit/225ab9d3bc7d52c685ea8108879342aafb2e3194) Thanks [@melanieseltzer](https://github.com/melanieseltzer)! - Initial release
