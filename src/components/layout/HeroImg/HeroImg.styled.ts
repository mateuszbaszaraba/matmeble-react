import styled from 'styled-components';
import homeBack from '../../../assets/home_back.jpeg';

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
`;
