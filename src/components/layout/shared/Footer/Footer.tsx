import React from 'react';
import { FooterBack, FooterStyled } from './Footer.styled';
import FooterContent from './subcomponents/FooterContent';
import FooterLogo from './subcomponents/FooterLogo';

const Footer = (): JSX.Element => {
  return (
    <FooterStyled>
      <FooterBack />
      <FooterContent />
      <FooterLogo />
    </FooterStyled>
  );
};

export default Footer;
