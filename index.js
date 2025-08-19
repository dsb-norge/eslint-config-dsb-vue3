import pluginVue from 'eslint-plugin-vue'
import pluginVueA11y from 'eslint-plugin-vuejs-accessibility'
import stylistic from '@stylistic/eslint-plugin'
import globals from 'globals'

// Flat config for Vue 3 JavaScript (no TS). Mirrors our TS base where possible.
export default [
  // Vue recommended + A11y
  ...pluginVue.configs['flat/recommended'],
  ...pluginVueA11y.configs['flat/recommended'],
  // Stylistic opinions
  stylistic.configs['recommended'],
  stylistic.configs['disable-legacy'],
  // Project tweaks and overrides
  {
    name: 'dsb-vue3:ignores',
    ignores: ['**/dist/**', '**/dev-dist/**']
  },
  {
    name: 'dsb-vue3:rules',
    languageOptions: {
      globals: {
        ...globals.browser
      }
    },
    rules: {
      // Env-sensitive console/debugger
      'no-console': process.env.NODE_ENV === 'production' ? ['error', { allow: ['error'] }] : 'warn',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',

      // Stylistic
      '@stylistic/array-bracket-spacing': ['error', 'never'],
      '@stylistic/arrow-parens': ['error', 'as-needed'],
      '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      '@stylistic/comma-dangle': ['error', 'never'],
      '@stylistic/indent': ['error', 2, { SwitchCase: 1 }],
      '@stylistic/member-delimiter-style': ['error', {
        multiline: {
          delimiter: 'none',
          requireLast: false
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false
        },
        multilineDetection: 'brackets'
      }],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/padded-blocks': ['error', 'never'],
      '@stylistic/quote-props': ['error', 'consistent-as-needed'],
      '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/space-before-function-paren': ['error', 'always'],

      // Vue
      'vue/array-bracket-spacing': 'error',
      'vue/arrow-spacing': 'error',
      'vue/block-spacing': 'error',
      'vue/brace-style': 'error',
      'vue/camelcase': 'error',
      'vue/comma-dangle': 'error',
      'vue/component-name-in-template-casing': 'error',
      'vue/eqeqeq': 'error',
      'vue/key-spacing': 'error',
      'vue/object-curly-spacing': ['error', 'always'],
      'vue/space-infix-ops': 'error',
      'vue/space-unary-ops': 'error',
      'vue/no-empty-component-block': 'error',
      'vue/multi-word-component-names': 'off'
    }
  }
]
