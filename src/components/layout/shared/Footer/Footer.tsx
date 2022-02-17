import React from 'react';
import { FooterBack, FooterStyled } from './Footer.styled';
import FooterContent from './subcomponents/FooterContent/FooterContent';
import FooterLogo from './subcomponents/FooterLogo/FooterLogo';

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
