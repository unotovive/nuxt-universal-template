// コンポーネントでprops-templateがなければ警告
const fs = require('fs');
const path = require('path');

module.exports = (context) => {
  const errors = [];
  const matches = context.filePath.match(/\/src\/components\/.+\/index\.vue$/);
  if (matches) {
    // props-templateがなければ警告
    const testFilePath = path.resolve(context.filePath, `../props-template.js`);
    if (!fs.existsSync(testFilePath)) {
      errors.push(`🚨 Props Template file doesn't exist "${testFilePath}"\n||  from ${context.filePath}`);
    }
  }
  return errors;
};
