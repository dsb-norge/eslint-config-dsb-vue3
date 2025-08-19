# eslint-config-dsb-vue3

[![npm version](https://badge.fury.io/js/%40dsb-norge%2Feslint-config-dsb-vue3.svg)](https://badge.fury.io/js/%40dsb-norge%2Feslint-config-dsb-vue3)
[![GitHub license](https://img.shields.io/npm/l/@dsb-norge/eslint-config-dsb-vue3)](https://github.com/dsb-norge/eslint-config-dsb-vue3/blob/main/LICENSE.md)

## Installation

This package provides a Flat-config ESLint setup for Vue 3 JavaScript projects. It layers Vue's recommended rules, accessibility rules, and DSB stylistic choices.

Peer dependencies (install in your project):

- eslint >= 9
- eslint-plugin-vue >= 10
- eslint-plugin-vuejs-accessibility >= 2.4
- @stylistic/eslint-plugin >= 5

Install:

```sh
npm i -D @dsb-norge/eslint-config-dsb-vue3 eslint eslint-plugin-vue eslint-plugin-vuejs-accessibility @stylistic/eslint-plugin
```

## Usage (Flat config)

Create `eslint.config.mjs` in your project:

```js
import dsbVue3 from '@dsb-norge/eslint-config-dsb-vue3'

export default [
  ...dsbVue3,
  // Optional: add your project-specific overrides here
]
```

Run:

```sh
npx eslint .
```

## Notes

- Targets Vue 3 SFCs and browser globals by default.
- No TypeScript. For TS projects, use `@dsb-norge/eslint-config-dsb-vue3-ts`.
- You can override any rule in your local `eslint.config.mjs`.

## Assumptions

This ESLint configuration comes with some fundamental assumptions:

- ESLint 9 and Flat config
- Vue.js 3
- Browser and/or Node environment
- Vite (typical, but not required)
- JavaScript (no TypeScript)

Despite these, you can freely override, extend, or unset rules in your own flat config.

## Migrate from 2.x/3.x to 4.x (ESLint 9 + Flat config)

### 1) Package cleanup

Remove packages no longer needed by this baseline if they were previously installed in your project:

```sh
npm uninstall -D @rushstack/eslint-patch eslint-config-standard eslint-plugin-import eslint-plugin-n eslint-plugin-promise
```

Ensure you’re on ESLint 9 and compatible peers:

```sh
npm i -D eslint@latest eslint-plugin-vue@^10 eslint-plugin-vuejs-accessibility@^2.4 @stylistic/eslint-plugin@^5
```

### 2) package.json scripts

Update to the simple flat-config scripts:

```json
{
  "scripts": {
    "lint": "eslint",
    "lint:fix": "eslint --fix"
  }
}
```

### 3) Configuration migration

Move from `.eslintrc*` to `eslint.config.mjs` and spread this config.

From (old):

```js
// .eslintrc.js
module.exports = {
  root: true,
  extends: [
    '@dsb-norge/dsb-vue3'
  ]
}
```

To (new):

```js
// eslint.config.mjs
import dsbVue3 from '@dsb-norge/eslint-config-dsb-vue3'

export default [
  ...dsbVue3,
  {
    // your project-specific overrides here
    rules: {
      // e.g. 'no-console': 'off'
    }
  }
]
```

### 4) Optional: keep import/node/promise rules

If your project relies on additional rule sets, add them explicitly with their Flat presets (see each plugin’s docs):

```sh
npm i -D eslint-plugin-import eslint-plugin-n eslint-plugin-promise
```

```js
// eslint.config.mjs (excerpt)
import dsbVue3 from '@dsb-norge/eslint-config-dsb-vue3'
import pluginImport from 'eslint-plugin-import'
import pluginN from 'eslint-plugin-n'
import pluginPromise from 'eslint-plugin-promise'

export default [
  ...dsbVue3,
  // The exact flat preset keys may vary by version; consult plugin docs.
  // Examples:
  ...(pluginImport.flatConfigs?.recommended ?? []),
  ...(pluginN.configs?.['flat/recommended'] ?? []),
  ...(pluginPromise.configs?.['flat/recommended'] ?? []),
]
```

## Cypress (optional)

Add Cypress rules to Cypress files only. Note the spread and scoping with `files`.

```js
// eslint.config.mjs
import dsbVue3 from '@dsb-norge/eslint-config-dsb-vue3'
import pluginCypress from 'eslint-plugin-cypress/flat'

export default [
  ...dsbVue3,
  {
    name: 'Cypress',
    ...pluginCypress.configs.recommended,
    files: [
      '**/__tests__/*.{cy,spec}.{js,jsx}',
      'cypress/e2e/**/*.{cy,spec}.{js,jsx}',
      'cypress/support/**/*.{js,jsx}'
    ],
    rules: {
      // your Cypress-specific overrides here
    }
  }
]
```
