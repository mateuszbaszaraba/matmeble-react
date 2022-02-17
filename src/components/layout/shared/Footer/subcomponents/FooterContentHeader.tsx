import React from 'react';
import {
  FooterContentHeaderP1,
  FooterContentHeaderP2,
  FooterContentHeaderStyled,
  FooterContentLine,
} from './FooterContentHeader.styled';

const FooterContentHeader = (): JSX.Element => {
  return (
    <FooterContentHeaderStyled>
      <FooterContentHeaderP1>masz pytania?</FooterContentHeaderP1>
      <FooterContentHeaderP2>zadzwoń!</FooterContentHeaderP2>
      <FooterContentLine
        viewBox='0 0 242 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M2 14C67.5822 3.14892 178.649 -2.72875 240 6.76595'
          stroke='#E4C68B'
          strokeWidth='3'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </FooterContentLine>
    </FooterContentHeaderStyled>
  );
};

export default FooterContentHeader;
