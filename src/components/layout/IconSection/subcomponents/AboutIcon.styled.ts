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
`;

export const AboutIconDesc = styled.p`
  font-size: 1rem;
  margin-top: 0.6em;
`;

export const AboutIconIcon = styled.div`
  width: 10%;
  svg {
    width: 2.5em !important;
    height: unset;
  }
`;
