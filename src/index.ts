import { defineConfig } from 'eslint/config';

import { base } from './configs/base.js';
import { cspell } from './configs/cspell.js';
import { importRules } from './configs/import.js';
import { packageJsonRules } from './configs/package-json.js';
import { pathsRules } from './configs/paths.js';
import { playwrightRules } from './configs/playwright.js';
import { react } from './configs/react.js';
import { stylisticRules } from './configs/stylistic.js';
import { typescript } from './configs/typescript.js';
import { vitestRules } from './configs/vitest.js';
import { PKG } from './pkg.js';

export * from './configs/base.js';
export * from './configs/cspell.js';
export * from './configs/import.js';
export * from './configs/package-json.js';
export * from './configs/paths.js';
export * from './configs/playwright.js';
export * from './configs/react.js';
export * from './configs/stylistic.js';
export * from './configs/typescript.js';
export * from './configs/vitest.js';

export const all = defineConfig([
    ...base,
    ...typescript,
    ...react,
    ...vitestRules,
    ...playwrightRules,
    ...packageJsonRules,
    ...cspell,
    ...stylisticRules,
    ...importRules,
    ...pathsRules,
    {
        name: `${PKG}/final/language-options`,
        files: ['**/*.{js,mjs,cjs,ts,tsx,jsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module'
        }
    }
]);

export default all;
