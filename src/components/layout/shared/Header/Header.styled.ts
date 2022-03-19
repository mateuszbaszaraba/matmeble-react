import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  height: 15vh;
  z-index: 1;
  margin-top: var(--minusGlobalMargin);
  @media only screen and (min-width: 680px) {
    height: 10vh;
  }
`;

export const HeaderBack = styled.div`
  height: 15vh;
  width: 100%;
  background-color: #292929;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -3;
  @media only screen and (min-width: 680px) {
    margin: -1.5em -5em;
    height: 10vh;
    padding: 1.5em 0;
  }
`;
