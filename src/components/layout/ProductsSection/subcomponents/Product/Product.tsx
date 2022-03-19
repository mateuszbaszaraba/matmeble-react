import React from 'react';
import { ProductStyled, ProductImg } from './Product.styled';
import { Endpoints } from '../../../../../services/constants';
import ProductInfo from '../ProductInfo/ProductInfo';
import { Armchair, SoftFurniture } from '../../../../../services/types';

const Product = ({
  product,
}: {
  product: SoftFurniture | Armchair;
}): JSX.Element => {
  return (
    <ProductStyled>
      <ProductImg src={Endpoints.base_url + product.image} />
      <ProductInfo title={product.title} type={product.type} />
    </ProductStyled>
  );
};

export default Product;
