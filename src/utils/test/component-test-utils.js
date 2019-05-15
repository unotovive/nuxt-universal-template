import path from 'path';
import { TransitionStub } from '@vue/test-utils';
import changeCase from 'change-case';

export const getMountTemplate = (propsData, extendOptions = {}) => ({
  stubs: Object.assign(
    {
      NuxtLink: {
        template: `<a :href="to"><slot /></a>`,
        props: {
          to: {
            type: String,
            default: ''
          }
        }
      },
      transition: TransitionStub
    },
    extendOptions.stubs
  ),
  mocks: {
    $t: (text) => text
  },
  directives: {
    inview: {}
  },
  propsData,
  attachToDocument: true,
  localVue: extendOptions.localVue,
  store: extendOptions.store,
  methods: extendOptions.methods
});

export const getTopClassName = (dirname) => {
  return `.${changeCase.kebabCase(path.basename(dirname))}`;
};
