import * as cspellConfigs from '@cspell/eslint-plugin/configs';
import { defineConfig } from 'eslint/config';

import { PKG } from '../pkg.js';

export const cspell = defineConfig([
    {
        name: `${PKG}/cspell/recommended`,
        extends: [cspellConfigs.recommended]
    }
]);
