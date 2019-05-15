// アイコンマップ作成

const fs = require('fs');
const path = require('path');
const walkSync = require('./walkSync');

// フォルダ生成
if (!fs.existsSync(path.resolve(__dirname, '../../.tmp'))) {
  fs.mkdirSync(path.resolve(__dirname, '../../.tmp'));
}

// HTML生成
let tags = '';
walkSync(path.resolve(__dirname, '../../src/assets/svg'), (filePath) => {
  let matches = filePath.match(/\/src\/assets\/svg\/([^.]+)\.svg$/);
  if (matches) {
    const name = matches[1];
    const svg = fs.readFileSync(filePath, 'utf-8');
    const viewBox = (matches = svg.match(/viewBox="([^"]+)"/)) ? matches[1] : null;
    const tag = `
      <h2><a href="#">${name}</a></h2>
      <div class="icon">
        ${svg}
      </div>
      ${viewBox ? `<p>viewBox参考: ${viewBox}</p>` : ''}
    `;
    tags += tag;
  }
});
const html = fs.readFileSync(path.resolve(__dirname, 'temps/iconmap-temp.html'), 'utf-8').replace(/%ICONS%/g, tags);
fs.writeFileSync(path.resolve(__dirname, '../../.tmp/iconmap.html'), html, 'utf-8');
console.log('アイコンマップを更新しました。');
