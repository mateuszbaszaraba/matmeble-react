import React from 'react';
import { FooterContentStyled } from './FooterContent.styled';
import FooterContentHeader from '../FooterContentHeader/FooterContentHeader';
import FooterContentContact from '../FooterContentContact/FooterContentContact';

const FooterContent = (): JSX.Element => {
  return (
    <FooterContentStyled>
      <FooterContentHeader />
      <FooterContentContact />
    </FooterContentStyled>
  );
};

export default FooterContent;
