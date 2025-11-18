import { defineConfig } from 'eslint/config';
import playwright from 'eslint-plugin-playwright';

import { PKG } from '../pkg.js';

export const playwrightRules = defineConfig([
    {
        name: `${PKG}/playwright/recommended`,
        files: [
            'e2e/**',
            'tests/e2e/**',
            '**/*.pw.[jt]s?(x)',
            '**/*.playwright.[jt]s?(x)'
        ],
        extends: [playwright.configs['flat/recommended']]
    }
]);
