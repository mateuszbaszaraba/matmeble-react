import React from 'react';
import Wrapper from '../layout/shared/Wrapper/Wrapper';
import ProdInfoSection from '../layout/ProdInfoSection/ProdInfoSection';
import ProductsSection from '../layout/ProductsSection/ProductsSection';
import Footer from '../layout/shared/Footer/Footer';

const Products = () => {
  return (
    <Wrapper>
      <ProdInfoSection />
      <ProductsSection />
      <Footer />
    </Wrapper>
  );
};

export default Products;
