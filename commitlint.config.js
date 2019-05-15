const prefixEmojis = require('./lib/git/prefixEmojis');
const typeEnum = Object.keys(prefixEmojis).concat(Object.keys(prefixEmojis).map((key) => `${prefixEmojis[key]} ${key}`));

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', typeEnum],
    'subject-case': [0, 'always']
  }
};
