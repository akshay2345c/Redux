import React from 'react';
import './Settings.css';

const Settings = () => {
  return (
    <div className="settings-page">
      <div className="settings-header">
        <h1 className="settings-title">Settings</h1>
        <p className="settings-subtitle">Manage your dashboard preferences and configuration</p>
      </div>
      <div className="settings-content">
        <div className="settings-section">
          <h2 className="settings-section-title">General Settings</h2>
          <p className="settings-placeholder">Settings options will be available here.</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;

