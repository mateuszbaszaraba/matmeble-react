import React from 'react';
import { FooterContentStyled } from './FooterContent.styled';
import FooterContentHeader from '../FooterContentHeader/FooterContentHeader';

const FooterContent = (): JSX.Element => {
  return (
    <FooterContentStyled>
      <FooterContentHeader />
    </FooterContentStyled>
  );
};

export default FooterContent;
