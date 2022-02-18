# eslint-config-dsb-vue

[![npm version](https://badge.fury.io/js/%40dsb-norge%2Feslint-config-dsb-vue.svg)](https://badge.fury.io/js/%40dsb-norge%2Feslint-config-dsb-vue)
[![GitHub license](https://img.shields.io/npm/l/@dsb-norge/eslint-config-dsb-vue)](https://github.com/dsb-norge/eslint-config-dsb-vue/blob/master/LICENSE.md)

## Installation

The default export contains all default [ESLint rules](https://github.com/standard/eslint-config-standard) for [JavaScript Standard Style](http://standardjs.com/) , including
the [recommended ruleset for Vue](https://eslint.vuejs.org/), and the ones listed in the [rules section](https://github.com/dsb-norge/eslint-config-dsb-vue/blob/master/index.js) .

Note: It requires some peerDependencies as well.

Install the package with:

```sh
npx install-peerdeps --dev @dsb-norge/eslint-config-dsb-vue
```
 
Then install the correct versions of each peerDependency package, which are
listed by the command:

```sh
npm info "@dsb-norge/eslint-config-dsb-vue@latest" peerDependencies
```

## Usage

Now add the config to either your `package.json`:

```json
{
  "eslintConfig": {
    "extends": "@dsb-norge/dsb-vue"
  }
}
```

or to your `.eslintrc`:

```json
{
  "extends": "@dsb-norge/dsb-vue"
}
```

or to your `.eslintrc.js`:

```js
module.exports = {
  extends: '@dsb-norge/dsb-vue'
}
```

## Assumptions

This ESLint configuration comes with some fundamental assumptions:

- vue.js and/or node environment
- browser and/or node environment
- parser: babel (used @babel/eslint-parser)

Despite some assumptions, [you can easily overwrite, extend and unset
rules and any other setting in your custom eslint config](https://eslint.org/docs/user-guide/configuring).
