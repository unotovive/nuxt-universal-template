// Vue
const fileNameRule = require('./file-name');
const buttonNameRule = require('./button-name');
const modalNameRule = require('./modal-name');
const notExistsComponentTestRule = require('./not-exists-component-test');
const notExistsStoryRule = require('./not-exists-story');
const notExistsPropsTemplateRule = require('./not-exists-props-template');
const topLevelTagsOrder = require('./top-level-tags-order');
const docsAnnotationCommentRule = require('./docs/annotation-comment');
const imgAltRule = require('./template/img-alt');
const templateAnnotationCommentRule = require('./template/annotation-comment');
const componentNameClassRule = require('./template/component-name-class');
const tagNamingRule = require('./template/tag-naming-rule');
const contentsRule = require('./template/contents');
const classNamingRuleBEM = require('./template/class-naming-rule-bem');
const componentNameRule = require('./script/component-name');
const scriptAnnotationCommentRule = require('./script/annotation-comment');
const noConsoleRule = require('./script/no-console');
const noStoreGettersInComponent = require('./script/no-store-getters-in-component');
const nuxtParamsRule = require('./script/nuxt-params');
const unusedComponentRule = require('./script/unused-component');
const unusedMapstateRule = require('./script/unused-mapstate');
const styleTagEmptyRule = require('./style/style-tag-empty');

module.exports = (context) => {
  let errors = [];
  let matches;

  // /utilsかtmpフォルダ内以外なら
  matches = context.shortFilePath.match(/(^utils\/|tmp\/)/);
  if (!matches) {
    // ルール
    errors = errors.concat(fileNameRule(context));
    errors = errors.concat(buttonNameRule(context));
    errors = errors.concat(modalNameRule(context));
    errors = errors.concat(topLevelTagsOrder(context));
    errors = errors.concat(notExistsComponentTestRule(context));
    errors = errors.concat(notExistsStoryRule(context));
    errors = errors.concat(notExistsPropsTemplateRule(context));

    // <docs>
    matches = context.raw.match(/^\s*<docs>([\s\S]*?)<\/docs>\n/);
    if (matches) {
      const docsContext = {
        ...context,
        docs: matches[1]
      };
      errors = errors.concat(docsAnnotationCommentRule(docsContext));
    }

    // <template>
    matches = context.raw.match(/\n<template[\s\S]*?>([\s\S]*?)<\/template>/);
    if (matches) {
      const templateContext = {
        ...context,
        template: matches[1]
      };

      // ルール
      errors = errors.concat(contentsRule(templateContext));
      errors = errors.concat(imgAltRule(templateContext));
      errors = errors.concat(tagNamingRule(templateContext));
      errors = errors.concat(classNamingRuleBEM(templateContext));
      errors = errors.concat(templateAnnotationCommentRule(templateContext));
      errors = errors.concat(componentNameClassRule(templateContext));
    }

    // <script>
    matches = context.raw.match(/\n<script[\s\S]*?>([\s\S]*?)<\/script>/g);
    if (matches) {
      matches.forEach((tagStr) => {
        matches = tagStr.match(/\n<script[\s\S]*?>([\s\S]*?)<\/script>/);
        const scriptContext = {
          ...context,
          script: matches[1]
        };

        // ルール
        errors = errors.concat(componentNameRule(scriptContext));
        errors = errors.concat(noConsoleRule(scriptContext));
        errors = errors.concat(noStoreGettersInComponent(scriptContext));
        errors = errors.concat(nuxtParamsRule(scriptContext));
        errors = errors.concat(unusedComponentRule(scriptContext));
        errors = errors.concat(unusedMapstateRule(scriptContext));
        errors = errors.concat(scriptAnnotationCommentRule(scriptContext));
      });
    }

    // <style>
    matches = context.raw.match(/\n<style[\s\S]*?>([\s\S]*?)<\/style>/g);
    if (matches) {
      matches.forEach((tagStr) => {
        matches = tagStr.match(/\n<style[\s\S]*?>([\s\S]*?)<\/style>/);
        const styleContext = {
          ...context,
          style: matches[1]
        };

        // ルール
        errors = errors.concat(styleTagEmptyRule(styleContext));
      });
    }
  }

  return errors;
};
