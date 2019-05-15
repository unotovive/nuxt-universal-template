const execSync = require('child_process').execSync;

// ブランチ
module.exports = () => {
  const errors = [];
  const branch = execSync('git rev-parse --abbrev-ref HEAD')
    .toString()
    .trim();
  if (!branch.match(/^(release|master|develop|(feature|fix)\/(common|nuxt|assets|components|layouts|middleware|pages|plugins|static|store|utils|test|config|lib|docs|ci)\/([a-z0-9]+-?)+)$/)) {
    errors.push(`🚨 Invalid branch name "${branch}"\nValid: (release|master|develop|(feature|fix)/(common|nuxt|assets|components|layouts|middleware|pages|plugins|static|store|utils|test|config|lib|docs|ci)/([a-z0-9]+-?)+)`);
  }
  return errors;
};
