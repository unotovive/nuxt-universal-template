const path = require('path');
const fs = require('fs');
const babelConfig = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.babelrc'), 'utf-8'));

module.exports = {
  verbose: true,
  notify: true,
  testURL: 'http://localhost/',
  moduleNameMapper: {
    'vue-spinner/src/(.+)': '<rootDir>/node_modules/vue-spinner/dist/vue-spinner.js',
    '~/components/Common/Lottie': 'jest-transform-stub',
    '\\.(jpg|jpeg|png|gif|svg|ttf|woff|woff2)$': 'identity-obj-proxy',
    '^vue$': 'vue/dist/vue.common.js',
    '/src/(.+)$': '<rootDir>/src/$1',
    '~/(.+)$': '<rootDir>/src/$1'
  },
  transform: {
    '\\.(jpg|jpeg|png|gif|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.svg$': '<rootDir>/src/utils/test/empty-render-transform.js',
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  moduleFileExtensions: ['js', 'vue', 'svg', 'json'],
  globals: {
    'vue-jest': {
      babelConfig: babelConfig
    },
    resources: {
      scss: ['./src/assets/scss/common.scss']
    }
  },
  setupFiles: ['./node_modules/jest-canvas-mock/lib/index.js']
};
