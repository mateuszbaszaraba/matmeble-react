import React from 'react';
import { HeaderStyled } from './Header.styled';
import Logo from './subcomponents/Logo/Logo';
import Nav from './subcomponents/Nav/Nav';
import HamburgerIcon from './subcomponents/HamburgerIcon/HamburgerIcon';

const Header = (): JSX.Element => (
  <HeaderStyled>
    <Logo />
    <Nav />
    <HamburgerIcon />
  </HeaderStyled>
);

export default Header;
