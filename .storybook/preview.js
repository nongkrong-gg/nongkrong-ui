import Modal from 'react-modal';
import 'normalize.css/normalize.css';
import 'utilities/reset.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@splidejs/react-splide/css';
import 'utilities/index.scss';

Modal.setAppElement('#storybook-root');

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
