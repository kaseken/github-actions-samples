const js = require('@eslint/js');
const tseslint = require('@typescript-eslint/eslint-plugin');
const tsparser = require('@typescript-eslint/parser');
const prettier = require('eslint-plugin-prettier');
const globals = require('globals');

module.exports = [
  {
    ignores: ['node_modules/', 'dist/', '*.tsbuildinfo', 'coverage/'],
  },
  js.configs.recommended,
  {
    files: ['**/*.{js,ts}'],
    plugins: {
      '@typescript-eslint': tseslint,
      prettier: prettier,
    },
    languageOptions: {
      parser: tsparser,
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.jest,
        ...globals.es2020,
      },
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      'prettier/prettier': 'error',
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
  {
    files: ['*.js', '*.config.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
      },
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
];
