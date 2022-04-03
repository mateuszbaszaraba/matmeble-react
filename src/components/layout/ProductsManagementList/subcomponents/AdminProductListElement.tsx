import React from 'react';
import {
  AdminProductListElementStyled,
  ProductID,
  ProductPhoto,
  ProductTitle,
  ProductEdit,
  ProductDelete,
} from './AdminProductListElement.styled';
import { Armchair, SoftFurniture } from '../../../../services/types';
import { Endpoints } from '../../../../services/constants';
import { FiEdit } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';

const AdminProductListElement = ({
  product,
  deleteProduct,
}: {
  product: SoftFurniture | Armchair;
  deleteProduct: (slug: string) => void;
}): JSX.Element => {
  return (
    <AdminProductListElementStyled>
      <ProductID>{product.id}</ProductID>
      <ProductPhoto src={Endpoints.base_url + product.image} />
      <ProductTitle>{product.title}</ProductTitle>
      <ProductEdit>
        <FiEdit />
      </ProductEdit>
      <ProductDelete onClick={deleteProduct.bind(null, product.slug)}>
        <AiOutlineDelete />
      </ProductDelete>
    </AdminProductListElementStyled>
  );
};

export default AdminProductListElement;
