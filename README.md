# @literacyfanatic/eslint-config

Reusable, flat ESLint configuration presets for TypeScript/JavaScript, React, Vitest, Playwright, package.json, import ordering, paths, stylistic rules, and spelling checks.

## Installation

Install this package and its peer dependencies into your project:

```bash
npm install --save-dev @literacyfanatic/eslint-config \
  eslint @eslint/js @eslint/compat \
  @stylistic/eslint-plugin \
  eslint-plugin-import eslint-import-resolver-typescript eslint-plugin-paths \
  eslint-plugin-package-json \
  eslint-plugin-playwright \
  eslint-plugin-react-hooks eslint-plugin-react-refresh \
  @cspell/eslint-plugin \
  @vitest/eslint-plugin \
  typescript typescript-eslint
```

## Usage

Create an `eslint.config.mjs` in your project root and compose the presets you need.

### All-in-one config

```js
// eslint.config.mjs
import { defineConfig } from 'eslint/config';
import { all } from '@literacyfanatic/eslint-config';

export default defineConfig(all);
```

### Individual presets

You can import each preset separately and compose them yourself:

```js
import { defineConfig } from 'eslint/config';
import {
    base,
    typescript,
    react,
    vitestRules,
    playwrightRules,
    packageJsonRules,
    cspell,
    stylisticRules,
    importRules,
    pathsRules
} from '@literacyfanatic/eslint-config';

export default defineConfig([
    ...base,
    ...typescript,
    ...react,
    ...vitestRules,
    ...playwrightRules,
    ...packageJsonRules,
    ...cspell,
    ...stylisticRules,
    ...importRules,
    ...pathsRules
]);
```

## Development

Inside this repo:

```bash
# Install dependencies
npm install

# Build TypeScript to dist/
npm run build

# Run tests
npm test

# Lint this repo using the config itself
npm run lint
```

`prepublishOnly` runs the build, so `npm publish` will always publish a fresh `dist/`.
