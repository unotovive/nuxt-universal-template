import Vue from 'vue';
import { getField } from 'vuex-map-fields';

export const state = () => ({
  device: {
    pc: null,
    sp: null
  }
});

export const getters = {
  getField
};

export const actions = {
  /**
   * 端末情報をセット
   * @param {Object} state - required
   * @param {Object} payload - required
   * @param {Boolean} payload.isPc - required
   */
  setDevices({ commit }, payload) {
    commit('setDevices', payload);
  }
};

export const mutations = {
  /**
   * 端末情報をセット
   * @param {Object} state - required
   * @param {Object} payload - required
   * @param {Boolean} payload.isPc - required
   */
  setDevices(state, payload) {
    Vue.set(state.device, 'pc', payload.isPc);
    Vue.set(state.device, 'sp', !payload.isPc);
  }
};
