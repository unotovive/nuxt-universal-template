// width="" height="" を使用していたら警告
module.exports = (context) => {
  const errors = [];
  const matches = context.raw.match(/(<svg[^>]*(?:width=|height=)[^>]*>)/);
  const subMatches = context.fileName.match(/^safari-pinned-tab/);
  if (matches && !subMatches) {
    errors.push(`🚨 Don't use width|height: '${matches[1]}'\n||  from ${context.filePath}`);
  }
  return errors;
};
