// ファイル名が正しい規則でなければ警告
module.exports = (context) => {
  const errors = [];
  const matches = context.shortFilePath.match(/^(tmp|layouts|pages)/);
  const subMatches = context.fileName.match(/^([A-Z][a-z0-9]*)+|index$/);
  if (!matches && !subMatches) {
    errors.push(`🚨 Invalid file name: '${context.fileName}'\n||  from ${context.filePath}`);
  }
  return errors;
};
