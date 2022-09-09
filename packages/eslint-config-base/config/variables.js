module.exports = {
  rules: {
    // https://eslint.org/docs/latest/rules/no-undef-init
    'no-undef-init': 'warn',

    // https://eslint.org/docs/latest/rules/no-unused-vars
    'no-unused-vars': [
      'warn',
      {
        // `hello` is ignored because we only need `rest`
        // const { hello, ...rest } = someObj;
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_',
        argsIgnorePattern: 'req|res|next|^err|^_',
      },
    ],
  },
};
