import styled from 'styled-components';

export const NavStyled = styled.nav`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  background: white;
  width: 50%;
  z-index: 99;
  text-transform: uppercase;
  transform: translateX(100%);
  transition: transform 0.5s ease-in-out;

  @media only screen and (min-width: 920px) {
    transform: translateX(0);
    position: unset;
    display: block;
    width: auto;
    height: auto;
    background: none;
  }
`;
