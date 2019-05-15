// testがなければ警告
const fs = require('fs');
const path = require('path');

module.exports = (context) => {
  const errors = [];
  const matches = context.raw.match(/mutations\.\w+/g);
  if (matches) {
    matches.forEach((str) => {
      const mutationName = str.match(/mutations\.(\w+)/)[1];

      // testがなければ警告
      const testFilePath = path.resolve(context.filePath, `../${context.storeFileName}.test.js`);
      if (!fs.existsSync(testFilePath)) {
        errors.push(`🚨 Undefined file '${testFilePath}'`);
      } else {
        const testJs = fs.readFileSync(testFilePath, 'utf-8');
        if (!testJs.match(new RegExp(`store\\.commit\\('${mutationName}'`)) && mutationName !== 'updateField') {
          errors.push(`🚨 Undefined test '${context.storeFileName}/${mutationName}'\n||  from ${testFilePath}`);
        }
      }
    });
  }
  return errors;
};
