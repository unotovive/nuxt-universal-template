import { mapFields } from 'vuex-map-fields';

export default {
  computed: {
    deviceClass() {
      return {
        'is-pc-device': this.pc,
        'is-sp-device': this.sp
      };
    },
    ...mapFields('app', ['device.pc', 'device.sp'])
  }
};
