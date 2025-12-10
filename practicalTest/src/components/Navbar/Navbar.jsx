import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-left">
          <h2 className="navbar-title">Product Management Dashboard</h2>
        </div>
        <div className="navbar-right">
          <div className="navbar-user">
            <span className="navbar-avatar">👤</span>
            <span className="navbar-name">Admin</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

