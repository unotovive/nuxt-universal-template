// トップレベルタグが無効な並びなら警告
module.exports = (context) => {
  const errors = [];
  const matches = context.raw.match(/^\s*<docs>[\s\S]*?<\/docs>\s*<template[\s\S]*?>[\s\S]*?<\/template>(\s*<i18n[\s\S]*?>[\s\S]*?<\/i18n>)?(\s*<script[\s\S]*?>[\s\S]*?<\/script>)?(\s*<style[\s\S]*?>[\s\S]*?<\/style>)*\s*$/);
  if (!matches) {
    errors.push(`🚨 Invalid order of top-level tags\n||  e.g.: <docs> <template> <i18n> <script> <style>\n||  from ${context.filePath}`);
  }
  return errors;
};
