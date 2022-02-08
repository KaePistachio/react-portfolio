import React, { useContext, useEffect } from "react";
import DarkModeContext from "../context/isDarkContext";

const ToggleSwitch = () => {
  const { isDark, setIsDark } = useContext(DarkModeContext);

  useEffect(() => {
    // Get the value in localStorage.
    const localStorageIsDark = localStorage.getItem('isDark')
    // If it exists (has been created by a previous visit)
    if ( localStorageIsDark !== null ) {
      // Parse as JS (localStorage converts everything to strings).
      // Set the GLOBAL STATE.
      setIsDark(JSON.parse(localStorageIsDark))
    }
  });

  const handleToggle = (e) => {
    setIsDark(e.target.checked)
    localStorage.setItem('isDark', e.target.checked);
  }
  
  return (
    <div className="theme-switch-wrapper">
      <label className="theme-switch" htmlFor="checkbox">
      <input
        checked={ isDark }
        onChange={ handleToggle }
        type="checkbox" 
        id="checkbox" />
      <div className="slider round"></div>
      </label>
      <p>Dark Mode</p>
    </div>
  );
}

export default ToggleSwitch;  