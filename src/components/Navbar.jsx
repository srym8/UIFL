import React from 'react';

const Navbar = () => {
  return (
    <nav className="nav-fixed">
      <div className="nav-container">
        <div className="logo">UK Investment Fund League</div>
        <ul className="nav-links">
          <li><a href="#league">League Table</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#sponsors">Sponsors</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;