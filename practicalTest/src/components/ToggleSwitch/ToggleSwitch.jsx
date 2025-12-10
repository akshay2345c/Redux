import React from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = ({ checked = false, onChange, label }) => {
  return (
    <div className="toggle-switch-wrapper">
      {label && <span className="toggle-label">{label}</span>}
      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="toggle-input"
        />
        <span className="toggle-slider"></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;

