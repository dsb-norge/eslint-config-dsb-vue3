module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:@stylistic/recommended-extends',
    'plugin:vue/vue3-recommended',
    'standard',
    'plugin:vuejs-accessibility/recommended',
    'plugin:@stylistic/disable-legacy'
  ],
  plugins: [
    '@stylistic',
    'vuejs-accessibility'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? ['error', { allow: ['error'] }] : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
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
    'vue/v-on-function-call': 'error',
    'vue/no-empty-component-block': 'error',
    'vue/multi-word-component-names': 'off'
  },
  parserOptions: {
    requireConfigFile: false,
    sourceType: 'module',
    ecmaVersion: 2021
  }
}
