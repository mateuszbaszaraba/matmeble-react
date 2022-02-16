import styled from 'styled-components';
import aboutBack from '../../../assets/about_back.jpeg';

export const AboutSectionStyled = styled.div`
  background-image: url(${aboutBack});
  background-size: cover;
  width: 100%;
  height: 50vh;
  position: absolute;
  margin: 1.5em 0 0 var(--minusGlobalMargin);
  background-position-x: 51%;
  z-index: -1;
`;

export const AboutSectionText = styled.p`
  color: var(--whiteColor);
  background-color: var(--lightBrownColor);
  opacity: 0.82;
  backdrop-filter: blur(23px) opacity(82%);
  font-size: 1.1rem;
  font-weight: lighter;
  width: 80%;
  padding: 2em;
  position: absolute;
  top: 57%;
`;
