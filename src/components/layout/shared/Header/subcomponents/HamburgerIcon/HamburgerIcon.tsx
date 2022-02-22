import React from 'react';
import { HamburgerIconStyled } from './HamburgerIcon.styled';

const HamburgerIcon = (): JSX.Element => {
  const handleMenuOpen = () => {
    const nav = document.querySelector('nav');

    nav!.style.transform = 'translateX(0%)';
  };

  return (
    <HamburgerIconStyled
      viewBox='0 0 27 27'
      xmlns='http://www.w3.org/2000/svg'
      onClick={handleMenuOpen}
    >
      <path d='M23.625 20.25H13.5V18H23.625V20.25ZM23.625 14.625H3.375V12.375H23.625V14.625ZM23.625 9H3.375V6.75H23.625V9Z' />
    </HamburgerIconStyled>
  );
};

export default HamburgerIcon;
