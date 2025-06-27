import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="navbar">
      <h2><i className="fa-solid fa-table-list"></i> My React App</h2>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to='/Userlist'>Fetch data</Link>
      </div>
    </nav>
  );
}

export default Navbar;
