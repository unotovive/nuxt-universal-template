// 変数名がフォーマットに沿っていなければ警告
module.exports = (context) => {
  const errors = [];
  const matches = context.raw.match(/\$[\w-]+/g);
  if (matches) {
    matches.forEach((code) => {
      const name = code.match(/\$([\w-]+)/)[1];
      if (!name.match(/^(default|color|size|width|num|zindex)(-[a-z]+)*/)) {
        errors.push(`🚨 Invalid variable name "${name}"\n|| Valid: (default|color|size|width|num|zindex)(-[a-z]+)*\n||  from ${context.filePath}`);
      }
    });
  }
  return errors;
};
