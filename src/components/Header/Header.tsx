import React from 'react';
import { useLocation } from 'react-router-dom';
import NavLink from '../UI/NavLink/NavLink';
import './Header.scss';

const Header: React.FunctionComponent = (): JSX.Element => {
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';

  return (
    <nav className={`Header ${isHomePage ? 'Flex-end' : ''}`}>
      {isHomePage ? (
        <NavLink linkTo="/settings">Settings</NavLink>
      ) : (
        <NavLink linkTo="/">Back Home</NavLink>
      )}
    </nav>
  );
};

export default Header;
