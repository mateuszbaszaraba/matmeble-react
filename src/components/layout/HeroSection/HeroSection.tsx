import React from 'react';
import {
  HeroSectionStyled,
  HeroSectionSpan,
  HeroSectionSvg,
  HeroSectionH1,
  HeroSectionP,
  HeroImgg,
} from './HeroSection.styled';

const HeroSection = (): JSX.Element => (
  <HeroSectionStyled>
    <HeroImgg />
    <HeroSectionP>WYSOKA JAKOŚĆ</HeroSectionP>
    <HeroSectionH1>
      <HeroSectionSpan>INNOWACYJNE</HeroSectionSpan> ROZWIĄZANIA
    </HeroSectionH1>
    <HeroSectionSvg viewBox='0 0 43 43' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M21.5 35.8333L21.4999 1.5M21.5 35.8333L13.1667 27.5M21.5 35.8333L29.8333 27.5'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </HeroSectionSvg>
  </HeroSectionStyled>
);

export default HeroSection;
