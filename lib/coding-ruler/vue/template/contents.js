// ページコンポーネントのルートタグにcontentsクラスがなければ警告
module.exports = (context) => {
  const errors = [];
  let matches = context.shortFilePath.match(/^pages\//);
  if (matches) {
    matches = context.template.match(/^[\s\S]*?<.+class=".*?contents.*?"/);
    if (!matches) {
      errors.push(`🚨 Undefined 'contents' class for the top tag\n||  from ${context.filePath}`);
    }
  }
  return errors;
};
