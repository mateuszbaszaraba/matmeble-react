import styled from 'styled-components';

export const IconSectionStyled = styled.section`
  width: 100%;
  height: 70vh;
  position: relative;
  color: var(--blackFontColor);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const IconSectionBackground = styled.div`
  position: absolute;
  background-color: var(--lightGreyColor);
  width: 100%;
  height: 90vh;
  z-index: -9;
  margin-left: var(--minusGlobalMargin);
  padding-right: calc(var(--globalMargin) * 2);
  top: -6em;
  left: 0;
`;
