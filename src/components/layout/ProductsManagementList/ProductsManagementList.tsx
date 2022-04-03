import React, { useEffect, useState } from 'react';
import {
  ProductsManagementListStyled,
  ListLabel,
  Label,
  ProductsList,
} from './ProductsManagementList.styled';
import axios from 'axios';
import { Endpoints } from '../../../services/constants';
import { Armchair, SoftFurniture } from '../../../services/types';
import AdminProductListElement from './subcomponents/AdminProductListElement';

const ProductsManagementList = (): JSX.Element => {
  const [products, setProducts] = useState<SoftFurniture[] | Armchair[]>([]);

  useEffect(() => {
    axios.get(Endpoints.products).then((response) => {
      console.log(response);
      setProducts(response.data);
    });
  }, []);

  const deleteProductHandler = (slug: string) => {
    // @ts-ignore
    setProducts((prevState) => prevState.filter((prod) => prod.slug !== slug));
    const response = axios.delete(`${Endpoints.products_details}${slug}/`);
    console.log(response);
  };
  return (
    <ProductsManagementListStyled>
      <ListLabel>
        <Label>ID</Label>
        <Label>Zdjęcie</Label>
        <Label>Nazwa</Label>
      </ListLabel>
      <ProductsList>
        {products.map((product) => (
          <AdminProductListElement
            deleteProduct={deleteProductHandler}
            product={product}
            key={product.id}
          />
        ))}
      </ProductsList>
    </ProductsManagementListStyled>
  );
};

export default ProductsManagementList;
