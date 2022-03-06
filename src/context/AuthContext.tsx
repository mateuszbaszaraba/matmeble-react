import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import { Endpoints } from '../services/constants';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import {
  Tokens,
  User,
  AuthContextTypes,
  CustomFormElements,
} from '../services/types';

const AuthContextDefaultState = {
  user: null,
  tokens: null,
  loginUser: async (event: React.FormEvent<CustomFormElements>) => {},
};

const AuthContext = React.createContext<AuthContextTypes>(
  AuthContextDefaultState
);

export default AuthContext;

export const AuthProvider = (): JSX.Element => {
  const [tokens, setTokens] = useState<Tokens | null>(() =>
    localStorage.getItem('authTokens')
      ? JSON.parse(localStorage.getItem('authTokens')!)
      : null
  );
  const [user, setUser] = useState<User | null>(
    tokens ? jwtDecode(tokens.access) : null
  );
  const [loading, setLoading] = useState<boolean>(true);

  let navigate = useNavigate();

  const setAuthUser = (tokens: Tokens) => {
    localStorage.setItem('authTokens', JSON.stringify(tokens));
    setTokens(tokens);
    let temp: User = jwtDecode(tokens.access);
    setUser({
      email: temp.email,
      user_name: temp.user_name,
      first_name: temp.first_name,
      last_name: temp.last_name,
    });
  };

  let loginUser = async (event: React.FormEvent<CustomFormElements>) => {
    event.preventDefault();
    await axios
      .post(Endpoints.login, {
        email: event.currentTarget.elements.email.value,
        password: event.currentTarget.elements.password.value,
      })
      .then((response) => {
        if (response.status === 200) {
          setAuthUser(response.data);
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
