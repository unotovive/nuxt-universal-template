// ページマップ作成

const fs = require('fs');
const path = require('path');
const walkSync = require('./walkSync');

// docsデータからページ名取得
const getPageNameByDocsData = (data) => {
  const matches = data.match(/^\s*#([^\n]+)/i);
  if (matches) {
    return matches[1].trim();
  } else {
    return 'ページ名不明';
  }
};

// フォルダ生成
if (!fs.existsSync(path.resolve(__dirname, '../../.tmp'))) {
  fs.mkdirSync(path.resolve(__dirname, '../../.tmp'));
}

// HTML生成
let tags = '';
let tag;
walkSync(path.resolve(__dirname, '../../src/pages'), (filePath) => {
  let matches = filePath.match(/\/src\/pages\/(.+)\.vue$/);
  if (matches) {
    const path = matches[1].replace(/index$/g, '');
    const pathWithId = path.replace(/\/_\w*?id/g, '/1');
    const fileData = fs.readFileSync(filePath, 'utf-8');
    matches = fileData.match(/^\s*<docs>([\s\S]*?)<\/docs>/);
    if (matches) {
      const name = getPageNameByDocsData(matches[1]);
      tag = `
        <div>
          <input type="checkbox" />
          <a href="//localhost:20170/${pathWithId}" target="_blank">${name}</a>
          <span>${path}</span>
        </div>
      `;
    } else {
      tag = `
        <div>
          <input type="checkbox" />
          <a href="//localhost:20170/${pathWithId}" target="_blank">ページ名不明</a>
          <span>${path}</span>
        </div>
      `;
    }
    tags += tag;
  }
});
const html = fs.readFileSync(path.resolve(__dirname, 'temps/pagemap-temp.html'), 'utf-8').replace(/%URLS%/g, tags);
fs.writeFileSync(path.resolve(__dirname, '../../.tmp/pagemap.html'), html, 'utf-8');
console.log('ページマップを更新しました。');
