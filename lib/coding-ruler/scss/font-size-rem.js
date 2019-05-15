// 文字の単位にpxを使用していたら警告
module.exports = (context) => {
  const errors = [];
  const matches = context.raw.match(/(font-size:[^\n]+px|text-indent:[^\n]+px|line-height:[^\n]+px|letter-spacing:[^\n]+px)/);
  if (matches) {
    errors.push(`🚨 Don't use px: '${matches[1]}'\n||  from ${context.filePath}`);
  }
  return errors;
};
