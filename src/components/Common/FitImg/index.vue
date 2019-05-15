<docs>
# Object-Fit Image Polyfill
</docs>

<template>
  <div :style="style" class="fit-img">
    <span v-if="alt" class="fit-img__alt">{{ alt }}</span>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: null
    },
    alt: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: null
    },
    repeat: {
      type: String,
      default: null
    },
    position: {
      type: String,
      default: null
    },
    width: {
      type: Number,
      default: null
    },
    height: {
      type: Number,
      default: null
    }
  },
  computed: {
    style() {
      const style = {};
      if (this.src) {
        style['background-image'] = `url(${this.src})`;
      }
      if (this.type) {
        style['background-size'] = this.type;
      }
      if (this.repeat) {
        style['background-repeat'] = this.repeat;
      }
      if (this.position) {
        style['background-position'] = this.position;
      }
      if (this.width) {
        style['width'] = `${this.width}px`;
      }
      if (this.height) {
        style['height'] = `${this.height}px`;
      }
      return style;
    }
  }
};
</script>

<style lang="scss" scoped src="./style.scss"></style>
