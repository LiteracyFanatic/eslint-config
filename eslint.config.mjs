import { defineConfig, globalIgnores } from 'eslint/config';

import { all } from './dist/index.js';

const config = defineConfig([
    globalIgnores(['dist/', 'tests/fixtures/**']),
    ...all,
    {
        files: ['package.json'],
        rules: {
            'package-json/restrict-dependency-ranges': [
                'error',
                [
                    {
                        forDependencyTypes: ['dependencies', 'devDependencies'],
                        rangeType: ['pin']
                    },
                    {
                        forDependencyTypes: ['peerDependencies'],
                        rangeType: ['caret']
                    }
                ]
            ]
        }
    },
    {
        files: ['tests/**/*.ts', 'tests/**/*.tsx', 'vitest.config.ts'],
        languageOptions: {
            parserOptions: {
                projectService: false,
                project: ['./tsconfig.eslint.json']
            }
        }
    }
]);

export default config;
