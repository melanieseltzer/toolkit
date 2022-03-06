module.exports = {
  rules: {
    // https://eslint.org/docs/rules/no-delete-var#disallow-deleting-variables-no-delete-var
    'no-delete-var': 'warn',

    // https://eslint.org/docs/rules/no-undef-init#disallow-initializing-to-undefined-no-undef-init
    'no-undef-init': 'warn',

    // https://eslint.org/docs/rules/no-unused-vars#disallow-unused-variables-no-unused-vars
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
