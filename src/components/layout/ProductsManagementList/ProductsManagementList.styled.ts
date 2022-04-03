import styled from 'styled-components';

export const ProductsManagementListStyled = styled.div`
  width: 100%;
`;

export const Label = styled.div`
  width: 20em;
`;

export const ListLabel = styled.div`
  display: flex;
  width: 80%;
  margin: 3em auto 2em auto;
  ${Label}:first-child {
    width: 12.5em;
    margin-left: 2em;
  }
  ${Label}:nth-child(2) {
    width: 14.5em;
  }
`;

export const ProductsList = styled.div`
  width: 80%;
  margin: 0 auto;
`;
