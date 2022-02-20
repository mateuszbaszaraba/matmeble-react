import styled from 'styled-components';

export const IconSectionStyled = styled.section`
  width: 100%;
  height: 70vh;
  color: var(--blackFontColor);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media only screen and (min-width: 920px) {
    flex-direction: row;
    height: 40vh;
  }
`;

export const IconSectionBackground = styled.div`
  width: 100%;
  height: 90vh;
  background-color: var(--lightGreyColor);
  margin-left: var(--minusGlobalMargin);
  padding-right: var(--globalMargin);
  position: absolute;
  left: 0;
  z-index: -9;

  @media only screen and (min-width: 920px) {
    height: 60vh;
    padding-top: 20vh;
  }
`;
