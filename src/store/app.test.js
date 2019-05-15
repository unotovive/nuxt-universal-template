import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import cloneDeep from 'lodash.clonedeep';
import * as targetStore from './app';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('ストア', () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store(cloneDeep(targetStore));
  });

  it('インスタンス作成', (done) => {
    expect(store.state).toHaveProperty('device');
    expect(store.state.device).toHaveProperty('pc');
    expect(store.state.device).toHaveProperty('sp');

    expect(store.state.device.pc).toBe(null);
    expect(store.state.device.sp).toBe(null);
    done();
  });

  it('端末情報をセット', (done) => {
    store.commit('setDevices', {
      isPc: true
    });
    expect(store.state.device.pc).toBe(true);
    expect(store.state.device.sp).toBe(false);

    store.commit('setDevices', {
      isPc: false
    });
    expect(store.state.device.pc).toBe(false);
    expect(store.state.device.sp).toBe(true);
    done();
  });
});
