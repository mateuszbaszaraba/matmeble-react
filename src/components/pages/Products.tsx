import React from 'react';
import Wrapper from '../layout/shared/Wrapper/Wrapper';
import ProdInfoSection from '../layout/ProdInfoSection/ProdInfoSection';
import ProductsSection from '../layout/ProductsSection/ProductsSection';

const Products = () => {
  return (
    <Wrapper>
      <ProdInfoSection />
      <ProductsSection />
    </Wrapper>
  );
};

export default Products;
