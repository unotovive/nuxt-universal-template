// Image
const fileNameRule = require('./file-name');

module.exports = (context) => {
  let errors = [];
  errors = errors.concat(fileNameRule(context));
  return errors;
};
