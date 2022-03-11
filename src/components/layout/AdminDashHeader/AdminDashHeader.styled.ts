import styled from 'styled-components';

export const AdminDashHeaderStyled = styled.header`
  width: 100%;
  height: 17vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -1.5em;
`;

export const AdminHeaderBack = styled.div`
  position: absolute;
  width: 100%;
  background-color: var(--blackColor);
  height: 17vh;
  top: 0;
  left: 0;
  z-index: -1;
`;
