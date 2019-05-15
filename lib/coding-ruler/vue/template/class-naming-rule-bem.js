// BEM(Two Dashes style)に反するclass命名規則で警告
module.exports = (context) => {
  const errors = [];
  let matches = context.template.match(/[^:-]class="[^"]+?"/g);

  if (matches) {
    matches.forEach((classStr) => {
      const classNamesStr = classStr.match(/[^:-]class="([^"]+?)"/)[1];
      const classNames = classNamesStr.split(' ');
      classNames.forEach((className) => {
        matches = className.match(/^(([a-z]+(-[a-z]+)*(__[a-z]+(-[a-z]+)*)*(--[a-z0-9]+(-[a-z0-9]+)*)*)|ga_.+)$/);
        if (!matches) {
          errors.push(`🚨 Invalid class name (BEM): '${className}'\n||  from ${context.filePath}`);
        }
      });
    });
  }
  return errors;
};
