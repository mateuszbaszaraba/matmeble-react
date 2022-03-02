import React from 'react';
import { HeaderStyled, HeaderBack } from './Header.styled';
import Logo from './subcomponents/Logo/Logo';
import Nav from './subcomponents/Nav/Nav';
import HamburgerIcon from './subcomponents/HamburgerIcon/HamburgerIcon';
import { Outlet } from 'react-router-dom';

const Header = (): JSX.Element => {
  return (
    <>
      <HeaderStyled>
        <HeaderBack />
        <Logo />
        <Nav />
        <HamburgerIcon />
      </HeaderStyled>
      <Outlet />
    </>
  );
};

export default Header;
