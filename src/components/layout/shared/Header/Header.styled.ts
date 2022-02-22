import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  height: 15vh;
  z-index: 1;
  margin-top: var(--minusGlobalMargin);
`;

export const HeaderBack = styled.header<{ bckg?: string }>`
  height: 17vh;
  width: 100%;
  background-color: #292929;
  position: absolute;
  z-index: -3;
  margin-left: var(--minusGlobalMargin);
  margin-top: var(--minusGlobalMargin);
`;
