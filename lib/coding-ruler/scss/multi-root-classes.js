// 1SCSSに複数の親クラスを使っていたら警告
module.exports = (context) => {
  const errors = [];
  let matches = context.filePath.match(/\/src\/pages\//);
  if (matches) {
    matches = context.raw.match(/(?:^|\n)(\.)/g);
    if (matches && matches.length > 1) {
      errors.push(`🚨 Limit the number of parent classes to one per file\n||  from ${context.filePath}`);
    }
  }
  return errors;
};
