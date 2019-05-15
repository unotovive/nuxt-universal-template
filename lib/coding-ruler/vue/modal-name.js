// ファイル名が正しい規則でなければ警告
module.exports = (context) => {
  const errors = [];
  let matches = context.shortFilePath.match(/^components\/Modals\/.+?\/index\.vue$/);
  if (matches) {
    matches = context.shortFilePath.match(/^components\/Modals\/.*?Modal(Group)?\/index\.vue$/);
    if (!matches) {
      errors.push(`🚨 Invalid button name: '${context.fileName}'\n||  from ${context.filePath}`);
    }
  }
  return errors;
};
