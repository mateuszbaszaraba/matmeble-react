import React from 'react';
import { useMatch, useResolvedPath } from 'react-router-dom';
import { NavLinkStyled } from './NavLink.styled';

const NavLink: React.FC<{ to: string }> = ({ children, to }): JSX.Element => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  let props = { match };
  return (
    <li>
      <NavLinkStyled to={to} {...props}>
        {children}
      </NavLinkStyled>
    </li>
  );
};

export default NavLink;
