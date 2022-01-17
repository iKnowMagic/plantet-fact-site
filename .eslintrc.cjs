module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:sonarjs/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended'
  ],
  plugins: ['svelte3', '@typescript-eslint', 'sonarjs', 'import', 'prettier'],
  ignorePatterns: ['*.cjs'],
  overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
  settings: {
    'svelte3/typescript': () => require('typescript')
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020
  },
  env: {
    browser: true,
    es2017: true,
    node: true
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {
        htmlWhitespaceSensitivity: 'ignore'
      }
    ]
    // 'sort-imports': 'off',
    // 'import/order': 'off',
    // 'simple-import-sort/imports': [
    //   'error',
    //   {
    //     groups: [
    //       ['svelte*'],

    //       // Side effect imports.
    //       ['^\\u0000'],

    //       ['^@/state', '^@/components' '^@/services'],

    //       ['^lodash'],

    //       // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
    //       ['^@?\\w'],

    //       // Absolute imports and other imports such as Vue-style `@/foo`.
    //       // Anything that does not start with a dot.
    //       ['^[^.]'],
    //       // Relative imports.
    //       // Anything that starts with a dot.
    //       ['^\\.']
    //     ]
    //   }
    // ]
  }
}
