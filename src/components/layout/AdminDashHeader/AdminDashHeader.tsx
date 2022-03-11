import React from 'react';
import {
  AdminDashHeaderStyled,
  AdminHeaderBack,
} from './AdminDashHeader.styled';
import Logo from '../shared/Header/subcomponents/Logo/Logo';
import AdminNav from './subcomponents/AdminNav/AdminNav';

const AdminDashHeader = (): JSX.Element => {
  return (
    <AdminDashHeaderStyled>
      <AdminHeaderBack />
      <Logo />
      <AdminNav />
    </AdminDashHeaderStyled>
  );
};

export default AdminDashHeader;
