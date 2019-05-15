// 無効なアノテーションコメント命名規則を使用したら警告
module.exports = (context) => {
  const errors = [];
  let matches = context.template.match(/<!--\s*(TODO|FIXME|OPTIMIZE|HACK|REVIEW)(.*?)(-->)/g);

  if (matches) {
    matches.forEach((comment) => {
      matches = comment.match(/<!--\s*(TODO|FIXME|OPTIMIZE|HACK|REVIEW):\s*([\w-]+)\s+(.+?)(-->)/);
      if (!matches) {
        errors.push(`🚨 Invalid annotation comment: '${comment.replace(/\s+/g, ' ')}'\n||  from ${context.filePath}`);
      }
    });
  }
  return errors;
};
