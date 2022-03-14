import React from 'react';
import Wrapper from '../shared/Wrapper/Wrapper';
import AdminDashHeader from '../AdminDashHeader/AdminDashHeader';
import ProductManagement from '../ProductManagement/ProductManagement';

const AdminDashboard = (): JSX.Element => {
  return (
    <Wrapper>
      <AdminDashHeader />
      <ProductManagement />
    </Wrapper>
  );
};

export default AdminDashboard;
