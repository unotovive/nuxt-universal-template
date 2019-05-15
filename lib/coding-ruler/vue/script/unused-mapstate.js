// 使っていないmapFields/mapStateを computed に入れたら警告
module.exports = (context) => {
  const errors = [];
  let matches = context.script.match(/\.\.\.map(Fields|State)\('.+?', \[[\s\S]+?\]\)/g);

  if (matches) {
    matches.forEach((mapStateStr) => {
      matches = mapStateStr
        .match(/\[([\s\S]+?)\]/)[1]
        .replace(/\s/g, '')
        .split(',')
        .map((str) => {
          return str
            .replace(/'/g, '')
            .split('.')
            .pop();
        });
      matches.forEach((propertyName) => {
        const propertyMatches = context.raw.match(new RegExp(`[^']${propertyName}[^']`));
        if (!propertyMatches) {
          errors.push(`🚨 Unused mapState/mapFields: '${propertyName}'\n||  from ${context.filePath}`);
        }
      });
    });
  }
  return errors;
};
