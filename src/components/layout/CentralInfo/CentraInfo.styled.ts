import styled from 'styled-components';

export const CentralInfoStyled = styled.section`
  width: 90%;
  height: 30vh;
  background-color: white;
  margin: -15vh auto 0 auto;
  justify-content: space-evenly;
  align-items: center;
  color: var(--blackFontColor);
  display: none;
  @media only screen and (min-width: 920px) {
    display: flex;
  }
`;
