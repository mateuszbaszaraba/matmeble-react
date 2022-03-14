import React from 'react';
import { ProductManagementStyled } from './ProductManagement.styled';
import Divider from '../shared/Divider/Divider';
import ManagementHeader from './subcomponents/ManagementHeader/ManagementHeader';

const ProductManagement = (): JSX.Element => {
  return (
    <ProductManagementStyled>
      <ManagementHeader />
      <Divider />
    </ProductManagementStyled>
  );
};

export default ProductManagement;
