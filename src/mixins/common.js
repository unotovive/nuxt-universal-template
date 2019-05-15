import commonConfig from '~/assets/js/common-config';

export default {
  validate() {
    return !Object.keys(this.$route.params).find((paramName) => (commonConfig.urlParamRegexes[paramName] ? !commonConfig.urlParamRegexes[paramName].test(this.$route.params[paramName]) : false));
  }
};
