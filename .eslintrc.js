module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    '@odd/eslint-config-javascript',
    '@odd/eslint-config-typescript',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {},
};
