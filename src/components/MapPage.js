import React from 'react';
import { useLocation } from 'react-router-dom';
import './MapPage.css';

const NavigationPage = () => {
  const location = useLocation();
  const { username } = location.state || {};

  return (
    <div className="navigation-page-container">
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button className="search-icon">
          <i className="fa fa-search"></i>
        </button>
        <div className="user-profile">
          <i className="fa fa-user-circle"></i>
          {username && <span className="username-display">{username}</span>}
        </div>
      </div>

      <div className="icon-menu">
        <div className="menu-item">
          <img src="/path/to/drink_water_icon.png" alt="Drink Water" />
          <p>DRINK WATER</p>
        </div>
        <div className="menu-item">
          <img src="/path/to/toilet_icon.png" alt="Toilet" />
          <p>TOILET</p>
        </div>
        <div className="menu-item">
          <img src="/path/to/waiting_hall_icon.png" alt="Waiting Hall" />
          <p>Waiting Hall</p>
        </div>
        <div className="menu-item">
          <img src="/path/to/exit_icon.png" alt="Exit" />
          <p>EXIT</p>
        </div>
      </div>

      <div className="controls">
        <button className="control-button">+</button>
        <button className="control-button">-</button>
        <button className="control-button">
          <i className="fa fa-crosshairs"></i>
        </button>
      </div>
    </div>
  );
};

export default NavigationPage;
