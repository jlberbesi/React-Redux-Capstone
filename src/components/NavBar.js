import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faMicrophone, faCog } from '@fortawesome/free-solid-svg-icons';
import './style/NavBar.css';

function NavBar() {
  const rightIcons = [faMicrophone, faCog];

  return (
    <div className="navbar-container">
      <Link to="/" className="home-icon" data-testid="home-icon">
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>
      <h1>CryptoWatch Tracker by José</h1>
      <div className="right-icons">
        {rightIcons.map((icon) => (
          <FontAwesomeIcon key={icon.iconName} icon={icon} />
        ))}
      </div>
    </div>
  );
}

export default NavBar;
