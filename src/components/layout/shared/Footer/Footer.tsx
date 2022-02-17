import React from 'react';
import { FooterBack, FooterStyled } from './Footer.styled';
import FooterContent from './subcomponents/FooterContent/FooterContent';
import FooterLogo from './subcomponents/FooterLogo/FooterLogo';
import FooterContentContact from './subcomponents/FooterContentContact/FooterContentContact';

const Footer = (): JSX.Element => {
  return (
    <FooterStyled>
      <FooterBack />
      <FooterContent />
      <FooterContentContact />
      <FooterLogo />
    </FooterStyled>
  );
};

export default Footer;
