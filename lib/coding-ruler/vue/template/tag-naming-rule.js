// 無効なタグ命名規則を使用したら警告
module.exports = (context) => {
  const errors = [];
  let matches = context.template.match(/<[^ /\n]+[ /\n]/g);

  if (matches) {
    matches.forEach((tagTop) => {
      const tagName = tagTop.match(/^<([^ /\n]+)[ /\n]/)[1];
      matches = tagName.match(/([A-Z][a-z0-9])+|[a-z]+|!--/);
      if (!matches) {
        errors.push(`🚨 Invalid tag name: '${tagName}'\n||  from ${context.filePath}`);
      }
    });
  }
  return errors;
};
