import styled from 'styled-components';

export const AdminProductListElementStyled = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid var(--blackFontColor);
  padding: 0 0 0 2em;
  border-radius: 15px;
  margin-bottom: 2em;
`;

export const ProductID = styled.div`
  width: 10em;
`;
export const ProductPhoto = styled.img`
  width: 15em;
  margin-left: 1em;
`;
export const ProductTitle = styled.div`
  width: 20em;
  margin-left: 1em;
`;

export const ProductEdit = styled.div`
  cursor: pointer;
  margin-left: 2em;
  svg {
    width: 1.8em;
    height: auto;
  }
`;

export const ProductDelete = styled.div`
  margin-left: 1.4em;
  cursor: pointer;

  svg {
    width: 1.8em;
    height: auto;
    color: #a32222;
  }
`;
