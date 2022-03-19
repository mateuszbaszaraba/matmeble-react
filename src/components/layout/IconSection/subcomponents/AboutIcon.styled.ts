import styled from 'styled-components';

export const AboutIconStyled = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media only screen and (min-width: 920px) {
    width: 33%;
  }
`;

export const AboutIconInfo = styled.div`
  width: 60%;
`;

export const AboutIconTitle = styled.p`
  font-size: 1.1rem;
  margin-bottom: 0;
  font-weight: bold;
  @media only screen and (min-width: 920px) {
    font-size: 1.1rem;
  }
`;

export const AboutIconDesc = styled.p`
  font-size: 1rem;
  margin-top: 0.4em;
  font-weight: lighter;
  @media only screen and (min-width: 920px) {
    font-size: 0.9rem;
  }
`;

export const AboutIconIcon = styled.div`
  width: 10%;
  svg {
    width: 2.9em !important;
    height: unset;
    @media only screen and (min-width: 920px) {
      width: 2.5em !important;
    }
  }
`;
