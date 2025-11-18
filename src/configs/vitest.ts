import vitest from '@vitest/eslint-plugin';
import { defineConfig } from 'eslint/config';

import { PKG } from '../pkg.js';

export const vitestRules = defineConfig([
    {
        name: `${PKG}/vitest/recommended`,
        files: [
            '**/__tests__/**/*.[jt]s?(x)',
            '**/?(*.)+(spec|test).[jt]s?(x)'
        ],
        extends: [vitest.configs.recommended]
    }
]);
