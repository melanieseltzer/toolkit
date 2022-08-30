---
'@mels/prettier-config': major
---

First stable release! 🥳

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
