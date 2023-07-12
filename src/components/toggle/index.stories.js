import Darkmode from 'darkmode-js';
import { DarkModeContext } from 'contexts';
import Toggle from './index';

const darkmode = new Darkmode({ autoMatchOsTheme: false });

export default {
  component: Toggle,
  title: 'Toggle',
};

export const Normal = {
  render: () => (
    <DarkModeContext.Provider value={darkmode}>
      <Toggle />
    </DarkModeContext.Provider>
  ),
};
