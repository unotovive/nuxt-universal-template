// Git
const branchNameRule = require('./branch-name');

module.exports = (context) => {
  let errors = [];
  errors = errors.concat(branchNameRule(context));
  return errors;
};
