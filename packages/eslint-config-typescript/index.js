module.exports = {
  extends: [
    // Make `eslint-plugin-import` work with TypeScript
    require.resolve('./config/imports'),
  ],

  overrides: [
    {
      files: ['**/*.ts?(x)'],

      parserOptions: {
        createDefaultProgram: true,
      },

      extends: [
        // This recommended config does A LOT of the heavy lifting for us:
        // - enables the `@typescript-eslint` plugin and `@typescript-eslint/parser` parser.
        // - disables rules that are already checked by the TypeScript compiler.
        // - enables rules that promote using more modern constructs TypeScript allows for.
        // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/recommended.ts
        'plugin:@typescript-eslint/recommended',

        // Rules that specifically require type information
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
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
          // const camelCase = true;  const UPPER_CASE = true;
          // const camelCase = '';    const UPPER_CASE = '';
          // const camelCase = 1;     const UPPER_CASE = 1;
          // const camelCase = [];    const UPPER_CASE = [];
          {
            selector: 'variable',
            types: ['boolean', 'string', 'number', 'array'],
            format: ['camelCase', 'UPPER_CASE'],
          },

          // const camelCase = () => ...;
          // const PascalCase = () => ...;
          {
            selector: 'variable',
            types: ['function'],
            format: ['camelCase', 'PascalCase'],
          },

          // function camelCase() {}
          // function PascalCase() {}
          {
            selector: 'function',
            format: ['camelCase', 'PascalCase'],
          },

          // const blah = (_unused, camelCase) => ...;
          {
            selector: 'parameter',
            format: [
              'camelCase',

              // Allows for React destructuring convention for jsx uppercase first letter:
              /*
                const Component = ({ icon: Icon }) => {
                  return (
                    <Icon />
                  )
                }
              */
              'PascalCase',
            ],
            leadingUnderscore: 'allow',
          },

          // class PascalCase
          // interface PascalCase
          // type PascalCase
          // function something<PascalCase>
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
