import React from 'react';
import { Link } from 'react-router-dom';
import { NavLinkProps } from './NavLink.types';
import './NavLink.scss';

const NavLink: React.FunctionComponent<NavLinkProps> = ({
  linkTo,
  children
}) => {
  return (
    <Link className="NavLink" to={linkTo}>
      {children}
    </Link>
  );
};

export default NavLink;
