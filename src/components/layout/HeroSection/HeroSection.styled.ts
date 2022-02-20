import styled from 'styled-components';
import homeBack from '../../../assets/hero.jpeg';

export const HeroSectionStyled = styled.section`
  color: var(--whiteColor);
  height: 69vh;
  margin-top: 20vh;
  margin-left: 1.5em;

  @media only screen and (min-width: 680px) {
    margin-left: 1em;
  }

  @media only screen and (min-width: 920px) {
    height: 50vh;
  }
`;

export const HeroImgg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${homeBack});
  background-size: cover;
  background-position-x: 51%;
  width: 100%;
  height: 100vh;
  z-index: -1;

  @media only screen and (min-width: 920px) {
    height: 80vh;
    background-position-y: 40%;
  }
`;

export const HeroSectionH1 = styled.h1`
  font-size: 2.5rem;
  line-height: 3.3rem;
  margin-top: 0.5em;
`;

export const HeroSectionP = styled.p`
  font-size: 1.4rem;
  margin-top: 0;
  margin-bottom: 0;
`;

export const HeroSectionSpan = styled.span`
  color: var(--goldColor);
`;

export const HeroSectionSvg = styled.svg`
  width: 4em;
  fill: var(--whiteColor);
  position: absolute;
  bottom: 3em;
  left: 50%;
  margin-left: -2em;

  @media only screen and (min-width: 920px) {
    display: none;
  }
`;
