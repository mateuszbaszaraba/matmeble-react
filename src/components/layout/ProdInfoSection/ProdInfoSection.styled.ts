import styled from 'styled-components';

export const ProdInfoSectionStyled = styled.section`
  width: 100%;
  height: auto;
  color: var(--blackFontColor);
  @media only screen and (min-width: 680px) {
    margin-top: 5em;
    margin-bottom: 4em;
  }
`;

export const ProdInfo = styled.div`
  width: 80%;
  height: auto;
  font-weight: lighter;
  margin: 2em auto 0 auto;
  text-align: center;
  font-size: 1.1rem;
`;
