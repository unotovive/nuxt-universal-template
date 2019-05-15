// Promiseを使ったら警告
module.exports = (context) => {
  const errors = [];
  let matches = context.filePath.match(/\/src\/utils\//);
  if (!matches) {
    matches = context.raw.match(/[^\w]Promise[^\w]/);
    if (matches) {
      errors.push(`🚨 Don't use Promise. Use async/await\n||  from ${context.filePath}`);
    }
  }
  return errors;
};
