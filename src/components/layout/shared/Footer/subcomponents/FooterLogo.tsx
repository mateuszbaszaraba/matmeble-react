import React from 'react';
import { FooterLogoStyled, FooterLogoBack } from './FooterLogo.styled';
import FooterLogoContent from './FooterLogoContent';

const FooterLogo = (): JSX.Element => {
  return (
    <FooterLogoStyled>
      <FooterLogoBack>
        <FooterLogoContent />
      </FooterLogoBack>
    </FooterLogoStyled>
  );
};

export default FooterLogo;
