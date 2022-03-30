import React from 'react';
import {
  ProductDetailsImg,
  ProductDetailsPhotoStyled,
} from './ProductDetailsPhoto.styled';
import ContentHeader from '../shared/ContentHeader/ContentHeader';
import { Endpoints } from '../../../services/constants';
import { Armchair, SoftFurniture } from '../../../services/types';

const ProductDetailsPhoto = ({
  product,
}: {
  product: SoftFurniture | Armchair;
}): JSX.Element => {
  return (
    <ProductDetailsPhotoStyled>
      <ContentHeader lightHeader={product.title} boldHeader={product.type} />
      <ProductDetailsImg
        alt={product.title}
        src={Endpoints.base_url + product.image}
      />
    </ProductDetailsPhotoStyled>
  );
};

export default ProductDetailsPhoto;
