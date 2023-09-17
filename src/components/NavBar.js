import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faMicrophone, faCog } from '@fortawesome/free-solid-svg-icons';
import './style/NavBar.css';

function NavBar() {
  return (
    <div className="navbar-container">
      <Link to="/" className="home-icon" data-testid="home-icon">
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>
      <h1>CryptoWatch Tracker by José</h1>
      <div className="right-icons">
        <FontAwesomeIcon icon={faMicrophone} />
        <FontAwesomeIcon icon={faCog} />
      </div>
    </div>
  );
}

export default NavBar;
