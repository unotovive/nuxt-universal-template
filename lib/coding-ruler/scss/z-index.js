// z-indexを_zindex.scss, _mixins.scss以外に書いたら警告
module.exports = (context) => {
  const errors = [];
  let matches = context.fileName.match(/^_zindex|_mixins$/);
  if (!matches) {
    matches = context.raw.match(/z-index:/g);
    if (matches) {
      errors.push(`🚨 Don't use z-index outside _zindex.scss\n||  from ${context.filePath}`);
    }
  }
  return errors;
};
