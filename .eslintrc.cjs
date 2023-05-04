/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-strongly-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript'
  ],
  rules: {'vue/max-attributes-per-line': ["error", {
    "singleline": {
      "max": 5
    },      
    "multiline": {
      "max": 1
    }
  }]},
  parserOptions: {
    ecmaVersion: 'latest'
  },  
}
