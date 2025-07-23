/** @type {import('eslint').Linter.Config} */
module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
    },
    env: {
        browser: true,
        es2021: true,
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'jsx-a11y',
        'react-hooks',
        'tailwindcss',
    ],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:tailwindcss/recommended',
        'prettier',
    ],
    rules: {
        // Optional tweaks
        'react/react-in-jsx-scope': 'off', // not needed with Vite/modern React
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
