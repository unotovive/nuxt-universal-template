import { mount } from '@vue/test-utils';
import { getMountTemplate } from '~/utils/test/component-test-utils';
import propsTemplate from './props-template';
import TargetComponent from './index';

describe('コンポーネント', () => {
  test('props', (done) => {
    const wrapper = mount(TargetComponent, getMountTemplate(propsTemplate));
    expect(wrapper.attributes('style')).toContain(`background-image: url(${propsTemplate.src})`);
    expect(wrapper.text()).toBe(propsTemplate.alt);
    expect(wrapper.attributes('style')).toContain(`background-size: ${propsTemplate.type}`);
    expect(wrapper.attributes('style')).toContain(`background-repeat: ${propsTemplate.repeat}`);
    expect(wrapper.attributes('style')).toContain(`background-position: ${propsTemplate.position}`);
    expect(wrapper.attributes('style')).toContain(`width: ${propsTemplate.width}px`);
    expect(wrapper.attributes('style')).toContain(`height: ${propsTemplate.height}px`);
    done();
  });
});
