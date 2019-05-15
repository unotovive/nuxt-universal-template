// コンソールを残していたら警告
module.exports = (context) => {
  const errors = [];
  const matches = context.raw.match(/[^\w](console\.[^\n]+)/);
  const subMatches = context.shortFilePath.match(/^utils\//);
  if (matches && !subMatches) {
    errors.push(`🚨 Don't push "console": '${matches[1]}'\n||  from ${context.filePath}`);
  }
  return errors;
};
