import styled from 'styled-components';
import { ContentHead } from '../ProductInfo/ProductInfo.styled';

export const ProductStyled = styled.div`
  width: 22em;
  height: auto;
  background-color: white;
  cursor: pointer;

  :hover {
    ${ContentHead} {
      text-decoration: underline;
    }
    svg {
      stroke: var(--goldColor);
      path {
        stroke: var(--goldColor);
      }
    }
  }
`;

export const ProductImg = styled.img`
  width: 22em;
`;
