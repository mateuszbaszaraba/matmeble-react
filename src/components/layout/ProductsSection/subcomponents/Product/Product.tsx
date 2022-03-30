import React from 'react';
import { ProductStyled, ProductImg } from './Product.styled';
import { Endpoints } from '../../../../../services/constants';
import ProductInfo from '../ProductInfo/ProductInfo';
import { Armchair, SoftFurniture } from '../../../../../services/types';
import { useNavigate } from 'react-router-dom';

const Product = ({
  product,
}: {
  product: SoftFurniture | Armchair;
}): JSX.Element => {
  let navigate = useNavigate();
  return (
    <ProductStyled onClick={() => navigate(`${product.slug}`)}>
      <ProductImg src={Endpoints.base_url + product.image} />
      <ProductInfo title={product.title} type={product.type} />
    </ProductStyled>
  );
};

export default Product;
