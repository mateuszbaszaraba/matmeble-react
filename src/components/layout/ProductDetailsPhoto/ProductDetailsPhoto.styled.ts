import styled from 'styled-components';

export const ProductDetailsPhotoStyled = styled.section`
  @media only screen and (min-width: 680px) {
    margin-top: 5em;
  }
`;

export const ProductDetailsImg = styled.img`
  width: 90vw;
  display: block;
  margin-left: auto;
  margin-right: auto;

  @media only screen and (min-width: 680px) {
    width: 80vw;
  }

  @media only screen and (min-width: 920px) {
    width: 70vw;
  }
`;
