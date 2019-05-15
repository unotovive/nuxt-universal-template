// SVG
const fileNameRule = require('./file-name');
const iconNameRule = require('./icon-name');
const widthHeightRule = require('./width-height');

module.exports = (context) => {
  let errors = [];
  errors = errors.concat(fileNameRule(context));
  errors = errors.concat(iconNameRule(context));
  errors = errors.concat(widthHeightRule(context));
  return errors;
};
