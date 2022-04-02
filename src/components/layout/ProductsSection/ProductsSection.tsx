import React, { useEffect, useState } from 'react';
import {
  ProductsSectionStyled,
  ProductsContainer,
} from './ProductsSection.styled';
import axios from 'axios';
import { Endpoints } from '../../../services/constants';
import Product from './subcomponents/Product/Product';
import { Armchair, SoftFurniture } from '../../../services/types';

const ProductsSection = (): JSX.Element => {
  const [products, setProducts] = useState<SoftFurniture[] | Armchair[]>([]);

  useEffect(() => {
    axios.get(Endpoints.products).then((response) => {
      console.log(response);
      setProducts(response.data);
    });
  }, []);

  return (
    <ProductsSectionStyled>
      <ProductsContainer>
        {products!.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </ProductsContainer>
    </ProductsSectionStyled>
  );
};

export default ProductsSection;
