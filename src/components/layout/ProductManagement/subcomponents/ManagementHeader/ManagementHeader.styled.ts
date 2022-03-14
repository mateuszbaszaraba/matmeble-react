import styled from 'styled-components';

export const ManagementHeaderStyled = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ManagementHeaderH1 = styled.p`
  font-size: 1.5rem;
  font-weight: lighter;
`;

export const ManagementButton = styled.button`
  background-color: white;
  border-radius: 8px;
  border: 1px solid var(--goldColor);
  display: inline-block;
  cursor: pointer;
  color: var(--goldColor);
  font-size: 1rem;
  padding: 13px 32px;
  text-decoration: none;
  height: 3em;

  :active {
    position: relative;
    top: 1px;
  }
`;
