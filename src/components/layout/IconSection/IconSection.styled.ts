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
  height: 70vh;
  z-index: -9;
  margin-left: -1.5em;
  padding-right: 3em;
  top: 0;
  left: 0;
`;
