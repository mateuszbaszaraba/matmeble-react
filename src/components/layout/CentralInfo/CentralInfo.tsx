import React from 'react';
import { CentralInfoStyled } from './CentraInfo.styled';
import CentralInfoImg from './subcomponents/CentralInfoImg/CentralInfoImg';
import CentralInfoContent from './subcomponents/CentralInfoContent/CentralInfoContent';

const CentralInfo = (): JSX.Element => {
  return (
    <CentralInfoStyled>
      <CentralInfoImg />
      <CentralInfoContent />
    </CentralInfoStyled>
  );
};

export default CentralInfo;
