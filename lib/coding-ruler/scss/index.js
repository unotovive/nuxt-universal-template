// SCSS
const colorCodeRule = require('./color-code');
const fileNameRule = require('./file-name');
const contentsRule = require('./contents');
const fontSizeRemRule = require('./font-size-rem');
const variableNameRule = require('./variable-name');
const multiRootClassesRule = require('./multi-root-classes');
const annotationCommentRule = require('./annotation-comment');
const zIndexRule = require('./z-index');

module.exports = (context) => {
  let errors = [];
  errors = errors.concat(colorCodeRule(context));
  errors = errors.concat(fileNameRule(context));
  errors = errors.concat(contentsRule(context));
  errors = errors.concat(fontSizeRemRule(context));
  errors = errors.concat(variableNameRule(context));
  errors = errors.concat(multiRootClassesRule(context));
  errors = errors.concat(annotationCommentRule(context));
  errors = errors.concat(zIndexRule(context));
  return errors;
};
