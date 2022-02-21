import styled from 'styled-components';

export const ContentHeaderStyled = styled.div`
  width: min-content;
  text-transform: uppercase;
  margin-top: 3em;
  margin-left: 1em;

  @media only screen and (min-width: 920px) {
    margin-left: 4em;
  }
`;

export const FooterContentHeaderP1 = styled.p`
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: lighter;
  margin: 0;
  width: auto;
`;

export const FooterContentHeaderP2 = styled.p`
  font-size: 1.6rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0.1em 0 0 0;
  width: min-content;
`;

export const FooterContentLine = styled.svg`
  width: 100%;
`;
