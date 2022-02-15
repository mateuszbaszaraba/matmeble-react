import React from 'react';
import { HeaderStyled } from './Header.styled';
import Logo from './Logo';
import Nav from './Nav';
import HamburgerIcon from './HamburgerIcon';

const Header = (): JSX.Element => (
  <HeaderStyled>
    <Logo />
    <Nav />
    <HamburgerIcon />
  </HeaderStyled>
);

export default Header;
