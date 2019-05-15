const fs = require('fs');
const path = require('path');
const emojis = require('./prefixEmojis');
const commitMessageFilePath = path.resolve(__dirname, '../../.git/COMMIT_EDITMSG');
const message = fs.readFileSync(commitMessageFilePath, 'utf-8').trim();
const matches = message.match(/^\w+/);

if (matches) {
  const messagePrefix = matches[0].toLowerCase();
  const emoji = emojis[messagePrefix];
  if (emoji) {
    fs.writeFileSync(commitMessageFilePath, `${emoji} ${message}`, 'utf-8');
    console.log('\nコミットに絵文字を追加しました。');
  }
}

process.exit();
