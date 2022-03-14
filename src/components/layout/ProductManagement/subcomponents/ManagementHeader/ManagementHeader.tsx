import React from 'react';
import {
  ManagementHeaderStyled,
  ManagementHeaderH1,
  ManagementButton,
} from './ManagementHeader.styled';

const ManagementHeader = (): JSX.Element => {
  return (
    <ManagementHeaderStyled>
      <ManagementHeaderH1>Zarządzanie produktami</ManagementHeaderH1>
      <ManagementButton>Dodaj nowy produkt</ManagementButton>
    </ManagementHeaderStyled>
  );
};

export default ManagementHeader;
