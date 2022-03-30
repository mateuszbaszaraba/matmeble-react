import styled from 'styled-components';

export const ProductDetailsInfoStyled = styled.section`
  background-color: var(--lightGreyColor);
  margin: 2em var(--minusGlobalMargin) 0 var(--minusGlobalMargin);
  padding: 0.1em var(--globalMargin) 3em var(--globalMargin);
  font-weight: lighter;
  width: auto;
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
