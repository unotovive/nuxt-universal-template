// ファイル名が正しい規則でなければ警告
module.exports = (context) => {
  const errors = [];
  let matches = context.shortFilePath.match(/^assets\/svg\/Icons\/.+?\.svg$/);
  if (matches) {
    matches = context.shortFilePath.match(/^assets\/svg\/Icons\/.+?Icon\.svg$/);
    if (!matches) {
      errors.push(`🚨 Invalid icon name: '${context.fileName}'\n||  from ${context.filePath}`);
    }
  }
  return errors;
};
