// カラーコードがグレースケールではなければ警告
module.exports = (context) => {
  const errors = [];
  let matches;
  if (!context.fileName.match(/^_vars$/)) {
    // カラーコード
    matches = context.raw.match(/#[a-fA-F0-9]{6}|#[a-fA-F0-9]{3}/g);
    if (matches) {
      matches.forEach((code) => {
        if (!(code.match(/#(([a-fA-F0-9])\2\2)/) || code.match(/#(([a-fA-F0-9][a-fA-F0-9])\2\2)/))) {
          errors.push(`🚨 Don't use color codes other than grayscale: '${code}'\n||  from ${context.filePath}`);
        }
      });
    }

    // rgb
    matches = context.raw.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/g);
    if (matches) {
      matches.forEach((code) => {
        matches = code.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        if (!(matches[1] === matches[2] && matches[2] === matches[3])) {
          errors.push(`🚨 Don't use color codes other than grayscale: '${code}'\n||  from ${context.filePath}`);
        }
      });
    }
  }
  return errors;
};
