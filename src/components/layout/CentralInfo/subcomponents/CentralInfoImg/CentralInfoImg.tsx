import React from 'react';
import img from '../../../../../assets/nar_boss.jpeg';
import { CentralInfoImgStyled } from './CentralInfoImg.styled';

const CentralInfoImg = (): JSX.Element => {
  return <CentralInfoImgStyled src={img} alt='Narożnik boss' />;
};

export default CentralInfoImg;
