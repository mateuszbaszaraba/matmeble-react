import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import { Endpoints } from '../services/constants';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

const AuthContextDefaultState = {
  user: null,
  tokens: null,
  setAuthUser: (tokens: any) => {},
  loginUser: (event: any) => {},
};

const AuthContext = React.createContext(AuthContextDefaultState);

export default AuthContext;

export const AuthProvider = (): JSX.Element => {
  const [tokens, setTokens] = useState(() =>
    localStorage.getItem('authTokens')
      ? JSON.parse(localStorage.getItem('authTokens')!)
      : null
  );
  const [user, setUser] = useState(
    localStorage.getItem('authTokens')
      ? jwtDecode(localStorage.getItem('authTokens')!)
      : null
  );
  const [loading, setLoading] = useState(true);

  let navigate = useNavigate();

  const setAuthUser = (tokens: any) => {
    localStorage.setItem('authTokens', JSON.stringify(tokens));
    setTokens(tokens);
    setUser(jwtDecode(tokens.access));
    console.log('setAuthUser run', tokens);
  };

  let loginUser = async (event: any) => {
    event.preventDefault();
    await axios
      .post(Endpoints.login, {
        email: event.target.email.value,
        password: event.target.password.value,
      })
      .then((response) => {
        console.log(response);
        console.log(response.data);
        if (response.status === 200) {
          setAuthUser(response.data);
          console.log('navigate...');
          navigate('/admin/dashboard');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  let contextData = {
    user: user,
    tokens: tokens,
    setAuthUser: setAuthUser,
    loginUser: loginUser,
  };

  return (
    <>
      <AuthContext.Provider value={contextData}>
        {<Outlet />}
      </AuthContext.Provider>
    </>
  );
};
