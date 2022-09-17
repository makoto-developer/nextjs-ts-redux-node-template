const [none, warn, error] = [0, 1, 2]
module.exports = {
  plugins: [
    'import',
    'import-newlines',
    'destructuring-newline',
    'react',
    'react-hooks',
    '@typescript-eslint'
  ],
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: '2021',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    es6: true,
    node: true
  },
  settings: {
    'import/extensions': [
      '.js',
      '.jsx',
      '.ts',
      '.tsx'
    ],
    react: {
      version: 'detect'
    }
  },
  rules: {
    'react/react-in-jsx-scope': none,
    'max-len': [
      warn,
      {
        code: 120,
        tabWidth: 2,
        comments: 120,
        ignorePattern: '',
        ignoreComments: true,
        ignoreTrailingComments: false,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      },
    ],
    'no-console': none,
    'no-debugger': none,
    'no-lonely-if': error,
    'no-multi-spaces': error,
    'no-multiple-empty-lines': [
      error,
      {
        max: warn,
        maxEOF: none,
      },
    ],
    'func-call-spacing': error,
    'jsx-quotes': [ error, 'prefer-single' ],
    'key-spacing': error,
    'keyword-spacing': error,
    'no-tabs': error,
    'no-unneeded-ternary': error,
    'no-var': error,
    'react/jsx-indent': [ error, 2 ],
    '@typescript-eslint/indent': [
      error,
      2,
      {
        SwitchCase: warn,
        MemberExpression: warn,
      },
    ],
    indent: none,
    semi: none,
    'react/prop-types': none,
    'no-unreachable-loop': warn,
    'no-cond-assign': warn,
    'no-const-assign': error,
    'no-constructor-return': error,
    'no-dupe-args': error,
    'no-dupe-class-members': error,
  }
}
