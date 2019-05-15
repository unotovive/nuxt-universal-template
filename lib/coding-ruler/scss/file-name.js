// ファイル名が正しい規則でなければ警告
module.exports = (context) => {
  const errors = [];
  const matches = context.fileName.match(/^_?([a-z0-9]+-?)+$/);
  if (!matches) {
    errors.push(`🚨 Invalid file name: '${context.fileName}'\n||  from ${context.filePath}`);
  }
  return errors;
};
