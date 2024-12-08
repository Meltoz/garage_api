export default [
  {
    ignores: ['build'],
  },
  {
    files: ['*.js', '*.ts'],
    rules: {
      // Permet les points-virgules à la fin des lignes
      semi: ['error', 'always'],

      // Désactive la règle enforceant camelCase
      camelcase: 'off',

      // Permet les clés avec des traits d'union (ex : "fuel-type")
      'quote-props': ['error', 'consistent-as-needed'],
    },
  },
  {
    files: ['*.ts'],
    languageOptions: {
      parser: '@typescript-eslint/parser',
    },
    rules: {
      // Désactive les erreurs strictes pour TypeScript
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
];
