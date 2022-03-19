import styled from 'styled-components';

export const ProductInfoStyled = styled.div`
  width: auto;
  display: flex;
  color: var(--blackFontColor);
  justify-content: space-around;
  align-items: center;
  height: 4em;

  svg {
    width: 2.3rem;
  }

  path {
    transition: 0.2s;
  }
`;

export const ProductContent = styled.div`
  width: 13em;
`;

export const ContentHead = styled.p`
  margin: 0;
  font-weight: bold;
`;

export const ContentSubHead = styled.p`
  margin: 0.3em 0 0 0;
  font-weight: lighter;
`;
