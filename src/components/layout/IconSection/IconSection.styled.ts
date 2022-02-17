import styled from 'styled-components';

export const IconSectionStyled = styled.section`
  width: 100%;
  height: auto;
  padding-top: 2em;
  position: relative;
  color: var(--blackFontColor);
`;

export const IconSectionBackground = styled.div`
  position: absolute;
  background-color: var(--lightGreyColor);
  width: 100%;
  height: 44em;
  z-index: -9;
  margin-left: var(--minusGlobalMargin);
  padding-right: calc(var(--globalMargin) * 2);
  top: -3em;
  left: 0;
`;
