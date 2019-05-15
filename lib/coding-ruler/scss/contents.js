// contents.scss以外にcontentsクラスのスタイルを書いていたら警告
module.exports = (context) => {
  const errors = [];
  let matches = context.shortFilePath.match(/^pages\/contents\.scss$/);
  if (!matches) {
    matches = context.raw.match(/\.contents/);
    if (matches) {
      errors.push(`🚨 Don't write '.contents' style outside 'contents.scss'\n||  from ${context.filePath}`);
    }
  }
  return errors;
};
