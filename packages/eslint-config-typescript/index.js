const allExtensions = ['.js', '.jsx', '.mjs', '.json', '.ts', '.tsx'];

module.exports = {
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'tsconfig.json',
        createDefaultProgram: true,
        tsconfigRootDir: './',
      },
      extends: [
        // Disables rules that are already checked by the TypeScript compiler.
        // Enables rules that promote using more modern constructs TypeScript allows for.
        // Turn on recommended TS rules (opinionated)
        // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/recommended.ts
        'plugin:@typescript-eslint/recommended',

        // Make eslint-plugin-import work with TypeScript
        // https://github.com/import-js/eslint-plugin-import/blob/main/config/typescript.js
        'plugin:import/typescript',
      ],
      settings: {
        // File extensions that will be parsed as modules and inspected for exports
        'import/extensions': allExtensions,
        'import/resolver': {
          node: {
            extensions: allExtensions,
          },
          // Turns on the typescript resolver
          // https://github.com/alexgorbatchev/eslint-import-resolver-typescript#readme
          typescript: {
            project: './tsconfig.json',
            alwaysTryTypes: true,
          },
        },
      },
      rules: {
        // Enforces extensions for all import statements
        // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md
        'import/extensions': [
          'warn',
          'ignorePackages',
          // ... except for the following:
          {
            js: 'never',
            mjs: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
          },
        ],

        camelcase: 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
        'no-useless-constructor': 'off',

        '@typescript-eslint/explicit-module-boundary-types': 'off',
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
        '@typescript-eslint/no-explicit-any': 'off', // sometimes necessary...
        '@typescript-eslint/no-unnecessary-condition': 'warn',
        '@typescript-eslint/no-unused-expressions': [
          'warn',
          {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: true,
          },
        ],
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
        '@typescript-eslint/no-use-before-define': [
          'warn',
          {
            functions: false,
            variables: false,
            typedefs: false,
          },
        ],
        '@typescript-eslint/no-useless-constructor': 'warn',
        '@typescript-eslint/prefer-optional-chain': 'warn',
      },
    },
  ],
};
