import React from 'react';
import { WrapperStyled } from './Wrapper.styled';

const Wrapper = ({ children }: any): JSX.Element => {
  return <WrapperStyled>{children}</WrapperStyled>;
};

export default Wrapper;
