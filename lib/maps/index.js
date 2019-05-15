const execSync = require('child_process').execSync;

execSync('node ./lib/maps/update-iconmap');
execSync('node ./lib/maps/update-pagemap');
console.log('マップを更新しました。');
