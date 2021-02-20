/*eslint-disable*/
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'prettier',
    'prettier/react',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react-hooks', '@typescript-eslint'],
  rules: {
    'no-console': 'error', // 콘솔로그 error 처리
    semi: ['error', 'always'], // ; 반드시 존재해야 함
    'jsx-a11y/anchor-is-valid': 'off', // a tag의 주소없음을 안잡기 위해
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/no-unresolved': 'off',
  },
};
