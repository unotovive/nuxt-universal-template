// コンポーネントでテストがなければ警告
const fs = require('fs');
const path = require('path');

module.exports = (context) => {
  const errors = [];
  const matches = context.filePath.match(/\/src\/components\/.+\/index\.vue$/);
  if (matches) {
    // testがなければ警告
    const testFilePath = path.resolve(context.filePath, `../index.test.js`);
    if (!fs.existsSync(testFilePath)) {
      errors.push(`🚨 Test file doesn't exist "${testFilePath}"\n||  from ${context.filePath}`);
    }
  }
  return errors;
};
