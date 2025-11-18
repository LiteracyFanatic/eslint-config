import { defineConfig } from 'eslint/config';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

import { PKG } from '../pkg.js';

export const react = defineConfig([
    {
        name: `${PKG}/react-hooks/recommended`,
        files: ['**/*.{jsx,tsx}'],
        extends: [reactHooks.configs.flat.recommended]
    },
    {
        name: `${PKG}/react-refresh/vite`,
        files: ['**/*.{jsx,tsx}'],
        extends: [reactRefresh.configs.vite]
    }
]);
