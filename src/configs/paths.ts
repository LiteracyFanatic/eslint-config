import { fixupPluginRules } from '@eslint/compat';
import { defineConfig } from 'eslint/config';
import paths from 'eslint-plugin-paths';

import { PKG } from '../pkg.js';

export const pathsRules = defineConfig([
    {
        name: `${PKG}/paths/alias`,
        files: ['**/*.{ts,tsx,js,jsx}'],
        plugins: { paths: fixupPluginRules(paths) },
        rules: { 'paths/alias': 'error' }
    }
]);
