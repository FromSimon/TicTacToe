import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Quote">About</Link>
        </li>
        <li>
          <Link to="/TicTacToe">Tic Tac Toe</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
