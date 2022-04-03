import React from 'react';
import { ProductManagementStyled } from './ProductManagement.styled';
import Divider from '../shared/Divider/Divider';
import ManagementHeader from './subcomponents/ManagementHeader/ManagementHeader';
import ProductsManagementList from '../ProductsManagementList/ProductsManagementList';

const ProductManagement = (): JSX.Element => {
  return (
    <ProductManagementStyled>
      <ManagementHeader />
      <Divider />
      <ProductsManagementList />
    </ProductManagementStyled>
  );
};

export default ProductManagement;
