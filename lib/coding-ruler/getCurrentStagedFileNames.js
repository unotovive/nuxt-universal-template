const execSync = require('child_process').execSync;

module.exports = () => {
  const stagedFileNames = [];
  let matches = execSync(`git status`)
    .toString()
    .match(/Changes to be committed[\s\S]+?\n\n([\s\S]+?)(\n\n|$)/);
  if (matches) {
    console.log('検査対象:');
    matches = matches[1].match(/\t.+?:\s+([^\n]+)/g);
    if (matches) {
      matches.forEach((line) => {
        matches = line.match(/\t.+?:\s+([^\n]+)/)[1];
        stagedFileNames.push(`/${matches}`);
        console.log(`  ${matches}`);
      });
    }
  }
  return stagedFileNames;
};
