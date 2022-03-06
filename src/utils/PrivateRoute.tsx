import { Navigate } from 'react-router-dom';
import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Outlet } from 'react-router-dom';

const PrivateRoute: React.FC<{ [x: string]: any }> = ({
  children,
  ...rest
}): JSX.Element => {
  let { tokens } = useContext(AuthContext);

  return tokens ? <Outlet /> : <Navigate to='/admin-login' />;
};

export default PrivateRoute;
