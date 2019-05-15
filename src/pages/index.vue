<docs>
# ホーム
</docs>

<template>
  <div class="contents home">
    <div v-if="exampleStatus === 1">
      <FitImg src="https://via.placeholder.com/100x100" :width="100" :height="100" />
      <a class="home__icon" href="https://twitter.com">
        <TwitterIcon />
      </a>
    </div>
    <LoadingBlock v-else />
  </div>
</template>

<script>
import timeout from 'await-timeout';
import FitImg from '~/components/Common/FitImg';
import TwitterIcon from '~/assets/svg/Icons/TwitterIcon';
import LoadingBlock from '~/components/Common/LoadingBlock';

export default {
  components: {
    FitImg,
    TwitterIcon,
    LoadingBlock
  },
  mixins: ['common'],
  head() {
    return {
      title: 'Home'
    };
  },
  data() {
    return {
      exampleStatus: 0
    };
  },
  async mounted() {
    // サンプル
    await timeout.set(3000);
    this.exampleStatus = 1;
  }
};
</script>

<style lang="scss" scoped src="~/pages/contents.scss"></style>

<style lang="scss" scoped src="./index.scss"></style>
