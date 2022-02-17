import styled from 'styled-components';

export const FooterStyled = styled.footer`
  width: 100%;
  height: 60vh;
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FooterBack = styled.div`
  width: 100%;
  height: 60vh;
  background-color: var(--blackColor);
  margin-left: var(--minusGlobalMargin);
  margin-bottom: var(--minusGlobalMargin);
  position: absolute;
  z-index: -1;
`;
