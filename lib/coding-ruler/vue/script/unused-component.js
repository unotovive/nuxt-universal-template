// 使っていないコンポーネントをimportしたら警告
module.exports = (context) => {
  const errors = [];
  let matches = context.script.match(/\nimport [A-Z]\w+ from/g);
  const dataMatches = context.script.match(/\n[ ]{2}data\(\) \{([\s\S]*)\}/);
  const computedMatches = context.script.match(/\n[ ]{2}computed: \{([\s\S]*)\}/);

  if (matches) {
    const dataStr = dataMatches && dataMatches[1];
    const computedStr = computedMatches && computedMatches[1];
    matches.forEach((importStr) => {
      const componentName = importStr.match(/\nimport (\w+) from/)[1];
      const matchesData = dataStr && dataStr.match(new RegExp(`[^\\w]${componentName}[^\\w]`));
      const matchesComputed = computedStr && computedStr.match(new RegExp(`[^\\w]${componentName}[^\\w]`));
      matches = context.raw.match(new RegExp(`<${componentName}[ /\n>]`));
      if (!matches && !matchesData && !matchesComputed) {
        errors.push(`🚨 Unused component: '${componentName}'\n||  from ${context.filePath}`);
      }
    });
  }
  return errors;
};
