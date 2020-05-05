module.exports = {
  root: true,
  extends: ['eslint-config-alloy/react', 'eslint-config-alloy/typescript', 'prettier'],
  env: {
    browser: true,
    es6: true,
  },
  globals: {},
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', 'react-hooks', 'prettier', '@typescript-eslint'],
  rules: {
    indent: ['error', 2],
    'react/jsx-indent': 'off',
    'react/jsx-indent-props': 'off',
    '@typescript-eslint/indent': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'prettier/prettier': 'error',
  },
};
