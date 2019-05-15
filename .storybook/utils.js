import { storiesOf } from '@storybook/vue';
import { withKnobs, text, boolean, number, object } from '@storybook/addon-knobs';
import { withInfo } from 'storybook-addon-vue-info';
import Centered from '@storybook/addon-centered/vue';

import '../src/assets/scss/root.scss';

// Stories作成
export const createStories = (component) =>
  storiesOf(component.__file.match(/([^/]+)\/[^/]+$/)[1], module)
    .addDecorator(withInfo)
    .addDecorator(Centered)
    .addDecorator(withKnobs);

// Knobs入りdata作成
export const createKnobsData = (props) => {
  const res = {};
  Object.keys(props).map((propName) => {
    const prop = props[propName];
    switch (typeof prop) {
      case 'string':
        res[propName] = text(propName, prop);
        break;
      case 'boolean':
        res[propName] = boolean(propName, prop);
        break;
      case 'number':
        res[propName] = number(propName, prop);
        break;
      case 'object':
        res[propName] = object(propName, prop);
        break;
      default:
        res[propName] = prop;
    }
  });
  return res;
};

// props文字列作成
export const createPropsStr = (props) =>
  Object.keys(props)
    .map((propName) => `:${propName}="${propName}"`)
    .join(' ');
