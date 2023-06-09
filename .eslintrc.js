module.exports = {
   env: {
      browser: true,
      node: true,
      es2021: true,
   },
   extends: ['eslint:recommended', 'plugin:react/recommended'],
   overrides: [],
   parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
   },
   plugins: ['react'],
   rules: {
      indent: ['error', 3],
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      'linebreak-style': ['error', 'unix'],
      'react/react-in-jsx-scope': 0,
      'no-unused-vars': 1,
      'react/prop-types': 0,
   },
}
