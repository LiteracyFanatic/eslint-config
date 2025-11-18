import js from '@eslint/js';
import { defineConfig } from 'eslint/config';

import { PKG } from '../pkg.js';

export const base = defineConfig([
    {
        name: `${PKG}/base/js-recommended`,
        extends: [js.configs.recommended],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module'
        }
    }
]);
