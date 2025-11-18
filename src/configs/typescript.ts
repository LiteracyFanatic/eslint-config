import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

import { PKG } from '../pkg.js';

export const typescript = defineConfig([
    {
        name: `${PKG}/ts/project-service`,
        languageOptions: {
            parserOptions: {
                projectService: true
            }
        }
    },
    {
        name: `${PKG}/ts/all-rules`,
        files: ['**/*.{ts,tsx}'],
        extends: [
            tseslint.configs.strictTypeChecked,
            tseslint.configs.stylisticTypeChecked
        ]
    },
    {
        name: `${PKG}/ts/overrides-rules`,
        files: ['**/*.{ts,tsx}'],
        rules: {
            '@typescript-eslint/prefer-nullish-coalescing': [
                'error',
                { ignorePrimitives: { boolean: true, string: true } }
            ],
            '@typescript-eslint/no-unused-vars': [
                'error',
                { ignoreRestSiblings: true, destructuredArrayIgnorePattern: '^_' }
            ],
            '@typescript-eslint/no-misused-promises': [
                'error',
                { checksVoidReturn: { attributes: false } }
            ],
            '@typescript-eslint/no-confusing-void-expression': [
                'error',
                { ignoreArrowShorthand: true }
            ],
            '@typescript-eslint/no-unnecessary-condition': [
                'error',
                { allowConstantLoopConditions: 'only-allowed-literals' }
            ],
            '@typescript-eslint/naming-convention': [
                'error',
                { selector: 'variable', format: ['camelCase', 'UPPER_CASE'], leadingUnderscore: 'allow', trailingUnderscore: 'allow' },
                { selector: 'variable', modifiers: ['destructured'], format: null },
                { selector: 'variable', types: ['function'], format: ['camelCase', 'PascalCase'] },
                { selector: 'typeLike', format: ['PascalCase'] },
                { selector: 'function', format: ['camelCase', 'PascalCase'] }
            ],
            '@typescript-eslint/no-unsafe-type-assertion': 'error'
        }
    }
]);
