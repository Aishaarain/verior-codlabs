import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
        <Link to='/'>Quiz</Link>
        <Link to="/Product">Product</Link>
    </nav>
  )
}

export default Navbar