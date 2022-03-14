import React from 'react';
import { ProductStyled } from './Product.styled';

const Product = ({ product }: { product: any }): JSX.Element => {
  return (
    <ProductStyled>
      <p>{product.title}</p>
    </ProductStyled>
  );
};

export default Product;
