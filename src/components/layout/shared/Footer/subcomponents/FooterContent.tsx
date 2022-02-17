import React from 'react';
import { FooterContentStyled } from './FooterContent.styled';
import FooterContentHeader from './FooterContentHeader';
import FooterContentContact from './FooterContentContact';

const FooterContent = (): JSX.Element => {
  return (
    <FooterContentStyled>
      <FooterContentHeader />
      <FooterContentContact />
    </FooterContentStyled>
  );
};

export default FooterContent;
