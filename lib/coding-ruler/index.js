// ページ,コンポーネントCSSでグレースケールカラーコード以外を使ったら警告

const fs = require('fs');
const path = require('path');
const minimist = require('minimist');
const getCurrentStagedFileNames = require('./getCurrentStagedFileNames');
const walkSync = require('./walkSync');
const argv = minimist(process.argv.slice(2));
const gitRules = require('./git');
const fileRules = {
  vue: require('./vue'),
  js: require('./js'),
  scss: require('./scss'),
  svg: require('./svg'),
  jpg: require('./img'),
  png: require('./img'),
  gif: require('./img'),
  bmp: require('./img')
};

let stagedFileNames;
let errors = [];
errors = errors.concat(gitRules());

// ファイル走査
if (!argv.all) {
  stagedFileNames = getCurrentStagedFileNames();
  if (stagedFileNames.length) {
    console.log('検査済み:');
  }
}
walkSync(path.resolve(__dirname, '../../src'), (filePath) => {
  let matches;

  // 拡張子ごと
  Object.keys(fileRules).find((extension) => {
    if ((matches = filePath.match(new RegExp(`([\\w-]+)\\/([\\w-]+)\\.${extension}$`)))) {
      const rule = fileRules[extension];
      const dirName = matches[1];
      const fileName = matches[2];
      const shortFilePath = filePath.match(/\/src\/(.*?)$/)[1];
      if (argv.all || stagedFileNames.indexOf(`/src/${shortFilePath}`) >= 0) {
        if (!argv.all) {
          console.log(`  src/${shortFilePath}`);
        }
        errors = errors.concat(
          rule({
            raw: fs.readFileSync(filePath, 'utf-8'),
            fileName,
            dirName,
            filePath,
            shortFilePath
          })
        );
      }
      return true;
    }
  });
});

// まとめて警告
if (errors.length > 0) {
  console.error(`\n|| ${errors.join('\n|| \n|| ')}\n`);
  console.error(`ルールエラーが${errors.length}件あります。`);
  throw new Error();
} else {
  console.log('ルールチェックが完了しました。');
}
