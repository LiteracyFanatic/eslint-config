import * as path from 'node:path';

import { ESLint } from 'eslint';
import { Config } from 'eslint/config';
import { describe, expect, it } from 'vitest';

import {
    all,
    base,
    cspell,
    importRules,
    packageJsonRules,
    playwrightRules,
    react,
    stylisticRules,
    typescript,
    vitestRules
} from '../src/index.js';

const fixtureDir = path.resolve(__dirname, './fixtures/project');

function createESLint(config: Config[]) {
    return new ESLint({
        cwd: fixtureDir,
        overrideConfigFile: true,
        overrideConfig: config
    });
}

function hasRule(results: ESLint.LintResult[], ruleId: string) {
    return results.some(r => r.messages.some(m => m.ruleId === ruleId));
}

describe('individual configs target expected files', () => {
    it('base -> JS files', async () => {
        const eslint = createESLint(base);
        const res = await eslint.lintFiles(['src/util.js']);
        expect(hasRule(res, 'no-unused-vars')).toBe(true);
    });

    it('typescript -> TS files', async () => {
        const eslint = createESLint(typescript);
        const res = await eslint.lintFiles(['src/index.ts']);
        expect(hasRule(res, '@typescript-eslint/no-unused-vars')).toBe(true);
    });

    it('react -> TSX files', async () => {
        const eslint = createESLint(react);
        const res = await eslint.lintFiles(['src/App.tsx']);
        expect(hasRule(res, 'react-hooks/rules-of-hooks')).toBe(true);
    });

    it('vitest -> test files', async () => {
        const eslint = createESLint(vitestRules);
        const res = await eslint.lintFiles(['tests/unit.spec.ts']);
        expect(hasRule(res, 'vitest/expect-expect')).toBe(true);
    });

    it('vitest does not target non-vitest tests', async () => {
        const eslint = createESLint(vitestRules);
        const res = await eslint.lintFiles(['tests/regular.test.ts']);
        expect(hasRule(res, 'vitest/expect-expect')).toBe(false);
    });

    it('playwright -> e2e files', async () => {
        const eslint = createESLint(playwrightRules);
        const res = await eslint.lintFiles(['tests/e2e/home.pw.ts']);
        expect(hasRule(res, 'playwright/no-focused-test')).toBe(true);
    });

    it('playwright does not target regular tests', async () => {
        const eslint = createESLint(playwrightRules);
        const res = await eslint.lintFiles(['tests/regular.test.ts']);
        expect(hasRule(res, 'playwright/no-focused-test')).toBe(false);
    });

    it('package-json -> package.json', async () => {
        const eslint = createESLint(packageJsonRules);
        const res = await eslint.lintFiles(['package.json']);
        expect(hasRule(res, 'package-json/require-description')).toBe(true);
    });

    it('cspell -> detects misspelling in comments', async () => {
        const eslint = createESLint(cspell);
        const res = await eslint.lintFiles(['src/util.js']);
        expect(hasRule(res, '@cspell/spellchecker')).toBe(true);
        // eslint-disable-next-line @cspell/spellchecker -- this assertion intentionally checks for the misspelling token reported by cspell in the fixture
        const mentionsWord = res.some(r => r.messages.some(m => m.ruleId === '@cspell/spellchecker' && m.message.includes('misspellled')));
        expect(mentionsWord).toBe(true);
    });

    it('stylistic -> general style in JS/TS', async () => {
        const eslint = createESLint(stylisticRules);
        const res = await eslint.lintFiles(['src/style.js']);
        expect(hasRule(res, 'curly')).toBe(true);
    });

    it('import -> ordering/related rules', async () => {
        const eslint = createESLint(importRules);
        const res = await eslint.lintFiles(['src/imports.ts']);
        expect(hasRule(res, 'import/order')).toBe(true);
    });
});

describe('all config composes and targets files correctly', () => {
    it('reports expected rules across file types', async () => {
        const eslint = createESLint(all);
        const results = await eslint.lintFiles([
            'src/util.js',
            'src/index.ts',
            'src/App.tsx',
            'tests/unit.spec.ts',
            'tests/e2e/home.pw.ts',
            'package.json',
            'src/comments.ts',
            'src/style.js',
            'src/imports.ts'
        ]);

        expect(hasRule(results, 'no-unused-vars')).toBe(true);
        expect(hasRule(results, '@typescript-eslint/no-unused-vars')).toBe(true);
        expect(hasRule(results, 'react-hooks/rules-of-hooks')).toBe(true);
        expect(hasRule(results, 'vitest/expect-expect')).toBe(true);
        expect(hasRule(results, 'playwright/no-focused-test')).toBe(true);
        expect(hasRule(results, 'package-json/require-description')).toBe(true);
        expect(hasRule(results, '@cspell/spellchecker')).toBe(true);
        expect(hasRule(results, 'curly')).toBe(true);
        expect(hasRule(results, 'import/order')).toBe(true);
    });
});
