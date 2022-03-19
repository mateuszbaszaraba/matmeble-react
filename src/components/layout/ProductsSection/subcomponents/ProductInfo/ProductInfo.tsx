import React from 'react';
import {
  ProductInfoStyled,
  ProductContent,
  ContentHead,
  ContentSubHead,
} from './ProductInfo.styled';

const ProductInfo = ({
  title,
  type,
}: {
  title: string;
  type: string;
}): JSX.Element => {
  return (
    <ProductInfoStyled>
      <ProductContent>
        <ContentHead>{title.toUpperCase()}</ContentHead>
        <ContentSubHead>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </ContentSubHead>
      </ProductContent>
      <svg viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M20.625 6.875H6.875V33.125H33.125V19.375'
          stroke='#5E5E5E'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M26.875 4.375H35.625V13.125M33.125 6.875L19.375 20.625L33.125 6.875Z'
          stroke='#5E5E5E'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </ProductInfoStyled>
  );
};

export default ProductInfo;
