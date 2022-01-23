import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Hooks/Context';

function Navbar() {
  const { title } = useContext(Context);
  const result = (
    <div className="Navegation">
      <ul>
        <Link
          to="/"
          className="Link"
        >
          <li>Home</li>
        </Link>
        <li>{title}</li>
        <Link
          to="/About"
          className="Link"
        >
          <li>About</li>
        </Link>
      </ul>
    </div>
  );
  return result;
}

export default Navbar;
