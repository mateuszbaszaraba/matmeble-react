import styled from 'styled-components';
import homeBack from '../../../assets/hero.jpeg';

export const HeroImgStyled = styled.div`
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
