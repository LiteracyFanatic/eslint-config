import { defineConfig } from 'eslint/config';
import packageJson from 'eslint-plugin-package-json';

import { PKG } from '../pkg.js';

export const packageJsonRules = defineConfig([
    { name: `${PKG}/package-json/recommended`, extends: [packageJson.configs.recommended] },
    { name: `${PKG}/package-json/stylistic`, extends: [packageJson.configs.stylistic] },
    {
        name: `${PKG}/package-json/overrides`,
        files: ['**/package.json'],
        rules: {
            'package-json/require-description': [
                'error',
                { ignorePrivate: true }
            ],
            'package-json/restrict-dependency-ranges': [
                'error',
                { rangeType: 'pin' }
            ],
            'package-json/order-properties': 'off',
            'package-json/sort-collections': 'off'
        }
    }
]);
