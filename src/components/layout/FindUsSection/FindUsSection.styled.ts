import styled from 'styled-components';

export const FindUsSectionStyled = styled.section`
  padding-top: 1em;
  height: 42vh;
  width: 100%;

  @media only screen and (min-width: 680px) {
    margin: 0 -5em;
    padding: 1em 0 0 5em;
  }
  @media only screen and (min-width: 920px) {
    margin: 0 -5em;
  }
`;

export const FindUsBack = styled.div`
  width: 100%;
  height: 90vh;
  background-color: var(--lightGreyColor);
  margin-left: var(--minusGlobalMargin);
  padding-right: var(--globalMargin);
  position: absolute;
  left: 0;
  z-index: -9;

  @media only screen and (min-width: 920px) {
    height: 50vh;
    padding-top: 20vh;
  }
`;
