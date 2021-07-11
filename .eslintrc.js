module.exports = {
  // Configuration for JavaScript files
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': [
      1,
      {
        trailingComma: 'es5',
        singleQuote: true,
      },
    ],
  },

  overrides: [
    // Configuration for TypeScript files
    {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: [
        '@typescript-eslint',
        'unused-imports',
        // 'babel',
        // 'chai-friendly',
        // 'cypress',
        // 'react',
        // 'react-hooks',
        // 'promise',
        // 'jest',
        // 'import',
        // 'prettier',
      ],
      extends: [
        'airbnb-typescript',
        'next',
        'next/core-web-vitals',
        'plugin:prettier/recommended',
        // 'plugin:cypress/recommended',
        // 'plugin:jest/recommended',
        // 'plugin:mdx/recommended',
        // 'plugin:promise/recommended',
        // 'plugin:@typescript-eslint/recommended',
        // 'plugin:import/typescript',
      ],

      parserOptions: {
        project: './tsconfig.json',
      },
      env: {
        browser: true,
        // 'cypress/globals': true,
        es6: true,
        jest: true,
        node: true,
        webextensions: false,
      },
      settings: {
        'import/resolver': {
          // alias: {
          //   map: [['@common', './packages/common/src']],
          //   extensions: ['.js', '.jsx', '.ts', '.tsx'],
          // },
          node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            moduleDirectory: ['node_modules', 'src'],
            typescript: {
              alwaysTryTypes: true,
            },
          },
          typescript: {},
        },
        react: { version: 'detect' },
      },
      rules: {
        'class-methods-use-this': 'off',
        'consistent-return': 'off',

        // https://github.com/benmosher/eslint-plugin-import/issues/1558
        'import/extensions': [
          'error',
          'never',
          {
            ts: 'never',
            tsx: 'never',
            js: 'never',
            jsx: 'never',
          },
        ],
        'import/no-cycle': 'off',
        'import/no-dynamic-require': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-named-as-default-member': 'off',
        'import/no-unresolved': 'error',
        'import/prefer-default-export': 'off', // Allow single Named-export
        // 'simple-import-sort/imports': [
        //   'error',
        //   {
        //     groups: [
        //       [
        //         // import "./setup": Side effect imports.
        //         '^\\u0000',
        //         // Node.js builtins.`
        //         '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
        //         // import react from "react": Packages.
        //         '^react',
        //         // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
        //         '^@?\\w',
        //         // import a from "/a": Absolute imports and other imports.
        //         // Anything that does not start with a dot.
        //         '^(assets|components|config|hooks|plugins|store|styled|themes|utils|contexts)(/.*|$)',
        //         // import a from "./a": Relative imports.
        //         // Parent imports. Put `..` last.
        //         '^\\.\\.(?!/?$)',
        //         '^\\.\\./?$',
        //         // Other relative imports. Put same-folder imports and `.` last.
        //         '^\\./(?=.*/)(?!/?$)',
        //         '^\\.(?!/?$)',
        //         '^\\./?$',
        //       ],
        //     ],
        //   },
        // ],

        'global-require': 'off',

        // Test
        'jest/expect-expect': 'off',
        'jest/no-export': 'off',
        'jest/no-identical-title': 'off',
        'jest/no-standalone-expect': 'off',

        'jsx-a11y/anchor-is-valid': 'off', // Next.js use his own internal link system
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'jsx-a11y/label-has-for': 'off',
        'jsx-a11y/no-autofocus': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',

        'linebreak-style': 'off',
        'lines-between-class-members': [
          'error',
          'always',
          { exceptAfterSingleLine: true },
        ],

        'mdx/no-unescaped-entities': 'off',
        'mdx/no-unused-expressions': 'off',

        'no-alert': 'off',
        'no-continue': 'off',
        'no-multi-assign': 'off',
        'no-await-in-loop': 'off',
        'no-empty': 'off',
        'no-console': [
          'warn',
          {
            allow: ['info', 'warn', 'error'],
          },
        ],
        'no-nested-ternary': 'off', // short
        'no-new': 'off', // exceptions
        'no-param-reassign': 'off',
        'no-plusplus': 'off', // short
        'no-prototype-builtins': 'off', // short
        'no-restricted-syntax': [
          'error',
          {
            selector: 'ForInStatement',
            message:
              'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
          },
          {
            selector: 'LabeledStatement',
            message:
              'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
          },
          {
            selector: 'WithStatement',
            message:
              '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
          },
        ], // for..of OK (break)
        'no-return-assign': 'off', // short
        'no-underscore-dangle': 'off',
        'no-unused-expressions': 'off',

        'prefer-promise-reject-errors': 'off',

        'promise/catch-or-return': 'off',
        'promise/always-return': 'off',
        'promise/no-callback-in-promise': 'off',

        'react/button-has-type': [
          'error',
          {
            reset: true,
          },
        ],
        'react/jsx-filename-extension': [
          'error',
          { extensions: ['.js', '.jsx', '.ts', '.tsx', 'mdx'] },
        ],
        'react/jsx-props-no-spreading': 'off',
        'react/no-array-index-key': 'off',
        'react/no-unused-prop-types': 'off',
        'react/prop-types': 'off',
        'react/require-default-props': 'off', // Allow non-defined react props as undefined

        'react-hooks/exhaustive-deps': [
          'warn',
          { enableDangerousAutofixThisMayCauseInfiniteLoops: true },
        ],
        'react-hooks/rules-of-hooks': 'error',

        // TS rules
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-shadow': 'off', // disabled as it's on when destructuring
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',

        // Disable JS rules
        'babel/no-unused-expressions': 'off',
        'no-shadow': 'off',
        'no-undef': 'off',
        'no-unexpected-multiline': 'off',
        'no-unused-vars': 'off',
        'no-useless-constructor': 'off',

        // new
        'no-use-before-define': 'off',

        'max-classes-per-file': 'off',
        'default-case': 'off',
        'no-bitwise': 'off',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        camelcase: 'off',
        'no-constant-condition': 'off',
        'no-throw-literal': 'off',

        // Next.js
        '@typescript-eslint/no-unused-vars': 'off',
        '@next/next/no-img-element': 'off', // We currently not using next/image because it isn't supported with SSG mode
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        'import/order': [
          'error',
          {
            groups: ['builtin', 'external', 'internal'],
            pathGroups: [
              {
                pattern: 'react',
                group: 'external',
                position: 'before',
              },
            ],
            pathGroupsExcludedImportTypes: ['react'],
            'newlines-between': 'never',
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
          },
        ],
      },
    },
    //   {
    //     files: 'server/**/*.js',
    //     env: { node: true },
    //     rules: {
    //       'simple-import-sort/imports': 'off',
    //     },
    //   },
    //   {
    //     files: ['**/*.test.*', '**/*.spec.*'],
    //     env: {
    //       jest: true,
    //     },
    //   },
    //   {
    //     files: '**/__tests__/*',
    //     rules: {
    //       'no-restricted-imports': [
    //         'error',
    //         {
    //           paths: [],
    //         },
    //       ],
    //     },
    //   },
    //   {
    //     files: '**/*.stories.tsx',
    //     rules: {
    //       // just for showing the code in addon-docs
    //       'react-hooks/rules-of-hooks': 'off',
    //     },
    //   },
    //   {
    //     files: '**/*.mdx',
    //     rules: {
    //       'prettier/prettier': 'off',
    //       'simple-import-sort/imports': 'off',
    //     },
    //   },
    // ],
  ],
};
