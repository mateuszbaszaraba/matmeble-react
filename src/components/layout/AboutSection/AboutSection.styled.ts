import styled from 'styled-components';
import aboutBack from '../../../assets/about_back.jpeg';

export const AboutSectionStyled = styled.section`
  width: 100%;
  height: 70vh;
  @media only screen and (min-width: 920px) {
    margin-bottom: 9em;
  }
`;

export const AboutSectionBack = styled.div`
  background-image: url(${aboutBack});
  background-size: cover;
  width: 100%;
  height: 50vh;
  padding-right: calc(var(--globalMargin) * 2);
  margin: 0 0 0 var(--minusGlobalMargin);
  background-position-x: 51%;
  z-index: -1;

  @media only screen and (min-width: 680px) {
    width: 60%;
    margin-left: 40%;
  }
`;

export const AboutSectionText = styled.p`
  color: var(--whiteColor);
  background-color: var(--lightBrownColor);
  opacity: 0.91;
  backdrop-filter: blur(23px) opacity(82%);
  font-size: 1.1rem;
  font-weight: lighter;
  width: 70%;
  padding: 2em;
  margin-top: 33vh;
  float: left;

  @media only screen and (min-width: 680px) {
    margin-left: -15em;
    padding: 4em;
    margin-top: 4em;
  }

  @media only screen and (min-width: 920px) {
    margin-top: 35vh;
  }
`;
