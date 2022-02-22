import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavLinkStyled = styled(Link)`
  color: ${(props: any) => (props.match ? '#E4C68B' : '#5E5E5E')};
  text-decoration: none;
  padding: 1.75em 2em;
  display: block;

  @media only screen and (min-width: 920px) {
    color: ${(props: any) => (props.match ? '#E4C68B' : '#fff')};
    font-size: 0.9rem;
  }
`;
