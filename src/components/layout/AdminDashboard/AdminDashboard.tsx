import React, { useContext } from 'react';
import AuthContext from '../../../context/AuthContext';
import Wrapper from '../shared/Wrapper/Wrapper';
import AdminDashHeader from '../AdminDashHeader/AdminDashHeader';

const AdminDashboard = (): JSX.Element => {
  let { user, logOut }: any = useContext(AuthContext);
  return (
    <Wrapper>
      <AdminDashHeader />
      <p>dashboard</p>
      <p>{user.email}</p>
      <p>{user.user_name}</p>
      <button onClick={logOut}>logout</button>
    </Wrapper>
  );
};

export default AdminDashboard;
