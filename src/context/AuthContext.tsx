import React, { useEffect, useState } from 'react';
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
  logOut: () => {},
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
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('authTokens')) {
      let temp: User = jwtDecode(tokens!.access);
      setUser({
        email: temp.email,
        user_name: temp.user_name,
        first_name: temp.first_name,
        last_name: temp.last_name,
      });
      setLoading(false);
      navigate('/admin/dashboard');
    }
    setLoading(false);
  }, [tokens]);

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

  const loginUser = async (event: React.FormEvent<CustomFormElements>) => {
    event.preventDefault();
    setLoading(true);
    await axios
      .post(Endpoints.login, {
        email: event.currentTarget.elements.email.value,
        password: event.currentTarget.elements.password.value,
      })
      .then((response) => {
        if (response.status === 200) {
          setAuthUser(response.data);
          setLoading(false);
        }
      })
      .then(() => {
        navigate('/admin/dashboard');
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const logOut = () => {
    localStorage.removeItem('authTokens');
    setUser(null);
    setLoading(true);
    setTokens(null);
  };

  let contextData = {
    user: user,
    tokens: tokens,
    loginUser: loginUser,
    logOut: logOut,
  };

  return (
    <>
      <AuthContext.Provider value={contextData}>
        {loading ? null : <Outlet />}
      </AuthContext.Provider>
    </>
  );
};
