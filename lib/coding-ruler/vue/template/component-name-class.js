// <template>の次のタグ（<transition>は除く）に「ファイル名のケバブケースclass」が付いていなければ警告
module.exports = (context) => {
  const errors = [];
  let matches = context.template.match(/^\s*(?:<transition[\s\S]*?>)?\s*(<[\s\S]*?>)\n/);
  const fileNameMatches = context.shortFilePath.match(/^components\//);
  if (matches && fileNameMatches) {
    const tag = matches[1];
    const className = context.dirName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    matches = tag.match(new RegExp(`${className}`));
    if (!matches) {
      errors.push(`🚨 Undefined component name class: '${tag.replace(/\s+/g, ' ')}'\n||  e.g., ${className}\n||  from ${context.filePath}`);
    }
  }
  return errors;
};
