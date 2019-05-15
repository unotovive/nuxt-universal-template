// コンポーネント名とをファイル名が一致していなければ警告
module.exports = (context) => {
  const errors = [];
  let matches = context.script.match(/\nimport [A-Z]\w+ from '.+?\/[A-Z]\w+(?:\.\w+)*'/g);
  if (matches) {
    matches.forEach((importStr) => {
      matches = importStr.match(/\nimport ([A-Z]\w+) from '.+?\/([A-Z]\w+)(?:\.\w+)*'/);
      if (matches[1] !== matches[2]) {
        errors.push(`🚨 File name and component name do not match: '${matches[1]}' !== '${matches[2]}'\n||  from ${context.filePath}`);
      }
    });
  }
  return errors;
};
