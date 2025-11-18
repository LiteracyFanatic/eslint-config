import { defineConfig } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';

import { PKG } from '../pkg.js';

export const importRules = defineConfig([
    {
        name: `${PKG}/import/recommended`,
        files: ['**/*.{js,mjs,cjs,ts,tsx,jsx}'],
        extends: [importPlugin.flatConfigs.recommended],
        // Ensure modern syntax support rather than 2018
        languageOptions: {
            ...importPlugin.flatConfigs.recommended.languageOptions,
            ecmaVersion: 'latest'
        }
    },
    {
        name: `${PKG}/import/typescript`,
        files: ['**/*.{ts,tsx}'],
        extends: [importPlugin.flatConfigs.typescript]
    },
    {
        name: `${PKG}/import/react`,
        files: ['**/*.{jsx,tsx}'],
        extends: [importPlugin.flatConfigs.react],
        // Ensure JSX parsing only where needed
        languageOptions: {
            ...importPlugin.flatConfigs.react.languageOptions,
            parserOptions: {
                ...(importPlugin.flatConfigs.react.languageOptions?.parserOptions ?? {}),
                ecmaFeatures: { jsx: true }
            }
        }
    },
    {
        name: `${PKG}/import/overrides`,
        files: ['**/*.{ts,tsx,js,jsx,mjs}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module'
        },
        settings: {
            'import/resolver': { typescript: true, node: true }
        },
        rules: {
            'import/first': 'error',
            'import/newline-after-import': [
                'error',
                { count: 1, exactCount: true, considerComments: true }
            ],
            'import/no-deprecated': 'error',
            'import/order': [
                'error',
                { 'alphabetize': { order: 'asc' }, 'named': true, 'newlines-between': 'always' }
            ],
            'import/no-unresolved': 'off',
            'import/no-named-as-default-member': 'off'
        }
    }
]);
