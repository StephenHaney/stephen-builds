module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['react-hooks', 'jsx-a11y'],
  env: {
    jest: true,
    browser: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // react ignores
    'react/jsx-one-expression-per-line': 'off',
    'react/no-multi-comp': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': ['off'],
    'react/jsx-boolean-value': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/sort-comp': 'off',
    'react/no-unescaped-entities': 'off',
    'react/no-children-prop': 'off',
    'react/jsx-indent': 'off', // handled by prettier
    'react/require-default-props': 'off',

    // react warnings
    'react/no-unknown-property': 'warn',
    'react/no-unused-prop-types': 'warn',
    'react/prefer-stateless-function': 'warn',
    'react/prop-types': ['warn', { ignore: ['children'] }], // this will get handled by TS anyway
    'react/self-closing-comp': 'warn',
    'react/no-unused-state': 'warn',

    // react hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // ally ignore
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/label-has-for': 'off',

    // ally warnings
    'jsx-a11y/anchor-is-valid': 'warn',
    'jsx-a11y/tabindex-no-positive': 'warn',
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        labelComponents: ['CustomInputLabel'],
        labelAttributes: ['label'],
        controlComponents: ['CustomInput'],
        depth: 3,
      },
    ],

    // typescript ignore
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off', // just let it fade them
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/camelcase': 'off', // doesn't match radix
    '@typescript-eslint/explicit-member-accessibility': 'off', // default to public
    '@typescript-eslint/no-var-requires': 'off', // generally agree, but some need it
    '@typescript-eslint/prefer-interface': 'off', // until interfaces support union types, this rule prevents good behavior
    '@typescript-eslint/array-type': 'off',
    // typescript warnings:
    '@typescript-eslint/no-useless-constructor': 'warn',
    '@typescript-eslint/consistent-type-assertions': 'off', // to do: turn back on once CRA gets its act together
    'no-unused-expressions': 'off', // this must be off for TS
    '@typescript-eslint/no-unused-expressions': ['warn', { allowTaggedTemplates: true, allowShortCircuit: true }],

    // standard ignores
    'object-shorthand': 'off',
    'no-useless-return': 'off',
    'import/first': 'off', // sometimes TS puts constants before imports and CRA throws a fit
    'import/extensions': 'off',
    'require-jsdoc': 'off',
    'function-paren-newline': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'no-useless-escape': 'off',
    'spaced-comment': 'off',
    'no-continue': 'off',
    'import/prefer-default-export': 'off',
    'prefer-template': 'off',
    'object-curly-newline': 'off',
    'no-console': 'off',
    'arrow-parens': 'off',
    'operator-linebreak': 'off',
    'global-require': 'off',
    'prefer-destructuring': 'off',
    'no-use-before-define': 'off', // react hooks require helper functions to be higher than bail outs, often times
    'arrow-body-style': 'off', // who cares
    'no-unused-vars': 'off', // let TS cover this (it knows whether types are used)
    'space-before-function-paren': 'off',
    'lines-between-class-members': 'off', // line space yourself however you want bruhs and gals
    'default-case': 'off',
    'no-lonely-if': 'off',
    'no-param-reassign': 'off',
    'implicit-arrow-linebreak': 'off',
    'prefer-const': 'off',
    'prefer-rest-params': 'off', // be free my child (seriously make up your own mind)
    'consistent-return': 'off', // would like this, but the exceptions don't seem to work well
    'no-useless-constructor': 'off', // handled by TS who knows better
    semi: 'off', // covered by TS
    'class-methods-use-this': 'off', // doesn't bring us joy, especially since our classes are generally single use
    'padded-blocks': 'off', // dumb style lint
    radix: 'off', // ES5 parseInt treats all numbers as decimal literals
    'no-else-return': 'off',
    'import/named': 'off', // doesn't play nicely with TS
    'import/extensions': 'off',

    // standard warnings
    'no-new': 'warn',
    'no-loop-func': 'warn',
    'func-names': ['warn', 'as-needed'],
    'comma-spacing': 'warn',
    'comma-dangle': [
      'warn',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'no-unreachable': 'warn',
    'spaced-comment': 'warn',
    'no-trailing-spaces': ['warn', { skipBlankLines: true }],
    'no-multi-spaces': 'warn',
    'no-plusplus': ['warn', { allowForLoopAfterthoughts: true }],
    'no-restricted-syntax': ['warn', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    'no-empty': 'warn',
    'no-empty-function': ['warn', { allow: ['constructors'] }],
    'no-fallthrough': 'warn',

    // standard errors
    'guard-for-in': 'error', // has inherited properties from prototype, common source of bugs
    'no-shadow': 'error', // can't reuse still valid variable name from a parent scope, bugs
    curly: 'error', // prevent whitespace bugs
  },
  overrides: [
    {
      files: '**/__tests__/**/*.{ts,tsx}',
      rules: {
        '@typescript-eslint/no-unused-vars': 'off', // often many abondoned creations in tests
        'no-new': 'off', // short hand is useful in tests
      },
    },
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
};
