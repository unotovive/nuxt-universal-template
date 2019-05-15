import { configure } from '@storybook/vue';

const requireAll = (requireContext) => requireContext.keys().map(requireContext);

const loadStories = () => {
  requireAll(require.context('../src/components', true, /\.story\.js$/));
};

configure(loadStories, module);
