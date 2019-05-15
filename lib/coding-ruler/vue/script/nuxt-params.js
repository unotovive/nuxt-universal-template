// ページコンポーネントで mixins:['common'] パラメータが無ければ警告
module.exports = (context) => {
  const errors = [];
  let matches = context.shortFilePath.match(/^pages\//);
  if (matches) {
    matches = context.script.match(/\n[ ]{2}mixins:\s+\['common'/);
    if (!matches) {
      errors.push(`🚨 Undefined nuxt properties "mixins: ['common']"\n||  from ${context.filePath}`);
    }
  }
  return errors;
};
