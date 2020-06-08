module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    'prettier',
    'plugin:import/typescript',
    'plugin:import/warnings',
    'plugin:import/errors',
  ],
  ignorePatterns: ['dist/', '!.eslintrc.js'],
  overrides: [
    {
      files: ['**/*.d.ts'],
      rules: { '@typescript-eslint/no-unused-vars': 'off' },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    project: ['./tsconfig.json', './tsconfig.nonbuild.json'],
    sourceType: 'module',
  },
  plugins: ['sort-keys-fix'],
  rules: {
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/camelcase': [0, { properties: 'never' }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'arrow-body-style': ['warn', 'as-needed'],
    'import/first': 'warn',
    'import/order': [
      'warn',
      {
        alphabetize: {
          order: 'asc',
        },
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
      },
    ],
    'no-restricted-globals': [
      'warn',
      ...[
        'closed',
        'error',
        'event',
        'length',
        'location',
        'name',
        'parent',
        'top',
      ].map((global) => ({
        message: `Did you mean to declare a local \`${global}\`? If not, use \`window.${global}\` instead.`,
        name: global,
      })),
    ],
    'prefer-object-spread': 'warn',
    'prettier/prettier': 'warn',
    'sort-keys-fix/sort-keys-fix': 'warn',
  },
};
