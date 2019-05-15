// コンポーネント内でdispatch以外のStoreアクセスをしたら警告
module.exports = (context) => {
  const errors = [];
  let matches = context.filePath.match(/\/src\/components\//);
  if (matches) {
    matches = context.script.match(/\.\.\.map(Fields|State)\([^\n]+|[^\w](commit|state|getters)[^\w]/g);
    if (matches) {
      errors.push(`🚨 Don't use mapState|mapFields|commit|state|getters in component files\n||  from ${context.filePath}`);
    }
  }
  return errors;
};
