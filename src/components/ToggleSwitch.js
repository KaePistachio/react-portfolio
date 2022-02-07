import React, { useContext } from "react";
import DarkModeContext from "../context/isDarkContext";



const ToggleSwitch = () => {
  const { setIsDark } = useContext(DarkModeContext);
  const darkStore = localStorage.getItem('isDark');

  const handleToggle = (e) => {
    setIsDark(e.target.checked);
    console.log(darkStore);
    if (!darkStore) {
      localStorage.setItem('isDark', e.target.checked);
    } else {
      localStorage.setItem('isDark', e.target.checked);
    }
  }

  return (
    <div className="theme-switch-wrapper">
      <label className="theme-switch" htmlFor="checkbox">
      <input 
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