// コンソールを残していたら警告
module.exports = (context) => {
  const errors = [];
  let matches = context.script.match(/[^\w](console\.[^\n]+)/);
  if (matches) {
    const code = matches[1];
    matches = code.match(/\/\/[ ]*check-console-disable-line$/);
    if (!matches) {
      errors.push(`🚨 Don't push "console": '${code}'\n||  from ${context.filePath}`);
    }
  }
  return errors;
};
