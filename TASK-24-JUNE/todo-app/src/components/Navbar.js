import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="navbar">
      <h2><i class="fa-solid fa-table-list"></i> My React App</h2>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/products">E-Commerce</Link>
        <Link to="/Movieapp">Movie App</Link>
      </div>
    </nav>
  );
}

export default Navbar;
