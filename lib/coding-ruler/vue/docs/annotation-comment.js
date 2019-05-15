// 無効なアノテーションコメント命名規則を使用したら警告
module.exports = (context) => {
  const errors = [];
  let matches = context.docs.match(/(TODO|FIXME|OPTIMIZE|HACK|REVIEW)(.*?)\n/g);

  if (matches) {
    matches.forEach((comment) => {
      matches = comment.match(/(TODO|FIXME|OPTIMIZE|HACK|REVIEW):\s*([\w-]+)\s+(.+?)\n/);
      if (!matches) {
        errors.push(`🚨 Invalid annotation comment: '${comment.replace(/\s+/g, ' ')}'\n||  from ${context.filePath}`);
      }
    });
  }
  return errors;
};
