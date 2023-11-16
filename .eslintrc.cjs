module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: ['airbnb', 'plugin:prettier/recommended', 'plugin:react/jsx-runtime', 'plugin:jsx-a11y/recommended', 'prettier', 'eslint:recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['jsx-a11y', 'prettier', 'react', 'react-refresh', 'eslint-plugin-prettier'],
  rules: {
    'jsx-a11y/href-no-hash': ['off'],
    'max-len': [
      'warn',
      {
        code: 260,
        tabWidth: 2,
        comments: 260,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
};
