import React from 'react';
import NavLink from '../UI/NavLink/NavLink';
import './Header.scss';

const Header: React.FunctionComponent = (): JSX.Element => {
  return (
    <nav className="Header">
      <NavLink linkTo="/">Back Home</NavLink>
      <NavLink linkTo="/settings">Settings</NavLink>
    </nav>
  );
};

export default Header;
