import { Link } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <h1>
        <Link to='/'>MERN AUTH</Link>
      </h1>
      <ul>
        <li>
          <Link to='/register'>Register</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
