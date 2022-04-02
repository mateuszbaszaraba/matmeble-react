import React from 'react';
import {
  ProductDetailsInfoStyled,
  DetailsBack,
} from './ProductDetailsInfo.styled';
import ContentHeader from '../shared/ContentHeader/ContentHeader';
import { Armchair, SoftFurniture } from '../../../services/types';
import InfoContent from './subcomponents/InfoContent';

const ProductDetailsInfo = ({
  product,
}: {
  product: SoftFurniture | Armchair;
}): JSX.Element => {
  return (
    <ProductDetailsInfoStyled>
      <DetailsBack />
      <ContentHeader lightHeader={''} boldHeader='Specyfikacja' />
      {<InfoContent product={product} />}
    </ProductDetailsInfoStyled>
  );
};

export default ProductDetailsInfo;
