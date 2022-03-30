import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Endpoints } from '../../services/constants';
import { useParams } from 'react-router-dom';
import { Armchair, SoftFurniture } from '../../services/types';
import Wrapper from '../layout/shared/Wrapper/Wrapper';
import ProductDetailsPhoto from '../layout/ProductDetailsPhoto/ProductDetailsPhoto';
import ProductDetailsInfo from '../layout/ProductDetailsInfo/ProductDetailsInfo';
import Footer from '../layout/shared/Footer/Footer';

const ProductDetails = (): JSX.Element => {
  let { slug } = useParams();

  const [product, setProduct] = useState<SoftFurniture | Armchair | null>(null);

  useEffect(() => {
    axios.get(`${Endpoints.products_details}${slug}`).then((response) => {
      console.log(response);
      setProduct(response.data);
    });
  }, []);

  return (
    <>
      {product && (
        <Wrapper>
          <ProductDetailsPhoto product={product} />
          <ProductDetailsInfo product={product} />
          <Footer />
        </Wrapper>
      )}
    </>
  );
};

export default ProductDetails;
