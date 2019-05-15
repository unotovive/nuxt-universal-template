const fs = require('fs');
const path = require('path');

const walkSync = (currentDirPaths, callback) => {
  let paths = [];
  if (Array.isArray(currentDirPaths)) {
    paths = currentDirPaths;
  } else if (typeof currentDirPaths === 'string') {
    paths = [currentDirPaths];
  } else {
    throw new Error('currentDirPath is not String|Array');
  }

  // ループ
  paths.forEach((currentDirPath) => {
    fs.readdirSync(currentDirPath).forEach((name) => {
      const filePath = path.join(currentDirPath, name);
      const stat = fs.statSync(filePath);
      if (stat.isFile()) {
        callback(filePath, stat);
      } else if (stat.isDirectory()) {
        walkSync(filePath, callback);
      }
    });
  });
};

module.exports = walkSync;
