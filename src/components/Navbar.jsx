import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="title">SaiDev</div>
      <ul className="links">
        <li>
          <Link to="/" style={{ color: 'white' }}>Home</Link>
        </li>
        <li>
          <Link to="/about" style={{ color: 'white' }}>About</Link>
        </li>
        <li>
          <Link to="/projects" style={{ color: 'white' }}>Projects</Link>
        </li>
        <li>
          <Link to="/contact" style={{ color: 'white' }}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
