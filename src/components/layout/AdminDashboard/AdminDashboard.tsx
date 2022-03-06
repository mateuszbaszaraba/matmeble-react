import React, { useContext } from 'react';
import AuthContext from '../../../context/AuthContext';

const AdminDashboard = (): JSX.Element => {
  let { user }: any = useContext(AuthContext);
  return (
    <div>
      <p>dashboard</p>
      <p>{user.email}</p>
      <p>{user.user_name}</p>
    </div>
  );
};

export default AdminDashboard;
