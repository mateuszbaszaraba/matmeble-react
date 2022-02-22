import styled from 'styled-components';

export const HamburgerIconStyled = styled.svg`
  width: 3em;
  fill: var(--whiteColor);
  cursor: pointer;

  @media only screen and (min-width: 920px) {
    display: none;
  }
`;
