<docs>
# デフォルトレイアウト
</docs>

<template>
  <div class="app" :class="deviceClass">
    <nuxt v-if="pc || sp" />
  </div>
</template>

<script>
import device from '~/mixins/device';

export default {
  mixins: [device]
};
</script>
