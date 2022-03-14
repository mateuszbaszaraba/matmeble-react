import React, { useEffect, useState } from 'react';
import { ProductsSectionStyled } from './ProductsSection.styled';
import axios from 'axios';
import { Endpoints } from '../../../services/constants';
import Product from './subcomponents/Product/Product';

const ProductsSection = (): JSX.Element => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    axios.get(Endpoints.products).then((response) => {
      console.log(response);
      setProducts(response.data);
    });
  }, []);

  return (
    <ProductsSectionStyled>
      {products!.map((product) => (
        <Product product={product} />
      ))}
    </ProductsSectionStyled>
  );
};

export default ProductsSection;
