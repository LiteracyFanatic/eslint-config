import stylistic from '@stylistic/eslint-plugin';
import { defineConfig } from 'eslint/config';

import { PKG } from '../pkg.js';

export const stylisticRules = defineConfig([
    {
        name: `${PKG}/stylistic`,
        files: ['**/*.{ts,tsx,js,jsx}'],
        extends: [stylistic.configs.customize({ indent: 4, semi: true, commaDangle: 'never' })]
    },
    {
        name: `${PKG}/stylistic/overrides`,
        files: ['**/*.{ts,tsx,js,jsx}'],
        rules: {
            curly: 'error'
        }
    }
]);
