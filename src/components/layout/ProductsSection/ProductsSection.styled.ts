import styled from 'styled-components';

export const ProductsSectionStyled = styled.section`
  background-color: var(--lightGreyColor);
  margin: 1em var(--minusGlobalMargin) 2em var(--minusGlobalMargin);
  display: flex;
  gap: 3em;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 5em;
  padding-bottom: 5em;
  clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 95%);

  @media only screen and (min-width: 680px) {
    margin: 2em -5em;
  }
`;
