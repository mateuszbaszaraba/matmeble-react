import React from 'react';
import NavElements from './NavElements';
import { NavStyled } from './Nav.styled';
import CloseIcon from '../CloseIcon/CloseIcon';

const Nav = (): JSX.Element => (
  <NavStyled>
    <CloseIcon />
    <NavElements />
  </NavStyled>
);

export default Nav;
