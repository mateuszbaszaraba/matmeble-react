import styled from 'styled-components';

export const FindUsSectionStyled = styled.section`
  padding-top: 1em;
  height: 42vh;
  background-color: var(--lightGreyColor);
  margin-left: var(--minusGlobalMargin);
  padding-left: var(--globalMargin);
  margin-right: var(--minusGlobalMargin);
  padding-right: var(--globalMargin);
  color: var(--blackFontColor);

  @media only screen and (min-width: 680px) {
    margin: 0 -5em;
    padding: 1em 5em 0 5em;
  }
`;

// export const FindUsBack = styled.div`
//   position: absolute;
//   width: 100%;
//   background-color: var(--lightGreyColor);
//   height: 42vh;
//   z-index: -1;
//   margin-left: var(--minusGlobalMargin);
// `;
