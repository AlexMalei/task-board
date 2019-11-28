module.exports = {
  root: true,
  extends: ['standard', 'standard-react', 'prettier', 'prettier/react'],
  plugins: ['prettier', 'react-hooks'],
  parser: 'babel-eslint',
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    semi: 'error',
    'prefer-destructuring': 'error',
    'max-len': [
      'warn',
      {
        code: 100,
        ignoreUrls: true,
        ignorePattern: 'import',
      },
    ],
    'no-unused-vars': 'warn',
    'operator-linebreak': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-closing-tag-location': 2,
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-max-props-per-line': [
      2,
      {
        maximum: 2,
        when: 'always',
      },
    ],
    'react/jsx-indent-props': [2, 2] /**/,
    'react/jsx-first-prop-new-line': 'multiline-multiprop' /**/,
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'jsx-quotes': ['error', 'prefer-double'],
    'comma-dangle': [2, 'always-multiline'],
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
    'react/prop-types': [1],
  },
  overrides: [
    {
      files: ['src/index.js'],
      rules: {
        'react/jsx-filename-extension': 'off',
        'prettier/prettier': [
          'error',
          {
            singleQuote: true,
          },
        ],
      },
    },
  ],
}
