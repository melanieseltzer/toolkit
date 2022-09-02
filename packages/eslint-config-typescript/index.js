module.exports = {
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        createDefaultProgram: true,
      },

      extends: [
        // Disables rules that are already checked by the TypeScript compiler.
        // Enables rules that promote using more modern constructs TypeScript allows for.
        // Turn on recommended TS rules (opinionated).
        // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/recommended.ts
        'plugin:@typescript-eslint/recommended',

        // Make `eslint-plugin-import` work with TypeScript
        require.resolve('./config/imports'),
      ],

      rules: {
        // -----------------------
        // Any overrides to `@typescript-eslint` recommended
        // -----------------------

        // Sometimes necessary when prototyping...
        // https://typescript-eslint.io/rules/no-explicit-any/
        '@typescript-eslint/no-explicit-any': 'off',

        // Allow some vars to be unused in specific situations
        // https://typescript-eslint.io/rules/no-unused-vars/
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            // `hello` is ignored because we only need `rest`
            // const { hello, ...rest } = someObj;
            ignoreRestSiblings: true,
            varsIgnorePattern: '^_',
            argsIgnorePattern: 'req|res|next|^err|^_',
          },
        ],

        // -----------------------
        // Anything else not covered in `@typescript-eslint` recommended
        // -----------------------

        // https://typescript-eslint.io/rules/naming-convention/
        camelcase: 'off',
        '@typescript-eslint/naming-convention': [
          'warn',
          {
            selector: 'variable',
            format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
            leadingUnderscore: 'allow',
          },
          {
            selector: 'parameter',
            format: ['camelCase'],
            leadingUnderscore: 'allow',
          },
          {
            selector: 'typeLike',
            format: ['PascalCase'],
          },
        ],

        // https://typescript-eslint.io/rules/no-unnecessary-condition/
        '@typescript-eslint/no-unnecessary-condition': 'warn',

        // https://typescript-eslint.io/rules/no-unused-expressions/
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': [
          'warn',
          {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: true,
          },
        ],

        // https://typescript-eslint.io/rules/no-use-before-define/
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [
          'warn',
          {
            functions: false,
            variables: false,
            typedefs: false,
          },
        ],

        // https://typescript-eslint.io/rules/no-useless-constructor/
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'warn',

        // https://typescript-eslint.io/rules/prefer-optional-chain/
        '@typescript-eslint/prefer-optional-chain': 'warn',
      },
    },
  ],
};
