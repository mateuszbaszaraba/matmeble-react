import styled from 'styled-components';

export const ProductDetailsInfoStyled = styled.section`
  font-weight: lighter;
  padding: 3em 0;
`;

export const DetailsBack = styled.div`
  width: 100%;
  height: 80vh;
  background-color: var(--lightGreyColor);
  margin-left: var(--minusGlobalMargin);
  padding-right: var(--globalMargin);
  position: absolute;
  left: 0;
  z-index: -9;

  @media only screen and (min-width: 920px) {
    height: 50vh;
    padding-top: 20vh;
  }
`;

export const LeftInfoBlock = styled.div`
  margin-top: 2em;
  p {
    width: 18em;
    height: 2em;
    margin: auto;
    span {
      width: auto;
      float: right;
      font-weight: bold;
    }
  }
`;

export const RightInfoBlock = styled.div`
  margin-top: 0.1em;
  p {
    width: 18em;
    height: 2em;
    margin: auto;
    span {
      width: auto;
      float: right;
      font-weight: bold;
    }
  }
`;
