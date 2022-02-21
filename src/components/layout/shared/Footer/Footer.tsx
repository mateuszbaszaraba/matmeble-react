import React from 'react';
import { FooterBack, FooterStyled } from './Footer.styled';
import FooterLogo from './subcomponents/FooterLogo/FooterLogo';
import FooterContentContact from './subcomponents/FooterContentContact/FooterContentContact';
import ContentHeader from '../ContentHeader/ContentHeader';

const Footer = (): JSX.Element => {
  return (
    <FooterStyled>
      <FooterBack />
      <ContentHeader lightHeader='masz pytania?' boldHeader='zadzwoń!' />
      <FooterContentContact />
      <FooterLogo />
    </FooterStyled>
  );
};

export default Footer;
