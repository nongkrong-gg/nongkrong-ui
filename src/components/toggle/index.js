import { useState, useEffect, useContext } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { DarkModeContext } from 'contexts';

function Toggle() {
  const darkmode = useContext(DarkModeContext);
  const [isDarkMode, setDarkMode] = useState(darkmode.isActivated());

  useEffect(() => {
    darkmode.toggle();
  }, [isDarkMode]);

  return (
    <DarkModeSwitch
      checked={isDarkMode}
      onChange={(checked) => setDarkMode(checked)}
      size={24}
      sunColor="#F2C94C"
    />
  );
}

export default Toggle;
