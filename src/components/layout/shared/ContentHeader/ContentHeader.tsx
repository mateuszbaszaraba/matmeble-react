import React from 'react';
import {
  FooterContentHeaderP1,
  FooterContentHeaderP2,
  ContentHeaderStyled,
  FooterContentLine,
} from './ContentHeader.styled';

const ContentHeader = ({
  lightHeader,
  boldHeader,
}: {
  lightHeader: string;
  boldHeader: string;
}): JSX.Element => {
  return (
    <ContentHeaderStyled>
      <FooterContentHeaderP1>{lightHeader}</FooterContentHeaderP1>
      <FooterContentHeaderP2>{boldHeader}</FooterContentHeaderP2>
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
    </ContentHeaderStyled>
  );
};

export default ContentHeader;
