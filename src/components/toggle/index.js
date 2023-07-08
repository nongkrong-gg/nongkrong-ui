import { useState, useContext } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { DarkModeContext } from 'contexts';

function Toggle() {
  const darkmode = useContext(DarkModeContext);
  const [isDarkMode, setDarkMode] = useState(darkmode.isActivated());

  const toggleDarkMode = () => {
    darkmode.toggle();
    setDarkMode((prevValue) => !prevValue);
  };

  return (
    <DarkModeSwitch
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={24}
      sunColor="#F2C94C"
    />
  );
}

export default Toggle;
