const execSync = require('child_process').execSync;

const branch = execSync('git rev-parse --abbrev-ref HEAD')
  .toString()
  .trim();

if (branch === 'release' || branch === 'master' || branch === 'develop') {
  console.error('release, master, develop ブランチにはPushできません。');
  throw new Error();
}
