import React from "react";

const ToggleSwitch = ({
  toggleTheme,
  isChecked 
}) => {

  return (
    <div className="theme-switch-wrapper">
      <label className="theme-switch" for="checkbox">
      <input 
        onChange={toggleTheme}
        isChecked={isChecked}
        type="checkbox" 
        id="checkbox" />
      <div className="slider round"></div>
      </label>
      <p>Dark Mode</p>
    </div>
  );
}

export default ToggleSwitch;  