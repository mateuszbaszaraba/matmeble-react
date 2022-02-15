import React from 'react';
import NavLink from './NavLink';
import { NavElementsStyled } from './NavElements.styled';

const NavElements = (): JSX.Element => (
  <NavElementsStyled>
    <NavLink to='/home'>Strona Główna</NavLink>
    <NavLink to='/nasze-produkty'>Nasze Produkty</NavLink>
    <NavLink to='/kontakt'>Kontakt</NavLink>
  </NavElementsStyled>
);

export default NavElements;
