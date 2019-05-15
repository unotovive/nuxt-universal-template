// JS, Store
const noConsoleRule = require('./no-console');
const fileNameRule = require('./file-name');
const promiseRule = require('./promise');
const annotationCommentRule = require('./annotation-comment');
const mutationsRule = require('./store/mutations');

module.exports = (context) => {
  let errors = [];
  let matches;

  // Js
  errors = errors.concat(noConsoleRule(context));
  errors = errors.concat(fileNameRule(context));
  errors = errors.concat(annotationCommentRule(context));
  errors = errors.concat(promiseRule(context));

  // Store
  if ((matches = context.filePath.match(/\/src\/store\/modules\/([^.]+)\.js$/))) {
    const storeContext = {
      ...context,
      storeFileName: matches[1]
    };
    errors = errors.concat(mutationsRule(storeContext));
  }

  return errors;
};
