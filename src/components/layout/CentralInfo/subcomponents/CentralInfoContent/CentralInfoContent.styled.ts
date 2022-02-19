import styled from 'styled-components';

export const CentralInfoContentStyled = styled.div`
  height: 18vh;
  width: 20em;
  letter-spacing: 0.01em;
  padding-left: 2em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-left: 1px solid #d8d8d8;
`;

export const CentralContentHeader = styled.div`
  text-transform: uppercase;
  font-weight: lighter;
  font-size: 1.3rem;
  width: 13em;
`;

export const CentralHeaderSpan = styled.span`
  font-weight: bold;
  position: relative;
  padding-bottom: 0.4em;
  padding-left: -0.3em;
`;

export const CentralContentLine = styled.svg`
  width: 8.28ex;
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const CentralHeaderButton = styled.button`
  font-size: 0.9rem;
  text-transform: uppercase;
  color: var(--whiteColor);
  background-color: var(--goldColor);
  border: 1px solid var(--goldColor);
  border-radius: 50px;
  padding: 0.7em 0.8em;
  width: 54%;
`;
