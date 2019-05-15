import { createStories, createKnobsData, createPropsStr } from '~/../.storybook/utils';
import propsTemplate from './props-template';
import TargetComponent from './index';

const stories = createStories(TargetComponent);

// PC
stories.add('PC', () => {
  const data = createKnobsData(propsTemplate);
  return {
    components: { TargetComponent },
    data() {
      return data;
    },
    template: `
      <div class="storybook-component is-pc-device">
        <TargetComponent ${createPropsStr(propsTemplate)}/>
      </div>
    `
  };
});

// SP
stories.add('SP', () => {
  const data = createKnobsData(propsTemplate);
  return {
    components: { TargetComponent },
    data() {
      return data;
    },
    template: `
      <div class="storybook-component is-sp-device">
        <TargetComponent ${createPropsStr(propsTemplate)}/>
      </div>
    `
  };
});
