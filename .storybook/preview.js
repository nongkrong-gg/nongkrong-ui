import 'normalize.css/normalize.css';
import 'utilities/reset.css';
import 'utilities/index.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
};

export default preview;
