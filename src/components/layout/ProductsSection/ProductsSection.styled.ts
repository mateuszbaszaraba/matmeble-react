import styled from 'styled-components';

export const ProductsSectionStyled = styled.section`
  background-color: var(--lightGreyColor);
  margin: 1em var(--minusGlobalMargin) 2em var(--minusGlobalMargin);
  padding: 4em var(--globalMargin);
  margin-top: 4em;
  width: 100%;
  clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 95%);

  @media only screen and (min-width: 680px) {
    margin: 2em -5em;
    padding: 4em 5em;
  }

  @media only screen and (min-width: 920px) {
    margin: 2em -5em;
    padding: 4em 5em;
  }
`;

export const ProductsContainer = styled.div`
  display: flex;
  gap: 3em;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 920px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
