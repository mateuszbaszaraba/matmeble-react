import styled from 'styled-components';

export const FooterStyled = styled.footer`
  width: 100%;
  height: 60vh;
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--whiteColor);
`;

export const FooterBack = styled.div`
  width: 100%;
  height: 60vh;
  background-color: var(--blackColor);
  margin-left: var(--minusGlobalMargin);
  padding-right: var(--globalMargin);
  position: absolute;
  left: 0;
  z-index: -2;
`;
