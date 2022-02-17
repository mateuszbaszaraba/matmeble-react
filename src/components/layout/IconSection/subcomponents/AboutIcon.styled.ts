import styled from 'styled-components';

export const AboutIconStyled = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const AboutIconInfo = styled.div`
  width: 60%;
`;

export const AboutIconTitle = styled.p`
  font-size: 1.4rem;
  margin-bottom: 0;
  font-weight: bold;
`;

export const AboutIconDesc = styled.p`
  font-size: 1rem;
  margin-top: 0.4em;
  font-weight: lighter;
`;

export const AboutIconIcon = styled.div`
  width: 10%;
  svg {
    width: 2.9em !important;
    height: unset;
  }
`;
