import React, { useContext } from "react";
import DarkModeContext from "../context/isDarkContext";



const ToggleSwitch = () => {
  const { setIsDark } = useContext(DarkModeContext);
  //const darkStore = localStorage.getItem('isDark');

  /*const handleToggle = (e) => {
    setIsDark(e.target.checked);
    localStorage.setItem('isDark', )
  }*/

  return (
    <div className="theme-switch-wrapper">
      <label className="theme-switch" htmlFor="checkbox">
      <input 
        onChange={ (e) => setIsDark(e.target.checked) }
        type="checkbox" 
        id="checkbox" />
      <div className="slider round"></div>
      </label>
      <p>Dark Mode</p>
    </div>
  );
}

export default ToggleSwitch;  