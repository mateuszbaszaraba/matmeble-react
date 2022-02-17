import styled from 'styled-components';
import aboutBack from '../../../assets/about_back.jpeg';

export const AboutSectionStyled = styled.div`
  background-image: url(${aboutBack});
  background-size: cover;
  width: 100%;
  height: 50vh;
  padding-right: calc(var(--globalMargin) * 2);
  margin: 1.5em 0 0 var(--minusGlobalMargin);
  background-position-x: 51%;
  position: relative;
  z-index: -1;
  margin-bottom: 20vh;
`;

export const AboutSectionText = styled.p`
  color: var(--whiteColor);
  background-color: var(--lightBrownColor);
  opacity: 0.91;
  backdrop-filter: blur(23px) opacity(82%);
  font-size: 1.1rem;
  font-weight: lighter;
  width: 80%;
  padding: 2em;
  position: absolute;
  top: 33vh;
`;